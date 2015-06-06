/** @jsx React.DOM */
var Footer =
  React.createClass({
    shouldComponentUpdate: function() {
      return false;
    },
    render:function(){
      return (
        <footer className="footer">
          <p>&copy; Withap Company</p>
        </footer>
        )
    }
  });
