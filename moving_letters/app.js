// Wrap every letter in a span
var text = document.querySelector('.division .letters');
/** text.innerHTML : to modify the content of an HTML element*/
text.innerHTML = text.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.division .line',
    scaleY: [0,1],
    opacity: [0.5,1],
   // In animation and games, it can be seen that many objects are moving from one point to another linearly
    easing: "easeOutExpo",
    duration: 500
  })
  .add({
    targets: '.division .line',
    translateX: [0, document.querySelector('.division .letters').getBoundingClientRect()/*DOMRect*/.width + 20],

    /*Easing functions specify the speed at which an animation progresses at different points within the animation. */ 
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.division .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 500,
    offset: '-=775',
    delay: (el, i) => 35 * (i+1)
  }).add({
    targets: '.division',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });