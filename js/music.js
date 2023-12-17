// Get the audio element and the button
var myAudio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");

// Add an event listener to the button
playButton.addEventListener("click", function() {
    // Play the audio
    myAudio.play();
});