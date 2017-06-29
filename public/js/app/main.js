/**
 * Created by vitamin on 2017/6/29.
 */

(function(win){

    var config = {
        baseUrl:"js/",
        paths:{
             'angular':'angular/angular.min',
             'angular-router':'angular/angular-ui-router/angular-ui-router',
             'echart':'echarts/echarts.common.min',
             'app':'app/app',
             'chartServer':'app/services/echartServer',
             'chartCtrl':'app/controller/chartCtrl',
             'router':'app/router'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-router':{
                deps: ["angular"],
                exports: 'angular-router'
            }
        }
    };
    //配置js
    require.config(config);

   //加载js
    var scripts = ['angular','angular-router','echart','app','chartServer','chartCtrl','router'];
    require(scripts,function (angular){

        console.log(require('chartServer'));
        angular.bootstrap(document,['webApp']);
    });

}(window));