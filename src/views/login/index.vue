<template>
    <div class="loginIndex">
        <div class="login-wrap">
            <h1>Login</h1>

            <el-form :model="InfForm" class="login-content" ref="InfForm">
                <el-form-item class="items" :rules="returnRules().account" prop="account">
                    <el-input
                        v-model="InfForm.account"
                        class="account"
                        placeholder="请输入帐号"
                        style="color: #fff"
                        required
                    ></el-input>
                </el-form-item>
                <el-form-item class="items" :rules="returnRules().password" prop="password">
                    <el-input
                        v-model="InfForm.password"
                        class="password"
                        placeholder="请输入密码"
                        style="color: #fff"
                        required
                    ></el-input>
                </el-form-item>
                <button @click="submitForm('InfForm')" type="button" class="btn">
                    SUBMIT
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </el-form>
        </div>
    </div>
</template>
<script>
import { setCookie } from 'U/utilCookie';
import { toLogin } from '@/service/MH';
export default {
    name: 'Login',
    components: {},
    data() {
        return {
            testmodle: '',
            InfForm: {
                account: '',
                password: '',
            },
        };
    },
    mounted() {},
    watch: {},
    methods: {
        // 登录
        // loginT(param) {
        //     if (param.account === 'admin' && param.password === '123') {
        //         this.$store.state.userCard = true;
        //         this.$router.push({ path: '/' });
        //     } else {
        //         this.$message({ message: '帐号或密码错误', type: 'error' });
        //     }
        //     console.log('param', param);
        // },
        // 校验方法
        returnRules() {
            let rules = {
                account: [{ validator: this.validateAccount, trigger: 'blur' }],
                password: [{ validator: this.validateAccount, trigger: 'blur' }],
            };
            return rules;
        },
        // 账户校验
        validateAccount(rule, value, callback) {
            // if (value === '') {
            //     callback(new Error('请输入用户名或邮箱'));
            // } else {
            //     Promise.all([checkEmailFun({ email: value }), checkNameFun({ name: value })]).then(
            //         resArr => {
            //             let bol = resArr.some(item => item.data.code === '200');
            //             if (bol) {
            //                 callback();
            //             } else {
            //                 callback(new Error('该账户不存在'));
            //             }
            //         }
            //     );
            // }
            if (value === '') {
                // callback(new Error('请输入用户名或邮箱'));
                this.$message.error('请输入用户名或邮箱');
            }
        },
        // 提交请求
        async submitForm(formName) {
            let _self = this;
            this.$refs[formName].validate(valid => {
                let pas = '';
                if (_self.InfForm.password) {
                    pas = _self.InfForm.password.trim().toString();
                }

                let param = {
                    name: _self.InfForm.account,
                    password: pas,
                    userType: '1',
                };
                if (valid) {
                    this.loginT(param);
                } else {
                    this.$message.error('请输入用户名或邮箱');
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
                    resData.data.status === '105' ||
                    resData.data.status === '106'
                ) {
                    this.$message(resData.data.message);
                } else if (resData.data.status === '200') {
                    this.userInfChange(resData.data);
                    // 勾选保存用户名密码
                    if (this.checked) {
                        this.savePassword();
                    }
                }
            } else {
                this.$message({
                    message: '登陆失败，请联系管理员。',
                    type: 'warning',
                    offset: 200,
                });
            }
        },
        // 登陆修改信息
        async userInfChange(data) {
            let token = data.token;
            data.user.token = token;
            localStorage.setItem('AuthorizationZ', token);
            localStorage.setItem(
                'userBackInf',
                JSON.stringify({ name: data.user.username, token: token })
            );
            // this.$store.commit('login/setUserInf', data.user);
            // 跳转到指定的路由
            this.$router.push({ path: '/' });
        },
        // 保存密码
        savePassword() {
            setCookie(this.InfForm.account, this.InfForm.password);
        },
    },
};
</script>
<style lang="scss">
.loginIndex {
    height: 100%;
    background-image: url(./theme/img/loginBg.jpeg);
    background-repeat: no-repeat;
    background-size: 120% 120%;
    background-position: center;
    padding: 300px 0 0 42%;

    .login-wrap {
        width: 300px;
        height: 450px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #000;
        opacity: 60%;
    }
    h1 {
        font-size: 36px;
    }
    .login-content {
        width: 100%;
        margin-top: 50px;
    }

    .items {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .login-content input {
        display: inline-block;
        width: 80%;
        height: 30px;
        outline: none;
        margin: 15px auto;
        border: 0;
        border-bottom: 3px solid aqua;
        background-color: transparent;
        color: white;
        font-size: 20px;
        z-index: 10;
    }

    .login-content input:focus + label,
    .login-content input:valid + label {
        color: white;
        font-size: 14px;
        top: 0;
    }

    .login-content label {
        color: turquoise;
        font-size: 20px;
        position: absolute;
        top: 20px;
        left: 25px;
        transition: all 0.5s linear;
        z-index: 5;
    }

    .login-wrap h1 {
        text-align: center;
        color: white;
        margin-top: 30px;
    }

    .login-content button {
        display: inline-block;
        width: 50%;
        margin-top: 50px;
        position: relative;
        overflow: hidden;
        background: transparent;
        color: aqua;
        border: 0;
    }
    .btn {
        font-weight: 800;
        font-size: 18px;
    }
    .btn span {
        position: absolute;
    }

    .btn > span:nth-child(1) {
        width: 100%;
        height: 3px;
        background: -webkit-linear-gradient(left, transparent, turquoise);
        left: -100%;
        top: 0px;
        animation: line1 1s linear infinite;
    }

    @keyframes line1 {
        50%,
        100% {
            left: 100%;
        }
    }

    .btn > span:nth-child(2) {
        width: 3px;
        height: 100%;
        background: -webkit-linear-gradient(top, transparent, turquoise);
        top: -100%;
        right: 0px;
        animation: line2 1s 0.25s linear infinite;
    }

    @keyframes line2 {
        50%,
        100% {
            top: 100%;
        }
    }

    .btn > span:nth-child(3) {
        width: 100%;
        height: 3px;
        background: -webkit-linear-gradient(right, transparent, turquoise);
        right: -100%;
        bottom: 0px;
        animation: line3 1s 0.5s linear infinite;
    }

    @keyframes line3 {
        50%,
        100% {
            right: 100%;
        }
    }

    .btn > span:nth-child(4) {
        width: 3px;
        height: 100%;
        background: -webkit-linear-gradient(bottom, transparent, turquoise);
        bottom: -100%;
        left: 0px;
        animation: line4 1s 0.75s linear infinite;
    }

    @keyframes line4 {
        50%,
        100% {
            bottom: 100%;
        }
    }

    .login-content .btn:hover {
        color: white;
        border-radius: 5px;
        background-color: rgb(49, 231, 213);
        box-shadow: 0 0 5px 0 turquoise, 0 0 15px 0 turquoise, 0 0 25px 0 turquoise,
            0 0 35px 0 turquoise;
        /* -webkit-box-shadow: 0 0 5px 0 turquoise, 0 0 15px 0 turquoise,
    0 0 25px 0 turquoise, 0 0 35px 0 turquoise; */
        /* z-index: 999; */
    }
}
</style>
