/*
Exploring MediaStream or getUserStream API
*/

//Video Tag element to Attach MediaStream Object
var video = document.querySelector("video");

/*
Navigator.getUserMedia -> Chrome or in general
Navigator.mozGetUserMedia -> Mozilla
Navigator.webkitGetUserMedia -> Safari/Opera and IE
*/

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.webkitGetUserMedia;

navigator.getUserMedia({
    video: {
        maxWidth: 320,
        maxHeight: 180
    },
    audio: false
}, function onSuccess(stream) {

    //Successfully retrieved Media Stream from User; so attach it to the Video tag.
    console.log("Successfully retrieved user Stream using Navigator.getUserMedia");
    video.srcObject = stream;
    video.play();

}, function onError(err) {
    // Certain Error in retrieving Media Stream
    console.log(err);
});