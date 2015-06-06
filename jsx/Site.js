/** @jsx React.DOM */
var Site =
  React.createClass({
    getInitialState: function() {
      return {
        page: null,
        menuItem: 0,
        header: {
          'title' : 'Title',
          'backBtn': false
        },
        menu: [{
          'title': 'News',
          'content': ['first', 'second']
        }, {
          'title': 'Map',
          'content': ['111', '222']
        }]
      }
    },
    setHeader: function(data){
      console.log(data.title)
      if(this.isMounted()){
        this.replaceState(
            {
              header: {
                title: data.title
              }
            }
        );
      }
      //if(data.length){
      //  this.setState({header: data})
      //}
    },
    componentDidMount: function() {
      router.addRoute('', function() {
        router.load('posts');
      }.bind(this));
      router.addRoute('posts', function() {
        this.setState({page: <Posts setHeader={this.setHeader} />});
      }.bind(this));
      router.addRoute('login', function() {
        this.setState({page: <LoginForm />});
      }.bind(this));
      router.addRoute('post/add', function() {
        this.setState({page: <PostForm />});
      }.bind(this));
      router.addRoute('post/:id', function(id) {
        this.setState({page: <PostPage postId={id}/>});
      }.bind(this));
      router.addRoute('user/:id', function(id) {
        this.setState({page: <UserPage userId={id}/>});
      }.bind(this));

      router.start();

      if(!localStorage.getItem('access_token')){
        router.load('login');
      }
    },
    render: function() {
      return(
          <div>
            {this.state.page};
            <Footer />
          </div>
      )

    }
});
