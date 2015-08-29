/*global
	window:false,
	alertSrv:false,
	alertCtrl:false
*/
'use strict';

window.angular = require('angular');
require('angular-bootstrap');

window.angular.module('app', ['ui.bootstrap']).

	// services
	service('alertSrv', alertSrv).

	// controllers
	controller('alertCtrl', alertCtrl).
	controller('appCtrl', function (alertSrv, $http) {
		console.log('Hello Electron');
		var self = this;

		this.url = '';
		this.amount = 1;
		this.agree = false;

		this.automate = function automate() {
			if (!self.url) {
				alertSrv.addAlert('It seems like you forgot the url ...', 'warning');
				return;
			}

			var callNumber = 1;
			while (callNumber <= self.amount) {
				console.log('[' + callNumber + '] calling ' + self.url);
				$http.get(self.url).
					then(self.prepareResponse(callNumber));
				callNumber = callNumber + 1;
			}
		};

		this.prepareResponse = function (callNumber) {
			return function (res) {
				console.log('[' + callNumber + '] Received response: ' + res);
			};
		};

	});

