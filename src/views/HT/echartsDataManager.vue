<template>
    <div class="echartsDataManager">
        <div class="query_box">
            <div class="ele_query_box">
                <span class="label">查询名称：</span>
                <el-input
                    v-model="userName"
                    @input="getNameDataMeth"
                    :clearable="true"
                    placeholder="请输入名称"
                    :maxlength="100"
                />
            </div>
            <div class="ele_query_box">
                <span class="label">{{ typeTitle }}</span>
                <el-select
                    placeholder="请选择类型"
                    v-model="typeVal"
                    value-key="dic_id"
                    @change="seleType"
                >
                    <el-option
                        v-for="item in groundTypeData"
                        :key="item.dic_id"
                        :label="item.name"
                        :value="item"
                    ></el-option>
                </el-select>
                <el-button
                    icon="el-icon-plus"
                    class="newsSpeciBtn"
                    @click="goAddDialog"
                ></el-button>
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
            <div class="list_pagination" v-if="tableData.rows && tableData.total > 0">
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

        <!-- 新增修改列表面板 -->
        <el-dialog
            :title="titelName"
            :visible.sync="dialogFormVisible"
            width="600px"
            :center="true"
            :close-on-click-modal="false"
        >
            <el-form :model="itemsForm" :rules="rules" ref="itemsForm">
                <el-form-item label="中文名称" :label-width="formLabelWidth" prop="cn_name">
                    <el-input
                        v-model="itemsForm.cn_name"
                        autocomplete="off"
                        :disabled="noEdit"
                    ></el-input>
                </el-form-item>
                <el-form-item label="英文名称" :label-width="formLabelWidth" prop="en_name">
                    <el-input
                        v-model="itemsForm.en_name"
                        autocomplete="off"
                        :disabled="noEdit"
                    ></el-input>
                </el-form-item>
                <el-form-item label="单位" :label-width="formLabelWidth" prop="unit">
                    <el-input
                        v-model="itemsForm.unit"
                        autocomplete="off"
                        :disabled="noEdit"
                    ></el-input>
                </el-form-item>
                <el-form-item label="展示顺序" :label-width="formLabelWidth" prop="sequence">
                    <el-input v-model="itemsForm.sequence" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="折线轴"
                    :label-width="formLabelWidth"
                    prop="order_chart"
                    v-show="isAlterForm"
                >
                    <el-select
                        placeholder="请选择折线轴"
                        v-model="itemsForm.order_chart"
                        value-key="id"
                    >
                        <el-option
                            v-for="item in orderChartData"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否展示" :label-width="formLabelWidth" prop="isdisplay">
                    <el-select
                        placeholder="请选择是否展示"
                        v-model="itemsForm.isdisplay"
                        value-key="id"
                    >
                        <el-option
                            v-for="item in isShowData"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="展示方式" :label-width="formLabelWidth" prop="way">
                    <el-select placeholder="请选择显示方式" v-model="itemsForm.way" value-key="id">
                        <el-option
                            v-for="item in wayData"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item
                    v-show="isAlterForm"
                    label="类型"
                    :label-width="formLabelWidth"
                    prop="typeName"
                >
                    <el-input v-model="itemsForm.typeName" autocomplete="off"></el-input>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="uploadAlterList(addType, 'itemsForm')">
                    确 定
                </el-button>
            </div>
        </el-dialog>
        <!-- 新增类型面板 -->
        <el-dialog
            :title="titleAddName"
            :visible.sync="dialogPromptVisible"
            width="400px"
            :center="true"
            style="margin-left: 10vw"
            :close-on-click-modal="false"
        >
            <el-form :model="itemsPrompt" ref="itemsPrompt">
                <el-form-item label="选择类型" :label-width="formLabelWidth" prop="type">
                    <el-select
                        placeholder="请选择类型"
                        v-model="itemsPrompt.type"
                        value-key="class_id"
                    >
                        <el-option
                            v-for="item in addTypeData"
                            :key="item.class_id"
                            :label="item.class_desc"
                            :value="item.class_id"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="输入名称" :label-width="formLabelWidth" prop="name">
                    <el-input
                        v-model="itemsPrompt.name"
                        autocomplete="off"
                        style="width: 217px"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogPromptVisible = false">取 消</el-button>
                <el-button type="primary" @click="append()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
