// 页面上所有的js动态效果都在这里写

// 入口函数
$(function () {
    // 1.设备监控模块(1.2模块)有一个tab栏切换

    //思路：给页签设置点击事件，
    $('.monitor .tabs a').on('click',function () {
        //当前点击的页面添加active类，其它的兄弟页签移除这个active类
        $(this).addClass('active').siblings().removeClass('active');
        //获取当前点击的页签的索引
        var idx = $(this).index();
        //让索引一致的页面显示，其它的隐藏
        $('.monitor .content').eq(idx).show().siblings('.content').hide();
    })
    // 2.设备监控模块(1.2模块)有一个轮播图效果
    // 2.1必须理解版 轮播图
    // function lunbo() {
    //     $('.monitor .content .carousel>ul').animate({
    //         top: -175
    //     },5000,'linear',function () {
    //         $('.monitor .content .carousel>ul').css('top',0)
    //     });
    // }
    // lunbo()
    // setInterval(lunbo,5000);

    function lunbo() {
        $('.monitor .content .carousel>ul').animate({
            top: -525
        },5000,'linear',function () {
            $('.monitor .content .carousel>ul').css('top',0)
        });
    }
    lunbo()
    setInterval(lunbo,5000);
    // 3.设备监控模块(1.2模块)有一个鼠标移入的效果
    $('.monitor .content .carousel>ul>li').on('mouseenter',function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.monitor .content .carousel>ul>li').on('mouseleave',function () {
        $(this).removeClass('active')
    })
    // 4.订单模块(3.1模块)有一个鼠标点击tab栏的效果

    // 5.全国热销(3.4模块)有一个鼠标移入的效果
})

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