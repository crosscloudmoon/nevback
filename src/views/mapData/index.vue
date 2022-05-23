<template>
    <div class="mapData">
        <div class="dataHeader">
            <div class="dataTitle">
                <span class="title">{{ titleContent[type].title }}</span>
            </div>
        </div>
        <div class="mapContent">
            <div class="echartsArea">
                <!-- <div id="mapEcharts"></div> -->
                <div v-show="type === 0" id="gdp"></div>
                <div v-show="type === 1" id="gt"></div>
                <div class="echartsZone" v-show="type === 2">
                    <div id="gdpTest3"></div>
                    <div id="gdpTest4"></div>
                </div>
                <span class="content">{{ titleContent[type].content }}</span>
                <!-- <div v-show="type === 0"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { getEchartsData, getEchartsYear } from '@/service/MH';
import * as echarts from 'echarts';
export default {
    name: 'MapData',
    mounted() {
        this.getEchartsYear(1);
        this.type = Number(this.$route.query.type);
        this.echartsLoadGdp();
        this.echartsLoadGt();
        this.echartsLoad3();
        this.echartsLoad4();
        // this.echartsLoad();
    },
    data() {
        return {
            yearList: [],
            type: 0,
            titleContent: [
                { title: '各国经济变化', content: '近几年增长趋势' },
                { title: '市区贯通量图表化', content: '某市区各县的开发贯通情况' },
                { title: '汽车销量', content: '各省汽车增长变化' },
                { title: 'test', content: 'testcontent' },
            ],
        };
    },
    watch: {
        $route: function (newVal) {
            this.type = Number(newVal.query.type);
            console.log('type', this.type);
        },
        type: function (newVal) {
            console.log('type', this.$route.query.type, this.type);
        },
        immediate: true,
        deep: true,
    },
    methods: {
        async getEchartsYear(type) {
            await getEchartsYear(type).then(res => {
                this.yearList = [...res.data.data];
                console.log('yearList', this.yearList);
            });
        },
        async echartsLoadGdp() {
            let that = this;
            let years = that.yearList;
            console.log('yars', years);
            let lastYear = years.at(-1);
            let myChart = echarts.init(document.getElementById('gdp'));

            console.log('last', lastYear);

            let jdData = [];
            let data = [];
            for (let i = 2020; i <= lastYear; i++) {
                await getEchartsData(1, i).then(res => {
                    let namedata = [];
                    let valuedata = [];
                    console.log('res', res);
                    res.data.data.map(item => {
                        namedata.push(item.name);
                        valuedata.push(item.value);
                        return item;
                    });
                    jdData.push(namedata);
                    data.push(valuedata);
                });
            }
            let option = {
                baseOption: {
                    backgroundColor: '#2c343c', // 背景颜色
                    timeline: {
                        data: years,
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 1500, // 播放速度

                        left: '5%',
                        right: '5%',
                        bottom: '0%',
                        width: '90%',
                        //  height: null,
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'red',
                                },
                            },
                            emphasis: {
                                textStyle: {
                                    color: 'red',
                                },
                            },
                        },
                        symbolSize: 10,
                        lineStyle: {
                            color: '#red',
                        },
                        checkpointStyle: {
                            borderColor: '#red',
                            borderWidth: 2,
                        },
                        controlStyle: {
                            showNextBtn: true,
                            showPrevBtn: true,
                            normal: {
                                color: '#ff8800',
                                borderColor: '#ff8800',
                            },
                            emphasis: {
                                color: 'red',
                                borderColor: 'red',
                            },
                        },
                    },
                    title: {
                        text: '',
                        right: '2%',
                        bottom: '8%',
                        textStyle: {
                            fontSize: 50,
                            color: 'black', // 标题字体颜色
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    calculable: true,
                    grid: {
                        left: '8%',
                        right: '2%',
                        bottom: '6%',
                        top: '0%',
                        containLabel: true,
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: 'red',
                            },
                        },
                    },
                    yAxis: [
                        {
                            nameGap: 50,
                            offset: '37',
                            type: 'category',
                            interval: 50,
                            // inverse: ture,// 图表倒叙或者正序排版
                            data: '',
                            nameTextStyle: {
                                color: 'red',
                            },

                            axisLabel: {
                                // rotate:45,
                                show: false,
                                textStyle: {
                                    fontSize: 32,

                                    color: function (params, Index) {
                                        // 标签国家字体颜色

                                        // color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色

                                        let colorarrays = [
                                            '#6bc0fb',
                                            '#7fec9d',
                                            '#fedd8b',
                                            '#ffa597',
                                            '#84e4dd',
                                            '#749f83',
                                            '#ca8622',
                                            '#bda29a',
                                            '#a8d8ea',
                                            '#aa96da',
                                            '#fcbad3',
                                            '#ffffd2',
                                            '#f38181',
                                            '#fce38a',
                                            '#eaffd0',
                                            '#95e1d3',
                                            '#e3fdfd',
                                            '#749f83',
                                            '#ca8622',
                                        ];

                                        // console.log("111", Index, colorarrays[Index],params); //打印序列

                                        return colorarrays[jdData[0].indexOf(params)];
                                    },
                                }, // rotate:45,
                                interval: 50,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'balck', // Y轴颜色
                                },
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: 'balck',
                                },
                            },
                        },
                    ],
                    xAxis: [
                        {
                            type: 'value',
                            name: '',

                            splitNumber: 8, // 轴线个数
                            nameTextStyle: {
                                color: 'balck',
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#ffa597', // X轴颜色
                                },
                            },
                            axisLabel: {
                                formatter: '{value} ',
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#fedd8b',
                                },
                            },
                        },
                    ],
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            markLine: {
                                label: {
                                    normal: {
                                        show: false,
                                    },
                                },
                                lineStyle: {
                                    normal: {
                                        color: 'red',
                                        width: 3,
                                    },
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right', // 数值显示在右侧
                                    formatter: '{c}',
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        // build a color map as your need.
                                        // color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色
                                        let colorList = [
                                            '#6bc0fb',
                                            '#7fec9d',
                                            '#fedd8b',
                                            '#ffa597',
                                            '#84e4dd',
                                            '#749f83',
                                            '#ca8622',
                                            '#bda29a',
                                            '#a8d8ea',
                                            '#aa96da',
                                            '#fcbad3',
                                            '#ffffd2',
                                            '#f38181',
                                            '#fce38a',
                                            '#eaffd0',
                                            '#95e1d3',
                                            '#e3fdfd',
                                            '#749f83',
                                            '#ca8622',
                                        ];
                                        // return colorList[params.dataIndex]

                                        // console.log('111', params.name); // 打印序列
                                        return colorList[jdData[0].indexOf(params.name)];
                                    },
                                },
                            },
                        },

                        {
                            name: '',
                            type: 'bar',
                            markLine: {
                                label: {
                                    normal: {
                                        show: false,
                                    },
                                },
                                lineStyle: {
                                    normal: {
                                        color: 'red',
                                        width: 3,
                                    },
                                },
                            },
                            barWidth: '50%',
                            barGap: '-100%',
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 16, // 标签国家字体大小
                                    position: 'left', // 数值显示在右侧
                                    formatter: function (p) {
                                        return p.name;
                                    },
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        // build a color map as your need.
                                        // color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色
                                        let colorList = [
                                            '#6bc0fb',
                                            '#7fec9d',
                                            '#fedd8b',
                                            '#ffa597',
                                            '#84e4dd',
                                            '#749f83',
                                            '#ca8622',
                                            '#bda29a',
                                            '#a8d8ea',
                                            '#aa96da',
                                            '#fcbad3',
                                            '#ffffd2',
                                            '#f38181',
                                            '#fce38a',
                                            '#eaffd0',
                                            '#95e1d3',
                                            '#e3fdfd',
                                            '#749f83',
                                            '#ca8622',
                                        ];
                                        // return colorList[params.dataIndex]

                                        // console.log("111", params.name); //打印序列
                                        return colorList[jdData[0].indexOf(params.name)];
                                    },
                                },
                            },
                        },
                    ],

                    animationEasingUpdate: 'quinticInOut',
                    animationDurationUpdate: 1500, // 动画效果
                },

                options: [],
            };
            for (let n = 0; n < years.length; n++) {
                let res = [];
                // alert(jdData.length);
                for (let j = 0; j < data[n].length; j++) {
                    res.push({
                        name: jdData[n][j],
                        value: data[n][j],
                    });
                }

                res.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6);

                res.sort(function (a, b) {
                    return a.value - b.value;
                });

                let res1 = [];
                let res2 = [];
                // console.log(res);
                for (let t = 0; t < res.length; t++) {
                    res1[t] = res[t].name;
                    res2[t] = res[t].value;
                }
                option.options.push({
                    title: {
                        text: years[n] + '年',
                    },
                    yAxis: {
                        data: res1,
                    },
                    series: [
                        {
                            data: res2,
                        },
                        {
                            data: res2,
                        },
                    ],
                });
            }
            myChart.setOption(option);
        },
        echartsLoadGt() {
            let myChart = echarts.init(document.getElementById('gt'));

            let category = [
                '市区',
                '万州',
                '江北',
                '南岸',
                '北碚',
                '綦南',
                '长寿',
                '永川',
                '璧山',
                '江津',
                '城口',
                '大足',
                '垫江',
                '丰都',
                '奉节',
                '合川',
                '江津区',
                '开州',
                '南川',
                '彭水',
                '黔江',
                '石柱',
                '铜梁',
                '潼南',
                '巫山',
                '巫溪',
                '武隆',
                '秀山',
                '酉阳',
                '云阳',
                '忠县',
                '川东',
                '检修',
            ];
            let dottedBase = [];
            let lineData = [
                18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415, 56061, 62677,
                59521, 67560, 18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415,
                36097, 39867, 44715, 48444, 50415, 50061, 32677, 49521, 32808,
            ];
            let barData = [
                4600, 5000, 5500, 6500, 7500, 8500, 9900, 12500, 14000, 21500, 23200, 24450, 25250,
                33300, 4600, 5000, 5500, 6500, 7500, 8500, 9900, 22500, 14000, 21500, 8500, 9900,
                12500, 14000, 21500, 23200, 24450, 25250, 7500,
            ];
            let rateData = [];
            // 32808;
            for (let i = 0; i < 33; i++) {
                // let date = i+2001;
                // category.push(date)
                let rate = barData[i] / lineData[i];
                rateData[i] = rate.toFixed(2);
            }

            // option
            let option = {
                title: {
                    text: '增量设备贯通情况-单位',
                    x: 'center',
                    y: 0,
                    textStyle: {
                        color: '#B4B4B4',
                        fontSize: 16,
                        fontWeight: 'normal',
                    },
                },
                backgroundColor: '#191E40',
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            backgroundColor: '#7B7DDC',
                        },
                    },
                },
                legend: {
                    data: ['已贯通', '计划贯通', '贯通率'],
                    textStyle: {
                        color: '#B4B4B4',
                    },
                    top: '7%',
                },
                grid: {
                    x: '12%',
                    width: '82%',
                    y: '12%',
                },
                xAxis: {
                    data: category,
                    axisLine: {
                        lineStyle: {
                            color: '#B4B4B4',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: [
                    {
                        splitLine: { show: false },
                        axisLine: {
                            lineStyle: {
                                color: '#B4B4B4',
                            },
                        },

                        axisLabel: {
                            formatter: '{value} ',
                        },
                    },
                    {
                        splitLine: { show: false },
                        axisLine: {
                            lineStyle: {
                                color: '#B4B4B4',
                            },
                        },
                        axisLabel: {
                            formatter: '{value} ',
                        },
                    },
                ],

                series: [
                    {
                        name: '贯通率',
                        type: 'line',
                        smooth: true,
                        showAllSymbol: true,
                        symbol: 'emptyCircle',
                        symbolSize: 8,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: '#F02FC2',
                            },
                        },
                        data: rateData,
                    },

                    {
                        name: '已贯通',
                        type: 'bar',
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#956FD4' },
                                    { offset: 1, color: '#3EACE5' },
                                ]),
                            },
                        },
                        data: barData,
                    },

                    {
                        name: '计划贯通',
                        type: 'bar',
                        barGap: '-100%',
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: 'rgba(156,107,211,0.5)' },
                                    { offset: 0.2, color: 'rgba(156,107,211,0.3)' },
                                    { offset: 1, color: 'rgba(156,107,211,0)' },
                                ]),
                            },
                        },
                        z: -12,

                        data: lineData,
                    },
                ],
            };
            myChart.setOption(option);
        },
        echartsLoad3() {
            let myChart = echarts.init(document.getElementById('gdpTest3'));
            let changeDate = [
                '2017-03',
                '2017-04',
                '2017-05',
                '2017-06',
                '2017-07',
                '2017-08',
                '2017-09',
                '2017-10',
                '2017-11',
                '2017-12',
                '2018-01',
                '2018-02',
                '2018-03',
                '2018-04',
                '2018-05',
                '2018-06',
                '2018-07',
            ];
            let costData = [
                {
                    startDate: '2017-03-01',
                    endDate: '2017-03-31',
                    cost: 900000,
                    costState: '已确认',
                    count: 88,
                },
                {
                    startDate: '2017-04-01',
                    endDate: '2017-04-30',
                    cost: 300000,
                    costState: '已确认',
                    count: 88,
                },
                {
                    startDate: '2017-05-01',
                    endDate: '2017-05-31',
                    cost: 850000,
                    costState: '已确认',
                    count: 88,
                },
                {
                    startDate: '2017-06-01',
                    endDate: '2017-06-15',
                    cost: 800000,
                    costState: '已确认',
                    count: 88,
                },
                {
                    startDate: '2017-06-16',
                    endDate: '2017-06-30',
                    cost: 1000000,
                    costState: '已确认',
                    count: 88,
                },
                {
                    startDate: '2017-07-01',
                    endDate: '2017-07-04',
                    cost: 1100000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2017-07-05',
                    endDate: '2017-07-21',
                    costState: '已确认',
                    cost: 880000,
                    count: 99,
                },
                {
                    startDate: '2017-08-01',
                    endDate: '2017-08-31',
                    costState: '已确认',
                    cost: 120000,
                    count: 99,
                },
                {
                    startDate: '2017-09-01',
                    endDate: '2017-09-30',
                    cost: 300000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2017-10-01',
                    endDate: '2017-10-20',
                    cost: 700000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2017-10-21',
                    endDate: '2017-11-15',
                    cost: 700000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2017-11-16',
                    endDate: '2017-11-20',
                    cost: 800000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2017-12-01',
                    endDate: '2017-12-31',
                    cost: 600000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2018-01-01',
                    endDate: '2018-01-31',
                    cost: 500000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2018-02-01',
                    endDate: '2018-02-28',
                    cost: 300000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2018-03-01',
                    endDate: '2018-03-31',
                    cost: 900000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2018-04-01',
                    endDate: '2018-04-30',
                    cost: 300000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2018-05-01',
                    endDate: '2018-05-31',
                    cost: 850000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2018-06-01',
                    endDate: '2018-06-15',
                    cost: 800000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2018-06-16',
                    endDate: '2018-06-30',
                    cost: 850000,
                    costState: '已确认',
                    count: 99,
                },
                {
                    startDate: '2018-07-01',
                    endDate: '2018-07-04',
                    cost: 1100000,
                    costState: '未确认',
                    count: 99,
                },
                {
                    startDate: '2018-07-05',
                    endDate: '2018-07-21',
                    cost: 880000,
                    costState: '未确认',
                    count: 99,
                },
            ];

            function getMinusDays(date1, date2) {
                let date1Str = date1.split('-');
                let date1Obj = new Date(date1Str[0], date1Str[1] - 1, date1Str[2]);
                let date2Str = date2.split('-');
                let date2Obj = new Date(date2Str[0], date2Str[1] - 1, date2Str[2]);
                let t1 = date1Obj.getTime();
                let t2 = date2Obj.getTime();
                let dateTime = 1000 * 60 * 60 * 24;
                let minusDays = Math.floor((t2 - t1) / dateTime);
                let days = Math.abs(minusDays);
                return days;
            }

            function addDays(date1, count) {
                let date1Str = date1.split('-');
                let date1Obj = new Date(date1Str[0], date1Str[1] - 1, date1Str[2]);
                date1Obj.setDate(date1Obj.getDate() + count);
                let midDate =
                    date1Obj.getFullYear() +
                    '-' +
                    (date1Obj.getMonth() + 1) +
                    '-' +
                    date1Obj.getDate();
                return midDate;
            }

            let cost = [];

            for (let i = 0; i < costData.length; i++) {
                let midDate = addDays(
                    costData[i].startDate,
                    getMinusDays(costData[i].startDate, costData[i].endDate) / 2
                );
                cost.push({
                    name: costData[i].startDate + ' ~ ' + costData[i].endDate,
                    value: [midDate, costData[i].cost],
                });
            }

            let costChange = {
                changeDate: changeDate,
                cost: cost,
                minDate: costData[0].startDate.slice(0, 7) + '-01',
                maxDate: costData[costData.length - 1].endDate.slice(0, 7) + '-31',
                dashLastStart: 2,
            };

            let monthCount = costChange.changeDate.length;
            let data = costChange.cost;
            let chartData = {
                xAxisNames: costChange.changeDate,
                seriesData: data,
                axisLabelFormatter: '{value}w',
                name: '费用',
                seriesDash: true,
                dashStart: data.length - costChange.dashLastStart,
                minDate: costChange.minDate,
                maxDate: costChange.maxDate,
                scrollLen: Math.ceil(100 - (12 / this.monthCount) * 100),
                showScroll: this.monthCount > 12,
                bottom: this.monthCount > 12 ? 50 : 0,
            };

            let seriesData = [];
            // console.log(chartData.seriesData);
            if (chartData.seriesDash) {
                let len = chartData.seriesData.length;
                let minusArr = [];
                for (let i = 0; i < len; i++) {
                    minusArr.push({
                        name: '-',
                        value: [],
                    });
                }
                seriesData = [
                    {
                        name: chartData.name,
                        symbol: 'circle',
                        symbolSize: 12,
                        type: 'line',
                        smooth: false,
                        data: chartData.seriesData
                            .slice(0, chartData.dashStart)
                            .concat(minusArr.slice(0, len - chartData.dashStart)),
                    },
                    {
                        name: chartData.name,
                        symbol: 'emptyCircle',
                        symbolSize: 6,
                        type: 'line',
                        smooth: false,
                        data: chartData.seriesData
                            .slice(0, chartData.dashStart)
                            .concat(minusArr.slice(0, len - chartData.dashStart)),
                    },
                    {
                        name: chartData.name,
                        symbol: 'circle',
                        symbolSize: 12,
                        type: 'line',
                        smooth: false,
                        itemStyle: {
                            normal: {
                                color: '#95EBE1',
                                lineStyle: {
                                    width: 2,
                                    type: 'dashed',
                                },
                            },
                        },
                        data: minusArr
                            .slice(0, chartData.dashStart - 1)
                            .concat(chartData.seriesData.slice(chartData.dashStart - 1, len)),
                    },
                    {
                        name: chartData.name,
                        symbol: 'circle',
                        symbolSize: 6,
                        type: 'line',
                        smooth: false,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 2,
                                    type: 'dotted',
                                },
                            },
                        },
                        data: minusArr
                            .slice(0, chartData.dashStart - 1)
                            .concat(chartData.seriesData.slice(chartData.dashStart - 1, len)),
                    },
                    {
                        name: chartData.name,
                        symbol: 'circle',
                        symbolSize: 12,
                        type: 'line',
                        smooth: false,
                        data: minusArr
                            .slice(0, chartData.dashStart - 1)
                            .concat(
                                chartData.seriesData.slice(
                                    chartData.dashStart - 1,
                                    chartData.dashStart
                                )
                            )
                            .concat(minusArr.slice(0, len - chartData.dashStart)),
                    },
                    {
                        name: chartData.name,
                        symbol: 'emptyCircle',
                        symbolSize: 6,
                        type: 'line',
                        smooth: false,
                        data: minusArr
                            .slice(0, chartData.dashStart - 1)
                            .concat(
                                chartData.seriesData.slice(
                                    chartData.dashStart - 1,
                                    chartData.dashStart
                                )
                            )
                            .concat(minusArr.slice(0, len - chartData.dashStart)),
                    },
                ];
            } else {
                seriesData = [
                    {
                        name: chartData.name,
                        symbol: 'circle',
                        symbolSize: 12,
                        type: 'line',
                        data: chartData.seriesData,
                    },
                    {
                        name: chartData.name,
                        symbol: 'emptyCircle',
                        symbolSize: 6,
                        type: 'line',
                        data: chartData.seriesData,
                    },
                ];
            }

            let xAxisNames1 = [];
            for (let i = 0; i < chartData.seriesData.length; i++) {
                xAxisNames1.push('-');
            }
            let option = {
                color: '#28BBAB',
                backgroundColor: '#404a59',
                tooltip: {
                    backgroundColor: 'rgba(46, 126, 139, 0.90)',
                    padding: [10, 20, 10, 8],
                    textStyle: {
                        fontSize: 12,
                        lineHeight: 24,
                    },
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            type: 'dashed',
                            color: '#28BBAB',
                        },
                    },
                    formatter: function (params, ticket, callback) {
                        callback;
                        let htmlStr = '';
                        let valMap = {};
                        for (let i = 0; i < params.length; i++) {
                            let param = params[i];
                            let xName = param.name;
                            let seriesName = param.seriesName;
                            let value = param.value;
                            // let color = param.color;
                            if (value.length === 0) {
                                continue;
                            }
                            if (
                                valMap[seriesName] &&
                                valMap[seriesName][0] === value[0] &&
                                valMap[seriesName][1] === value[1]
                            ) {
                                continue;
                            }
                            htmlStr += xName;
                            // if (chartData.dashStart && params[0].dataIndex >= chartData.dashStart) {
                            //     htmlStr += '预估';
                            // }
                            htmlStr += '<br/><div>';
                            // htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';
                            htmlStr += seriesName + '：' + value[1];
                            htmlStr += '</div>';
                            valMap[seriesName] = value;
                        }
                        return htmlStr;
                    },
                },
                grid: {
                    left: 40,
                    right: 14,
                    bottom: 80,
                    top: 20,
                },
                dataZoom: [
                    {
                        type: 'slider',
                        zoomLock: true,
                        show: true,
                        labelFormatter: () => {
                            return '';
                        },
                        realtime: true,
                        start: 30,
                        filterMode: 'none',
                        end: 100,
                        throttle: 0,
                        dataBackground: {
                            lineStyle: {
                                opacity: 0,
                            },
                            areaStyle: {
                                opacity: 0,
                            },
                        },
                        handleIcon:
                            'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2,
                        },
                        xAxisIndex: 0,
                    },
                ],
                xAxis: [
                    {
                        type: 'time',
                        min: chartData.minDate,
                        max: chartData.maxDate,
                        interval: 3600 * 24 * 1000,
                        // minInterval: 3600 * 24 * 1000 * 30,
                        // maxInterval: 3600 * 24 * 1000 * 31,
                        data: xAxisNames1,
                        splitLine: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            color: '#ADB9C7',
                            formatter: function (value) {
                                let date = new Date(value);
                                let day = date.getDate();
                                if (day === 16) {
                                    let year = date.getFullYear();
                                    let month = date.getMonth() + 1;
                                    month = month <= 9 ? '0' + month : month;
                                    return year + '-' + month;
                                } else {
                                    return '';
                                }
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisPointer: {
                            triggerTooltip: true,
                        },
                    },
                ],
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#999',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#999',
                        },
                    },
                    axisLabel: {
                        color: '#ADB9C7',
                        formatter: function (value) {
                            if (chartData.axisLabelFormatter === '{value}w') {
                                return parseInt(value, 10) / 10000 + 'w';
                            } else {
                                return value;
                            }
                        },
                    },
                },
                series: seriesData,
            };

            myChart.setOption(option);
        },
        async echartsLoad4() {
            let myChart = echarts.init(document.getElementById('gdpTest4'));
            const CubeLeft = echarts.graphic.extendShape({
                shape: {
                    x: 0,
                    y: 0,
                },
                buildPath: function (ctx, shape) {
                    const xAxisPoint = shape.xAxisPoint;
                    const c0 = [shape.x, shape.y];
                    const c1 = [shape.x - 9, shape.y - 9];
                    const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
                    const c3 = [xAxisPoint[0], xAxisPoint[1]];
                    ctx.moveTo(c0[0], c0[1])
                        .lineTo(c1[0], c1[1])
                        .lineTo(c2[0], c2[1])
                        .lineTo(c3[0], c3[1])
                        .closePath();
                },
            });
            const CubeRight = echarts.graphic.extendShape({
                shape: {
                    x: 0,
                    y: 0,
                },
                buildPath: function (ctx, shape) {
                    const xAxisPoint = shape.xAxisPoint;
                    const c1 = [shape.x, shape.y];
                    const c2 = [xAxisPoint[0], xAxisPoint[1]];
                    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
                    const c4 = [shape.x + 18, shape.y - 9];
                    ctx.moveTo(c1[0], c1[1])
                        .lineTo(c2[0], c2[1])
                        .lineTo(c3[0], c3[1])
                        .lineTo(c4[0], c4[1])
                        .closePath();
                },
            });
            const CubeTop = echarts.graphic.extendShape({
                shape: {
                    x: 0,
                    y: 0,
                },
                buildPath: function (ctx, shape) {
                    const c1 = [shape.x, shape.y];
                    const c2 = [shape.x + 18, shape.y - 9];
                    const c3 = [shape.x + 9, shape.y - 18];
                    const c4 = [shape.x - 9, shape.y - 9];
                    ctx.moveTo(c1[0], c1[1])
                        .lineTo(c2[0], c2[1])
                        .lineTo(c3[0], c3[1])
                        .lineTo(c4[0], c4[1])
                        .closePath();
                },
            });
            echarts.graphic.registerShape('CubeLeft', CubeLeft);
            echarts.graphic.registerShape('CubeRight', CubeRight);
            echarts.graphic.registerShape('CubeTop', CubeTop);
            const MAX = [6000, 6000, 6000, 6000, 6000, 5000, 4000, 3000, 2000, 4000, 3000, 2000];
            const VALUE = [];
            const DATA = [];
            await getEchartsData(3).then(res => {
                res.data.data.map(item => {
                    DATA.push(item.name);
                    VALUE.push(item.value);
                    return item;
                });
            });
            let option = {
                backgroundColor: '#010d3a',
                title: {
                    text: '',
                    top: 32,
                    left: 18,
                    textStyle: {
                        color: '#00F6FF',
                        fontSize: 24,
                    },
                },
                grid: {
                    left: 20,
                    right: 40,
                    bottom: '19%',
                    top: 107,
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    data: DATA,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'white',
                        },
                    },
                    offset: 20,
                    axisTick: {
                        show: false,
                        length: 9,
                        alignWithLabel: true,
                        lineStyle: {
                            color: '#7DFFFD',
                        },
                    },
                    axisLabel: {
                        fontSize: 10,
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'white',
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        fontSize: 16,
                    },
                    boundaryGap: ['20%', '20%'],
                },
                series: [
                    {
                        type: 'custom',
                        renderItem: function (params, api) {
                            const location = api.coord([api.value(0), api.value(1)]);
                            return {
                                type: 'group',
                                children: [
                                    {
                                        type: 'CubeLeft',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0]),
                                        },
                                        style: {
                                            fill: 'rgba(7,29,97,.6)',
                                        },
                                    },
                                    {
                                        type: 'CubeRight',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0]),
                                        },
                                        style: {
                                            fill: 'rgba(10,35,108,.7)',
                                        },
                                    },
                                    {
                                        type: 'CubeTop',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0]),
                                        },
                                        style: {
                                            fill: 'rgba(11,42,106,.8)',
                                        },
                                    },
                                ],
                            };
                        },
                        data: MAX,
                    },
                    {
                        type: 'custom',
                        renderItem: (params, api) => {
                            const location = api.coord([api.value(0), api.value(1)]);
                            return {
                                type: 'group',
                                children: [
                                    {
                                        type: 'CubeLeft',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0]),
                                        },
                                        style: {
                                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {
                                                    offset: 0,
                                                    color: '#3B80E2',
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#49BEE5',
                                                },
                                            ]),
                                        },
                                    },
                                    {
                                        type: 'CubeRight',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0]),
                                        },
                                        style: {
                                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {
                                                    offset: 0,
                                                    color: '#3B80E2',
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#49BEE5',
                                                },
                                            ]),
                                        },
                                    },
                                    {
                                        type: 'CubeTop',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0]),
                                        },
                                        style: {
                                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {
                                                    offset: 0,
                                                    color: '#3B80E2',
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#49BEE5',
                                                },
                                            ]),
                                        },
                                    },
                                ],
                            };
                        },
                        data: VALUE,
                    },
                    {
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: e => {
                                    switch (e.name) {
                                        case '10kV线路':
                                            return VALUE[0];
                                        case '公用配变':
                                            return VALUE[1];
                                        case '35kV主变':
                                            return VALUE[2];
                                        case '水':
                                    }
                                },
                                fontSize: 16,
                                color: '#fff',
                                offset: [4, -25],
                            },
                        },
                        itemStyle: {
                            color: 'transparent',
                        },
                        data: MAX,
                    },
                ],
            };

            myChart.setOption(option);
        },
        echartsLoad() {
            let myChart = echarts.init(document.getElementById('mapEcharts'));
            let data = [
                {
                    time: 1980,
                    data: [
                        {
                            name: '台湾',
                            value: [633.76, 12.28, '台湾'],
                        },
                        {
                            name: '香港',
                            value: [432.47, 8.38, '香港'],
                        },
                        {
                            name: '江苏',
                            value: [319.8, 6.2, '江苏'],
                        },
                        {
                            name: '上海',
                            value: [311.89, 6.05, '上海'],
                        },
                        {
                            name: '山东',
                            value: [292.13, 5.66, '山东'],
                        },
                        {
                            name: '辽宁',
                            value: [281, 5.45, '辽宁'],
                        },
                        {
                            name: '广东',
                            value: [249.65, 4.84, '广东'],
                        },
                        {
                            name: '四川',
                            value: [229.31, 4.44, '四川'],
                        },
                        {
                            name: '河南',
                            value: [229.16, 4.44, '河南'],
                        },
                        {
                            name: '黑龙江',
                            value: [221.0, 4.28, '黑龙江'],
                        },
                    ],
                },
                {
                    time: 2000,
                    data: [
                        {
                            name: '台湾',
                            value: [27435.15, 19.47, '台湾'],
                        },
                        {
                            name: '香港',
                            value: [14201.59, 10.08, '香港'],
                        },
                        {
                            name: '广东',
                            value: [10741.25, 7.62, '广东'],
                        },
                        {
                            name: '江苏',
                            value: [8553.69, 6.07, '江苏'],
                        },
                        {
                            name: '山东',
                            value: [8337.47, 5.92, '山东'],
                        },
                        {
                            name: '浙江',
                            value: [6141.03, 4.36, '浙江'],
                        },
                        {
                            name: '河南',
                            value: [5052.99, 3.59, '河南'],
                        },
                        {
                            name: '河北',
                            value: [5043.96, 3.58, '河北'],
                        },
                        {
                            name: '上海',
                            value: [4771.17, 3.39, '上海'],
                        },
                        {
                            name: '辽宁',
                            value: [4669.1, 3.31, '辽宁'],
                        },
                    ],
                },
                {
                    time: 2005,
                    data: [
                        {
                            name: '台湾',
                            value: [30792.89, 12.52, '台湾'],
                        },
                        {
                            name: '广东',
                            value: [22527.37, 9.16, '广东'],
                        },
                        {
                            name: '江苏',
                            value: [18598.69, 7.56, '江苏'],
                        },
                        {
                            name: '山东',
                            value: [18366.87, 7.47, '山东'],
                        },
                        {
                            name: '香港',
                            value: [14869.68, 6.05, '香港'],
                        },
                        {
                            name: '浙江',
                            value: [13417.68, 5.46, '浙江'],
                        },
                        {
                            name: '河南',
                            value: [10587.42, 4.3, '河南'],
                        },
                        {
                            name: '河北',
                            value: [10043.42, 4.08, '河北'],
                        },
                        {
                            name: '上海',
                            value: [9247.66, 3.76, '上海'],
                        },
                        {
                            name: '辽宁',
                            value: [8047.3, 3.27, '辽宁'],
                        },
                    ],
                },
                {
                    time: 2010,
                    data: [
                        {
                            name: '广东',
                            value: [46036.25, 9.49, '广东'],
                        },
                        {
                            name: '江苏',
                            value: [41425.48, 8.54, '江苏'],
                        },
                        {
                            name: '山东',
                            value: [39169.92, 8.08, '山东'],
                        },
                        {
                            name: '台湾',
                            value: [30205.64, 6.23, '台湾'],
                        },
                        {
                            name: '浙江',
                            value: [27747.65, 5.72, '浙江'],
                        },
                        {
                            name: '河南',
                            value: [23092.36, 4.76, '河南'],
                        },
                        {
                            name: '河北',
                            value: [20394.26, 4.21, '河北'],
                        },
                        {
                            name: '辽宁',
                            value: [18457.3, 3.81, '辽宁'],
                        },
                        {
                            name: '四川',
                            value: [17185.48, 3.54, '四川'],
                        },
                        {
                            name: '上海',
                            value: [17165.98, 3.54, '上海'],
                        },
                    ],
                },
                {
                    time: 2015,
                    data: [
                        {
                            name: '广东',
                            value: [72812.55, 9.35, '广东'],
                        },
                        {
                            name: '江苏',
                            value: [70116.38, 9, '江苏'],
                        },
                        {
                            name: '山东',
                            value: [63002.3, 8.09, '山东'],
                        },
                        {
                            name: '浙江',
                            value: [42886, 5.51, '浙江'],
                        },
                        {
                            name: '河南',
                            value: [37010.25, 4.75, '河南'],
                        },
                        {
                            name: '台湾',
                            value: [32604.52, 4.19, '台湾'],
                        },
                        {
                            name: '四川',
                            value: [30103.1, 3.87, '四川'],
                        },
                        {
                            name: '河北',
                            value: [29806.1, 3.83, '河北'],
                        },
                        {
                            name: '湖北',
                            value: [29550.19, 3.8, '湖北'],
                        },
                        {
                            name: '湖南',
                            value: [29047.2, 3.73, '湖南'],
                        },
                    ],
                },
            ];

            let op = {
                backgroundColor: '#25499F',
                baseOption: {
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'quinticInOut',
                    timeline: {
                        axisType: 'category',
                        orient: 'vertical',
                        autoPlay: true,
                        inverse: true,
                        playInterval: 5000,
                        left: null,
                        right: 5,
                        top: 20,
                        bottom: 20,
                        width: 46,
                        height: null,
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#ddd',
                                },
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                        symbol: 'none',
                        lineStyle: {
                            color: '#555',
                        },
                        checkpointStyle: {
                            color: '#bbb',
                            borderColor: '#777',
                            borderWidth: 1,
                        },
                        controlStyle: {
                            showNextBtn: false,
                            showPrevBtn: false,
                            normal: {
                                color: '#666',
                                borderColor: '#666',
                            },
                            emphasis: {
                                color: '#aaa',
                                borderColor: '#aaa',
                            },
                        },
                        data: data.map(function (ele) {
                            return ele.time;
                        }),
                    },
                    backgroundColor: '#25499F',
                    title: {
                        text: '1980年以来中国各省GDP排名变化情况',
                        subtext: 'GDP单位:亿元',
                        left: 'center',
                        top: 'top',
                        textStyle: {
                            fontSize: 25,
                            color: 'rgba(255,255,255, 0.9)',
                        },
                    },
                    tooltip: {
                        formatter: function (params) {
                            if ('value' in params.data) {
                                return params.data.value[2] + ': ' + params.data.value[0];
                            }
                        },
                    },
                    grid: {
                        left: 10,
                        right: '45%',
                        top: '70%',
                        bottom: 5,
                    },
                    xAxis: {},
                    yAxis: {},
                    series: [
                        {
                            id: 'map',
                            type: 'map',
                            mapType: 'china',
                            top: '10%',

                            itemStyle: {
                                normal: {
                                    areaColor: '#323c48',
                                    borderColor: '#404a59',
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                    },
                                    areaColor: 'rgba(255,255,255, 0.5)',
                                },
                            },
                            data: [],
                        },
                        {
                            id: 'bar',
                            type: 'bar',
                            tooltip: {
                                show: false,
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    textStyle: {
                                        color: '#ddd',
                                    },
                                },
                            },
                            data: [],
                        },
                        {
                            id: 'pie',
                            type: 'pie',
                            radius: ['12%', '20%'],
                            center: ['75%', '85%'],

                            tooltip: {
                                formatter: '{b} {d}%',
                            },
                            data: [],
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ddd',
                                    },
                                },
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: '#ddd',
                                    },
                                },
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: 'rgba(0,0,0,0.3)',
                                    borderSize: 1,
                                },
                            },
                        },
                    ],
                },
                options: [],
            };

            for (let i = 0; i < data.length; i++) {
                // 计算其余省份GDP
                let restPercent = 100;
                let restValue = 0;
                data[i].data.forEach(function (ele) {
                    restPercent = restPercent - ele.value[1];
                });
                restValue = data[i].data[0].value[0] * (restPercent / data[i].data[0].value[1]);
                console.log(restPercent);
                console.log(restValue);
                // let op = myChart.setOption(option);
                op.options.push({
                    visualMap: [
                        {
                            calculable: true,
                            dimension: 0,
                            left: 10,
                            top: 'center',
                            itemWidth: 12,
                            min: data[i].data[9].value[0],
                            max: data[i].data[0].value[0],
                            text: ['High', 'Low'],
                            textStyle: {
                                color: '#ddd',
                            },
                            inRange: {
                                //                color: ['lightskyblue', 'yellow', 'orangered', 'red']
                                color: ['lightskyblue', 'yellow', 'orangered'],
                            },
                        },
                    ],
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.1],
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        },
                    },
                    yAxis: {
                        type: 'category',
                        axisLabel: {
                            show: false,
                            textStyle: {
                                color: '#ddd',
                            },
                        },

                        data: data[i].data
                            .map(function (ele) {
                                return ele.value[2];
                            })
                            .reverse(),
                    },
                    series: [
                        {
                            id: 'map',
                            data: data[i].data,
                        },
                        {
                            id: 'bar',
                            label: {
                                normal: {
                                    position: 'right',
                                    formatter: '{b} : {c}',
                                },
                            },
                            data: data[i].data
                                .map(function (ele) {
                                    return ele.value[0];
                                })
                                .sort(function (a, b) {
                                    return a > b;
                                }),
                        },
                        {
                            id: 'pie',
                            data: data[i].data
                                .map(function (ele) {
                                    return {
                                        name: ele.value[2],
                                        value: ele.value,
                                    };
                                })
                                .concat({
                                    name: '其他省份',
                                    value: restValue,
                                }),
                        },
                    ],
                });
            }
            myChart.setOption(op);
        },
    },
};
</script>

<style lang="scss" scoped>
.mapData {
    padding-top: 50px;
    .dataHeader {
        width: 100%;
        height: 135px;
        color: #000;
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
        }
    }
    .mapContent {
        height: 1000px;
        .echartsArea {
            .content {
                font-size: 28px;
            }
            #gdp {
                margin: 0 auto;
                width: 800px;
                height: 800px;
            }
            #gt {
                margin: 0 auto;
                width: 800px;
                height: 800px;
            }
            .echartsZone {
                color: #fff;

                div {
                    display: inline-block;
                }
                #gdpTest3 {
                    width: 800px;
                    height: 800px;
                }
                #gdpTest4 {
                    width: 800px;
                    height: 800px;
                }
            }
        }
    }
}
</style>
