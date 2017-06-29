/**
 * Created by vitamin on 2017/6/29.
 */
define(['app'],function(app){
     app.controller('chartCtrl',['$scope','chartServer',function($scope,chartServer){

         console.log(chartServer);
         chartServer.getChart();
     }]) ;
});