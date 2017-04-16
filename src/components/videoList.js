angular.module('video-player')

.controller('videoListController', function($scope){

})
.directive('videoList', function() {

  return {

    templateUrl: 'src/templates/videoList.html',
    restrict: 'E',
    controller: 'videoListController',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      videos: '<',
      onClick: '<'
    }
  };

});
