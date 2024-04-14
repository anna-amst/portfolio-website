/*const promise = new Promise ((resolve, reject)=> {
const sum = 1 + 2
if (sum === 2) {
    resolve("Success")
} else {
    reject("Error")
}
})

promise.then(message => {
    console.log(message)
}).catch(message => {
    console.error("Error")
})

*/

//setTimeout(() => {
//    console.log("here")
//}, 250)

/*setTimeoutPromise(250).then(() => {
    console.log("1")
    return setTimeoutPromise(250)
}).then(()=> {
    console.log("2")
    return setTimeoutPromise(250)
}).then(() => {
    console.log("3")
})

function setTimeoutPromise(duration) {
    return new Promise((resolve, reject)=> {
        setTimeout(resolve, duration)
    })
}*/

// create a promise version of addEventListener
const button = document.querySelector(".button1");

function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener( method, resolve);
  });
}

addEventListenerPromise(button, "click").then(e => {
  console.log("clicked");
  console.log(e)
})

// then === resolve
// catch === reject
