var happy = 0;
function image_change(image_start,image_end){
    var image_box = document.getElementById(image_id).className;
    happy = parseInt(image_start,10) + 1;
    if(happy >= parseInt(image_end)){
      document.getElementById(image_id).src = "img/" + image_box + image_start + ".png";
    }else{
    document.getElementById(image_id).src = "img/" + image_box + happy + ".png";
  }
}

function switchQ(btn,view){
  var name = document.getElementById('question_' + view).className;
  switch(name){
    case "on":
    document.getElementById('question_' + view).className = "off";
    btn.innerHTML = "View Answers";
    break;
    case "off":
    document.getElementById('question_' + view).className = "on";
    btn.innerHTML = "Hide Answers";
    break;
  }
}
