/**
 * Created by Dimitriy on 28.05.2015.
 */
var UserPage = React.createClass({
    getInitialState: function() {
        return {
            user  : {},
            posts : [],
            status: []
        }
    },
    componentDidMount: function() {
        AJAX.init();
        $.ajax({
            url: AJAX.siteUrl + 'user/' + this.props.userId,
            dataType: AJAX.dataType,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(AJAX.headerName, AJAX.headerValue);
            },
            success: function(data) {
                if (this.isMounted()) {
                    if (data.status) {
                        this.setState(data);

                        $.ajax({
                            url: AJAX.siteUrl + 'posts/user/' + this.props.userId,
                            dataType: AJAX.dataType,
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader(AJAX.headerName, AJAX.headerValue);
                            },
                            success: function(data) {
                                if (this.isMounted()) {
                                    if (data.status) {
                                        this.setState(data);
                                        console.log(data)

                                    }else{
                                        console.log(data);
                                        console.log(status);
                                    }
                                }
                            }.bind(this),
                            error: function(xhr, status, err) {
                                console.error(this.url, status, err.toString());
                            }.bind(this)
                        });

                    }else{
                        console.log(data);
                        console.log(status);
                    }
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.url, status, err.toString());
            }.bind(this)
        });


    },
    render: function () {
        return (
            <div>
                <Header title={this.state.user.nickname} backBtn="true"/>
                <div className="card user-info">
                    <ul className="table-view">
                        <li className="table-view-cell">
                            <img className="media-object big pull-left" src={this.state.user.image }/>
                            <h1>{this.state.user.nickname}</h1>
                            <p>{this.state.user._id}</p>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"mailto:" + this.state.user.username} className="push-right">
                                <span className="media-object pull-left icon icon-email"></span>
                                <div className="media-body">
                                    Email
                                    <p>{this.state.user.username}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <span className="media-object pull-left icon icon-email"></span>
                            <div className="media-body">
                                Created At
                                <p>{moment(this.state.user.createdAt).format("MMM Do YY")}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <PostList avatar="false" posts={this.state.posts}/>
                </div>
            </div>
        );
    }
});