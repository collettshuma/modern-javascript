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

/*
const promiseToClean = () => {
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
})

const toDo = async() => {
    const promiseToVisitLiverpool = () => {
        return new Promise((resolve,reject) => {
            const visit = true;

            if(visit){
                resolve(`Its my first time in Merseyside`)
            } else {
                reject(`my visa was declined`)
            }
        })
    }

    const promiseWatchAMatchAtAnfield = () => {
        return new Promise((resolve,reject) => {
            watchAMatch = true;

            if(watchAMatch){
                resolve(`Salah is a baller`)
            } else {
                reject('got flue so i stayed indoors the whole day')
            }
        })
    }

    const promiseToTakeTourBus = () => {
        return new Promise((resolve,reject) => {
            takeTourBus = true;

            if(takeTourBus){
                resolve(`visited all tourist site in city`)
            } else {
                reject(`i was tired so missed the bus`)
            }
        })
    }
    
     const response = await promiseToVisitLiverpool();
     console.log(response);
     const response2 = await promiseWatchAMatchAtAnfield();
     console.log(response2);
     const response3 = await promiseToTakeTourBus();
     console.log(response3);
}
//toDo().then(() => console.log(`my visit was wholesome`)).
//catch(() => console.log(`a lot of unforseen things happened so it was not the best`))

toDo()
*/

const goToWork = () => {
    return new Promise((resolve,reject) => {
        const didGoToWork = true;

        if(didGoToWork){
            resolve(`yes and it was good`);
        }else {
            reject(`i couldn't make it because of sickness`);
        }
    })
}

const goToChurch = () => {
    return new Promise((resolve,reject) => {
        const didGoToChurch = true;

        if(didGoToChurch){
            resolve(`the service was a blessing`);
        } else {
            reject(`i slept after work`);
        }
    })
}

goToWork().then((fromResolve) => {
    console.log(`answer : ${fromResolve}`);
    return goToChurch();
}).catch((fromReject) => {
    console.log(`answer : ${fromReject}`);
    return goToChurch();
}).then((fromResolve) => {
    console.log(`answer : ${fromResolve}`);
}).catch((fromReject) => {
    console.log(`answer : ${fromReject}`);
})


