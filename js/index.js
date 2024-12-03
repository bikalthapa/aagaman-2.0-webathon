let curr_text = 0;
let curr_alphabet = 0;
let text = [" ","FEEL GOOD. NOT BAD."];
let display_area = document.getElementById("writingAnimation");
// Function for writing animation
setInterval(()=>{
    display_area.innerHTML = text[curr_text].slice(0,curr_alphabet);
    if(curr_alphabet<text[curr_text].length){// Increase the value of current text if any alphabet is remained to type
        curr_alphabet++;
    }else{// if no alphabet is remained to type move towards the next text and set the initial alphabet to 0
        if(curr_text<text.length-1){
            curr_text ++;
            curr_alphabet = 0;
        }else{
            curr_text = 0;
            curr_alphabet = 0;
        }
    }
},100);

//Slider ho
let resbtn= document.querySelector('#resbtn');
let navbar= document.querySelector('.navbar');

resbtn.addEventListener('click',()=>{
        resbtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
});

// const slide= document.querySelectorAll('.slide');
// var count=0;

// slide.forEach((slides,index)=>{
//     slides.style.left = `${index * 100 }%`
// })
// function gorev(){
//     if(count!=0){
       
//     count--
//     slideimg()
//     }
// }
// function gonext(){

//     if(slide.length-1){
     
//     count++
//     slideimg()
//     }
// }
// const slideimg =()=>{
//     slide.forEach(
//         (slide) =>{
//             slide.style.transform =`translateX(-${count *100}%)`;
//         }
//     )
// }