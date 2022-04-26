<template>
    <div class="dialogStyle">
        <el-dialog
            title="提示框"
            :visible.sync="centerDialogVisible"
            width="20%"
            :close-on-press-escape="false"
            :close-on-click-modal="false"
            :destroy-on-close="true"
        >
            <span class="conentStyle">{{ contentText }}</span>
            <span slot="footer" class="dialog-footer" style="text-align:right">
                <el-button @click="cancelEvent">取 消</el-button>
                <el-button type="primary" @click="confirmEvent">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'dialogs',
    props: {
        parentValue: {
            type: Object,
        },
    },
    components: {},
    data() {
        return {
            centerDialogVisible: false,
            contentText: '',
            contentType: '1',
            contentItem: [],
        };
    },
    created() {
        // this.centerDialogVisible = true;
        console.log(this.parentValue);
        // if (this.parentValue.text) {
        //     this.contentText = this.parentValue.text;
        // }
    },
    // mounted() {},
    methods: {
        confirmEvent() {
            if (this.contentType === '1') {
                // 通过
                console.log(this.contentItem);
                if (this.contentItem) {
                    this.$parent.passDataMethod(this.contentItem);
                } else {
                    console.log('传值没有过来');
                }
            } else if (this.contentType === '5') {
                console.log('asdfasdfasfasdf');
                // 拒绝
                // if (this.contentItem) {
                //     this.$parent.passDataMethod(this.contentItem);
                // } else {
                //     console.log('传值没有过来');
                // }
            }
            this.centerDialogVisible = false;
            this.$emit('toParentValue', false);
        },
        cancelEvent() {
            this.$emit('toParentValue', false);
            this.centerDialogVisible = false;
        },
    },
    watch: {
        parentValue: {
            handler(val) {
                this.contentText = val.text;
                this.centerDialogVisible = true;
                this.contentType = val.type;
                this.contentItem = val.contentItem;
            },
            deep: true, // 深度监听
            immediate: true, // 初次监听即执行
        },
    },
};
</script>
<style lang="scss">
.dialogStyle {
    .conentStyle {
        font-size: 16px;
    }
    .el-dialog__body {
        text-align: left;
    }
    .el-dialog__header {
        text-align: left;
    }
}
</style>
