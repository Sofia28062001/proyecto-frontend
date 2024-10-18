
setTimeout(function() {
    document.getElementById('cookieConsent').style.display = 'block';
}, 2000);

document.getElementById('acceptCookies').onclick = function() {
    document.getElementById('cookieConsent').style.display = 'none';
};

document.getElementById('notAcceptCookies').onclick = function() {
    document.getElementById('cookieConsent').style.display = 'none';
};