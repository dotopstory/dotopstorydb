/*
$(document).on('pagebeforecreate', '[data-role="page"]', function() {
	loading('show', 1);
});

$(document).on('pageshow', '[data-role="page"]', function() {
	loading('hide', 1000);
});

function loading(showOrHide, delay) {
	setTimeout(function() {
		$.mobile.loading(showOrHide);
	}, delay);
}

// Ad
var enabledAdMob = true; // easily enable/disable AdMob
var admobid = {};
if (/(android)/i.test(navigator.userAgent)) {
	admobid = { // for Android
		banner: 'ca-app-pub-4781658768584449/6096418506'
	};
}

function initApp() {
		if (enabledAdMob) {
			AdMob.createBanner({
				adId: admobid.banner,
				position: AdMob.AD_POSITION.BOTTOM_CENTER,
				autoShow: true,
				isTesting: true
			});
	}
}

document.addEventListener('deviceready', initApp, false);

if (AdMob) {
	AdMob.createBanner({ 
		adId: 'ca-app-pub-4781658768584449/6096418506', // your admob ad unit id 
		position: AdMob.AD_POSITION.TOP_CENTER, 
		autoShow: true
	});
}
*/
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {

		if (window.plugins && window.plugins.AdMob) {
			window.plugins.AdMob.setOptions({
				publisherId: 'ca-app-pub-4781658768584449/6096418506',
				bannerAtTop: false, // set to true, to put banner at top
				overlap: false, // set to true, to allow banner overlap webview
				offsetTopBar: false, // set to true to avoid ios7 status bar overlap
				isTesting: false, // receiving test ad
				autoShow: true // auto show interstitial ad when loaded
			});
			window.plugins.AdMob.createBannerView();
		} else {
			 alert('admob plugin not ready');
		}
	}
};
