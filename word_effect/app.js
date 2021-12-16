var cls ={}

cls.opacityIn=[0,1]
cls.opacityOut=[]
cls.durationOut=900;
cls.durationIn=700;
cls.delay=500;
cls.scaleIn[0.2,1]
cls.scaleOut = 3;

anime.timeline({loop:true})
.add({
    targets: '.cls .word-1',
    opacity: cls.opacityIn,
    scale: cls.scaleIn,
    duration: cls.durationIn
  }).add({   targets: '.ml4 .word-1',
  opacity: 0,
  scale: cls.scaleOut,
  duration: cls.durationOut,
  easing: "easeInExpo",
  delay: cls.delay
}).add({
    targets: '.cls .word-2',
    opacity: cls.opacityIn,
    scale: cls.scaleIn,
    duration: cls.durationIn
  }).add({
    targets: '.cls .word-2',
    opacity: 0,
    scale: cls.scaleOut,
    duration: cls.durationOut,
    easing: "easeInExpo",
    delay: cls.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })