'use strict';

angular.module('catalogApp')
	.controller('buttonCtrl', buttonCtrl)
	.component('buttonComponet', {
  	templateUrl: './app/component/button/button.tpl.html',
  	controller: 'buttonCtrl',
  	controllerAs: 'ctrlButton',
	});

buttonCtrl.$inject = [
	'modalService'
];

function buttonCtrl(modalService) {
	/*
	* Обработчик клика по кнопке
	*/
  this.openForm = function(){
    modalService.open(); 
  }; 
};


