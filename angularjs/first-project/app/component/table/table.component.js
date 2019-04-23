'use strict';

angular.module('catalogApp')
	.controller('tableCtrl', tableCtrl) 
	.component('tableComponet', {
		templateUrl: './app/component/table/table.tpl.html',
		controller: 'tableCtrl', 
		controllerAs: 'ctrl',
	});

tableCtrl.$inject = [
	'mainHttpService', 
	'ArrayCarListService',
	'modalService',
];

function tableCtrl (mainHttpService, ArrayCarListService, modalService) {
	/*
	 * Состояние таблицы
	 */
  /*
   * Публичные методы таблицы
   */
  this.rowClickHandler = rowClickHandler;
  this.sortParamHandler = sortParamHandler;
	/*
	 * Получения данных для таблицы
	 */
	(() => {
		mainHttpService.getList().then(value => {
	      this.cars = value;
	      ArrayCarListService.init(this.cars);
	    });
  })();
  /*
	 * Обработчик двойного клика по строке
	 */
  function rowClickHandler (carObj, index){ 
    modalService.open(carObj).result.then((newCar) => {
    	this.cars[index] = newCar.newCar;
    });
  };
	/*
   * функция отображения стрелки
   */
	this.showPointer = function showPointer (sortParam){
		
		this.showPointerBrand = false;
		this.showPointerModel = false;
  	this.showPointerFuel = false;
		this.showPointerColor = false;
		this.showPointerPrice = false;
		
		if(sortParam == '-brand'|| sortParam == 'brand'){
		return this.showPointerBrand = true;
		} 
		if(sortParam == '-model'|| sortParam == 'model'){
		return this.showPointerModel = true;
		} 
		if(sortParam == '-fuel'|| sortParam == 'fuel'){
		return this.showPointerFuel = true;
		} 
		if(sortParam == '-color'|| sortParam == 'color'){
		return this.showPointerColor = true;
		} 
		if(sortParam == '-price'|| sortParam == 'price'){
		return this.showPointerPrice = true;
		}
	};
  /*
   * Функция меняющая параметр сортировки
   */
  function sortParamHandler(valSortParam){ 
		if(valSortParam == this.sortParam){
			this.sortPointer = 'down';
    	this.sortParam = '-' + valSortParam;
			return this.showPointer(this.sortParam); 
		}
		
		this.sortPointer = 'up';
		this.countClickSort = 0; 
		this.sortParam = valSortParam;
		return this.showPointer(this.sortParam); 
	};
};