// Declaring variables for checklist
var checkList = ["push-up","mountain-climber","squats","plank","Jumping-jacks","Lunges-with-Twist"];
let is_all_checked = true;
let complete_btn = document.getElementById("complete");
let streak_container = document.getElementById("streak");

let streak_count = 0;

complete_btn.addEventListener("click",()=>{
    let check_item;
    for(let i = 0; i<checkList.length; i++){
        check_item = document.getElementById(checkList[i]);
        if(!check_item.checked){
            is_all_checked = false;
        }
    }
    if(is_all_checked){
        streak_count++;
        streak_container.innerHTML = "Streak🔥 "+streak_count;
    }
});
