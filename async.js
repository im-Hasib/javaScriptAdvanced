// setTimeout lets you achieve asynchronous behaviour
//========================================================================================================================================//

// -------------------------------Example 1 ----------------------------------//

// console.log("Start");

// setTimeout(() => {
//     console.log("Waiting Done!")
// }, 2000);

// console.log("end")

//=====================================================================================================================================//
                                                    // End of Topic 
//========================================================================================================================================//


//callBack -> is a greate way to handle result of aynchronous programming. You can call it back at any point of time with additional information
//============================================================================================================================================//

// -------------------------------Example 2 ----------------------------------//

// function fn(arg) {
//     arg();
// }


// fn(function() {
//     console.log("Hello")
// })  // --> this is called call back function ; which is passed as a argument to another function

// -------------------------------Example 3 ----------------------------------//

// function greet(namee, callback) {
//     console.log(`Hello ${namee}`)
//     callback()
// }

// function sayBye(namee, callback) {
//     console.log("Bye")
// }


// greet("Hasib",sayBye)

// -------------------------------Example 4 ----------------------------------//

// lets excute the previous callBack asynchrounsly. One of the way is to use setTimeOut

// function greet(namee, callback) {
//     console.log(`Hello ${namee}`)
//     setTimeout(() => {
//         callback()
//     }, 2000);
//     console.log("End of code check : must be excuted before the callback")
// }

// function sayBye(namee, callback) {
//     console.log("Bye")
// }


// greet("Hasib", sayBye);


// ------------------------------- Example 5 ----------------------------------//

// -- We want to create a simple app where it will check what are the pizza places are open rign now , is the required pizza ia available, if it available it will check what kind of ad ons we can get with the pizza
// -- All APIs are provided

// -- this function will check : what places and open it has my required pizza or not
// -- lets say type:veg , no veg etc , name: margarita,classic etc

// function orderPizza(type, name) {
//     query(`api/pizzahub`, (result,error) => {
//         if (!error) {
//             let shopId = result[0]
//             console.log(shopId)
//             query(`api/pizzahub/pizzas/${shopId}`, function (result, error) {

//                 if (!error) {
//                     // -- implement your logic here //
//                 }
                
//             })
//         }
//     });   // -- query function takes a callback : In the call bak you hav to handle failure or success of the api call

//========================================================================================================================================//
                                                // End of topic
//========================================================================================================================================//

//Promises
// - what is a promise in Js
// - callback to promise
// - Undarstanding promise states
// - How promises are resolved or rejected
// - handeling Promises
// - Promise chain
// - Handeling Multiple promises
// - How to cancel a promise 
// - That pizzahub APP
// - tasks and assignments
//========================================================================================================================================//

// what is a promise: A place holder for a requested value as the value is not available to you immediately , but when the value is available to you as a response to your call have a mechanism to get a notification.

// request status pending -> delivered -> fullfilled or might be a error(reject).

// In async programming , I dont want to wait for anything , I want to move on with my life , but when moving on we can put a place holder -> a promise , which will let me know , my request to somehing is fullsfilled or rejected, and we can continue to do our task based on the response of the request inside the promise.

// -----------------------------------------------------------------Example 01-----------------------------------------------------------------------------

// let promise =  new Promise(function (resolve,reject) {
    
// }) //constructor function


// //Executor function. 
// function (resolve, reject) {
    
// } //resolve and reject are call back functions that needs to be called in sub-sequent mannar


// States of promise:
// - pending
// - fullfilled
// - rejected

// Results of promise :
// - undefined : Intailly when the state value is pending
// - value : when resolve(value) is called
// - error : ehrn resolve(value) is called

// ------------------------------------------ Example 2 ------------------------------------------------

// let promise1 = new promise((resolve, reject) => {
//     resolve("Hey I am done");
// })//this promise will go to resolve state immediately with the value "Hey I am done"


// let promise2 = new promise((resolve, reject) => {
//     reject("Hey I am done");

//     resolve("this resolve wil be ignored");
//     reject("Ignored")
// }) //resolve or reject can be callled only ones

//========================================================================================================================================//

// handler method: -> then, catch and finally 

// -------------------------------------------- Example 3 --------------------------------------------------

// - .then() : We mostely handle resolved promises using .then(), but both can be done like this :
// const promise = new Promise((resolve, reject) => {
//     //Make an Network call
//     resolve("I am resolved")
// });

// promise.then((result) => {
//     console.log(result)
// },(error) => {
//     console.log(error)
// })

// -------------------------------------------- Example 4 --------------------------------------------------

//- .catch() : to handel erronous output from promise 
//. finally() : It never bothers 

