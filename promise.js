// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

let testPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    setTimeout(function() {
      const val = Math.random();
      if(val > .5){
        console.log(val);
        resolve('success');
      }
      else {
        console.log(val);
        reject('fail');
      }
    }, 1000)

  })

});

testPromise.then(function( val ){
  console.log('complete');
});

testPromise.catch(function(val) {
  console.log('complete');
})
