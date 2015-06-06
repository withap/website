/**
 * Created by Dimitriy on 28.05.2015.
 */
/**
 * AJAX requests
 */
var ajax = {};
ajax.x = function() {
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var xhr = new XHR();

    var versions = [
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    for(var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {}
    }
    return xhr;
};
ajax.send = function(url, callback, method, data, sync) {
    var x = ajax.x();
    x.open('GET', url, sync);
    x.onreadystatechange = function() {
        if (x.readyState == 4) {
            callback(x.responseText);
        }
    };
    x.setRequestHeader(headerName, headerValue);
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    try {
        x.send(data);
    } catch (error) {
        callback(x);
    }
};
ajax.get = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url + '?' + query.join('&'), callback, 'GET', null, sync)
};
ajax.post = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), sync)
};
