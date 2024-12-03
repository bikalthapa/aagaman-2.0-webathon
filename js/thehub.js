

const slide= document.querySelectorAll('.slide');
var count=0;
let next_btn = document.getElementById("next_btn");

slide.forEach((slides,index)=>{
    slides.style.left = `${index * 100 }%`
})
function gorev(){
    if(count!=0){
       
    count--
    slideimg()
    }
}

function gonext(){

    if(count<slide.length-1){
     
    count++
    slideimg()
    }
}
const slideimg =()=>{
    slide.forEach(
        (slide) =>{
            slide.style.transform =`translateX(-${count *100}%)`;
        }
    )
}

// setInterval(()=>{
//     if(count==)
//     next_btn.click();
// },1000);