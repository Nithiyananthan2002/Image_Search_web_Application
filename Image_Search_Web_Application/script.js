 
 //api accesskey//
 const accesskey="dByZ0Vct4FfAJ6gtpdIh6BNJCgZ1sib8ekPhapYPedk";


 //getting a element//
 const formE1 = document.querySelector("form");
 const inputE1 = document.getElementById("search-input");
 const searchResults = document.querySelector(".search-results");
 const ShowMore = document.getElementById("show-more-button");


 let inputData = "";
 let page = 1;


 async function searchImages() {
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    //fetch the data by url and convert into j.son format//
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1){
        searchResults.innerHTML =  "";
    }

    results.map((result) =>{

        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");

        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink= document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

//adding elements into div(imagewrapper)//
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });


//for page no//
page++
if(page > 1){
    ShowMore.style.display = "block";
}
 }


 /*event listener*/
 formE1.addEventListener("submit" , (event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
 });


 //show more eventlistener//
 ShowMore.addEventListener("click" , () =>{
    searchImages();
 });

