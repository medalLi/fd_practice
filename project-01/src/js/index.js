

//入口函数-饼图
$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.echarts>.pie'));
    var option = {
        backgroundColor: '#2c343c',

        // title: {
        //     text: 'Customized Pie',
        //     left: 'center',
        //     top: 20,
        //     textStyle: {
        //         color: '#ccc'
        //     }
        // },

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            position:function(point){
                return [point[0]+20,point[1]+20];
            }
        },

        // visualMap: {
        //     show: false,
        //     min: 80,
        //     max: 600,
        //     inRange: {
        //         colorLightness: [0, 1]
        //     }
        // },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: [10,70],
                center: ['50%', '50%'],
                data: [
                    {value: 300, name: '云南'},
                    {value: 310, name: '北京'},
                    {value: 274, name: '山东'},
                    {value: 335, name: '河北'},
                    {value: 300, name: '江苏'},
                    {value: 400, name: '浙江'},
                    {value: 500, name: '四川'},
                    {value: 600, name: '湖北'}
                ],
                color:['#006cff','#60cda0','#ed8884','#ff9f7f','0096ff','9fe6b8','#32c5e9','1d9dff'],
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 5,
                    length2: 10
                },
                // itemStyle: {
                //   // color: '#c23531',
                //     shadowBlur: 200,
                //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                // },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})