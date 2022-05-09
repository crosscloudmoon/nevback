<template>
    <div class="headerIndex">
        <div class="headerWrap">
            <div
                id="menu"
                :class="{ backgroundChange: isOnBgStyle }"
                :style="{ transition: $route.path === '/' ? 'all 0.5s ease' : 'null' }"
            >
                <ul class="menu-top">
                    <li>
                        <router-link to="/" class="menu-button">
                            <span class="menu-label">首页</span>
                        </router-link>
                    </li>
                    <li>
                        <a @click="goDataVisual(0, 'earth')" class="menu-button">
                            <span class="menu-label">了解地球</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="menu-button menu-drop">
                            <span class="menu-label">数据可视化</span>
                        </a>
                        <div class="menu-dropdown menu-dropdown2">
                            <ul class="menu-sub">
                                <li>
                                    <a @click="goDataVisual(0)" class="menu-subbutton">
                                        <span class="menu-label">世界人口可视化</span>
                                        <div class="menu-desc">直观了解各国人口改变</div>
                                    </a>
                                </li>
                                <li>
                                    <a @click="goDataVisual(1)" class="menu-subbutton">
                                        <span class="menu-label">自然灾害可视化</span>
                                        <div class="menu-desc">了解自然灾害造成的人口死亡</div>
                                    </a>
                                </li>
                                <li>
                                    <a @click="goDataVisual(2)" class="menu-subbutton">
                                        <span class="menu-label">中国男女比例可视化</span>
                                        <div class="menu-desc">了解我国男女比例问题</div>
                                    </a>
                                </li>
                                <li>
                                    <a @click="goDataVisual(3)" class="menu-subbutton">
                                        <span class="menu-label">世界人口身高可视化</span>
                                        <div class="menu-desc">人的身高</div>
                                    </a>
                                </li>
                                <!-- <li>
                                    <a href="#" class="menu-subbutton">
                                        <span class="menu-label">E-commerce</span>
                                        <div class="menu-desc">Lorem ipsum dolor</div>
                                    </a>
                                </li> -->
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="#" class="menu-button menu-drop">
                            <span class="menu-label">MAP</span>
                        </a>
                        <div class="menu-dropdown menu-dropdown5">
                            <ul class="menu-sub">
                                <li>
                                    <a @click="goDataVisual(0, 'map')" class="menu-subbutton">
                                        <span class="menu-label">GDP</span>
                                        <span class="menu-desc">各国经济变化</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="goDataVisual(1, 'map')" class="menu-subbutton">
                                        <span class="menu-label">市区贯通量</span>
                                        <span class="menu-desc">市区贯通量图表化</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="goDataVisual(2, 'map')" class="menu-subbutton">
                                        <span class="menu-label">汽车销量</span>
                                        <span class="menu-desc">各省汽车增长变化</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="goDataVisual(3, 'map')" class="menu-subbutton">
                                        <span class="menu-label">Turpisqu</span>
                                        <span class="menu-desc">- Lorem ipsum dolor sit am</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-right">
                        <el-link @click="goDataVisual(null, 'satellite')" class="menu-button">
                            <span class="menu-label">卫星观测</span>
                        </el-link>
                    </li>
                    <li class="menu-right">
                        <a href="#" class="menu-button menu-drop">
                            <span class="menu-label">关于</span>
                        </a>
                        <div class="menu-dropdown menu-dropdown7">
                            <h1 style="font-size: 28px">快速了解</h1>
                            <p class="aboutUsContent">
                                <span class="emp">本网站存在为</span>
                                介绍了解数字地球是什么技术，应用的范围，应用数字地球技术为本站的拓展模块（卫星观测），本站主要核心为以数字地球上的数字为基础使用可视化图表等技术的的数据可视化展示，在这有庞大信息量的当下，让用户简单清晰了解到数据的内容。
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="menu-right btnRight">
                    <div @click="goHT">
                        <el-button
                            @click="loadingOpen"
                            v-loading.fullscreen.lock="fullscreenLoading"
                            class="loginBtn hvr-fade"
                        >
                            <span class="loginTitle">后台系统</span>
                        </el-button>
                    </div>
                    <div @click="goLogin">
                        <div v-show="$store.state.idCard">
                            <el-dropdown style="position: absolute; top: 0px">
                                <el-avatar
                                    class="el-dropdown-link"
                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                ></el-avatar>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>
                                        用户：{{ $store.state.loginStatus }}
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <router-link to="/login">登出</router-link>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <el-button
                            @click="loadingOpen"
                            v-loading.fullscreen.lock="fullscreenLoading"
                            class="loginBtn hvr-fade"
                            v-if="$store.state.idCard === false"
                        >
                            <span class="loginTitle">{{ $store.state.loginStatus }}</span>
                        </el-button>
                    </div>
                    <!-- <el-button @click="loadingOpen" v-loading.fullscreen.lock="fullscreenLoading">
                        test
                    </el-button> -->
                </div>
                <!-- <el-link
                    @click="loadingOpen"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    style="color: white"
                    href="http://36.112.11.166:8083/CP/satellite/#/"
                >
                    test222
                </el-link> -->
            </div>
        </div>
    </div>
