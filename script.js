const ratingEls= document.querySelectorAll(".rating")
const btnEl= document.getElementById("btn")

const containerEl=document.getElementById("container")

let selectedReading="";


ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener( "click" ,(event)=>{
        removeActive();
        selectedRating=
        event.target.innerText||event.target.parentNode.innerText;
        
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active")
    });
});


btnEl.addEventListener("click",()=>{
    if(selectedRating !==""){
        containerEl.innerHTML=`<strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback:${selectedRating}</strong>
        <p>we will use your feedback to improve our customer support.</p>

        `;
    }
})

function removeActive(){
    ratingEls.forEach((ratingEls)=>{
        ratingEls.classList.remove("active");
    });
}