<template>
    <div class="roleManage">
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

                <!-- <el-table-column
                    height="40"
                    label="操作"
                    align="center"
                    min-width="120"
                    width="120"
                    fixed="right"
                >
                    <template slot-scope="scope">
                        <div class="btn_distance">
                            <el-button
                                title="编辑"
                                class="btnStyleFrame"
                                @click="getUserDataDeatils(scope.row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                title="删除"
                                class="btnStyleFrame"
                                @click="deleteUserData(scope.row)"
                            >
                                删除
                            </el-button>
                        </div>
                    </template>
                </el-table-column> -->
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
        </div>
    </div>
</template>

<script>
import { getAllUser } from 'S/HT';

export default {
    name: 'RoleMange',
    components: {},
    data() {
        return {
            tableHeader: [
                { label: '用户名', value: 'name', width: '100', minWidth: '100' },
                { label: '登录类型', value: 'type', width: '100', minWidth: '100' },
                { label: '密码', value: 'password', width: '100', minWidth: '100' },
                { label: '创建时间', value: 'createTime', width: '100', minWidth: '100' },
                { label: '已分配权限', value: 'role', width: '100', minWidth: '100' },
            ],
            tableData: {
                page: 1,
                size: 10,
                total: 0,
                rows: [],
            },

            formLabelWidth: '80px',
        };
    },
    mounted() {
        this.initUserForm();
        this.oHeightTable = $('.roleManage').height() - $('.query_box').height() - 42 - 20;
        $('.table_box').height($('.roleManage').height() - $('.query_box').height());
    },
    methods: {
        async initUserForm() {
            await getAllUser({}).then(res => {
                console.log('resuser', res);
                this.tableData.rows = res.data.data;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.roleManage {
}
</style>
<style lang="scss">
.roleManage {
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

        .list_btn_box {
            text-align: right;
            padding-right: 74px;
            margin-top: 15px;
        }
    }
}
</style>
