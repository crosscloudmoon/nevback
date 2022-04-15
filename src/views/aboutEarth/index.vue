<template>
    <div class="earthIndex">
        <div v-show="isShowMain" class="earthContent">
            <!-- Banner -->
            <section id="banner">
              <el-link class="el-icon-back goHome" @click="goHome">返回</el-link>
                <div class="content">
                    <header>
                        <h2>我们是地球的居民</h2>
                        <p>
                            但你真的了解地球吗？
                            <br />
                            下面你将知道地球的种种！
                        </p>
                    </header>
                    <span class="image"><img src="images/pic01.jpg" alt="" /></span>
                </div>
                <a href="#one" class="goto-next scrolly">Next</a>
            </section>

            <!-- One -->
            <section id="one" class="spotlight style1 bottom">
              <div class="earthimg1"></div>
                <span class="image fit main"><img src="images/pic02.jpg" alt="" /></span>
                <div class="content">
                    <div class="container"  style="width: 70%" >
                        <div class="row" style="width: 100%" >
                            <div class="col-4 col-12-medium">
                                <header>
                                    <h2>地球的配置</h2>
                                    <p>
                                        Nascetur eu nibh vestibulum amet gravida nascetur praesent
                                    </p>
                                </header>
                            </div>
                            <div class="col-4 col-12-medium" style= 'font-size: 22px; margin-left: 300px;'>
                                <p >
                                    年龄：46亿岁。</br> 公转周期：约365天。 </br>
                                    公转轨道：呈椭圆形。</br>
                                    自转周期：太阳日为24小时。</br>
                                    自转方向：自西向东。</br>
                                    卫星（天然）：1颗（月球）
                                </p>
                            </div>
                            <!-- <div class="col-4 col-12-medium">
                                <p>
                                    Morbi enim nascetur et placerat lorem sed iaculis neque ante
                                    adipiscing adipiscing metus massa. Blandit orci porttitor
                                    semper. Arcu phasellus tortor enim mi mi nisi praesent
                                    adipiscing. Integer mi sed nascetur cep aliquet augue varius
                                    tempus. Feugiat lorem ipsum dolor nullam.
                                </p>
                            </div> -->
                        </div>
                    </div>
                </div>
                <a href="#two" class="goto-next scrolly">Next</a>
            </section>

            <!-- Two -->
            <section id="two" class="spotlight style2 right">
              <div class="earthimg2"></div>

                <span class="image fit main"><img src="images/pic03.jpg" alt="" /></span>
                <div class="content">
                    <header>
                        <h2>地球的面积</h2>
                        <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
                    </header>
                    <p>
                        地球总面积约为5.10072亿平方千米，其中约29.2%（1.4894亿平方千米）是陆地，其余70.8%（3.61132亿平方千米）是水。
                    </p>
                    <ul class="actions">
                        <li><a href="#" class="button">Learn More</a></li>
                    </ul>
                </div>
                <a href="#three" class="goto-next scrolly">Next</a>
            </section>

            <!-- Three -->
            <section id="three" class="spotlight style3 left">
              <div class="earthimg3"></div>

                <span class="image fit main bottom"><img src="images/pic04.jpg" alt="" /></span>
                <div class="content">
                    <header>
                        <h2>地球圈层</h2>
                        <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
                    </header>
                    <p>
                        地球圈层分为地球外圈和地球内圈两大部分。地球外圈可进一步划分为四个基本圈层，即大气圈、水圈、生物圈和岩石圈；地球内圈可进一步划分为三个基本圈层，即地幔圈、外核液体圈和固体内核圈。
                    </p>
                    <ul class="actions">
                        <li><a href="#" class="button">Learn More</a></li>
                    </ul>
                </div>
                <a href="#four" class="goto-next scrolly">Next</a>
            </section>
            <!-- Six -->
            <section id="six" class="spotlight style2 right">
              <div class="earthimg4"></div>

                <span class="image fit main"><img src="images/pic03.jpg" alt="" /></span>
                <div class="content">
                    <header>
                        <h2>陆地与海洋</h2>
                        <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
                    </header>
                    <p>
                        尽管地球70%的面积被海洋覆盖，但我们目前只探索了其中的5%。
                    </p>
                    <ul class="actions">
                        <li><a href="#" class="button">Learn More</a></li>
                    </ul>
                </div>
                <a href="#three" class="goto-next scrolly">Next</a>
            </section>
            <!-- Four -->
            <section id="four" class="wrapper style1 special fade-up">
                <div class="container">
                    <header class="major">
                        <h2>More about earth</h2>
                        <p>
                            这里有更多关于地球的知识
                        </p>
                    </header>
                    <div class="box alt">
                        <div class="row gtr-uniform">
                            <section class="col-4 col-6-medium col-12-xsmall">
                                <span class="icon solid alt major fa-chart-area"></span>
                                <h3>地球表面</h3>
                                <p>
                                    据估计，地球表面80%以上的地区起源于火山岩。
                                </p>
                            </section>
                            <section class="col-4 col-6-medium col-12-xsmall">
                                <span class="icon solid alt major fa-comment"></span>
                                <h3>世界最低点</h3>
                                <p>
                                    马里亚纳海沟：挑战者的深渊——海平面下11034米或36201英尺。
                                </p>
                            </section>
                            <section class="col-4 col-6-medium col-12-xsmall">
                                <span class="icon solid alt major fa-flask"></span>
                                <h3>最高温度</h3>
                                <p>
                                   地球上记载的最高气温为56.7摄氏度
                                </p>
                            </section>
                            <section class="col-4 col-6-medium col-12-xsmall">
                                <span class="icon solid alt major fa-paper-plane"></span>
                                <h3>最低温度</h3>
                                <p>
                                    最冷的温度：华氏零下128.6度
                                </p>
                            </section>
                            <section class="col-4 col-6-medium col-12-xsmall">
                                <span class="icon solid alt major fa-file"></span>
                                <h3>世界最高点</h3>
                                <p>
                                    珠穆朗玛峰 ，世界上最著名的山峰之一。距地心的距离为6381.95公里。
                                </p>
                            </section>
                            <section class="col-4 col-6-medium col-12-xsmall">
                                <span class="icon solid alt major fa-lock"></span>
                                <h3>与月球的距离</h3>
                                <p>
                                     地球到月球的距离貌似很短，但是已经可以塞下太阳系的所有星球了。
                                </p>
                            </section>
                        </div>
                    </div>
                    <footer class="major">
                        <ul class="actions special">
                            <li><a href="#" class="button">回到顶部</a></li>
                        </ul>
                    </footer>
                </div>
            </section>

            <!-- Five -->
            <section id="five" class="wrapper style2 special fade">
                <div class="container">
                    <header>
                        <h2>Magna faucibus lorem diam</h2>
                        <p>Ante metus praesent faucibus ante integer id accumsan eleifend</p>
                    </header>
                    <form method="post" action="#" class="cta">
                        <div class="row gtr-uniform gtr-50">
                            <div class="col-8 col-12-xsmall">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email Address"
                                />
                            </div>
                            <div class="col-4 col-12-xsmall">
                                <input type="submit" value="Get Started" class="fit primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        <Loading v-show="isShowLoading" />
    </div>
