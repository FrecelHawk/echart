/**
 * Created by vitamin on 2017/6/29.
 */
define(['app','echart'],function(app,echart){

    app.service('chartServer',function(){

        this.getChart = function(){
            var myChart = echart.init(document.getElementById('container'));

            // 指定图表的配置项和数据
            var option = {
                color: ['#3398DB'],
                title: {
                    text: ''
                },
                tooltip: {},
                legend: {
                    data:['请求量']
                },
                xAxis: {
                    data: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
                },
                yAxis: {
                    text: '有效下载次数'
                },
                series: [{
                    name: '请求量',
                    type: 'bar',
                    data: [4,5, 20, 36, 10, 10, 20]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            myChart.on('click', function (params) {
                console.log(params.value);
            });
        }
    });
});