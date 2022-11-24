/*let user = {
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
//user.logBlogs(); */


//use (this) when you want to use the property in a method of the same object


/*const promiseToClean = () => {
    return new Promise((resolve,reject) => {
        const isClean = true;

        if(isClean){
            resolve(`my room is clean`);
        } else{
            reject(`the room is still dirty`);
        }
    })
}

const promiseToEat = () => {
    return new Promise((resolve,reject) => {
        const isEating = true;

        if(isEating){
            resolve(`i ate pap and meat`);
        } else{
            reject(`failed to eat because i was tired`);
        }
    })
}

const promiseToStudy = () => {
    return new Promise((resolve,reject) => {
        const isStudying = true;

        if(isStudying){
            resolve(`i studied coding`)
        } else{
            reject(`failed to study because i was tired`)
        }
    })
}

promiseToClean().then((fromResolve) => {
    console.log(`Get answer from : ${fromResolve}`)
    return promiseToEat();
}).catch ((fromReject) => {
    console.log(`Get answer from : ${fromReject}`);
    return promiseToEat();
}).then((fromResolve) => {
    console.log(`Get answer from : ${fromResolve}`);
    return promiseToStudy();
}).catch((fromReject) => {
    console.log(`Get answer fom : ${fromReject}`);
    return promiseToStudy()
}).then((fromResolve) => {
    console.log(`Get answer from : ${fromResolve}`);
}).catch((fromReject) => {
    console.log(`Get answer from : ${fromReject}`);
})*/







