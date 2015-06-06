/**
 * Created by Dimitriy on 28.05.2015.
 */
var PostPage = React.createClass({
    getInitialState: function() {
        return {
            post: {}
        }
    },
    componentDidMount: function() {
        AJAX.init();
        $.ajax({
            url: AJAX.siteUrl + 'posts/' + this.props.postId,
            dataType: AJAX.dataType,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(AJAX.headerName, AJAX.headerValue);
            },
            success: function(data) {
                if (this.isMounted()) {
                    if (data.status) {
                        this.setState(data);
                        if(data.post.media){

                        }
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
                <Header title="Post Page" back="true"/>
                <div className="content container ">
                    <PostDate className="center-block " createdAt={((this.isMounted())) ? this.state.post.createdAt : ''} creatorId={(this.isMounted()) ? this.state.post.creator._id : ''} creatorNickname={(this.isMounted()) ? this.state.post.creator.nickname : ''}/>
                    <div className="clear-top">
                        <span className="post-content container">{this.state.post.content}</span>
                        {this.state.post.image ?
                            <img className="center-block img-thumbnail" src={this.state.post.image}/> :
                            <span></span>
                        }
                    </div>
                    <PostStats post={this.state.post}/>
                    <PostComments />
                </div>
            </div>
        );
    }
});