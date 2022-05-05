<template>
    <div class="loginHT">
        <div class="loginWrap" style="position: relative">
            <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="ruleForm"
            >
                <el-form-item :label="account.id" prop="account">
                    <el-input v-model="ruleForm.account"></el-input>
                </el-form-item>
                <el-form-item :label="account.pas" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">
                        {{ account.login }}
                    </el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
            <el-button
                v-show="account.login === '登录'"
                style="position: absolute; bottom: 20px; left: 20px"
                type="primary"
                @click="toSignup()"
            >
                注册
            </el-button>
        </div>
    </div>
</template>
<script>
import { toLogin } from '@/service/HT';
export default {
    name: 'login',
    components: {},
    data() {
        return {
            account: { id: '帐号', pas: '密码', login: '登录' },
            ruleForm: {
                pass: '',
                account: '',
            },
            rules: {
                pass: [{ validator: this.validatePass, trigger: 'blur' }],
                account: [{ validator: this.checkAccount, trigger: 'blur' }],
            },
        };
    },
    methods: {
        toSignup() {
            this.account.id = '创建新帐号';
            this.account.pas = '创建密码';
            this.account.login = '注册';
        },
        checkAccount(rule, value, callback) {
            setTimeout(() => {
                if (!value) {
                    callback(new Error('请输入帐号'));
                } else {
                    callback();
                }
            }, 1000);
        },
        validatePass(rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let _self = this;
                    let pas = _self.ruleForm.pass.trim().toString();
                    let param = {
                        name: _self.ruleForm.account,
                        password: pas,
                        type: '0',
                    };
                    // debugger;
                    this.loginT(param);
                } else {
                    return false;
                }
            });
        },
        // 登录
        async loginT(param) {
            let resData = await toLogin(param);
            if (resData.status === 200) {
                if (
                    resData.data.status === '104' ||
                    resData.data.status === '102' ||
                    resData.data.status === '105' ||
                    resData.data.status === '106'
                ) {
                    this.$message(resData.data.message);
                } else if (resData.data.status === '200') {
                    this.$router.push({ path: '/managerSys' });
                    this.$store.state.idCardHT = true;
                    // this.$store.state.userCard = resData.data.user.role;
                }
            } else {
                this.$message({
                    message: '登陆失败，请联系管理员。',
                    type: 'warning',
                    offset: 200,
                });
            }
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.account.login = '登录';
            this.account.id = '帐号';
            this.account.pas = '密码';
        },
    },
};
</script>
<style lang="scss" scoped>
.loginHT {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('../home/theme/image/4yllzd.jpg');
    background-size: 100% auto;
    .loginWrap {
        margin: 0 auto;
        margin-top: 200px;
        width: 550px;
        height: 500px;
        padding: 50px 50px;
        background-color: #3170a799;
    }
}
</style>
<style lang="scss">
.loginHT {
    .ruleForm {
        .el-form-item__label {
            color: #fff;
        }
        .el-form-item__content {
            width: 280px;
            .el-input {
                width: 100%;
            }
        }
    }
}
</style>
