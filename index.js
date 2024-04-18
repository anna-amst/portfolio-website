function toggleContentVisibility() {
    // Get the viewport width
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Check if viewport width is less than or equal to 390px
    if (viewportWidth <= 390) {
        // Add a CSS class to the body or a specific container
        document.body.classList.add('hide-content');
    } else {
        // Remove the CSS class if viewport width is greater than 390px
        document.body.classList.remove('hide-content');
    }
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', toggleContentVisibility);

// Call the function when the window is resized
window.addEventListener('resize', toggleContentVisibility);




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

/*
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
*/