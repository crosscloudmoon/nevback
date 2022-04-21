<template>
    <div class="managerSystem">ssss</div>
</template>
<script>
export default {
    name: 'ManagerSystem',
    components: {},
    data() {
        return {};
    },
    mounted() {
        if (this.$store.state.idCard === true) {
            return;
        } else {
            // this.$router.push({ path: '/loginHT' });
        }
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
.managerSystem {
}
</style>
