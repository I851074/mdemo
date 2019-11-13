sap.ui.define([
	"com/merck/ipi/ecnreport/controller/BaseController",
	"com/merck/ipi/ecnreport/model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Sorter",
	"sap/ui/core/format/DateFormat",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, formatter, JSONModel, Sorter, DateFormat, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("com.merck.ipi.ecnreport.controller.Step1", {
		formatter: formatter, // the formatter

		/****************************
		 * LIFECYCLE METHODS BEGIN	*
		 ****************************/

		/**
		 * This method is called upon initialization of the View. The controller can perform its internal setup 
		 * in this hook. It is only called once per View instance, unlike the onBeforeRendering and 
		 * onAfterRendering hooks. (Even though this method is declared as "abstract", it does not need to be 
		 * defined in controllers, if the method does not exist, it will simply not be called.)
		 */
		onInit: function () {
			// set context density
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			
		}

	});
});