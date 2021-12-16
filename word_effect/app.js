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
    targets: '.cls .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({