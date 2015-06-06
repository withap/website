var PostList = React.createClass({
    render: function () {
        var avatar = this.props.avatar;
        var items = this.props.posts.map(function (post) {
            return (
                <PostListItem avatar={avatar==="false"?"false":"true"} key={post.id} post={post} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});
