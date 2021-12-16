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
  }).add({