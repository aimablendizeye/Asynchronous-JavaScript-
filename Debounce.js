
//  Debouncing


// function debounce (func,delay) {

// let timeOutId;
// return function (...arg) {
//   clearInterval(timeOutId)

//   timeOutId = setTimeout (() => {
//     func.apply (this, arg)
//   },delay)
// }

// }


// Throttling 


function throttling (func, limit) {

  let inThrottle;

  return function (...arg) {
    if (!inThrottle) {
      func.apply(this,arg)
      inThrottle = true;
    }

    setTimeout (() => {
      inThrottle = false
    },limit)
  }
}



