<template>
    <div class="user_box">
        <div class="user_content" style="width: 100%; height: 100%">
            <div class="query_box">
                <div class="ele_query_box">
                    <span class="label">用户名称：</span>
                    <el-input
                        v-model="userName"
                        @input="getUserDataMeth"
                        :clearable="true"
                        placeholder="请输入用户名称"
                        :maxlength="100"
                    />
                </div>

                <el-button
                    title="查询数据"
                    @click="getUserDataMeth"
                    type="primary"
                    class="btnStyleFrameTypeOut"
                    style="margin-top: 4px; margin-left: 55px"
                >
                    <img src="../../assets/btnIcon/search.png" />
                    查询
                </el-button>
            </div>
            <div class="table_box">
                <el-table
                    :data="tableData.rows"
                    ref="dataListTable"
                    @selection-change="handleSelectionChange"
                    header-row-class-name="header_tr"
                    style="width: 100%"
                    id="firstInput"
                    tooltip-effect="dark"
                    :max-height="oHeightTable"
                >
                    <el-table-column type="selection" height="40" min-width="5%"></el-table-column>
                    <el-table-column
                        type="index"
                        :index="indexMethod"
                        label="序号"
                        class-name="firstInput"
                    ></el-table-column>
                    <el-table-column
                        :prop="item.value"
                        :label="item.label"
                        :min-width="item.width"
                        height="40"
                        align="center"
                        v-for="(item, id) in tableHeader"
                        :show-overflow-tooltip="
                            item.value === 'reason' ||
                            item.value === 'task_name' ||
                            item.value === 'tool_name'
                        "
                        :key="id"
                    ></el-table-column>

                    <el-table-column
                        height="40"
                        label="操作"
                        align="center"
                        min-width="120"
                        width="120"
                        fixed="right"
                    >
                        <template slot-scope="scope">
                            <div class="btn_distance">
                                <!-- <el-button
                                    title="编辑"
                                    class="btnStyleFrame"
                                    @click="getUserDataDeatils(scope.row)"
                                >
                                    编辑
                                </el-button> -->
                                <el-button
                                    title="分配角色"
                                    class="btnStyleFrame fourBtnStyle"
                                    @click="assignRoles(scope.row)"
                                >
                                    分配角色
                                </el-button>
                                <!-- <el-button
                                    title="删除"
                                    class="btnStyleFrame"
                                    @click="deleteUserData(scope.row)"
                                >
                                    删除
                                </el-button> -->
                            </div>
                        </template>
                    </el-table-column>
                    <template slot="empty">
                        <noneDataStyle></noneDataStyle>
                    </template>
                </el-table>
                <!-- <div class="list_btn_box" style="display: none">
                    <el-button
                        title="删除"
                        class="danger"
                        type="danger"
                        @click="deleteUserData(null)"
                    >
                        <img src="../../assets/btnIcon/delete.png" />
                        删除
                    </el-button>
                </div> -->
                <div class="list_pagination" v-if="tableData.rows">
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="tableData.page"
                        :page-sizes="[10, 20, 30]"
                        :page-size="10"
                        layout="total,  prev, pager, next, sizes,jumper"
                        :total="tableData.total"
                    ></el-pagination>
                </div>
            </div>
            <div class="refused_box" v-if="showRefause">
                <span class="refused_title">请填写拒绝原因</span>
                <el-input
                    type="textarea"
                    placeholder="请输入内容，不超过100字"
                    v-model="refuseReason"
                    maxlength="100"
                    :autosize="{ minRows: 6, maxRows: 8 }"
                    resize="none"
                    show-word-limit
                ></el-input>
                <div class="refused_btn">
                    <span class="cancel_btn comBtn" @click="cancelRefused">取消</span>
                    <span class="confirm_btn comBtn" @click="confirmRefused">确定</span>
                </div>
            </div>
        </div>
        <dialogs
            ref="dialog"
            :parentValue="dialogText"
            v-if="dialogBol"
            @toParentValue="toParentValueEvent"
        ></dialogs>
        <!-- 用户面板 -->
        <el-dialog
            :title="titelName"
            :visible.sync="dialogFormVisible"
            width="600px"
            :center="true"
        >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
                    <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                    <el-input v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth" prop="passwordOk">
                    <el-input v-model="ruleForm.passwordOk" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" :label-width="formLabelWidth" prop="telephone">
                    <el-input v-model="ruleForm.telephone" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 分配角色 -->
        <el-dialog
            title="分配角色"
            :visible.sync="dialogRolePanelVisible"
            width="840px"
            :center="true"
            class="roleDialog"
            style="height: 760px"
        >
            <div style="text-align: center">
                <el-switch v-model="value1" active-text="权限升级" inactive-text="会员"></el-switch>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogRolePanelVisible = false">取 消</el-button>
                <el-button type="primary" @click="assignRolesByIdMeth">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import CommonJs from 'U/common';
