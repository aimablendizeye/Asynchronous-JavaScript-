async function MorningPromise () {
  return  new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve ("Good Morning Aimable");
    },2000)
})

}
 let p = await MorningPromise();
        console.log(p);

MorningPromise();