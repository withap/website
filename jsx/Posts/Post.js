/** @jsx React.DOM */
var Post =
  React.createClass({
    render:function(){
      return (
          <div className="col-md-4">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
          </div>
        )
    }
  });
