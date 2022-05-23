<template>
    <div class="echartsDataManager">
        <div class="query_box">
            <div class="ele_query_box" v-show="isYear">
                <span class="label">{{ typeTitle }}</span>
                <el-select
                    placeholder="请选择类型"
                    v-model="typeVal"
                    value-key="index"
                    @change="getSeleData"
                >
                    <el-option
                        v-for="(item, index) in groundTypeData"
                        :key="index"
                        :label="item.name"
                        :value="item"
                    ></el-option>
                </el-select>
            </div>
            <el-button
                title="新增数据"
                @click="getListDataDeatils(1)"
                type="primary"
                class="btnStyleFrameTypeOut"
                style="margin-top: 4px; margin-left: 55px"
            >
                <!-- <img src="../../assets/btnIcon/search.png" /> -->
                新增
            </el-button>
        </div>
        <div class="table_box">
            <el-table
                :data="tableData.rows"
                ref="dataListTable"
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
                    width="200"
                    fixed="right"
                >
                    <template slot-scope="scope">
                        <div class="btn_distance">
                            <el-button
                                title="编辑"
                                class="btnStyleFrame"
                                @click="getListDataDeatils(2, scope.row)"
                            >
                                编辑
                            </el-button>

                            <el-button
                                title="删除"
                                class="btnStyleFrame"
                                @click="deleteListData(scope.row)"
                            >
                                删除
                            </el-button>
                        </div>
                    </template>
                </el-table-column>
                <template slot="empty">
                    <noneDataStyle></noneDataStyle>
                </template>
            </el-table>
        </div>

        <!-- 新增修改列表面板 -->
        <el-dialog
            :title="titelName"
            :visible.sync="dialogFormVisible"
            width="600px"
            :center="true"
            :close-on-click-modal="false"
        >
            <el-form :model="itemsForm" :rules="rules" ref="itemsForm">
                <el-form-item label="地区" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="itemsForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="数值" :label-width="formLabelWidth" prop="value">
                    <el-input v-model="itemsForm.value" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                    v-show="isYearInput"
                    label="年份"
                    :label-width="formLabelWidth"
                    prop="year"
                >
                    <el-input v-model="itemsForm.year" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="uploadAlterList(addType, 'itemsForm')">
                    确 定
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {
    getEchartsData,
    getEchartsYear,
    postEchartsAdd,
    getEchartsDel,
    postEchartsAlter,
} from 'S/HT';
import noneDataStyle from 'C/common/noneData';
export default {
    name: 'EchartsDataManager',
    components: { noneDataStyle },
    data() {
        return {
            isYearInput: true,
            isYear: true,
            addType: 1,
            pathType: '1',
            typeTitle: '年份：',
            typeVal: null,
            typeId: 1,
            typeName: '',
            groundTypeData: [],
            addTypeData: [],
            frsitSele: '',
            firstTableId: 1,
            tableData: {
                page: 1,
                size: 10,
                total: 0,
                rows: [],
            },

            wayData: [
                {
                    id: 0,
                    label: 'txt',
                    value: 'txt',
                },
                {
                    id: 1,
                    label: 'image',
                    value: 'image',
                },
                {
                    id: 2,
                    label: 'timestamp',
                    value: 'timestamp',
                },
                {
                    id: 3,
                    label: 'double',
                    value: 'double',
                },
            ],
            tableHeader: [
                { label: '地区', value: 'name', width: '100', minWidth: '100' },
                { label: '数值', value: 'value', width: '100', minWidth: '100' },
                { label: '年份', value: 'year', width: '100', minWidth: '100' },
            ],
            currentPage: 1,
            pageSize: 10,
            oHeightTable: '',
            dialogFormVisible: false,
            titelName: '新增属性',
            rules: {
                name: [{ message: '请输入中文名称', trigger: 'blur' }],
                value: [{ message: '请输入英文名称', trigger: 'blur' }],
                year: [{ message: '请输入单位', trigger: 'blur' }],
            },
            formLabelWidth: '80px',
            itemsForm: {
                name: '',
                value: '',
                year: '',
            },

            currentListId: null,
        };
    },
    mounted() {
        this.pathType = this.$route.query.type;
        this.seleTypeList(this.pathType);
        this.oHeightTable = $('.echartsDataManager').height() - $('.query_box').height() - 42 - 20;
        $('.table_box').height($('.echartsDataManager').height() - $('.query_box').height());
        console.log('height', this.oHeightTable);
    },
    watch: {
        $route: function (newVal, oldVal) {
            this.currentPage = 1;
            this.pathType = newVal.query.type;
            console.log('pathtype', this.pathType);
            this.seleTypeList(this.pathType);
            if (this.pathType === '1') {
                this.isYear = true;
                this.getEchartsYear(1);
                this.isYearInput = true;
            } else if (this.pathType === '2') {
                this.isYearInput = false;
                this.isYear = false;
            }
            this.$nextTick(() => {
                this.oHeightTable = $('.echartsDataManager').height() - 88 - 52 - 20;
                console.log(this.oHeightTable);
            });
        },
        immediate: true,
        deep: true,
    },
    methods: {
        // },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        // 提交修改
        uploadAlterList(addtype, formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log('vaild', valid);
                    this.dialogFormVisible = false;
                    if (addtype === 1) {
                        if (this.pathType === '1') {
                            this.insertCurrencyConfigure(this.itemsForm);
                        } else {
                            this.insertDetailsConfigure(this.itemsForm);
                        }
                    } else if (addtype === 2) {
                        if (this.pathType === '1') {
                            this.updateCurrencyConfigure(this.itemsForm);
                        } else {
                            this.updateDetailsConfigure(this.itemsForm);
                        }
                    }
                } else {
                    this.$message({
                        type: 'error',
                        message: '请填写表单',
                    });
                }
            });
        },

        seleTypeList(type) {
            this.queryMeteType();
        },
        // 编辑
        getListDataDeatils(addtype, value) {
            if (addtype === 1) {
                this.addType = 1;
                this.dialogFormVisible = true;
                this.resetForm('itemsForm');
                this.titelName = '新增属性';
            } else if (addtype === 2) {
                this.noEdit = true;
                this.addType = 2;
                this.titelName = `修改属性`;
                console.log('value', value);
                this.dialogFormVisible = true;
                this.currentListId = value.id;
                this.resetForm('itemsForm');
            }
        },

        // 删除
        deleteListData(val) {
            console.log('val', val);

            this.$confirm('确认删除嘛?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    if (this.pathType === '1') {
                        this.deleteCurrencyConfigure(1, val.id);
                        console.log('id', val.id);
                    } else {
                        this.deleteDetailsConfigure(3, val.id);
                    }
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消',
                    });
                });
        },
        async deleteCurrencyConfigure(type, id) {
            let data = await getEchartsDel(type, id);
            if (data.status === 200) {
                this.$message.success('删除成功');
                this.getCurrencyByParam(this.typeId);
            } else {
                this.$message.error('删除失败');
            }
        },
        async deleteDetailsConfigure(type, id) {
            let data = await getEchartsDel(type, id);
            if (data.status === 200) {
                this.$message.success('删除成功');
                this.getDetailsByParam(3);
            } else {
                this.$message.error('删除失败');
            }
        },
        async updateCurrencyConfigure(itemsform) {
            let data = await postEchartsAlter({
                name: itemsform.name,
                value: itemsform.value,
                year: itemsform.year,
                id: this.currentListId,
                type: 1,
            });
            if (data.status === 200) {
                this.$message.success('修改成功');
                this.getCurrencyByParam(this.typeId);
            } else {
                this.$message.error('修改失败');
            }
        },
        async updateDetailsConfigure(itemsform) {
            let data = await postEchartsAlter({
                name: itemsform.name,
                value: itemsform.value,
                id: this.currentListId,
                type: 3,
            });
            if (data.status === 200) {
                this.$message.success('修改成功');
                this.getDetailsByParam(3);
            } else {
                this.$message.error('修改失败');
            }
        },
        async insertCurrencyConfigure(itemsform) {
            itemsform.sequence = Number(itemsform.sequence);
            let data = await postEchartsAdd({
                type: 1,
                name: itemsform.name,
                value: itemsform.value,
                year: itemsform.year,
            });
            if (data.status === 200) {
                this.$message.success('新增成功');
                this.getCurrencyByParam(this.typeId);
            } else {
                this.$message.error('新增失败');
            }
        },
        async insertDetailsConfigure(itemsform) {
            itemsform.sequence = Number(itemsform.sequence);
            let data = await postEchartsAdd({
                type: 3,
                name: itemsform.name,
                value: itemsform.value,
                year: itemsform.year,
            });
            if (data.status === 200) {
                this.$message.success('新增成功');
                this.getDetailsByParam(3);
            } else {
                this.$message.error('新增失败');
            }
        },

        queryMeteType() {
            // await getEchartsData(this.pathTypem, 2022).then(res => {
            // this.groundTypeData = res.data;
            // this.frsitSele = res.data[0].name;
            // this.firstTableId = res.data[0].dic_id;
            if (this.pathType === '1') {
                this.isYearInput = true;
                this.getEchartsYear(1);
                this.getCurrencyByParam(1);
            } else {
                this.isYearInput = false;
                this.getDetailsByParam(3);
            }
            this.typeVal = this.frsitSele;
            // });
        },
        async getEchartsYear(type) {
            await getEchartsYear(type).then(res => {
                this.groundTypeData = res.data.data;
                console.log('groundTypeData', this.groundTypeData);
            });
        },
        async getCurrencyByParam(id, name) {
            let year = this.groundTypeData.at(-1);
            console.log('year', year);
            let rows = [];
            let temptable = {};
            for (let i = 2020; i <= year; i++) {
                await getEchartsData(id, i).then(res => {
                    res.data.data.map(item => {
                        temptable.id = item.id;
                        temptable.name = item.name;
                        temptable.value = item.value;
                        temptable.year = item.year;
                        rows.push(JSON.parse(JSON.stringify(temptable)));
                        return item;
                    });
                });
            }
            console.log('rows', rows);
            this.tableData.rows = rows;
        },
        async getDetailsByParam(id, name) {
            await getEchartsData(id).then(res => {
                this.tableData.rows = res.data.data;
                // this.tableData.total = res.data.total;
                // this.tableData.page = res.data.page;
            });
        },

        async getSeleData(id) {
            await getEchartsData(1, this.typeVal).then(res => {
                this.tableData.rows = res.data.data;
            });
        },
        indexMethod(index) {
            return index + 1;
        },
    },
};
</script>
<style lang="scss">
.echartsDataManager {
    width: 1900px;
    height: 100%;
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
            position: relative;

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
        .btnStyleFrameTypeOut {
            position: absolute;
            right: 0;
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
        height: 95%;
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
            .upload {
                line-height: 16px;
                color: #ffffff;
                background: #1796d6;
                border-radius: 4px;
                .el-link.is-underline:hover:after {
                    border: 0;
                }
                .el-upload-list {
                    display: none;
                }
            }
        }
    }
}
</style>
