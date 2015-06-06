AJAX = {
    tokenType          : undefined,
    token              : undefined,
    domain             : undefined,
    port               : undefined,
    siteUrl            : undefined,
    dataType           : undefined,
    headerName         : undefined,
    headerValue        : undefined,
    beforeSend         : true,
    grant_type_refresh : 'refresh_token',
    grant_type_password: 'password',
    client_id          : 'android',
    client_secret      : '1P04ka9lTe69l1ub1ua0na1U61tDIm04Ky',

    init: function () {
        var timeNow = new Date();
        this.tokenType = localStorage.getItem('token_type');
        this.token = localStorage.getItem('access_token');
        this.domain = "http://127.0.0.1";
        this.port = "5530";
        this.siteUrl = this.domain + ':' + this.port + "/";
        this.dataType = 'json';
        this.headerName = 'Authorization';
        this.headerValue = this.tokenType + ' ' + this.token;
        this.headerValue = this.tokenType + ' ' + this.token;

        if (localStorage.getItem('time_out') && localStorage.getItem('time_out') < timeNow.getTime()) {
            $.ajax({
                url     : AJAX.siteUrl + 'oauth/token',
                type    : "POST",
                dataType: AJAX.dataType,
                data    : {
                    grant_type   : this.grant_type_refresh,
                    client_id    : this.client_id,
                    client_secret: this.client_secret,
                    refresh_token: localStorage.getItem('refresh_token')
                },
                success : function (data) {
                    AJAX.setToken(data);
                }.bind(this),
                error   : function (xhr, status, err) {
                    if(err.toString() == "Forbidden"){
                        router.load('login');
                    }
                    console.error(this.url, status, err.toString());
                }.bind(this)
            });
        }
    },

    setToken: function (data) {
        localStorage.setItem('token_type', data.token_type);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('expires_in', data.expires_in);

        var time_out = new Date();
        time_out.setSeconds(time_out.getSeconds() + data.expires_in);
        localStorage.setItem('time_out', time_out.getTime());

        this.tokenType = localStorage.getItem('token_type');
        this.token = localStorage.getItem('access_token');
    },

    getMethod: function (source) {
        $.ajax({
            url       : AJAX.siteUrl + source,
            dataType  : AJAX.dataType,
            sync      : true,
            beforeSend: function (xhr) {
                if (this.beforeSend) {
                    xhr.setRequestHeader(AJAX.headerName, AJAX.headerValue);
                }
            },
            success   : function (data, status) {
                if (data.status) {
                    console.log(data);
                    return data;
                } else {
                    console.log(data);
                    console.log(status);
                    return data;
                }
            },
            error     : function (response) {
                console.log(response);
            }
        });
    }
};
