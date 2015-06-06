postsService = (function () {

    var findById = function (_id) {
            var deferred = $.Deferred();
            var post = null;
            var l = posts.length;
            for (var i = 0; i < l; i++) {
                if (posts[i]._id == _id) {
                    post = posts[i];
                    break;
                }
            }
            deferred.resolve(post);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = posts.filter(function (element) {
                var fullName = element.title + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        posts = [],

        loadPosts = function(callback){
            console.log('asd');
            AJAX.init();
            $.ajax({
                url: AJAX.siteUrl + 'posts',
                dataType: AJAX.dataType,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(AJAX.headerName, AJAX.headerValue);
                },
                success: function(data) {
                    if (data.status) {
                        console.log('success');
                        posts = data.posts;
                        callback(Posts.loadPostsFromServer(posts))
                    }else{
                        console.log(data);
                        console.log(status);
                    }
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.url, status, err.toString());
                }.bind(this)
            });
        };

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        loadPosts: loadPosts
    };

}());