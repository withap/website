/**
 * Created by Dimitriy on 28.05.2015.
 */
var PostForm = React.createClass({
    getInitialState: function() {
        return {
            post: true,
            images: []
        }
    },
    componentDidMount: function() {

    },
    handleSubmit: function(){
        e.preventDefault();

        AJAX.init();
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
    render: function () {
        return (
            <div>
                <Header text="Post Create" back="true"/>
                <div className="content">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label ref="push" for="push">Send Push</label>
                        <input type="checkbox" id="push" value="1" aria-label="Push" />
                        <br />
                        <label ref="lat" for="coords-lat">Coords lat</label>
                        <input value="50" type="text" id="coords-lat" className="form-control" placeholder="Lat" required="" autofocus="" />
                        <label ref="lng" for="coords-lng" >Coords lng</label>
                        <input value="36" type="text" id="coords-lng" className="form-control" placeholder="Lng" required="" autofocus="" />
                        <label ref="content" for="content" >Content</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </form>
                </div>
            </div>
        );
    }
});