</template>

<script>
import { Loading } from 'element-ui';
export default {
    name: 'Header',
    data() {
        return {
            fullscreenLoading: false,
            scrollLenght: '',
            isOnBgStyle: false,
            screenHeight: document.body.clientHeight, // 屏幕尺寸
        };
    },
    mounted() {
        console.log('path', this.$route);
        window.addEventListener('scroll', this.headerChangeBg);
        // 获取屏幕高度
        const that = this;
        window.onresize = () => {
            return (() => {
                window.screenHeight = document.body.clientHeight;
                that.screenHeight = window.screenHeight;
            })();
        };
        this.screenHeight = this.screenHeight * 0.87;
        if (this.$route.path === '/') {
            // console.log('windowsHeight', this.screenHeight);
        } else {
            this.isOnBgStyle = true;
            // this.$('.menu').css('transition', 'null');
        }
    },
    watch: {
        $route: function (newVal, oldVal) {
            console.log('newval', newVal);
            if (newVal.path !== '/') {
                this.isOnBgStyle = true;
                // if (!this.$store.state.userCard) {
                //     this.$router.push({ path: '/login' });
                // }
            } else if (newVal.path === '/') {
                this.isOnBgStyle = false;
            }
        },
    },
    methods: {
        goDataVisual(type, moudle) {
            if (this.$store.state.userCard === 'vip') {
                if (moudle === 'map') {
                    this.$router.push({ path: '/mapData', query: { type: type } });
                } else if (moudle === 'satellite') {
                    const loading = this.$loading({
                        lock: true,
                        text: 'Loading',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)',
                    });
                    setTimeout(() => {
                        loading.close();
                        window.open('http://36.112.11.166:8083/satellite/#/', '_blank');
                    }, 1000);
                } else if (moudle === 'earth') {
                    this.$router.push({ path: '/aboutEarth' });
                } else {
                    this.$router.push({ path: '/dataVisualization', query: { type: type } });
                }
            } else if (this.$store.state.idCard === false) {
                this.$message.warning('请登录后浏览');
            } else {
                moudle === 'earth'
                    ? this.$router.push({ path: '/aboutEarth' })
                    : this.$message.error('用户未有权限浏览');
            }
        },

        // 动态控制header背景
        headerChangeBg() {
            if (this.$route.path === '/') {
                this.scrollLenght = document.documentElement.scrollTop || document.body.scrollTop;
                if (this.scrollLenght >= this.screenHeight) {
                    this.isOnBgStyle = true;
                } else {
                    this.isOnBgStyle = false;
                }
                // console.log(this.scroll);
            } else {
                this.isOnBgStyle = true;
            }
        },
        goLogin() {
            this.$router.push({ path: '/login', query: 'magiss' });
        },
        goHT() {
            let router = this.$router.resolve({ path: '/managerSys' });
            window.open(router.href, '_blank');
        },
        loadingOpen() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                this.fullscreenLoading = false;
            }, 1000);
        },
    },
};
</script>

<style lang="scss" scope>
.headerIndex {
    @import './theme/css/modern-menu.css';
    width: 100%;
    .headerWrap {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 100;

        .backgroundChange {
            transition: all 0.5s ease;
            // transition: null;
            background: #404040;
        }

        #menu {
            position: relative;
            .btnRight {
                position: absolute;
                right: 60px;
                top: 5px;
                div {
                    display: inline-block;
                }
                .loginBtn {
                    // width: 60px;
                    margin-right: 30px;
                    font-size: 16px;
                    background-color: transparent;
                    color: #fff;
                    border: 0;
                    transition: all 0.3s;
                    &:hover {
                        transform: scale(1.2);
                        background-color: #aaa;
                    }
                }
                .hvr-fade:hover,
                .hvr-fade:focus,
                .hvr-fade:active {
                    // background-color: #aaa;
                }
            }
        }
    }
}
</style>
