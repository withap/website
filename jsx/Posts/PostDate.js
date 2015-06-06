var PostDate = React.createClass({
    getDefaultProps: function (){
        return {
            creatorId: '',
            creatorNickname: '',
            createdAt: ''
        }
    },
  render: function () {

    return (
        <div className="row post-stats">
            <span className="col-xs-3 text-center">
               <a href={"#user/" + this.props.creatorId}>
                   {this.props.creatorNickname}
               </a>
            </span>
            <span className="col-xs-9">
                <span className="pull-right" >{moment(this.props.createdAt).fromNow()}</span>
            </span>
        </div>
    );
  }
});