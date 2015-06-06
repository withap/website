var PostStats = React.createClass({
    getDefaultProps: function (){
        return {
            post: {
                media: ''
            }
        }
    },
  render: function () {
    return (
        <div className="row post-stats">
            <span className="col-xs-2">
            </span>
            <span className={"col-xs-2 " +  (this.props.post.media ? "glyphicon glyphicon-play-circle" : "")}>
            </span>
            <span className="col-xs-2">
                7
               <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
            </span>
            <span className="col-xs-6">
                <span className="col-xs-3">2</span>
                <span className="col-xs-3 glyphicon glyphicon-chevron-down">
                </span>
                <span className="col-xs-3 glyphicon glyphicon-chevron-up">
                </span>
                <span className="col-xs-3">5</span>
            </span>
        </div>
    );
  }
});