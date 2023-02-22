const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCe4Qdrn-I4BD2JvkEssajDw&part=snippet%2Cid&order=date&maxResults=9"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '56164c19d7msh4cb09cc91d90248p123dd3jsn2509030f8298',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById("content");

const igna = document.getElementById("igna");

const youtubeIcon = document.getElementById("youtube-icon")
const instagramIcon = document.getElementById("instagram-icon")

async function fetchData(urlAPI){
    const response = await fetch(urlAPI,options);
    const data = await response.json();
    return data;
};

(async ()=>{
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video =>`
        <div class="group relative" onclick=' window.location.href = "https://www.youtube.com/shorts/${video.id.videoId}"'>
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none ">
                <img  src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700 font-extrabold">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>`).slice(0,8).join("")}`;

        content.innerHTML = view;

    }
    catch(error){
        console.error(error)
    }
})();

function redirigir(video){
    console.log(`https://www.youtube.com/shorts/${video}`)
    window.location.href = `https://www.youtube.com`

}
(async ()=>{
    try{
        const videos = await fetchData(API);
        igna.onclick = () => {
            console.log()
            window.location.href = `https://www.youtube.com/channel/${videos.items[0].snippet.channelId}`};

        youtubeIcon.onclick =  () => window.location.href =`https://www.youtube.com/channel/${videos.items[0].snippet.channelId}`;
        instagramIcon.onclick= () => window.location.href = "https://www.instagram.com/el_curioso_dein/";
    }

    catch(error){
        console.error(error);
    }
})();