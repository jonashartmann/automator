var alertSrv = function alertSrv () {
	'use strict';

	var alerts = [];

	return {
		addAlert: function (msg, type) {
			alerts.push({msg: msg, type: type || 'success'});
		},
		closeAlert: function (index) {
			alerts.splice(index, 1);
		},
		alerts: alerts
	};
};

module.exports = alertSrv;