import dialogs from 'C/common/dialogs';
import noneDataStyle from 'C/common/noneData';
import { getAllUser, getRoleUp } from 'S/HT';
import { delEmpty } from 'U/dealwithParam';
export default {
    name: 'roleData',
    components: { dialogs, noneDataStyle },
    data() {
        return {
            value1: false,
            dialogText: {
                text: '',
                type: '1',
                contentItem: [],
            },
            dialogBol: false,
            chName: '订单审核界面',
            orderType: '',
            isChartsBoxShow: false,
            productName: '',
            timeTsInf: '',

            timeValue2: null,
            timeValue1: null,
            orderStatus: '',
            refuseReason: '',
            showRefause: false, // 拒绝原因框展示控制变量
            multipleSelection: [], // 已选择订单
            oHeightTable: '',
            productAudit: '',
            resetImg: require('../../assets/btnIcon/reset.png'),

            userName: '',
            userEmails: '',
            tableHeader: [
                { label: '用户名', value: 'name', width: '100', minWidth: '100' },
                { label: '登录类型', value: 'type', width: '100', minWidth: '100' },
                { label: '已分配权限', value: 'role', width: '100', minWidth: '100' },
            ],
            currentPage: 1,
            pageSize: 10,
            tableData: {
                page: 1,
                size: 10,
                total: 0,
                rows: [],
            },
            dialogFormVisible: false,
            ruleForm: {
                name: '',
                email: '',
                password: '',
                passwordOk: '',
                telephone: '',
                organ: '',
            },
            rules: {
                name: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
                email: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { validator: CommonJs.validateEmail, trigger: 'blur' },
                ],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                passwordOk: [{ required: true, message: '请确认密码', trigger: 'blur' }],
                telephone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    { validator: CommonJs.validateMobilePhone, trigger: 'blur' },
                ],
            },
            formLabelWidth: '80px',
            titelName: '新增用户',
            currentUserId: '',

            dialogRolePanelVisible: false,
            currentSelectedRoleValue: [],
            currentSelectedRoleValueDeaultLeft: [],
            currentSelectedRoleValueDeaultRight: [],
            renderFunc(h, option) {
                return <span>{option.label}</span>;
            },
        };
    },
    mounted() {
        this.initUserForm();
        this.oHeightTable = $('.user_box').height() - $('.query_box').height() - 42 - 20;
        $('.table_box').height($('.user_box').height() - $('.query_box').height());
    },
    created() {
        this.getUserDataMeth();
    },
    methods: {
        async initUserForm() {
            await getAllUser({}).then(res => {
                console.log('resuser', res);
                this.tableData.rows = res.data.data;
            });
        },
        async getUserDataMeth() {
            let datas = await getAllUser({ name: this.userName, type: '0' });
            console.log('data', datas);

            if (datas.status === 200) {
                this.tableData.rows = datas.data.data;
            }
        },
        // 多选框改变
        handleSelectionChange(val) {
            setTimeout(() => {
                if (this.tableData.rows && this.tableData.rows.length > 0) {
                    this.tableData.rows.forEach(item => {
                        let choicedNode = val.map(itemTwo => itemTwo.id);
                        let index = this.multipleSelection.findIndex(
                            itemChoice => itemChoice.id === item.id
                        );
                        if (choicedNode.includes(item.id)) {
                            if (index === -1) {
                                this.multipleSelection.push(item);
                            }
                        } else {
                            if (index !== -1) {
                                this.multipleSelection.splice(index, 1);
                            }
                        }
                    });
                }
            }, 0);
        },
        indexMethod(index) {
            return index + 1;
        },
        handleSizeChange(size) {
            this.currentPage = 1;
            this.pageSize = size;
            this.getUserDataMeth();
        },
        // 翻页
        handleCurrentChange(page) {
            this.currentPage = page;
            this.getUserDataMeth();
        },
        getUserDataDeatils(value) {
            if (!value.id) return;
            this.currentUserId = value.id;
            this.dialogFormVisible = true;
            this.resetForm('ruleForm');
            this.titelName = '修改用户';
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (this.currentUserId) {
                        // 修改
                    } else {
                        // 增加
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        addUserData() {
            this.dialogFormVisible = true;
            this.resetForm('ruleForm');
            this.titelName = '新增用户';
        },
        deleteUserData(val) {
            if (val) {
                // 单个删除
                this.$confirm('确认删除嘛?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                })
                    .then(() => {
                        console.log('单个删除');
                    })
                    .catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消',
                        });
                    });
            } else if (!val && this.multipleSelection.length === 0) {
                // 批量删除
                this.$message({
                    type: 'error',
                    message: '请选择要删除的数据',
                });
            } else {
                this.$confirm('确认删除这些用户嘛?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                })
                    .then(() => {
                        console.log('批量删除');
                    })
                    .catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消',
                        });
                    });
            }
        },
        // 分配角色
        assignRoles(value) {
            if (!value) return;
            this.dialogRolePanelVisible = true;
            this.currentUserId = value.id;
            this.value1 = false;
        },

        async assignRolesByIdMeth() {
            if (!this.value1) return;
            let datas = await getRoleUp(this.currentUserId);
            if (datas.status === 200) {
                if (datas.data.code === '200') {
                    this.dialogRolePanelVisible = false;
                    this.currentUserId = '';
                    this.initUserForm();
                    this.$message.success('权限分配成功');
                } else {
                    this.$message({
                        type: 'error',
                        message: datas.data.message,
                    });
                }
            }
        },
        assignRolesw() {
            this.assignRolesByIdMeth();
        },
    },
    watch: {},
};
</script>
<style lang="scss">
.user_box {
    width: 1900px;
    height: 100%;
    // width: calc(100% - 30px);
    .el-dialog--center {
        height: 760px;
    }
    .roleDialog {
        overflow: hidden;
        height: 760px !important;
    }
    .allOrderBtn {
        text-align: left;
        border-bottom: 1px solid #e3e3e3;
        width: 96%;
        padding-left: 28px;
        padding: 7px 16px;
        .orderBtn {
            background-color: #1f4ca3;
            color: #ffffff;
        }
    }
    .comBtn {
        font-size: 12px;
        color: #333333;
        padding: 4px 26px;
        background: #c5e2ff;
        border-radius: 4px;
        display: inline-block;
        cursor: pointer;
        &:not(:first-of-type) {
            margin-left: 10px;
        }
        &.hiddenDom {
            cursor: not-allowed;
            background: #e3e3e3;
        }
    }
    .statusBtn_box {
        width: 100%;
        height: 33px;
        display: flex;
        align-items: flex-end;
        text-align: left;
        // left: 30px;
        position: relative;
        .label {
            display: inline-block;
            width: 96px;
            text-align-last: justify;
            text-align: right;
            font-size: 16px;
            font-weight: 400;
        }
        .comBtn {
            border: 1px solid #818ea8;
            border-radius: 3px;
            padding: 6px 26px;
            font-size: 14px;
            background: #fff;
            &.isActive {
                background-color: #1f4ca3;
                color: #fff;
                border: 1px solid #1f4ca3;
            }
            &:not(:first-of-type) {
                margin-left: 20px;
            }
        }
        .orderBtn {
            background-color: #1f4ca3;
            border: 1px solid #1f4ca3;
            color: #ffffff;
            font-size: 14px;
            padding: 7px 21px;
            &.notblue {
                background-color: unset;
                color: #1f4ca3;
                border: 1px solid #1f4ca3;
                border-radius: 4px;
            }
        }
    }
    .query_box {
        width: 100%;
        text-align: left;
        min-height: 45px;
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        line-height: 45px;
        .ele_query_box {
            display: inline-block;
            font-size: 16px;
            .label {
                display: inline-block;
                width: 96px;
                text-align-last: justify;
                text-align: right;
                font-size: 16px;
                font-weight: 400;
            }
            &:not(:first-of-type) {
                margin-left: 50px;
            }
            .el-input {
                width: 170px;
                .el-input__inner {
                    height: 36px;
                }
            }
            &.order_type {
                .el-input {
                    width: 170px;
                    .el-input__icon {
                        line-height: 30px;
                    }
                }
            }
            .time_click_box {
                width: 500px;
                display: inline-block;
                .el-input {
                    width: 192px;
                    .el-input__icon {
                        line-height: 32px;
                    }
                }
            }
            &.btn_box {
                padding-left: calc(100% - 610px);
            }
            .orderBtn {
                background-color: #1f4ca3;
                border: 1px solid #1f4ca3;
                color: #ffffff;
                font-size: 14px;
                padding: 7px 21px;
                &.notblue {
                    background-color: unset;
                    color: #1f4ca3;
                    border: 1px solid #1f4ca3;
                    border-radius: 4px;
                }
            }
        }

        .param_content {
            display: inline-block;
            vertical-align: top;
            width: 300px;
            text-align: left;
            margin-bottom: 20px;
            .label {
                display: inline-block;
                width: 96px;
                text-align-last: justify;
                text-align: right;
                font-size: 16px;
                font-weight: 400;
            }
            .param_input {
                display: inline-block;
            }
            .el-input {
                display: inline-block;
                // width: 222px;
                height: 30px;
                font-size: 16px;
                font-weight: 400;
                line-height: 30px;
                .el-input__inner {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    // border: 1px solid #666666;
                    opacity: 0.6;
                    border-radius: 4px;
                    color: #333333;
                }
                .el-input__suffix {
                    .el-icon-arrow-up {
                        line-height: 30px;
                    }
                    .el-icon-circle-close {
                        line-height: 10px;
                        position: relative;
                        bottom: 5px;
                        right: 30px;
                    }
                }
            }
            .el-select {
                // width: 222px;
                height: 30px;
                .el-input {
                    height: 100%;
                }
            }
            .el-date-editor {
                line-height: 30px;
                .el-input__prefix {
                    top: -5px;
                    left: 2px;
                }
                .el-input__suffix {
                    top: 0px;
                    right: 2px;
                }
            }
        }
    }
    .table_box {
        width: 100%;
        position: relative;
        // left: 30px;
        top: 10px;
        .header_tr {
            .el-checkbox {
                &:first-child {
                    position: relative;
                    left: 4px;
                }
            }
        }
        .strTruncation {
            width: 100px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .header_tr {
            th {
                background-color: #ecf6ff;
            }
        }
        .list_pagination {
            display: flex;
            // margin-top: 10px;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            bottom: -120px;
        }
        .list_btn_box {
            text-align: right;
            padding-right: 74px;
            margin-top: 15px;
        }
    }
    .refused_box {
        width: 474px;
        height: 274px;
        z-index: 200000;
        background-color: #ffffff;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        padding: 22px 53px 22px 53px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .refused_title {
            font-size: 16px;
            color: #2d426e;
        }
        .refused_btn {
            text-align: right;
            .comBtn {
                border: 1px solid #333333;
                border-radius: 4px;
                padding: 7px 24px;
                font-size: 12px;
                background: #fff;
                &:hover {
                    background: #1f4ca3;
                    border: 1px solid #1f4ca3;
                    color: #fff;
                }
            }
        }
    }
    .charts-box {
        /* background-color: #0A0D26; */
        background-color: #fff;
        border: 1px solid;
        width: 1220px;
        height: 500px;
        padding: 10px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border: 1px solid;
        .close-btn {
            background-color: transparent;
            padding: 5px;
            letter-space: 2px;
            word-space: 2px;
            float: right;
            color: #333;
            font-size: 20px;
            border: none;
        }
        .charts {
            width: 100%;
            height: 400px;
            margin-top: 40px;
        }
    }
    .el-dialog__header {
        text-align: left;
    }
    .el-dialog__body {
        padding-bottom: 0px;
        margin-top: 40px;
        margin-bottom: 70px;
    }
    .el-transfer-panel {
        width: 300px;
    }
}
.mySelect {
    .el-scrollbar {
        .el-select-dropdown__wrap {
            margin-bottom: 2px !important;
            overflow: auto;
            max-height: 400px;
        }
    }
}
// .el-icon-arrow-up:before {
//     position: relative;
//     top: -10px !important;
// }
</style>