</template>
<script>
export default {
    name: 'AboutEarth',
    components: {},
    data() {
        return { isShowMain: false, isShowLoading: true };
    },
    mounted() {
        this.loading();
    },
    methods: {
        loading() {
            setTimeout(() => {
                this.isShowMain = true;
                this.isShowLoading = false;
            }, 1000);
        },
        goHome() {
          this.$router.push({ path: '/' });
        },
    },
};
</script>

<style lang="scss" scoped>
@import './theme/css/main.css';
.earthIndex {
    background: #1c1d26;
    body,
    input,
    select,
    textarea {
        color: rgba(255, 255, 255, 0.75);
        font-family: 'Roboto', Helvetica, sans-serif;
        font-size: 15pt;
        font-weight: 100;
        line-height: 1.75em;
    }
    strong,
    b {
        color: #ffffff;
        font-weight: 300;
    }

    em,
    i {
        font-style: italic;
    }

    p {
        margin: 0 0 2em 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #ffffff;
        font-weight: 300;
        line-height: 1em;
        margin: 0 0 1em 0;
    }

    h1 a,
    h2 a,
    h3 a,
    h4 a,
    h5 a,
    h6 a {
        color: inherit;
        border: 0;
    }

    h2 {
        font-size: 2em;
        line-height: 1.5em;
        letter-spacing: -0.025em;
    }

    h3 {
        font-size: 1.35em;
        line-height: 1.5em;
    }

    h4 {
        font-size: 1.1em;
        line-height: 1.5em;
    }

    h5 {
        font-size: 0.9em;
        line-height: 1.5em;
    }

    h6 {
        font-size: 0.7em;
        line-height: 1.5em;
    }

    sub {
        font-size: 0.8em;
        position: relative;
        top: 0.5em;
    }

    sup {
        font-size: 0.8em;
        position: relative;
        top: -0.5em;
    }

    hr {
        border: 0;
        border-bottom: solid 1px rgba(255, 255, 255, 0.3);
        margin: 3em 0;
    }

    hr.major {
        margin: 4em 0;
    }

    blockquote {
        border-left: solid 4px rgba(255, 255, 255, 0.3);
        font-style: italic;
        margin: 0 0 2em 0;
        padding: 0.5em 0 0.5em 2em;
    }

    code {
        background: rgba(255, 255, 255, 0.075);
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
        margin: 0 0.25em;
        padding: 0.25em 0.65em;
    }

    pre {
        -webkit-overflow-scrolling: touch;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
        margin: 0 0 2em 0;
    }

    pre code {
        display: block;
        line-height: 1.75em;
        padding: 1em 1.5em;
        overflow-x: auto;
    }
    a {
        -moz-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
        -webkit-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
        -ms-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
        transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
        border-bottom: dotted 1px;
        color: #e44c65;
        text-decoration: none;
    }

    a:hover {
        color: #e44c65 !important;
        border-bottom-color: transparent;
    }
    ul li {
        padding-left: 0.5em;
    }
    input[type='text']:focus,
    input[type='password']:focus,
    input[type='email']:focus,
    select:focus,
    textarea:focus {
        border-color: #e44c65;
    }
    .earthContent {
      #banner {
        .goHome {
          position: fixed;
          top: 50px;
          left: 100px;
          font-size: 20px;
          z-index: 9999;
          transition: all .7s ease;
          &:hover {
          transition: all .7s ease;
            transform: scale(1.5);
          }
        }
      }
      #one {
        position: relative;
        .earthimg1 {
          background-image: url('./theme/images/earth1.jpeg');
          background-size: 100%;
          position: absolute;
          top: 10%;
          width: 60%;
          height: 50%;
          transform: translateX(-50%);
          left: 50%;
        }
      }
      #two {
        position: relative;
        .earthimg2 {
          background-image: url('./theme/images/earth2.png');
          background-size: 100%;
          position: absolute;
          top: 10%;
          width: 60%;
          height: 80%;
          transform: translateX(-50%);
          left: 40%;
        }
      }
      #three {
        position: relative;
        .earthimg3 {
          background-image: url('./theme/images/earth3.png');
          background-size: 100%;
          position: absolute;
          top: 20%;
          width: 60%;
          height: 50%;
          left: 30%;
        }
      }
      #six {
        position: relative;
        .earthimg4 {
          background-image: url('./theme/images/earth4.jpeg');
          background-size: 100%;
          position: absolute;
          top: 10%;
          width: 40%;
          height: 80%;
          left: 20%;
        }
      }
    }
}
</style>
