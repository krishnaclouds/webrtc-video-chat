/*
Exploring MediaStream or getUserStream API
*/

//Video Tag element to Attach MediaStream Object
var video = document.querySelector("video");
var videoTag = document.getElementById("localVideo");
var profilePicBtn = document.getElementById("profilePicBtn");
var profilePicCanvas = document.getElementById("profilePicCanvas");
var profilePicOutput = document.getElementById("profilePicOutput");

var width = 320;
var height = 320;
var streaming = false;



profilePicBtn.addEventListener('click', function(event){
    console.log("Click Event Generated");
    takeProfilePic();
    event.preventDefault();
}, false);

function takeProfilePic() {
    var context = profilePicCanvas.getContext('2d');
    if (width && height) {
        profilePicCanvas.width = width;
        profilePicCanvas.height = height;

        context.drawImage(videoTag, 0, 0, width, height);

        var data = profilePicCanvas.toDataURL('image/png');
        profilePicOutput.setAttribute('src', data);
    } else {

        context.drawImage(videoTag, 0, 0, profilePicCanvas.width, profilePicCanvas.height);
        var data = profilePicCanvas.toDataURL('image/png');
        profilePicOutput.setAttribute('src', data);
    }
}

/*
Navigator.getUserMedia -> Chrome or in general
Navigator.mozGetUserMedia -> Mozilla
Navigator.webkitGetUserMedia -> Safari/Opera and IE
*/

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.webkitGetUserMedia;

/*
MediaStream Constraints - More at:
https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API/Constraints
*/
navigator.getUserMedia({
    video: {
        width:{
            min:320,
            max:320
        },
        height:{
            min:320,
            max:320
        }
    },
    audio: false
}, function successCallback(stream) {

    //Successfully retrieved Media Stream from User; so attach it to the Video tag.
    console.log("Successfully retrieved user Stream using Navigator.getUserMedia");
    video.srcObject = stream;
    video.play();

}, function errorCallback(err) {
    // Certain Error in retrieving Media Stream
    console.log(err);
});