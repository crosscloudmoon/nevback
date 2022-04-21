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
                        <router-link to="/aboutEarth" class="menu-button">
                            <span class="menu-label">了解地球</span>
                        </router-link>
                    </li>
                    <!-- <li>
                    <a href="#" class="menu-button menu-drop">
                        <span class="menu-label">About</span>
                    </a>
                    <div class="menu-dropdown menu-dropdown1">
                        <ul class="menu-sub">
                            <li>
                                <a href="#" class="menu-subbutton">
                                    <span class="menu-label">Who We Are</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="menu-subbutton">
                                    <span class="menu-label">What We Do</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="menu-subbutton">
                                    <span class="menu-label">Our Goals</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="menu-subbutton">
                                    <span class="menu-label">Our Awards</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="menu-subbutton">
                                    <span class="menu-label">Our Team</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li> -->
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
                                        <span class="menu-label">各国经济可视化</span>
                                        <div class="menu-desc">观察世界各国经济变化</div>
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
                                <li>
                                    <a @click="goDataVisual(3)" class="menu-subbutton">
                                        <span class="menu-label">中国。。。</span>
                                        <div class="menu-desc">。。。</div>
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
                    <!-- <li>
                        <a href="#" class="menu-button menu-drop">
                            <span class="menu-label">Portfolio</span>
                        </a>
                        <div class="menu-dropdown menu-dropdown3">
                            <div class="menu-row">
                                <h1>HTML</h1>
                                <ul class="menu-sub">
                                    <li>
                                        <router-link to="/test" class="menu-subbutton">
                                            <span class="menu-label">Pellentesq</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Et rhoncus</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Ligula eget</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Turpis quis</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Vivamus ut</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu-row">
                                <h1>Flash</h1>
                                <ul class="menu-sub">
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Commodo</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Pulvinar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Curabitur</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Aliquam</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Vulputate</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu-row">
                                <h1>Mobile</h1>
                                <ul class="menu-sub">
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Lorem ipsum</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Dolor amet</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Consectetur</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Adipiscing</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Duis ut nibh</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li> -->
                    <!-- <li>
                    <a href="#" class="menu-button menu-drop">
                        <span class="menu-label">Clients</span>
                    </a>
                    <div class="menu-dropdown menu-dropdown4">
                        <div class="menu-row">
                            <div>
                                <h1>America</h1>
                                <ul class="menu-sub">
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Lorem ipsum</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Dolor amet</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Consectetur</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h1>Africa</h1>
                                <ul class="menu-sub">
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Pulvinar in</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Consectet</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Aliquam eu</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="menu-row">
                            <div>
                                <h1>Europe</h1>
                                <ul class="menu-sub">
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Pellentesq</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Et rhoncus</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Ligula eget</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h1>Asia</h1>
                                <ul class="menu-sub">
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Turpis quis</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Vivamus ut</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-subbutton">
                                            <span class="menu-label">Commodo</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li> -->
                    <li>
                        <a href="#" class="menu-button menu-drop">
                            <span class="menu-label">地图</span>
                        </a>
                        <div class="menu-dropdown menu-dropdown5">
                            <ul class="menu-sub">
                                <li>
                                    <a @click="goMapData(0)" class="menu-subbutton">
                                        <span class="menu-label">各省GDP</span>
                                        <span class="menu-desc">- Lorem ipsum dolor sit am</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="menu-subbutton">
                                        <span class="menu-label">Et rhonc</span>
                                        <span class="menu-desc">- Lorem ipsum dolor sit am</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="menu-subbutton">
                                        <span class="menu-label">Ligulaeg</span>
                                        <span class="menu-desc">- Lorem ipsum dolor sit am</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="menu-subbutton">
                                        <span class="menu-label">Turpisqu</span>
                                        <span class="menu-desc">- Lorem ipsum dolor sit am</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-right">
                        <el-link @click="loadingOpenObserve" class="menu-button">
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
                        <el-button
                            @click="loadingOpen"
                            v-loading.fullscreen.lock="fullscreenLoading"
                            class="loginBtn hvr-fade"
                        >
                            <span class="loginTitle">登录</span>
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
        goDataVisual(type) {
            this.$router.push({ path: '/dataVisualization', query: { type: type } });
        },
        goMapData(type) {
            this.$router.push({ path: '/mapData', query: { type: type } });
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
            this.$router.push({ path: '/managerSys' });
        },
        loadingOpen() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                this.fullscreenLoading = false;
            }, 1000);
        },
        loadingOpenObserve() {
            // Loading.service({
            //     fullscreen: true,
            // });
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)',
            });
            setTimeout(() => {
                loading.close();
                window.open('http://36.112.11.166:8083/CP/satellite/#/', '_self');
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
