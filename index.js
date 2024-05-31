const switch1 = document.querySelector(".on");
const background= document.querySelector("body");
switch1.addEventListener('click', turnon);
function turnon(){
    if(switch1.style.float="left"){
        background.classList.toggle('white');
        switch1.style.float='right'
    }
    else{
        switch1.style.float="left";
    }
}
const fbviews= document.getElementById("fbviews");
const twitterviews=document.querySelector(".tweetviews")
const instargramviews=document.querySelector(".insterviews")
const youtubeviews=document.querySelector(".youviews");
async function fetchdata(id){
    await fetch(`data.json`)
    .then(response=> response.json())
    .then(data =>{
        // data.forEach(value => {
            fbviews.textContent=data.followers.facebook.views;
            twitterviews.textContent=data.followers.twitter.views
            instargramviews.textContent=data.followers.instargram.views
            youtubeviews.textContent=data.followers.youtube.views
            console.log(twitterviews)
        // });
    // fbviews.textContent=data.posts.views;
    
    })
    .catch(error=>{
        console.error(error)
    })
}
fetchdata(1)
