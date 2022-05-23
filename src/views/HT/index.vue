<template>
    <div class="managerSystem">
        <div class="menuList">
            <div class="topTitle"><span class="titleContent">后台管理系统</span></div>
            <div class="treeList">
                <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group> -->
                <el-menu
                    default-active="1-4-1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse"
                    background-color="#2486b9"
                    text-color="#fff"
                    router="true"
                >
                    <el-menu-item index="/homeHT">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">权限管理</span>
                        </template>
                        <el-menu-item-group>
                            <!-- <span slot="title">分组一</span> -->
                            <el-menu-item index="roleData">
                                <!-- <router-link to="/role2">角色分配</router-link> -->
                                角色分配
                            </el-menu-item>
                            <el-menu-item index="roleManager">
                                <!-- <router-link to="/roleManager">角色管理</router-link> -->
                                角色管理
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <!-- <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item> -->
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">图表数据</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item
                                index="1"
                                :route="{ path: '/echartsDataManager', query: { type: '1' } }"
                            >
                                数据表1
                            </el-menu-item>
                            <el-menu-item
                                index="2"
                                :route="{ path: '/echartsDataManager', query: { type: '2' } }"
                            >
                                数据表2
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
        <div class="managerContent">
            <div class="headTop">
                <div class="avatar">
                    <div>
                        <el-dropdown>
                            <el-avatar
                                class="el-dropdown-link"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                            ></el-avatar>
                            <!-- <span class="el-dropdown-link">
                                下拉菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span> -->
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>帐号信息: admin</el-dropdown-item>
                                <el-dropdown-item>
                                    <router-link
                                        to="/loginHT"
                                        @click.native="$store.state.idCardHT = false"
                                    >
                                        登出
                                    </router-link>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <div class="manageMain">
                <div class="manageWrap ownScroll"><router-view /></div>
            </div>
        </div>
    </div>
</template>
<script>
// import { test } from 'S/HT.js';
export default {
    name: 'ManagerSystem',
    data() {
        return {
            isCollapse: false,
        };
    },
    mounted() {
        if (this.$store.state.idCardHT === true) {
            return;
        } else {
            this.$router.push({ path: '/loginHT' });
        }
    },
    watch: {
        '$store.state.idCardHT': function (newVal) {
            if (newVal === true) {
                return;
            } else {
                this.$router.push({ path: '/loginHT' });
            }
        },
    },
    methods: {
        out() {
            this.$store.state.idCardHT = false;
            this.$router.push({ path: '/loginHT' });
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>
<style lang="scss" scoped>
.managerSystem {
    display: flex;
    flex-direction: row;
    .menuList {
        flex: 1.5;
        height: 100vh;
        background-color: #2486b9;
        .topTitle {
            height: 80px;
            padding: 10px 0;
            .titleContent {
                font-size: 42px;
                color: #fff;
            }
        }
        .treeList {
        }
    }
    .managerContent {
        flex: 8;
        height: 100vh;
        background-color: #e6e6e6;
        .headTop {
            height: 80px;
            background-color: #619ac3;
        }
        .manageMain {
            padding: 50px 40px;
            .manageWrap {
                overflow: auto;
                box-sizing: border-box;
                height: calc(100vh - 180px);
                background-color: #fff;
                padding: 20px;
                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }
    }
}
</style>
<style lang="scss">
.managerSystem {
    .menuList {
        .treeList {
            .el-menu-vertical-demo:not(.el-menu--collapse) {
                width: 100%;
                min-height: 800px;
            }
            .el-submenu__title {
                font-size: 28px;
            }
            .el-menu-item {
                font-size: 22px;
            }
        }
    }
    .managerContent {
        .headTop {
            .avatar {
                position: absolute;
                right: 50px;
                top: 20px;
                .el-dropdown-link {
                    cursor: pointer;
                    color: #409eff;
                }
                .el-icon-arrow-down {
                    font-size: 12px;
                }
            }
        }
        .managerContent {
            .manageMain {
            }
        }
    }
}
</style>
