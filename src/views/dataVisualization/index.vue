<template>
    <div class="dataVisualIndex">
        <div class="dataHeader">
            <div class="dataTitle">
                <span class="title">{{ titleContent[type].title }}</span>
                <br />
                <span class="content">{{ titleContent[type].content }}</span>
            </div>
        </div>
        <div class="dataVisualMain">
            <div class="dataExplain">
                <div class="dataContent">
                    <span class="contentTitle">{{ dataContent[type].title }}</span>
                    <span v-for="(item, index) in dataContent[type].content" :key="index">
                        {{ item }}
                    </span>
                </div>
            </div>
            <div class="chartsArea">
                <!-- <el-link
                    @click="changeEchartsType"
                    style="background: #000; height: 50px; margin-top: 50px"
                >
                    <i class="el-icon-arrow-right">切换类型</i>
                </el-link> -->
                <!-- <div id="testEcharts"></div>
                <div id="testEcharts2"></div>
                <div id="testEcharts3"></div> -->
                <div class="charts">
                    <!-- 幸福和生活满意度 -->
                    <!-- <iframe
                        src="https://ourworldindata.org/grapher/happiness-cantril-ladder?time=latest&region=Asia"
                        loading="lazy"
                        style="width: 100%; height: 600px; border: 0px none"
                    ></iframe> -->
                    <!-- 人口最稠密 -->
                    <iframe
                        v-show="type === 0"
                        src="https://ourworldindata.org/grapher/population-density"
                        loading="lazy"
                        style="width: 100%; height: 600px; border: 0px none"
                    ></iframe>
                    <!-- 男女比例 -->
                    <iframe
                        v-show="type === 2"
                        src="https://ourworldindata.org/grapher/share-population-female?tab=chart"
                        loading="lazy"
                        style="width: 100%; height: 600px; border: 0px none"
                    ></iframe>
                    <!-- 自然灾害 -->
                    <!-- <iframe
                        src="https://ourworldindata.org/explorers/natural-disasters?facet=none&Disaster+Type=All+disasters&Impact=Deaths&Timespan=Decadal+average&Per+capita=false&country=~OWID_WRL&hideControls=true"
                        loading="lazy"
                        style="width: 100%; height: 600px; border: 0px none"
                    ></iframe> -->
                    <!-- 人的身高 -->
                    <iframe
                        v-show="type === 3"
                        src="https://ourworldindata.org/grapher/average-height-of-men-for-selected-countries"
                        loading="lazy"
                        style="width: 100%; height: 600px; border: 0px none"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