// const promise = new Promise((resolve,reject) => {
//     resolve("Promise is handeled")
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error)
// }).finally(
//     () => {
//         // cleaning Process 
//     }
// )

//========================================================================================================================================//
                                                // End of topic
//========================================================================================================================================//

// Promise Chain 

//- Rule 01 : every Promise provides you .then() handler method, Every rejected promise provides you a .catch() handler method 
//- Rule 02 : You can do three valueable things from the .then() method. You can return another promise(for async operation) , you can return a value from sync operation and lastly you can throw an error. 
//- Rule 03 : You can rethrow an error will go to .catch() handler to handle the error later. In this case, the control will go to next closest .catch() handler 
//- Rule 04 ; .finally() pass the data automatically to subsequent chain call.

// -------------------------------------------- Example 5 --------------------------------------------------

//- Returning a promise 

// let getUser = new Promise(
//     (resolve, reject) => { 
//         const user = {
//             name: 'john Doe',
//             email: 'jdon@gmail.com',
//             password: '132',
//             permission:['hr','db']
//         }
//         resolve(user)
//     }
// ).then(
//     (result) => {
//     console.log(result.name);
    
//         return new Promise(
//             (resolve, reject) => {
//                 setTimeout(() => {
//                     reject("Not Permitted")
//                 }, 2000);
//              }
//         )
// }).then(
//     (result) => { 
//         console.log(result)
//     }
// ).catch((result) => {
//     console.log(result)
// })


// -------------------------------------------- Example 6 --------------------------------------------------

// - returning a single value

// getUser.then(
//     (user) => {
//         // logic
//         return user.email;
//     }
// ).then((email) => {
//     console.log(`User email is ${email}`);
// })

// -------------------------------------------- Example 7 --------------------------------------------------

// - thow an error

// getUser.then((user) => {

//     console.log(`Got user ${user.name}`);

//     if (!user.oermission.includes('hr')) {
//         throw new Error("You are not allowed to access the HR module");
//     }

//     return user.email;
// }).then((email) => {
//     // logic here
// }).catch((error) => {
//     console.log(error)
// })

//=====================================================================================================================================//
                                                    // End of Topic 
//========================================================================================================================================//

// - Resolving Multiple Promises
// 6 methods: .all() , .many() , .allSettled(), .race() , .resolve() , .reject()

// - promise.all([promises]) 
// - .all() method takes an array of promises
// - .all() waits for all the promises to resolve.
// - in .all() if one of the promise is rejected all other promises is ignored. 
// ------------------------------------------------- Example 01 -----------------------------------------------

const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

function getPromise(API_URL) {
    return fetch(API_URL).then(
        (response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        }
    );
}

// let promise1 = getPromise(BULBASAUR_POKEMONS_URL);
// let promise2 = getPromise(RATICATE_POKEMONS_URL);
// let promise3 = getPromise(KAKUNA_POKEMONS_URL);

// resolvedPromises= Promise.all([promise1, promise2, promise3]); //This wil return new promise to you in that you will find the resolved value of each of the promises.

// resolvedPromises.then((result) => {

//     console.log(result)

// }).catch((error) => {
//     console.log(error)
// })

// - promise.any([promises])
// - .any() method takes an array of promises
// - .any() DOES NOT wait for all the promises to resolve , it will just wait for the first promise to be resolved
// - so the value of .any() will not be an array unlike .all() . it will be a single value.
// ------------------------------------------------- Example 02 -----------------------------------------------

// resolvedPromises= Promise.any([promise1, promise2, promise3]); //This wil return new promise to you in that you will find the resolved value of each of the promises.

// resolvedPromises.then((result) => {

//     console.log(result)

// }).catch((error) => {
//     console.log(error)
// })

// - .allSettled() : waits for all promises to settle : it gives you output of everything. 
// ------------------------------------------------- Example 03 -----------------------------------------------

resolvedPromises= Promise.allSettled([promise1, promise2, promise3]); //This wil return new promise to you in that you will find the resolved value of each of the promises.

resolvedPromises.then((result) => {

    console.log(result)

}).catch((error) => {
    console.log(error)
})

// - .race() : gives out put of the first promise that has been resolved. 
// ------------------------------------------------- Example 04 -----------------------------------------------
resolvedPromises= Promise.allSettled([promise1, promise2, promise3]); //This wil return new promise to you in that you will find the resolved value of each of the promises.

resolvedPromises.race((result) => {

    console.log(result)

}).catch((error) => {
    console.log(error)
})

//=====================================================================================================================================//
                                                    // End of Topic 
//========================================================================================================================================//

// How to cancel a promise:
//- you can not cancel a promise , you can cancel the process 
 
 

//async/await
//eventLoop 
