<template>
    <div class="homeIndex">
        <el-carousel :interval="5000" arrow="hover" :autoplay="true">
            <el-carousel-item v-for="item in 5" :key="item"></el-carousel-item>
        </el-carousel>

        <div class="mainContent">
            <div class="mainWrap">
                <!-- <div class="blocks hvr-bob">Add to Basket</div> -->
                <div class="sidebar-modal">
                    <div class="sidebar-modal-inner">
                        <div class="sidebar-header">
                            <div class="sidebar-logo">
                                <img src="./theme/picture/logo2.png" alt="Image" />
                            </div>
                            <span class="close-btn sidebar-modal-close-btn">
                                <i class="bx bx-x"></i>
                            </span>
                        </div>
                        <div class="sidebar-about">
                            <div class="title">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut tur incidunt ut labore et dolore
                                    magnam aliquam quaerat voluptatem.
                                </p>
                            </div>
                        </div>
                        <div class="contact-us">
                            <h2>Contact Us</h2>
                            <ul>
                                <li>
                                    <i class="bx bx-current-location"></i>
                                    Address: 2659 Autostrad St, London, UK
                                </li>
                                <li>
                                    <i class="bx bx-mail-send"></i>
                                    <a
                                        href="email-protection.html#95fdf0f9f9fad5e6e5e7fcfabbf6faf8"
                                    >
                                        <span
                                            class="__cf_email__"
                                            data-cfemail="84ece1e8e8ebc4f7f4f6edebaae7ebe9"
                                        >
                                            [email&#160;protected]
                                        </span>
                                    </a>
                                    <a href="#">Skype: example</a>
                                </li>
                                <li>
                                    <i class="bx bx-phone-call"></i>
                                    <a href="tel:+215-123-4567">+215 - 123 - 4567</a>
                                    <a href="tel:+215-123-8587">+215 - 123 - 8587</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar-instagram-feed">
                            <h2>Instagram</h2>
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="./theme/picture/instagram1.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./theme/picture/instagram2.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./theme/picture/instagram3.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./theme/picture/instagram4.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./theme/picture/instagram5.jpg" alt="image" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./theme/picture/instagram6.jpg" alt="image" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar-follow-us">
                            <h2>Sidebar Follow</h2>
                            <ul class="social-wrap">
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx bxl-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx bxl-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx bxl-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx bxl-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="home-slider">
                    <div class="slider-area owl-carousel owl-theme" data-slider-id="1">
                        <div class="slider-item item-bg1">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="container-fluid">
                                        <div class="container-max-2">
                                            <div class="slider-content">
                                                <span>A Super Experiences Over</span>
                                                <h1>Architecture Is The Reaching The Truths</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut tur incidunt ut labore et dolore
                                                    magnam aliquam quaerat voluptatem.
                                                </p>
                                                <div class="slider-btn">
                                                    <a href="#" class="get-btn">Get Started</a>
                                                    <a href="#" class="learn-btn">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="social-link">
                                <ul>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#">Youtube</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="slider-item item-bg2">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="container-fluid">
                                        <div class="container-max-2">
                                            <div class="slider-content">
                                                <span>A Super Experiences Over</span>
                                                <h1>
                                                    The Loftier The Building Must The Foundation
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut tur incidunt ut labore et dolore
                                                    magnam aliquam quaerat voluptatem.
                                                </p>
                                                <div class="slider-btn">
                                                    <a href="#" class="get-btn">Get Started</a>
                                                    <a href="#" class="learn-btn">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="social-link">
                                <ul>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#">Youtube</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="slider-item item-bg3">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="container-fluid">
                                        <div class="container-max-2">
                                            <div class="slider-content">
                                                <span>A Super Experiences Over</span>
                                                <h1>Powerful & Simple Architecture Solutions</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut tur incidunt ut labore et dolore
                                                    magnam aliquam quaerat voluptatem.
                                                </p>
                                                <div class="slider-btn">
                                                    <a href="#" class="get-btn">Get Started</a>
                                                    <a href="#" class="learn-btn">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="social-link">
                                <ul>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#">Youtube</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="thumbs-wrap">
                        <div class="owl-thumbs home-slider-thumb" data-slider-id="1">
                            <div class="owl-thumb-item">
                                <span>01/</span>
                            </div>
                            <div class="owl-thumb-item">
                                <span>02/</span>
                            </div>
                            <div class="owl-thumb-item">
                                <span>03/</span>
                            </div>
                        </div>
                    </div>
                </div>
                <el-link href="#nextContent" class="goNext">
                    <i class="el-icon-arrow-down"></i>
                </el-link>
                <div class="animated bounce infinite">Click Me</div>
                <div class="about-area pt-100 pb-70" id="nextContent">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="about-content">
                                    <div class="section-title">
                                        <span class="sp-before">About Us</span>
                                        <h2>
                                            数字地球是一个以地球坐标为依据的、具有多分辨率的海量数据和多维显示的地球虚拟系统。数字地球看成是“对地球的三维多分辨率表示、它能够放入大量的地理数据”。在接下来对数字地球的直观实例解释中可以发现，戈尔的数字地球学是关于整个地球、全方位的GIS与虚拟现实技术、网络技术相结合的产物。
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut tur incidunt
                                            ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6 col-md-3">
                                            <div class="about-counter">
                                                <h3>计算机科学</h3>
                                                <span>Employees & Staffs</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-md-3">
                                            <div class="about-counter">
                                                <h3>卫星遥感</h3>
                                                <span>Project Completed</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-md-3">
                                            <div class="about-counter">
                                                <h3>互操作性</h3>
                                                <span>Partners Worldwide</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-md-3">
                                            <div class="about-counter">
                                                <h3>海量数据</h3>
                                                <span>Project Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="signature">
                                        <li>
                                            <img
                                                src="./theme/picture/signatures.png"
                                                alt="Images"
                                            />
                                        </li>
                                        <li>
                                            <h3>Digital Globe</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="about-img">
                                    <img src="./theme/picture/about-img1.jpg" alt="Image" />
                                    <div class="about-img-text">
                                        <span>Build</span>
                                        <h3>1998</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="consultation-area pt-100 pb-70">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <div class="consultation-content">
                                    <div class="section-title">
                                        <span class="sp-before">Innovation Starts Here</span>
                                        <h2 class="consultationTitle">
                                            利用数字技术和方法将，构成一个全球的数字模型，在高速网络上进行快速流通，直观完整地了解我们所在的这颗星球
                                        </h2>
                                        <p>
                                            Using digital technology and methods, we will form a
                                            global digital model, conduct rapid circulation on the
                                            high-speed network, and intuitively and completely
                                            understand our planet.
                                        </p>
                                    </div>
                                    <div class="consultation-btn">
                                        <a href="https://cesium.com/" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="consultation-play-btn">
                                    <a
                                        href="http://www.zgeo.work/CesiumTx/examples/index.html#baseDemo"
                                        target="_blank"
                                        class="video-btn popup-btn"
                                    >
                                        <i class="bx bx-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="offer-area pt-100 pb-70">
                    <div class="container">
                        <div class="section-title text-center">
                            <span class="sp-before">Offering</span>
                            <h2>What Can We Do</h2>
                        </div>
                        <div class="row pt-45">
                            <div class="col-lg-4 col-sm-6">
                                <div class="offer-card">
                                    <h3>介绍了解数字地球</h3>
                                    <p>有关数字地球的定义，说明数字地球🌍技术的意义。</p>
                                    <i class="flaticon-3d-graphics offer-icon"></i>
                                    <a href="#" class="learn-btn">
                                        Learn more
                                        <i class="flaticon-right-arrow-1"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="offer-card">
                                    <h3>科普我们的星球</h3>
                                    <p>每天生存的星球，可你对它认识多少？</p>
                                    <i class="flaticon-vision offer-icon"></i>
                                    <a @click="goDataVisual(0, 'earth')" class="learn-btn">
                                        Learn more
                                        <i class="flaticon-right-arrow-1"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                <div class="offer-card">
                                    <h3>数字地球数据的可视化</h3>
                                    <p>我将以可视化图表形式为大家简单清晰展示数据</p>
                                    <i class="flaticon-cube offer-icon"></i>
                                    <a @click="goDataVisual(0)" class="learn-btn">
                                        Learn more
                                        <i class="flaticon-right-arrow-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="process-area pt-100 pb-70">
                    <div class="container">
                        <div class="section-title text-center">
                            <span class="sp-before"><i>To Link Us</i></span>
                            <h2>探索我们的模块</h2>
                            <p>以下为本站核心及网站内容。去往不同的模块，进行不同的探索。</p>
                        </div>
                        <div class="row pt-45">
                            <div class="col-lg-4 col-sm-6 col-md-4">
                                <div class="process-card">
                                    <i @click="goDataVisual(0, 'earth')" class="flaticon-ideas"></i>
                                    <h3>了解我们的星球</h3>
                                    <p>
                                        Lorem ipsum dolo sit amet, consecteturadiising elit sed do
                                        eiusmod tempor
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 col-md-4">
                                <div class="process-card">
                                    <i @click="goDataVisual(0, 'map')" class="flaticon-sketch"></i>
                                    <h3>数据可视化</h3>
                                    <p>
                                        Lorem ipsum dolo sit amet, consecteturadiising elit sed do
                                        eiusmod tempor
                                    </p>
                                </div>
                            </div>
                            <div
                                class="col-lg-4 col-sm-6 col-md-4 offset-lg-0 offset-md-0 offset-sm-3"
                            >
                                <div class="process-card">
                                    <i
                                        @click="goDataVisual(null, 'satellite')"
                                        class="flaticon-deep-learning"
                                    ></i>
                                    <h3>卫星观测</h3>
                                    <p>
                                        Lorem ipsum dolo sit amet, consecteturadiising elit sed do
                                        eiusmod tempor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service-area pt-100">
                    <div class="container border-bottom pb-70">
                        <div class="section-title text-center">
                            <span class="sp-before">What We Do</span>
                            <h2>数据可视化模块</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut tur incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem.
                            </p>
                        </div>
                        <div class="row pt-45">
                            <div class="col-lg-4 col-md-6">
                                <div class="service-card">
                                    <a @click="goDataVisual(0)" href="#">
                                        <img
                                            src="../aboutEarth/theme/images/earth1.jpeg"
                                            alt="Images"
                                        />
                                    </a>
                                    <div class="content">
                                        <h3>
                                            <a @click="goDataVisual(0)" href="#">世界人口</a>
                                        </h3>
                                        <p>各地区人口密集程度</p>
                                        <a href="#" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="service-card">
                                    <a @click="goDataVisual(1)" href="#">
                                        <img src="./theme/picture/GDP.png" alt="Images" />
                                    </a>
                                    <div class="content">
                                        <h3>
                                            <a @click="goDataVisual(1)" href="#">自然灾害</a>
                                        </h3>
                                        <p>了解自然灾害造成的人口死亡</p>
                                        <a href="#" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="service-card">
                                    <a @click="goDataVisual(2)" href="#">
                                        <img src="./theme/picture/sex.png" alt="Images" />
                                    </a>
                                    <div class="content">
                                        <h3><a @click="goDataVisual(2)" href="#">男女比例</a></h3>
                                        <p>了解女性比例问题</p>
                                        <a href="#" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="service-card">
                                    <a href="#">
                                        <img
                                            src="./theme/picture/services-img4.jpeg"
                                            alt="Images"
                                        />
                                    </a>
                                    <div class="content">
                                        <h3>
                                            <a @click="goDataVisual(3)" href="#">世界人口身高</a>
                                        </h3>
                                        <p>人的身高</p>
                                        <a href="#" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="service-card">
                                    <a href="#">
                                        <img
                                            src="./theme/picture/services-img5.jpeg"
                                            alt="Images"
                                        />
                                    </a>
                                    <div class="content">
                                        <h3><a href="#">GIS & planning</a></h3>
                                        <p>
                                            Lorem ipsum dolo sit amet, consectetur adipisicing
                                            eiusmod tempor incididun teiusmod tempor
                                        </p>
                                        <a href="#" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="service-card">
                                    <a href="#">
                                        <img
                                            src="./theme/picture/services-img6.jpeg"
                                            alt="Images"
                                        />
                                    </a>
                                    <div class="content">
                                        <h3>
                                            <a href="#">3D work decoration</a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolo sit amet, consectetur adipisicing
                                            eiusmod tempor incididun teiusmod tempor
                                        </p>
                                        <a href="#" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-area">
                    <div class="container-fluid m-0 p-0">
                        <div class="tab portfolio-tab">
                            <div class="container">
                                <div class="section-title">
                                    <h2>Awesome Portfolio</h2>
                                </div>
                                <ul class="tabs">
                                    <li @click="tabsChangeBg">
                                        <a>All</a>
                                    </li>
                                    <li>
                                        <a>Hospitality</a>
                                    </li>
                                    <li>
                                        <a>Interior</a>
                                    </li>
                                    <li>
                                        <a>Libraries</a>
                                    </li>
                                    <li>
                                        <a>Residential</a>
                                    </li>
                                    <li>
                                        <a>Royal</a>
                                    </li>
                                    <li>
                                        <a>Theaters</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab_content current active pt-45">
                                <div class="tabs_item current">
                                    <div class="portfolio-item">
                                        <a href="portfolio-details.html">
                                            <img ref="tabsBg" :src="tabImg" alt="Images" />
                                        </a>
                                        <div class="content content4">
                                            <div class="title">
                                                <h3>
                                                    <a href="portfolio-details.html">
                                                        Royal palace
                                                    </a>
                                                </h3>
                                                <div class="number">03</div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">-Hospitality /</a>
                                                </li>
                                                <li>
                                                    <a href="#">Interior /</a>
                                                </li>
                                                <li>
                                                    <a href="#">Royal</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="portfolio-line">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item">
                                    <div class="portfolio-item">
                                        <a href="portfolio-details.html">
                                            <img
                                                src="./theme/picture/portfolio-img2.jpg"
                                                alt="Images"
                                            />
                                        </a>
                                        <div class="content content1">
                                            <div class="title">
                                                <h3>
                                                    <a href="portfolio-details.html">
                                                        Home Decoration Design
                                                    </a>
                                                </h3>
                                                <div class="number">01</div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">-Residential</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="portfolio-line">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item">
                                    <div class="portfolio-item">
                                        <a href="portfolio-details.html">
                                            <img
                                                src="./theme/picture/portfolio-img3.jpg"
                                                alt="Images"
                                            />
                                        </a>
                                        <div class="content content2">
                                            <div class="title">
                                                <h3>
                                                    <a href="portfolio-details.html">Ocean House</a>
                                                </h3>
                                                <div class="number">02</div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">-Hospitality /</a>
                                                </li>
                                                <li>
                                                    <a href="#">Residential /</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="portfolio-line">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item">
                                    <div class="portfolio-item">
                                        <a href="portfolio-details.html">
                                            <img
                                                src="./theme/picture/portfolio-img1.jpg"
                                                alt="Images"
                                            />
                                        </a>
                                        <div class="content content3">
                                            <div class="title">
                                                <h3>
                                                    <a href="portfolio-details.html">
                                                        Porcelain & Metal Ducts
                                                    </a>
                                                </h3>
                                                <div class="number">04</div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">-Theaters</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="portfolio-line">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item">
                                    <div class="portfolio-item">
                                        <a href="portfolio-details.html">
                                            <img
                                                src="./theme/picture/portfolio-img2.jpg"
                                                alt="Images"
                                            />
                                        </a>
                                        <div class="content content1">
                                            <div class="title">
                                                <h3>
                                                    <a href="portfolio-details.html">
                                                        Home Decoration Design
                                                    </a>
                                                </h3>
                                                <div class="number">01</div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">-Residential</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="portfolio-line">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item">
                                    <div class="portfolio-item">
                                        <a href="portfolio-details.html">
                                            <img
                                                src="./theme/picture/portfolio-img3.jpg"
                                                alt="Images"
                                            />
                                        </a>
                                        <div class="content content2">
                                            <div class="title">
                                                <h3>
                                                    <a href="portfolio-details.html">Ocean House</a>
                                                </h3>
                                                <div class="number">02</div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">-Hospitality /</a>
                                                </li>
                                                <li>
                                                    <a href="#">Residential /</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="portfolio-line">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item">
                                    <div class="portfolio-item">
                                        <a href="portfolio-details.html">
                                            <img
                                                src="./theme/picture/portfolio-img1.jpg"
                                                alt="Images"
                                            />
                                        </a>
                                        <div class="content content3">
                                            <div class="title">
                                                <h3>
                                                    <a href="portfolio-details.html">
                                                        Porcelain & Metal Ducts
                                                    </a>
                                                </h3>
                                                <div class="number">04</div>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#">-Theaters</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="portfolio-line">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="team-area pt-100 pb-70">
                    <div class="container">
                        <div class="section-title text-center">
                            <span class="sp-before">Map data</span>
                            <h2>地图数据展示</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut tur incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem.
                            </p>
                        </div>
                        <div class="row pt-45">
                            <div class="col-lg-4 col-sm-6">
                                <div class="team-card">
                                    <div class="images">
                                        <a @click="goDataVisual(0, 'map')" class="images-ptb">
                                            <img src="./theme/picture/team-img1.png" alt="Images" />
                                        </a>
                                        <ul class="social-link">
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="content">
                                        <h3>
                                            <a @click="goDataVisual(0, 'map')">GDP</a>
                                        </h3>
                                        <ul class="sub-title">
                                            <!-- <li>CEO</li> -->
                                            <li>各国经济变化</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="team-card">
                                    <div class="images">
                                        <a @click="goDataVisual(1, 'map')" class="images-ptb">
                                            <img src="./theme/picture/team-img2.png" alt="Images" />
                                        </a>
                                        <ul class="social-link">
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="content">
                                        <h3><a @click="goDataVisual(1, 'map')">市区贯通量</a></h3>
                                        <ul class="sub-title">
                                            <li>市区贯通量图表化</li>
                                            <!-- <li>ARCHITECT</li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                <div class="team-card">
                                    <div class="images">
                                        <a @click="goDataVisual(2, 'map')" class="images-ptb">
                                            <img src="./theme/picture/team-img3.png" alt="Images" />
                                        </a>
                                        <ul class="social-link">
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i class="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="content">
                                        <h3><a @click="goDataVisual(2, 'map')">汽车销量</a></h3>
                                        <ul class="sub-title">
                                            <li>各省汽车增长变化</li>
                                            <!-- <li>ARCHITECT</li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="blog-area blog-bg pt-100 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-8">
                                <div class="section-title">
                                    <span class="sp-before">About us</span>
                                    <h2>了解我们</h2>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-4">
                                <div class="blog-btn">
                                    <a href="blog-1.html" class="view-btn">
                                        <i class="flaticon-right-arrow-1"></i>
                                        View All
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="blog-card">
                                    <a href="blog-details.html">
                                        <img src="./theme/picture/blog-img1.jpg" alt="Images" />
                                    </a>
                                    <div class="content">
                                        <span>
                                            <a href="#">Home style</a>
                                            / 12-09-2022
                                        </span>
                                        <h3>
                                            <a href="#">
                                                Designer Lamp for Added Interior in the Desire Your
                                                Houses
                                            </a>
                                        </h3>
                                        <a href="#" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="blog-card">
                                    <a href="blog-details.html">
                                        <img src="./theme/picture/blog-img2.jpg" alt="Images" />
                                    </a>
                                    <div class="content">
                                        <span>
                                            <a href="#">Interior</a>
                                            / 11-08-2022
                                        </span>
                                        <h3>
                                            <a href="#">
                                                Designer Lamp for Added Interior in the desire
                                                houses in your area
                                            </a>
                                        </h3>
                                        <a href="#" class="learn-btn">
                                            Learn more
                                            <i class="flaticon-right-arrow-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-shape">
                        <img src="./theme/picture/blog-shape.png" alt="Images" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import tabImg1 from './theme/picture/portfolio-img1.jpg';
import tabImg2 from './theme/picture/portfolio-img2.jpg';
// import './theme/js/email-decode.min.js';
// import './theme/js/jquery-3.5.1.slim.min.js';
// import './theme/js/bootstrap.bundle.min.js';
// import './theme/js/owl.carousel.min.js';
// import './theme/js/carousel-thumbs.js';
// import './theme/js/jquery.magnific-popup.min.js';
// import './theme/js/wow.min.js';
// import './theme/js/meanmenu.js';
// import './theme/js/jquery.nice-select.min.js';
// import './theme/js/jquery.ajaxchimp.min.js';
// import './theme/js/form-validator.min.js';
// import './theme/js/contact-form-script.js';
// import './theme/js/custom.js';
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            tabImg: tabImg1,
        };
    },
    methods: {
        tabsChangeBg() {
            console.log('src', this.$refs.tabsBg.src);
            this.$refs.tabsBg.src = './theme/picture/portfolio-img2.jpg';
            this.tabImg = tabImg2;
        },

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
    },
};
</script>

