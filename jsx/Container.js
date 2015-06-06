/** @jsx React.DOM */
var Container = React.createClass({
  render:function(){
    return <div className="container clear-top">{this.props.children}</div>
  }
});
