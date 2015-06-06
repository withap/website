var LoginForm = React.createClass({
    getInitialState: function() {
        return {
            username: 'user@withap.com',
            password: 'userPass',
            grant_type: 'password',
            client_id: 'android',
            client_secret: '1P04ka9lTe69l1ub1ua0na1U61tDIm04Ky',
            isValid: true
        };
    },
    handleChange: function() {
        this.setState(
            {
                isValid: true,
                email: React.findDOMNode(this.refs.username).value,
                password: React.findDOMNode(this.refs.password).value
            });
    },
    handleSubmit: function(e) {
        e.preventDefault();

        AJAX.init();
        //AJAX.beforeSend = false;

        $.ajax({
            url: AJAX.siteUrl + 'oauth/token',
            type: "POST",
            dataType: AJAX.dataType,
            data: {
                username     : this.state.username,
                password     : this.state.password,
                grant_type   : this.state.grant_type,
                client_id    : this.state.client_id,
                client_secret: this.state.client_secret
            },
            success: function(data) {
                AJAX.setToken(data);
                this.setState({ isValid: true });
                router.load('');
            }.bind(this),
            error: function(xhr, status, err) {
                alert(status.toString())
                alert(err.toString())
                console.error(this.url, status, err.toString());
                this.setState({ isValid: false });
            }.bind(this)
        });
    },
    render: function() {
        //var errorClass = this.state.isValid ? '' : 'input--error';
        return (
            <div>
                <Header text="User Login" back="false"/>
                <div className="content">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <label ref="username" for="inputEmail" className="sr-only">Email address</label>
                            <input value={this.state.username} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
                        <label ref="password" for="inputPassword" className="sr-only">Password</label>
                            <input value={this.state.username} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
            );
    }
});