<style lang="scss" scoped>
@import './theme/css/responsive.css';
@import './theme/css/style.css';
@import './theme/css/bootstrap.min.css';
@import './theme/css/flaticon.css';
@import './theme/css/boxicons.min.css';
@import './theme/css/owl.carousel.min.css';
@import './theme/css/owl.theme.default.min.css';
@import './theme/css/magnific-popup.css';
@import './theme/css/animate.min.css';
@import './theme/css/meanmenu.css';
@import './theme/css/nice-select.min.css';
.homeIndex {
    .mainContent {
        .mainWrap {
            .about-area {
                // width: 100%;
                .section-title {
                    h2 {
                        font-size: 24px;
                        text-indent: 2em;
                    }
                }
                .container-fluid {
                    .about-content {
                        .row {
                            h3 {
                                font-size: 35px;
                            }
                        }
                    }
                }
            }
            .service-area {
                background: url(./theme/picture/map-bottom.png) no-repeat;
                background-size: auto 100%;
                background-position-x: -600px;
            }
            .consultation-area {
                height: 700px;
                .section-title {
                    .consultationTitle {
                        font-size: 40px;
                        text-indent: 2em;
                    }
                }
            }
            .blocks {
                width: 100px;
                height: 50px;
                background-color: #000;
            }
            .portfolio-area {
                .container {
                    .tabs {
                    }
                }
            }
            .goNext {
                width: 150px;
                height: 100px;
                font-size: 40px;
            }
        }
    }
}
</style>

// 轮播图
<style>
.el-carousel__container {
    height: 87vh !important;
}
.el-carousel__item {
    background-size: 100% auto;
    background-repeat: no-repeat;
}
.el-carousel__item:nth-child(3) {
    background-image: url(./theme/image/lbt/earth-img1.jpeg);
    background-position-y: -150px;
}
.el-carousel__item:nth-child(4) {
    background-image: url(./theme/image/lbt/earth-img2.jpeg);
    background-position-y: -100px;
}
.el-carousel__item:nth-child(5) {
    background-image: url(./theme/image/lbt/earth-img3.jpeg);
    background-position-y: -100px;
}
.el-carousel__item:nth-child(6) {
    background-image: url(./theme/image/lbt/earth-img4.jpeg);
    background-position-y: -80px;
}
.el-carousel__item:nth-child(7) {
    background-image: url(./theme/image/lbt/earth-img5.jpeg);
    background-position-y: -80px;
}

.el-carousel__arrow {
    width: 60px !important;
    height: 60px !important;
    background-color: #ffffff50 !important;
}
.el-carousel__button {
    width: 60px !important;
    height: 3px !important;
}
</style>
