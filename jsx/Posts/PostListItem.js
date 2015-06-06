var PostListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <PostDate createdAt={this.props.post.createdAt} creatorId={this.props.post.creator._id} creatorNickname={this.props.post.creator.nickname}/>
                <div className="row">
                    {(this.props.avatar==="false") ? '' :
                        <div className="col-xs-3">
                            <a href={"#user/" + this.props.post.creatorId}>
                                <img className="media-object small center-block" src={this.props.post.creator.image}/>
                            </a>
                        </div> }
                    <div className={(this.props.avatar==="false"?"col-xs-12":"col-xs-9") + " pull-right"}>
                        <a href={"#post/" + this.props.post._id}>
                            {(
                                this.props.post.category === 'News' ?
                                    <p><b>{this.props.post.content}</b></p> :
                                    <p>{this.props.post.content}</p>
                            )}
                        </a>
                    </div>
                </div>
                <PostStats post={this.props.post}/>
            </li>
        );
    }
});