// import echarts from "echarts";
// import "echarts-gl";
// import world from "echarts/map/js/world.js";
export default {
    name: 'DataVisualization',
    components: {},
    mounted() {
        // this.echartsLoad();
        // this.echartsLoad2();
        // this.echartsLoad3();
    },
    data() {
        return {
            type: 0,
            echartsType: 'bar',
            titleContent: [
                { title: '世界人口可视化', content: '各地区人口密集程度' },
                { title: '各国经济可视化', content: '观察世界各国经济变化' },
                { title: '男女比例可视化', content: '了解女性比例问题' },
                { title: 'test', content: 'testtes' },
            ],
            dataContent: [
                {
                    title: '哪些国家人口最稠密？',
                    content: [
                        '我们对世界的理解往往是由地理地图塑造的。但这并没有告诉我们人们住在世界上的什么地方。要理解这一点，我们需要看看人口密度。',
                        '在地图中，我们可以看到全世界每平方公里 (km 2 ) 的人数。',
                        '全球平均人口密度为每平方公里 61 人2，但各国之间存在很大差异。',
                        '世界上许多小岛屿或孤立国家的人口规模都很大。澳门、摩纳哥、新加坡、香港和直布罗陀是人口最稠密的五个。新加坡每平方公里有近8,000 人，是美国的200多倍，是澳大利亚的 2000 倍。',
                        '在较大的国家1中，孟加拉国是人口最稠密的国家，每平方公里有 1,252                        人；这几乎是其邻国印度的三倍。紧随其后的是黎巴嫩（595）、韩国（528）、荷兰（508）和卢旺达（495/km2）进入前五名。',
                        '在这里，我们展示了这个世界的样子。当我们看到标准地图时，我们倾向于关注按地区划分的最大国家。但这些并不总是最多人居住的地方。如果我们想了解世界各地人们的生活正在如何变化，我们就需要这种背景。 1,252                        人；这几乎是其邻国印度的三倍。紧随其后的是黎巴嫩（595）、韩国（528）、荷兰（508）和卢旺达（495/km2）进入前五名。',
                    ],
                },
                {
                    title: '哪些国家人口最稠密？',
                    content: [
                        '我们对世界的理解往往是由地理地图塑造的。但这并没有告诉我们人们住在世界上的什么地方。要理解这一点，我们需要看看人口密度。',
                        '在地图中，我们可以看到全世界每平方公里 (km 2 ) 的人数。',
                        '全球平均人口密度为每平方公里 61 人2，但各国之间存在很大差异。',
                        '世界上许多小岛屿或孤立国家的人口规模都很大。澳门、摩纳哥、新加坡、香港和直布罗陀是人口最稠密的五个。新加坡每平方公里有近8,000 人，是美国的200多倍，是澳大利亚的 2000 倍。',
                        '在较大的国家1中，孟加拉国是人口最稠密的国家，每平方公里有 1,252                        人；这几乎是其邻国印度的三倍。紧随其后的是黎巴嫩（595）、韩国（528）、荷兰（508）和卢旺达（495/km2）进入前五名。',
                        '在这里，我们展示了这个世界的样子。当我们看到标准地图时，我们倾向于关注按地区划分的最大国家。但这些并不总是最多人居住的地方。如果我们想了解世界各地人们的生活正在如何变化，我们就需要这种背景。 1,252                        人；这几乎是其邻国印度的三倍。紧随其后的是黎巴嫩（595）、韩国（528）、荷兰（508）和卢旺达（495/km2）进入前五名。',
                    ],
                },
                {
                    title: '男性和女性在人口中所占的比例是多少？',
                    content: [
                        '性别比例——女性在人口中所占的比例——在世界范围内各不相同。而在 2017 年全球范围内，女性在世界上的比例为 49.6%。',
                        '人口的性别比例不同且很少相等的原因有以下三个：',
                        '男女死亡率和预期寿命的差异。平均而言，女性的寿命比男性长。这意味着在其他条件相同的情况下，我们预计女性将占总人口的一半以上。',
                        '出生时的性别比例不相等。在所有国家/地区，男性的出生人数都多于女性（具体程度因国家/地区而异，我们将在下文中看到）。这意味着在其他条件相同的情况下，我们预计男性将占总人口的一半以上。',
                        '移徙也会影响人口的性别比例。如果在某些国家有大量进口男性占主导地位的劳动力，在其他条件相同的情况下，我们预计男性将占总人口的一半以上。',
                        '这些因素的大小和平衡决定了总人口的性别比例。',
                    ],
                },
                {
                    title: '两个世纪以来人类身高的增加',
                    content: [
                        '图宾根大学提供了 1810 年至 1980 年间世界上许多国家的男性身高数据。它为我们提供了近两个世纪以来变化的视角。我们在图表中看到了这些数据。',
                        '在过去的 2 个世纪中，全球人类身高稳步增长。这一趋势与这一时期健康和营养的普遍改善相一致。关于高度的历史数据往往来自士兵（应征入伍）、被定罪的罪犯、奴隶和仆人。正是由于这个原因，许多历史数据都集中在男性身上。最近的身高数据使用了其他来源，包括调查和医疗记录。',
                    ],
                },
            ],
        };
    },
    watch: {
        $route: function (newVal) {
            this.type = Number(newVal.query.type);
            console.log('type', this.type);
        },
    },
    methods: {
        changeEchartsType() {
            if (this.echartsType === 'bar') {
                this.echartsType = 'pie';
                this.echartsLoad();
            } else {
                this.echartsType = 'bar';
                this.echartsLoad();
            }
            console.log('type', this.echartsType);
        },
        echartsLoad() {
            let myChart = echarts.init(document.getElementById('testEcharts'));
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例',
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: this.echartsType,
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            });
            // myChart.setOption(option);
        },
        echartsLoad2() {
            let companyData = [
                { companyTypeCode: '1120', companyTypeName: '商场、超市', totalNumber: 6 },
                { companyTypeCode: '1163', companyTypeName: '咖啡厅', totalNumber: 4 },
                {
                    companyTypeCode: '10000',
                    companyTypeName: '粮、棉、木材、百货等物资仓库和堆场',
                    totalNumber: 4,
                },
                { companyTypeCode: '1112', companyTypeName: '饭店', totalNumber: 4 },
                { companyTypeCode: '1000', companyTypeName: '人员密集场所', totalNumber: 1 },
                {
                    companyTypeCode: '11000',
                    companyTypeName: '国家和省级重点工程的施工现场',
                    totalNumber: 1,
                },
                { companyTypeCode: '15000', companyTypeName: '小微企业', totalNumber: 1 },
                {
                    companyTypeCode: '12000',
                    companyTypeName:
                        '其他发生火灾可能性较大以及一旦发生火灾可能造成人身重大伤亡或重大财产损失的单位',
                    totalNumber: 1,
                },
                { companyTypeCode: '14000', companyTypeName: '出租房', totalNumber: 1 },
            ];
            let dataName = [];
            let data1 = [];
            let defaultData = [];
            let maxData = 0;
            companyData.forEach(item => {
                dataName.push(item.companyTypeName);
                data1.push(item.totalNumber);
                if (maxData < item.totalNumber) {
                    maxData = item.totalNumber;
                }
            });
            for (let i = 0; i < data1.length; i++) {
                defaultData.push(maxData);
            }
            let colorList = [
                '#00AAFF',
                '#A52A2A',
                '#FF752D',
                '#FFCF31',
                '#FF3129',
                '#006400',
                '#8B4513',
                '#FF8C00',
                '#FFB6C1',
                '#7B68EE',
                '#87CEFA',
                '#008000',
                '#D2B48C',
            ];
            let myChart = echarts.init(document.getElementById('testEcharts2'));
            myChart.setOption({
                backgroundColor: '#36467E',
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    top: '10%',
                    containLabel: true,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                    position: function (point, params, dom, rect, size) {
                        // console.log(point)

                        return [point[0], point[1]];
                    },
                    confine: false,
                    // formatter: '{b}:{c}'
                    formatter: function (params) {
                        // console.log(params)
                        let title = params[0].name;
                        if (title.length > 30) {
                            title =
                                title.substring(0, 15) +
                                '<br/>' +
                                title.substring(15, 30) +
                                '<br/>' +
                                title.substring(30);
                        } else if (title.length > 15) {
                            title = title.substring(0, 15) + '<br/>' + title.substring(15);
                        }
                        let name = title + ' : ' + params[0].value;
                        return name;
                    },
                },
                // backgroundColor: 'rgb(20,28,52)',
                xAxis: {
                    show: false,
                    type: 'value',
                },
                yAxis: [
                    {
                        type: 'category',
                        inverse: true,
                        // axisLabel: {
                        //   show: true,
                        //   textStyle: {
                        //     color: '#fff'
                        //   },
                        //   rotate: 0
                        // },
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '12',
                            },
                            formatter: function (value) {
                                value = value.length > 7 ? value.substring(0, 7) + '...' : value;
                                return value;
                            },
                        },
                        data: dataName,
                    },
                    {
                        type: 'category',
                        inverse: true,
                        axisTick: 'none',
                        axisLine: 'none',
                        show: true,
                        axisLabel: {
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '12',
                            },
                            formatter: function (value) {
                                return value;
                            },
                        },
                        data: data1,
                    },
                ],
                series: [
                    {
                        name: '数量',
                        type: this.echartsType,
                        zlevel: 1,
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 30, 30, 0],
                                color: params => {
                                    return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                        {
                                            offset: 0,
                                            color: 'rgba(54,69,129,1)',
                                        },
                                        {
                                            offset: 0.8,
                                            color: colorList[params.dataIndex],
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255,255,255,0.8)',
                                        },
                                    ]);
                                },
                                // color: (params) => {
                                //   return colorList[params.dataIndex]
                                // }
                            },
                        },
                        barWidth: 15,
                        data: data1,
                    },
                    {
                        name: '背景',
                        type: 'bar',
                        barWidth: 15,
                        barGap: '-100%',
                        data: defaultData,
                        itemStyle: {
                            normal: {
                                color: '#1B375E',
                                barBorderRadius: [0, 30, 30, 0],
                            },
                        },
                    },
                ],
            });
            // myChart.setOption(option);
        },
        echartsLoad3() {
            let myChart = echarts.init(document.getElementById('testEcharts3'));
            let bgPatternImg = new Image();
            bgPatternImg.src = '/asset/get/s/data-1623324803979-ugSvPhTCK.png';
            const chartData = [
                {
                    value: 520,
                    name: 'A',
                },
                {
                    value: 280,
                    name: 'B',
                },
                {
                    value: 100,
                    name: 'C',
                },
                {
                    value: 100,
                    name: 'D',
                },
            ];
            const colorList = [
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#CA8CCA',
                    },
                    {
                        offset: 1,
                        color: '#EFA5BB',
                    },
                ]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#BFA4E4',
                    },
                    {
                        offset: 1,
                        color: '#E29CE2',
                    },
                ]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#A8AAE5',
                    },
                    {
                        offset: 1,
                        color: '#BEA3E3',
                    },
                ]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#A4D37D',
                    },
                    {
                        offset: 1,
                        color: '#E5F2A7',
                    },
                ]),
            ];
            const sum = chartData.reduce((per, cur) => per + cur.value, 0);
            const gap = (1 * Number(sum)) / 100;
            const pieData1 = [];
            const pieData2 = [];
            const gapData = {
                name: '',
                value: gap,
                itemStyle: {
                    color: 'transparent',
                },
            };
            for (let i = 0; i < chartData.length; i++) {
                pieData1.push({
                    ...chartData[i],
                    itemStyle: {
                        borderRadius: 100,
                        shadowColor: '#2a2a34',
                        shadowBlur: 5,
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,
                        borderColor: '#2a2a34',
                        borderWidth: 2,
                    },
                });
                pieData1.push(gapData);

                pieData2.push({
                    ...chartData[i],
                    itemStyle: {
                        borderRadius: 10,
                        color: colorList[i],
                        opacity: 0.1,
                        shadowColor: '#000',
                        shadowBlur: 1,
                        shadowOffsetY: 5,
                        shadowOffsetX: 0,
                    },
                });
                pieData2.push(gapData);
            }
            myChart.setOption({
                backgroundColor: {
                    image: bgPatternImg,
                    repeat: 'repeat',
                },
                title: [
                    {
                        text: '75.0%',
                        x: '50%',
                        y: '43%',
                        textAlign: 'center',
                        textStyle: {
                            fontSize: '40',
                            fontWeight: '500',
                            color: '#98b5d2',
                            textAlign: 'center',
                            textShadowColor: '#000',
                            textShadowBlur: '1',
                            textShadowOffsetX: 2,
                            textShadowOffsetY: 2,
                        },
                    },
                    {
                        text: 'DESIGN ELEMENTS',
                        left: '50%',
                        top: '52%',
                        textAlign: 'center',
                        textStyle: {
                            fontSize: '18',
                            fontWeight: '400',
                            color: '#5c5a68',
                            textAlign: 'center',
                            textShadowColor: '#000',
                            textShadowBlur: '1',
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 1,
                        },
                    },
                ],
                legend: {
                    left: '10%',
                    top: '35%',
                    align: 'left',
                    itemGap: 18,
                    itemWidth: 20,
                    itemHeight: 20,
                    shadowBlur: 10,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                    borderColor: '#2a2a34',
                    borderWidth: 2,
                    textStyle: {
                        color: '#D8DDE3',
                        rich: {
                            name: {
                                verticalAlign: 'right',
                                align: 'left',
                                fontSize: 18,
                                color: '#D8DDE3',
                            },
                            percent: {
                                padding: [0, 0, 0, 10],
                                color: '#D8DDE3',
                                fontSize: 18,
                            },
                        },
                    },
                    formatter: name => {
                        const item = chartData.find(i => {
                            return i.name === name;
                        });
                        const p = ((item.value / sum) * 100).toFixed(0);
                        return '{name|' + name + '}' + '{percent|' + p + '}' + ' %';
                    },
                },

                color: colorList,

                series: [
                    {
                        type: 'pie',
                        z: 3,
                        roundCap: true,
                        radius: ['44%', '51%'],
                        center: ['50%', '50%'],
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        data: pieData1,
                    },
                    {
                        type: 'pie',
                        z: 2,
                        radius: ['40%', '55%'],
                        center: ['50%', '50%'],
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        silent: true,
                        data: pieData2,
                    },
                ],
            });
            // myChart.setOption(option);
        },
    },
};
</script>
<style lang="scss" scoped>
.dataVisualIndex {
    padding-top: 50px;
    // background-color: rgb(21, 14, 34);
    background-image: url(../home/theme/image/visualbg.jpg);
    background-size: 100% auto;
    padding-bottom: 50px;

    .dataHeader {
        width: 100%;
        height: 235px;
        color: #aaa;
        padding-top: 60px;
        .dataTitle {
            width: 40%;
            height: 50%;
            margin: 0 auto;
            // background-color: #aaaaaa50;
            .title {
                // display: inline-block;
                font-size: 52px;
                font-weight: 500;
                line-height: 80px;
            }
            .content {
                font-size: 28px;
            }
        }
    }
    .dataVisualMain {
        text-align: left;
        height: 815px;
        display: flex;
        flex-direction: row;
        padding: 0 70px;
        .dataExplain {
            width: 35%;
            font-size: 20px;
            color: #ddd;
            font-weight: 500;
            line-height: 36px;
            background-color: #aaaaaa50;
            padding: 20px;
            box-shadow: 3px 1px 28px -5px #ffffff50;
            text-indent: 2em;
            margin-bottom: 50px;
            margin-left: 40px;
            margin-right: 10px;
            .dataContent {
                display: flex;
                flex-direction: column;
                .contentTitle {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }
            }
        }
        .chartsArea {
            width: 65%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 80px;
            #testEcharts {
                width: 200px;
                height: 300px;
            }
            #testEcharts2 {
                width: 400px;
                height: 600px;
            }
            #testEcharts3 {
                width: 600px;
                height: 600px;
            }
            .charts {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
