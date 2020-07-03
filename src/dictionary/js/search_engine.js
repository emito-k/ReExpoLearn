function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];

    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function infoChan(definition){
  var info = definition.innerHTML;
  info = info.split("<!-- ").join("</strong><p>");
  info = info.split("-->").join("</p>");
  document.getElementById("define").innerHTML = "<strong>"+ info;
}

//<li><a...>Word <!-- Definition of word --> </a></li>
function whatIs(){
  var ul,li,a,ans;
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  a = li[Math.floor(Math.random() * li.length)].getElementsByTagName("a")[0];
  // alert(Math.floor(Math.random() * li.length));
  var info = a.innerHTML;

  info = info.split("<!-- ").join("</strong><p>");
  info = info.split("-->").join("</p>");
  document.getElementById("define").innerHTML = "<strong id='word' style='display:none'>"+ info +"<p><button onclick=document.getElementById('word').style.display=''>Show Answer</button><button onclick=whatIs();>Next</button></p>";

//  ans = document.getElementById("word");

}

// function sort(multiword){
//   var ans = multiword.innerHTML;
// }
