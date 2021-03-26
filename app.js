const videoElement = document.getElementById('video')
const button = document.getElementById('button')


//prompt the user to select the media screen,pass to video element then play

async function selectMediaScreen() {
    try {
        const mediaScreen = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaScreen
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (e) {
        console.log(e)
    }
}
button.addEventListener('click', async () => {
    button.disabled = true
    await videoElement.requestPictureInPicture()
    button.disabled = false
})
selectMediaScreen()