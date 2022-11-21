let user = {
    name: 'collet',
    address: '8 Marlothi street',
    email: 'collettshuma@gmail.com',
    blogs: ['make pap and meeat','buy pizza instead'],
    login: function() {
        console.log('the user is logged in')
    },
    logout: function() {
        console.log('user is logged out')
    },
    logBlogs: function () {
        //console.log(this.blogs);
        this.blogs.forEach((blog) => {
            console.log(blog);
        })
    }
}
//user.login();
//user.logout();
//console.log(user);
//console.log(user.name);
//console.log(user.blogs);
user.logBlogs();


//use (this) when you want to use the property in a method of the same object





