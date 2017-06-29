/**
 * Created by vitamin on 2017/6/29.
 */
define(['app'],function(app){

    //配置路由
    return app.config(['$routeProvider',function($routerProvider){
              $routerProvider
              .when('/chart',{
                      templateUrl: 'js/app/views/chart.html',
                      controller: 'chartCtrl'
              })
             .otherwise({ redirectTo: '/' });

    }]);
});