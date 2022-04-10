async function getVideos(){
    const response = await fetch('http://15.228.190.209:3333/videos');
    return response.json();
}

async function getAllVideos(){
    const videos = await getVideos();
    console.log(videos)
}

getAllVideos()

