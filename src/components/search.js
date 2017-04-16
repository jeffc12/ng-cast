angular.module('video-player')
.controller('searchController', function() {

    this.newSearch = () => {
      this.service.search(this.input, (data) => {

        this.result(data);
      });
    };

})
.directive('search', function() {
  return {

    templateUrl: 'src/templates/search.html',
    restrict: 'E',
    controller: 'searchController',
    controllerAs: 'ctrl',
    bindToController: true,

    scope: {
      service: '<',
      result: '<'
    }
  };
});
