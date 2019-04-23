'use strict';

	/*
	 *сервис получения данных из json файла
	 */
angular.module('catalogApp')
	.factory('mainHttpService', mainHttpService);

mainHttpService.$inject = [
	'$http',
	'$q',
];

function mainHttpService ($http, $q){
  return{
    getList: function(){
      var deferred = $q.defer();
      $http({method: 'GET', url: 'cars/cars.json'}).
          then (function success(response) {
              deferred.resolve(response.data);
          });
      return deferred.promise;
    }
  }
}