function show_answer(x){
  var xNum = x + 1;
  var name = document.getElementById("q" + xNum + "ans").className;
  if(name == "normal"){
    document.getElementById("q" + xNum + "ans").className = "correct";
    document.getElementById("q" + xNum + "btn").innerHTML = "Hide Answer";
  }else{
    document.getElementById("q" + xNum + "ans").className = "normal";
    document.getElementById("q" + xNum + "btn").innerHTML = "Show Answer";
  }
}
var question = 1;
var xNum = 0,yNum = 0;
var start_code = parseInt(document.getElementById("mpc_start_code").className, 10);

function next_question(){
    question++;
    if(question > start_code){
      xNum = start_code;
      yNum = 1;
      question = 1;
    }else{
       xNum = question - 1;
       yNum = question;
    }

    document.getElementById("q" + xNum).className = "off";
    document.getElementById("q" + yNum).className = "on";
}

function previous_question(){
  question--;
      if(question == 0){
        xNum = 1;
        yNum = start_code;
        question = start_code;
      }else{
         xNum = question + 1;
         yNum = question;
      }
      document.getElementById("q" + xNum).className = "off";
      document.getElementById("q" + yNum).className = "on";
}

function album_code(image_name,image_int){
  var image = document.getElementById(image_name + image_int).name;
  switch(image){
    case image_name + image_int:
     document.getElementById(image_name + image_int).src="img/"+image_name + image_int +"_1.png";
     document.getElementById(image_name + image_int).name = image_name + image_int +"_1";
    break;
    case image_name + image_int +"_1":
     document.getElementById(image_name + image_int).src="img/"+image_name + image_int +"_2.png";
     document.getElementById(image_name + image_int).name = image_name + image_int +"_2";
    break;
    case image_name + image_int +"_2":
     document.getElementById(image_name + image_int).src="img/"+image_name + image_int +"_3.png";
     document.getElementById(image_name + image_int).name = image_name + image_int +"_3";
    break;
    default:
     document.getElementById(image_name + image_int).src="img/"+image_name + image_int+".png";
     document.getElementById(image_name + image_int).name = image_name + image_int;
    break;
  }
}
