'use strict';

	/*
	 *сервис редактирования данных таблицы
	 */

angular.module('catalogApp')
	.factory('ArrayCarListService', ArrayCarListService);

function ArrayCarListService (){
	let modalData = null;
	return{
		init: function(data) {
			modalData = data;
		},
		showMod: function () {
			return modalData;  
		},
		push: function (val){
			return modalData.push(val);
		},
	}
};
