'use strict';

/*
 * сервис вывода всплывающего окна с формой
 */

angular.module('catalogApp')
	.service('modalService', modalService)
	.controller("formCtrl", formCtrl);

modalService.$inject = [
	'$uibModal',
];

function modalService ($uibModal){
	return {
		open: open
	}
	
	function open(carObj) {
		return  $uibModal.open({
			templateUrl:'app/service/car-form.tpl.html' ,
			controller: formCtrl,
			controllerAs: 'modalCtrl', 
			resolve:{
				carObj: () => angular.copy(carObj),
			}
		});
	};
	
};

formCtrl.$inject = ['ArrayCarListService','$uibModalInstance', 'carObj'];

function formCtrl (ArrayCarListService, $uibModalInstance, carObj){
	
	this.newCar = carObj;
	
	/*
   * обработка кнопки закрытие формы
   */
	
  this.closeForm = function(){
    $uibModalInstance.dismiss('cancel');
  };
	
	/*
   * обработка кнопки добавления|редактирования новой машины
   */
	
	this.save = function(newCar){
		
		if(carObj) {
			$uibModalInstance.close({'newCar': newCar});
			return;
		}
		
		ArrayCarListService.push(newCar);
    $uibModalInstance.dismiss();
  };
};
