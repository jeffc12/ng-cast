angular.module('video-player')

.controller('videoListEntryController', function($scope){

})

.directive('videoListEntry', function() {

  return {

    templateUrl: 'src/templates/videoListEntry.html',
  	restrict: 'E',
  	controller: 'videoListEntryController',
  	controllerAs: 'ctrl',
  	bindToController: true,
  	scope: {
      video: '<',
      onClick: '<'
   }

  };
});
