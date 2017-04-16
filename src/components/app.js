angular.module('video-player')

.controller('appController', function(youTube) {

		this.searchService = youTube;
			this.searchResults = (data) => {

    	this.currentVideo = data[0];
			this.Listvideo = data;
  };

	this.selectVideo = (video) => {
	this.currentVideo = video;
};

	youTube.search('Shiba', this.searchResults);

})

.directive('app', function() {

  return {
    //passing down the app HTML Template
  templateUrl: 'src/templates/app.html',
  restrict: 'E',
  controller: 'appController',
	controllerAs: 'ctrl',
	bindToController: true,
	templateUrl: 'src/templates/app.html',
	scope: {
	}

  };

});
