angular.module('GuideCtrl',[]).controller('GuideController',function($scope,$http){

  $http.get('http://localhost:8080/api/guides').success(function(data){

    $scope.guidesData = {};
    $scope.guidesData.guides = data;

  })
});
