var array = [];

(function(angular) {

  'use strict';

angular.module('httpExample', [])

  .config(['$sceDelegateProvider', function($sceDelegateProvider) {

   

    $sceDelegateProvider.resourceUrlWhitelist([

      'self',

      'https://angularjs.org/**'

    ]);

  }])

  .controller('FetchController', ['$scope', '$http', '$templateCache',

    function($scope, $http, $templateCache) {

      $scope.method = 'GET';

      $scope.url = 'http://localhost:3000/music';

      $scope.fetch = function() {

        $scope.code = null;

        $scope.response = null;



        $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
	 
	  
          then(function(response) {

            $scope.status = response.status;

            $scope.data = response.data;

		for(var i = 0; i < $scope.data.length; i++){
			//array[i].push($scope.data[i].array[i]);
	                //console.log(array[i]);	
		}

          }, function(response) {

            $scope.data = response.data || 'Request failed';

            $scope.status = response.status;

        });

      };



      $scope.updateModel = function(method, url) {

        $scope.method = method;

        $scope.url = url;

      };

    }]);

})(window.angular);




