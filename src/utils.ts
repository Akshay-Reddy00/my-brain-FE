export const extractYouTubeUrl = (link : string) => {
    const urlObj  = new URL(link); // JS API
    const videoId = urlObj.searchParams.get("v"); 

    if(videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
}