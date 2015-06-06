var Header = React.createClass({
  render: function () {
      console.log(this.props)
    return (
        <header className="bar bar-nav">
          <a href="#" className={"icon icon-left-nav pull-left" + (this.props.backBtn==="true"?"":" hidden")}></a>
          <h1 className="title">{this.props.title}</h1>
          <a href="#post/add" className="icon glyphicon glyphicon-plus pull-right"></a>
        </header>
    );
  }
});