var cls = {};
var text = document.querySelector('.cls .word');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


cls.opacityIn = [0, 1];
cls.scaleIn[0.2, 1];
cls.scaleOut = 3;
//cls.opacityOut = [];
cls.durationOut = 600;
cls.durationIn = 800;
cls.delay = 500;


anime.timeline({ loop: true })
    .add({
        targets: '.cls .word-1',
        opacity: cls.opacityIn,
        scale: cls.scaleIn,
        duration: cls.durationIn
    }).add({
        targets: '.cls .word-1',
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
        targets: '.cls .word-3',
        opacity: cls.opacityIn,
        scale: cls.scaleIn,
        duration: cls.durationIn
    }).add({
        targets: '.cls .word-3',
        opacity: 0,
        scale: cls.scaleOut,
        duration: cls.durationOut,
        easing: "easeInExpo",
        delay: cls.delay
    }).add({
        targets: '.cls',
        opacity: 0,
        duration: 500,
        delay: 500
    });