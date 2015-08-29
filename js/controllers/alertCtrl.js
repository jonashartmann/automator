var alertCtrl = function alertCtrl (alertSrv) {
	'use strict';
	this.alerts = alertSrv.alerts;

	this.addAlert = function () {
		alertSrv.addAlert('Just a simple alert');
	};
	this.closeAlert = function (index) {
		alertSrv.closeAlert(index);
	};
};

module.exports = alertCtrl;