// import {} from 'S/HT';
import noneDataStyle from 'C/common/noneData';
export default {
    name: 'EchartsDataManager',
    components: { noneDataStyle },
    data() {
        return {
            noEdit: false,
            addType: 1,
            pathType: '1',
            typeTitle: '特有类型：',
            userName: '',
            typeVal: null,
            typeId: 1,
            typeName: '',
            groundTypeData: [],
            addTypeData: [],
            frsitSele: '',
            firstTableId: 1,
            isAlterForm: false,
            titleAddName: '新增类型',
            tableData: {
                page: 1,
                size: 10,
                total: 0,
                rows: [],
            },
            isShowData: [
                {
                    id: 1,
                    label: '是',
                    value: true,
                },
                {
                    id: 0,
                    label: '否',
                    value: false,
                },
            ],
            orderChartData: [
                {
                    id: 0,
                    label: 'X轴',
                    value: 'x',
                },
                {
                    id: 1,
                    label: 'Y轴',
                    value: 'y',
                },
                {
                    id: 2,
                    label: '',
                    value: '',
                },
            ],
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
                { label: '中文名称', value: 'cn_name', width: '100', minWidth: '100' },
                { label: '英文名称', value: 'en_name', width: '100', minWidth: '100' },
                { label: '单位', value: 'unit', width: '100', minWidth: '100' },
                { label: '是否展示', value: 'isdisplay', width: '100', minWidth: '100' },
                { label: '展示方式', value: 'way', width: '100', minWidth: '100' },
            ],
            currentPage: 1,
            pageSize: 10,
            oHeightTable: '',
            dialogFormVisible: false,
            dialogPromptVisible: false,
            titelName: '新增属性',
            rules: {
                cn_name: [{ required: true, message: '请输入中文名称', trigger: 'blur' }],
                en_name: [{ required: true, message: '请输入英文名称', trigger: 'blur' }],
                unit: [{ message: '请输入单位', trigger: 'blur' }],
                order_chart: [{ required: true, message: '请选择折线轴', trigger: 'blur' }],
                isdisplay: [{ required: true, message: '请输入是否展示', trigger: 'blur' }],
                way: [{ required: true, message: '请输入展示方式', trigger: 'blur' }],
                sequence: [{ message: '请输入展示顺序', trigger: 'blur' }],
                typeName: [{ required: true, message: '请输入类型', trigger: 'blur' }],
            },
            formLabelWidth: '80px',
            itemsForm: {
                cn_name: '',
                en_name: '',
                isdisplay: '',
                order_chart: '',
                unit: '',
                way: '',
                sequence: '',
                type: '',
                typeName: '',
            },
            itemsPrompt: {
                type: null,
                name: '',
            },
            currentListId: null,
        };
    },
    mounted() {
        this.getAllClassification();
        this.pathType = this.$route.query.type;
        this.seleTypeList(this.pathType);
        this.oHeightTable = $('.echartsDataManager').height() - $('.query_box').height() - 42 - 20;
        $('.table_box').height($('.echartsDataManager').height() - $('.query_box').height());
        console.log('height', this.oHeightTable);
    },
    watch: {
        $route: function (newVal, oldVal) {
            this.isAlterForm = false;
            // this.getAllClassification();
            this.currentPage = 1;
            this.pathType = newVal.query.type;
            console.log('pathtype', this.pathType);
            if (this.pathType === '1') {
                this.isAlterForm = false;
                this.typeTitle = '特有信息：';
            } else if (this.pathType === '2') {
                this.isAlterForm = true;
                this.typeTitle = '基本信息：';
            }
            this.seleTypeList(this.pathType);
            this.$nextTick(() => {
                this.oHeightTable = $('.echartsDataManager').height() - 88 - 52 - 20;
                console.log(this.oHeightTable);
            });
        },
        immediate: true,
        deep: true,
    },
    methods: {
        // async insertDetailsByFile() {
        //     let formdata = new window.FormData();
        //     console.log(this.file.raw);
        //     formdata.append('file', this.file.raw);
        //     console.log('typeId', this.typeId);
        //     let res = await insertDetailsByFile(this.typeId, formdata);
        //     console.log('res', res.data.result);
        //     if (res.status === 200) {
        //         console.log('up end');
        //         this.$message.success('批量上传属性成功');
        //         this.getDetailsByParam(this.typeId);
        //     } else {
        //         this.$message.error('批量上传属性失败');
        //     }
        // },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        goAddDialog() {
            this.dialogPromptVisible = true;
            this.resetForm('itemsPrompt');
            this.getAllClassification();
        },
        // async getAllClassification() {
        //     await getAllClassification().then(res => {
        //         console.log('allclass', res);
        //         this.addTypeData = res.data.result;
        //     });
        // },
        // 提交修改
        // uploadAlterList(addtype, formName) {
        //     this.$refs[formName].validate(valid => {
        //         if (valid) {
        //             console.log('vaild', valid);

        //             this.dialogFormVisible = false;
        //             if (addtype === 1) {
        //                 if (this.pathType === '1') {
        //                     this.insertCurrencyConfigure(this.itemsForm);
        //                 } else {
        //                     this.insertDetailsConfigure(this.itemsForm);
        //                 }
        //             } else if (addtype === 2) {
        //                 if (this.pathType === '1') {
        //                     this.updateCurrencyConfigure(this.itemsForm);
        //                 } else {
        //                     this.updateDetailsConfigure(this.itemsForm);
        //                 }
        //             }
        //         } else {
        //             this.$message({
        //                 type: 'error',
        //                 message: '请填写表单',
        //             });
        //         }
        //     });
        // },
        // 新增类型
        append() {
            this.dialogPromptVisible = false;
            this.insertMeteType();
        },
        // async insertMeteType() {
        //     let data = await insertMeteType({
        //         name: this.itemsPrompt.name,
        //         type: this.itemsPrompt.type,
        //     });
        //     if (data.status === 200) {
        //         this.$message.success('新增类型成功');
        //         this.queryMeteType();
        //     } else {
        //         this.$message.error('新增类型失败');
        //     }
        // },
        seleTypeList(type) {
            this.queryMeteType();
        },
        // 编辑
        getListDataDeatils(addtype, value) {
            if (addtype === 1) {
                this.noEdit = false;
                this.addType = 1;
                this.dialogFormVisible = true;
                this.resetForm('itemsForm');
                this.titelName = '新增属性';
            } else if (addtype === 2) {
                this.noEdit = true;
                this.addType = 2;
                this.titelName = `修改${this.itemsForm.typeName}属性`;
                console.log('value', value);
                this.dialogFormVisible = true;
                this.currentListId = value.id;
                this.showOldVal(value.cn_name);
                this.resetForm('itemsForm');
            }
        },
        // async showOldVal(name) {
        //     let callback = null;
        //     if (this.pathType === '1') {
        //         callback = await getCurrencyByParam({
        //             typeId: this.typeId,
        //             cnName: name,
        //         });
        //         callback = callback.data.rows[0];
        //     } else {
        //         callback = await getDetailsByParam({
        //             typeId: this.typeId,
        //             cnName: name,
        //         });
        //         callback = callback.data.rows[0];
        //     }
        //     this.itemsForm.cn_name = callback.cn_name;
        //     this.itemsForm.en_name = callback.en_name;
        //     this.itemsForm.isdisplay = callback.isdisplay;
        //     this.itemsForm.way = callback.way;
        //     this.itemsForm.sequence = callback.sequence;
        //     this.itemsForm.typeName = callback.typeName;
        //     this.itemsForm.order_chart = callback.order_chart;
        // },
        // 删除
        deleteListData(val) {
            this.$confirm('确认删除嘛?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    if (this.pathType === '1') {
                        this.deleteCurrencyConfigure(val.id);
                    } else {
                        this.deleteDetailsConfigure(val.id);
                    }
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消',
                    });
                });
        },
        // async deleteCurrencyConfigure(id) {
        //     let ids = id;
        //     let data = await deleteCurrencyConfigure(ids);
        //     if (data.status === 200) {
        //         this.$message.success('删除成功');
        //         this.getCurrencyByParam(this.typeId);
        //     } else {
        //         this.$message.error('删除失败');
        //     }
        // },
        // async deleteDetailsConfigure(id) {
        //     let ids = id;
        //     let data = await deleteDetailsConfigure(ids);
        //     if (data.status === 200) {
        //         this.$message.success('删除成功');
        //         this.getDetailsByParam(this.typeId);
        //     } else {
        //         this.$message.error('删除失败');
        //     }
        // },
        // async updateCurrencyConfigure(itemsform) {
        //     itemsform.sequence = Number(itemsform.sequence);
        //     let data = await updateCurrencyConfigure({
        //         cn_name: itemsform.cn_name,
        //         en_name: itemsform.en_name,
        //         id: this.currentListId,
        //         isdisplay: itemsform.isdisplay,
        //         sequence: itemsform.sequence,
        //         // type: this.typeId,
        //         typeName: itemsform.typeName,
        //         unit: itemsform.unit,
        //         way: itemsform.way,
        //     });
        //     if (data.status === 200) {
        //         this.$message.success('修改成功');
        //         this.getCurrencyByParam(this.typeId);
        //     } else {
        //         this.$message.error('修改失败');
        //     }
        // },
        // async updateDetailsConfigure(itemsform) {
        //     itemsform.sequence = Number(itemsform.sequence);
        //     let data = await updateDetailsConfigure({
        //         cn_name: itemsform.cn_name,
        //         en_name: itemsform.en_name,
        //         id: this.currentListId,
        //         isdisplay: itemsform.isdisplay,
        //         sequence: itemsform.sequence,
        //         order_chart: itemsform.order_chart,
        //         // type: this.typeId,
        //         typeName: itemsform.typeName,
        //         unit: itemsform.unit,
        //         way: itemsform.way,
        //     });
        //     if (data.status === 200) {
        //         this.$message.success('修改成功');
        //         this.getDetailsByParam(this.typeId);
        //     } else {
        //         this.$message.error('修改失败');
        //     }
        // },
        // async insertCurrencyConfigure(itemsform) {
        //     itemsform.sequence = Number(itemsform.sequence);
        //     let data = await insertCurrencyConfigure({
        //         cn_name: itemsform.cn_name,
        //         en_name: itemsform.en_name,
        //         isdisplay: itemsform.isdisplay,
        //         sequence: itemsform.sequence,
        //         unit: itemsform.unit,
        //         type: this.typeId,
        //         way: itemsform.way,
        //     });
        //     if (data.status === 200) {
        //         if (data.data.code === '000') {
        //             this.$message.warning('已存在同名称数据');
        //         } else {
        //             this.$message.success('新增成功');
        //         }
        //         this.getCurrencyByParam(this.typeId);
        //     } else {
        //         this.$message.error('新增失败');
        //     }
        // },
        // async insertDetailsConfigure(itemsform) {
        //     itemsform.sequence = Number(itemsform.sequence);
        //     let data = await insertDetailsConfigure({
        //         cn_name: itemsform.cn_name,
        //         en_name: itemsform.en_name,
        //         isdisplay: itemsform.isdisplay,
        //         sequence: itemsform.sequence,
        //         unit: itemsform.unit,
        //         order_chart: itemsform.order_chart,
        //         type: this.typeId,
        //         way: itemsform.way,
        //     });
        //     if (data.status === 200) {
        //         if (data.data.code === '000') {
        //             this.$message.warning('已存在同名称数据');
        //         } else {
        //             this.$message.success('新增成功');
        //         }
        //         this.getDetailsByParam(this.typeId);
        //     } else {
        //         this.$message.error('新增失败');
        //     }
        // },
        seleType(typeval) {
            this.typeName = typeval.name;
            this.typeId = typeval.dic_id;
            console.log('typeName', this.typeName);
            console.log('typeid', this.typeId);
            console.log('val', this.typeVal);

            if (this.pathType === '1') {
                this.getCurrencyByParam(typeval.dic_id);
            } else {
                this.getDetailsByParam(typeval.dic_id);
            }
        },
        // async queryMeteType() {
        //     await queryMeteType().then(res => {
        //         this.groundTypeData = res.data;
        //         this.frsitSele = res.data[0].name;
        //         this.firstTableId = res.data[0].dic_id;
        //         if (this.pathType === '1') {
        //             this.getCurrencyByParam(this.firstTableId);
        //         } else {
        //             this.getDetailsByParam(this.firstTableId);
        //             this.isAlterForm = true;
        //             this.tableHeader[7] = {
        //                 label: '折线轴',
        //                 value: 'order_chart',
        //                 width: '100',
        //                 minWidth: '100',
        //             };
        //         }
        //         this.typeVal = this.frsitSele;
        //     });
        // },

        // async getCurrencyByParam(id, name) {
        //     await getCurrencyByParam({
        //         cnName: name,
        //         currentPage: this.currentPage,
        //         pageSize: this.pageSize,
        //         typeId: id,
        //     }).then(res => {
        //         // let isdisplay = [];
        //         // let num = 0;
        //         // let rows = [];
        //         // rows.cname = res.data.rows.cn_name;
        //         // rows.ename = res.data.rows.en_name;
        //         // rows.is_show = res.data.rows.isdisplay;
        //         // rows.show_type = res.data.rows.way;
        //         // rows.show_num = res.data.rows.sequence;
        //         this.tableData.rows = res.data.rows;
        //         this.tableData.total = res.data.total;
        //         this.tableData.page = res.data.page;

        //         // res.data.rows.map(item => {
        //         //     if (item.isdisplay === true) {
        //         //         isdisplay.push('是');
        //         //     } else {
        //         //         isdisplay.push('否');
        //         //     }
        //         //     return isdisplay;
        //         // });
        //         // this.tableData.rows.map(item => {
        //         //     item.isdisplay = isdisplay[num];
        //         //     num += 1;
        //         //     return true;
        //         // });

        //         this.tableData.rows.map(item => {
        //             if (item.sequence === 0 || item.sequence === null) {
        //                 item.sequence = '--';
        //             }
        //             if (item.unit === null || item.unit === '') {
        //                 item.unit = '--';
        //             }
        //             if (item.way === '') {
        //                 item.way = '--';
        //             }
        //             if (item.isdisplay === false) {
        //                 item.isdisplay = '否';
        //             } else {
        //                 item.isdisplay = '是';
        //             }
        //             return true;
        //         });
        //     });
        // },
        // async getDetailsByParam(id, name) {
        //     await getDetailsByParam({
        //         cnName: name,
        //         currentPage: this.currentPage,
        //         pageSize: this.pageSize,
        //         typeId: id,
        //     }).then(res => {
        //         // let isdisplay = [];
        //         // let num = 0;
        //         this.tableData.rows = res.data.rows;
        //         this.tableData.total = res.data.total;
        //         this.tableData.page = res.data.page;
        //         // res.data.rows.map(item => {
        //         //     if (item.isdisplay === true) {
        //         //         isdisplay.push('是');
        //         //     } else {
        //         //         isdisplay.push('否');
        //         //     }
        //         //     return isdisplay;
        //         // });
        //         // this.tableData.rows.map(item => {
        //         //     item.isdisplay = isdisplay[num];
        //         //     num += 1;
        //         //     return true;
        //         // });
        //         this.tableData.rows.map(item => {
        //             if (item.sequence === 0 || item.sequence === null) {
        //                 item.sequence = '--';
        //             }
        //             if (item.unit === null || item.unit === '') {
        //                 item.unit = '--';
        //             }
        //             if (item.way === '') {
        //                 item.way = '--';
        //             }
        //             if (item.isdisplay === false) {
        //                 item.isdisplay = '否';
        //             } else {
        //                 item.isdisplay = '是';
        //             }
        //             return true;
        //         });
        //     });
        // },
        async getNameDataMeth(val) {
            console.log('val', val);
            if (this.pathType === '1') {
                this.getCurrencyByParam(this.typeId, val);
            } else {
                this.getDetailsByParam(this.typeId, val);
            }
        },

        handleSizeChange(size) {
            this.currentPage = 1;
            this.pageSize = size;
            this.getNameDataMeth();
        },
        // 翻页
        handleCurrentChange(page) {
            this.currentPage = page;
            this.getNameDataMeth();
        },

        indexMethod(index) {
            return index + 1;
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
    },
};
</script>
<style lang="scss">
.echartsDataManager {
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
            .newsSpeciBtn {
                position: absolute;
                right: -40px;
                top: 8px;
                width: 30px;
                height: 30px;
                padding: 0;
            }
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
        .list_pagination {
            display: flex;
            // margin-top: 10px;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            bottom: 20px;
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
