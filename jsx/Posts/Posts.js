/**
 * Created by Dimitriy on 28.05.2015.
 */
var Posts = React.createClass({
    getInitialState: function() {
        return {
            status: true,
            posts: []
        }
    },
    componentDidMount: function() {
        AJAX.init();
        $.ajax({
            url: AJAX.siteUrl + 'posts',
            dataType: AJAX.dataType,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(AJAX.headerName, AJAX.headerValue);
            },
            success: function(data) {
                if (this.isMounted()) {
                    if (data.status) {
                        this.setState(data);
                    }else{
                        console.log(data);
                        console.log(status);
                    }
                }
            }.bind(this),
            error: function(xhr, status, err) {
                if(err.toString() == "Unauthorized"){
                    router.load('login');
                }
                console.error(this.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return (
            <div>
                <Header title="News" backBtn="false"/>
                <div className="content">
                    <PostList avatar="true" posts={this.state.posts}/>
                </div>
            </div>
        );
    }
});