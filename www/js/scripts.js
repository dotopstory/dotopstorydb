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