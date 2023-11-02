const count = 10;
const imageContainer = document.getElementById("img-container");
const apikey = "-VngMtA0jnbz_XEVThPzMX3h1O1s0t0SWfrWIAVVG70";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;
let photosArray = [];


function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}
function displayPhotos(){
    photosArray.forEach((photo)=>{
        const item = document.createElement("a");
        // console.log(photo);
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank"
        });

        const img = document.createElement("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: `${photo.alt_description}`
        });

        item.append(img);
        imageContainer.append(item);
    })
}

async function getPhotos(){
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
}

window.addEventListener("scroll", ()=>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight){
        // var element = document.getElementById("img-container");
        getPhotos();
    }
})

getPhotos();