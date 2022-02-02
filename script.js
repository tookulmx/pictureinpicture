const buttonShare = document.getElementById('another-button');
const button = document.getElementById('button-start');
const videoElement = document.getElementById('video');

// Async
// Prompt to select media stream, pass to video Element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Errors
        console.log('You error is: ', error)
    }
}

button.addEventListener('click', async () => {
    // Deactivate button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
}
);

buttonShare.addEventListener('click', selectMediaStream)
