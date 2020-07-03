  var T1, T2, T3, T4; //The pattern term variables
  var fir_T1, fir_T2, fir_T3;//The first difference term variables
  var sec_T1, sec_T2;//Second difference term
  var term_value, term_num ;//Term value is "Tn" and Term number is "n"
  var binary;//0-linear 1-quadraticsrf
  var a,b,c,r,sf;//var quad = new Array(a,b,c);
  var sub;//this variable is going to be used to show how the calculations are done
  function input(){
    var e,f,g,h;//These variables is the data that will be inserted into the terms varialbles
    e = document.getElementById('Term1').value;
    f = document.getElementById('Term2').value;
    g = document.getElementById('Term3').value;
    h = document.getElementById('Term4').value;
    T1 = e;
    T2 = f;
    T3 = g;
    T4 = h;
    var terms = new Array(T1, T2, T3, T4);
    //NOTE #MITO add code that can check whether the variables are integers or strings

      fir_T1 = terms[1] - terms[0];//Calculating the common difference
      fir_T2 = terms[2] - terms[1];
      fir_T3 = terms[3] - terms[2];

    var fib1 = terms[1]*1 + terms[0]*1;
    var fib2 = terms[2]*1 + terms[1]*1;
    var fib3 = terms[2]*1, fib4 = terms[3]*1;
    var geo1 = terms[1]*1 / terms[0]*1;
    var geo2 = terms[2]*1 / terms[1]*1;
    var geo3 = terms[3]*1 / terms[2]*1;
    var geo4 = terms[0]*1;
    var first_differ = new Array(fir_T1, fir_T2, fir_T3);
      sec_T1 = first_differ[1] - first_differ[0];
      sec_T2 = first_differ[2] - first_differ[1];
    var second_differ = new Array(sec_T1, sec_T2);
    document.getElementById("sheet").innerHTML = "<strong>Term order</strong> : " + terms.join(" ; ");
    if(T1 == "" || T2  == "" || T3 == "" || T1 == ""){
      alert("PLEASE FILL IN THE TERMS IN ORDER CALCULATE");
    }else{
    //Linear identifer
    //NOTE #MITO Create object that can identify whether a pattern is whether a linear or quadratic
      if(fir_T1 == fir_T2 && fir_T2 == fir_T3 && fir_T1 != 0){
          document.getElementById("sheet").innerHTML += "<br /> <strong>Pattern type : </strong>Linear Pattern";
          binary = 0;
          linear();
        }else if (sec_T1 == sec_T2 && sec_T1 != 0 && sec_T2 != 0) {
          document.getElementById("sheet").innerHTML += "<br /> <strong>Pattern type : </strong>Quadratic Pattern";
          binary = 1;
          quadratic();
        }else if(fib1 == fib3 && fib2 == fib4){
          document.getElementById("sheet").innerHTML += "<br />Pattern type : Fibonacci Pattern";
          binary = 2;
        }else if(geo1 == geo2 && geo1 == geo3){
          document.getElementById("sheet").innerHTML += "<br />Pattern type : Exponential Pattern";
          binary = 3;
          geometric(geo1,geo4);
        }else if (sec_T1 != sec_T2){
          document.getElementById("sheet").innerHTML += "<br /> <strong>Pattern Type : </strong>Unknown Pattern";
        }else if(T1 == T2 && T2 == T3 && T3 == T4){
          document.getElementById("sheet").innerHTML += "<br /><strong>The pattern is constant</strong><br /> Tn = " + T1;
        }
    }
  }
  function linear(){
    //tn = term_value; a = T1; d = fir_T1; n = term_num in the formula "tn = a + d(n - 1)"
    //tn = a + d(n - 1) is+ equavalent to term_num = T1 + fir_T1 * (term_num - 1)
    var terms = new Array(T1, T2, T3, T4);
    var first_differ = new Array(fir_T1, fir_T2, fir_T3);
    var second_differ = new Array(sec_T1, sec_T2);
    var c_sum = T1 - fir_T1;
    //NOTE && fir_T1 != 0 && fir_T2 != 0 && fir_T3 != 0
    if(c_sum > 0){
      if(fir_T1 > 0 && fir_T1 != 1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1) + " + " + fir_T1 + "n";}// (a - d) + dn
      if(fir_T1 < 0 && fir_T1 != 1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1) + " - " + (fir_T1 * -1) + "n";}// (a - d) - dn
      if(fir_T1 == 0){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1);}// a
      if(fir_T1 == 1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1) + " + "+"n";}//(a - d) + n
      if(fir_T1 == -1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1) + " - " + "n";}//(a - d) - n
      }
    if(c_sum < 0){
      if(fir_T1 > 0 && fir_T1 != 1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1) + " + " + fir_T1 + "n";}// (a - d) + dn
      if(fir_T1 < 0 && fir_T1 != 1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1) + " - " + (fir_T1 * -1) + "n";}// (a - d) - dn
      if(fir_T1 == 0){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1);}// a
      if(fir_T1 == 1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1) + " + "+"n";}//(a - d) + n
      if(fir_T1 == -1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + (T1 - fir_T1) + " - " + "n";}//(a - d) - n
      }
    if(c_sum == 0){
      if(fir_T1 > 0 && fir_T1 != 1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = " + fir_T1 + "n";}//dn
      if(fir_T1 < 0 && fir_T1 != -1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = -" + (fir_T1 * -1) + "n";}//-dn
      if(fir_T1 == 1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = n";}//n
      if(fir_T1 == -1){document.getElementById("sheet").innerHTML += "<br /><strong>General term </strong>: Tn = -n";}//-n
      }
    }
    function linearCalc(){
      var terms = new Array(T1, T2, T3, T4);
      var first_differ = new Array(fir_T1, fir_T2, fir_T3);
      var second_differ = new Array(sec_T1, sec_T2);
      var f;
      f = document.getElementById('termN').value;
      term_num = f;
      term_value = T1 - fir_T1 + (fir_T1 * term_num);
      document.getElementById("termCalcTn").innerHTML = "<strong>Tn </strong>= " + term_value;
    }
    function linearCalcSteps(){
      var terms = new Array(T1, T2, T3, T4);
      var first_differ = new Array(fir_T1, fir_T2, fir_T3);
      var second_differ = new Array(sec_T1, sec_T2);
      var f;
      var c_sum = T1 - fir_T1;
      f = document.getElementById('termN').value;
      term_num = f;
      term_value = T1 - fir_T1 + (fir_T1 * term_num);
      if(c_sum > 0){
        if(fir_T1 > 0 && fir_T1 != 1){
          document.getElementById("termCalcTn").innerHTML = "Tn = " + (T1 - fir_T1) + " + " + fir_T1 + "n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " + " + fir_T1 + "(" + term_num + ")";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " + " + (fir_T1 * term_num);
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + term_value;
          }// (a - d) + dn
        if(fir_T1 < 0 && fir_T1 != 1){
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = " + (T1 - fir_T1) + " - " + (fir_T1 * -1) + "n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " - " + (fir_T1 * -1) + "(" + term_num + ")";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " - " + ((fir_T1 * term_num) * -1);
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + term_value;
        }// (a - d) - dn
        if(fir_T1 == 1){
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = " + (T1 - fir_T1) + " + " + "n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " + " + term_num;
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + term_num;
        }//(a - d) + n
        if(fir_T1 == -1){
          document.getElementById("termCalcTn").innerHTML = "Tn = " + (T1 - fir_T1) + " - " + "n";
          document.getElementById("termCalcTn").innerHTML += "Tn = " + (T1 - fir_T1) + " - " + term_num;
          document.getElementById("termCalcTn").innerHTML += "Tn = " + term_value;
        }//(a - d) - n
        }
      if(c_sum < 0){
        if(fir_T1 > 0 && fir_T1 != 1){
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = " + (T1 - fir_T1) + " + " + fir_T1 + "n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " + " + fir_T1 + "(" + term_num + ")";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " + " + (fir_T1 * term_num);
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (fir_T1 * term_num) + (T1 - fir_T1);
        }// (a - d) + dn
        if(fir_T1 < 0 && fir_T1 != 1){
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = " + (T1 - fir_T1) + " - " + (fir_T1 * -1) + "n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " - " + (fir_T1 * -1) + "(" + term_num + ")";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " - " + ((fir_T1 * term_num) * -1);
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + (fir_T1 * term_num);
        }// (a - d) - dn
        if(fir_T1 == 1){
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = " + (T1 - fir_T1) + " + "+"n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " + " + term_num;
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + term_num;
        }//(a - d) + n
        if(fir_T1 == -1){
          var temp = term_num + T1 - fir_T1;
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = " + (T1 - fir_T1) + " - " + "n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + (T1 - fir_T1) + " - " + term_num;
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + temp;
        }//(a - d) - n
        }
      if(c_sum == 0){
        if(fir_T1 > 0 && fir_T1 != 1){
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = " + fir_T1 + "n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + fir_T1 + "(" + term_num + ")";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + fir_T1 * term_num;
        }//dn
        if(fir_T1 < 0 && fir_T1 != -1){
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = -" + (fir_T1 * -1) + "n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + fir_T1 + "(" + term_num + ")";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + fir_T1 * term_num;
        }//-dn
        if(fir_T1 == 1){
          document.getElementById("termCalcTn").innerHTML = "<br />Tn = n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + term_num;
        }//n
        if(fir_T1 == -1){
          document.getElementById("termCalcTn").innerHTML = "Tn = -n";
          document.getElementById("termCalcTn").innerHTML += "<br />Tn = " + term_num;
        }//-n
      }
    }
    function linearTn(){
      var terms = new Array(T1, T2, T3, T4);
      var first_differ = new Array(fir_T1, fir_T2, fir_T3);
      var second_differ = new Array(sec_T1, sec_T2);
      var f;
      f = document.getElementById('termTn').value;
      term_value = f;
      term_num = (term_value - (T1 - fir_T1))/fir_T1;
      if(term_num >= 0){
      document.getElementById("tn_box").innerHTML = "<strong>n</strong> = " + term_num;}
    else{
      document.getElementById("tn_box").innerHTML = "'" + term_num + "' "+ "<strong>is negative value</strong><br /><strong>The number of terms cannot be negative</strong>";}
    }
    function linearTnSteps(){
      var terms = new Array(T1, T2, T3, T4);
      var first_differ = new Array(fir_T1, fir_T2, fir_T3);
      var second_differ = new Array(sec_T1, sec_T2);
      var f;
      f = document.calcTerm1.termTn.value;
      term_value = f;
      term_num = (term_value - (T1 - fir_T1))/fir_T1;
      var c_sum = T1 - fir_T1;
      //NOTE && fir_T1 != 0 && fir_T2 != 0 && fir_T3 != 0
      if(c_sum > 0){
        if(fir_T1 > 0 && fir_T1 != 1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + c_sum + " + " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + c_sum + " + " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + (c_sum * -1) + " = " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + (term_value - c_sum)/fir_T1 + " = n";
        }// (a - d) + dn
        if(fir_T1 < 0 && fir_T1 != -1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + c_sum + " - " + (fir_T1 * -1) + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + c_sum + " - " + (fir_T1 * -1) + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + (fir_T1 * -1) + " = " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + (term_value + (fir_T1 * -1))/fir_T1 + " = n";
        }// (a - d) - dn
        if(fir_T1 == 0){
          document.getElementById("tn_box").innerHTML = "<br /> Tn = " + c_sum;
        }// a
        if(fir_T1 == 1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + c_sum + " + n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + c_sum + " + n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value - c_sum + " = n";
        }//(a - d) + n
        if(fir_T1 == -1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + c_sum + " - " + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + c_sum + " - n";
          document.getElementById("tn_box").innerHTML += "<br /> n = " + c_sum - term_value;
        }//(a - d) - n
        }
      if(c_sum < 0){
        if(fir_T1 > 0 && fir_T1 != 1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + c_sum + " + " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + c_sum + " + " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + c_sum + " = " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + (term_value - c_sum)/fir_T1 + " = n";
        }// (a - d) + dn
        if(fir_T1 < 0 && fir_T1 != -1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + c_sum + " - " + (fir_T1 * -1) + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + c_sum + " - " + (fir_T1 * -1) + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value - c_sum  + " = -" + (fir_T1 * -1) + " n";
          document.getElementById("tn_box").innerHTML += "<br />" + (term_value - c_sum)/(fir_T1 * -1) + " = n";
        }// (a - d) - dn
        if(fir_T1 == 0){
          document.getElementById("tn_box").innerHTML += "<br />Tn = " + c_sum;
        }// a
        if(fir_T1 == 1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + c_sum + " + n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + c_sum + " + n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value - c_sum + " = n";
        }//(a - d) + n
        if(fir_T1 == -1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + c_sum + " - n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value  + " = " + c_sum + " - n";
          document.getElementById("tn_box").innerHTML += "<br />n = " + c_sum - term_value;
        }//(a - d) - n
        }
      if(c_sum == 0){
        if(fir_T1 > 0 && fir_T1 != 1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value/fir_T1 + " = n";
        }//dn
        if(fir_T1 < 0 && fir_T1 != -1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = -" + (fir_T1 * -1) + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = " + fir_T1 + "n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value/fir_T1 + " = n";
        }//-dn
        if(fir_T1 == 1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = n";
        }//n
        if(fir_T1 == -1){
          document.getElementById("tn_box").innerHTML = "<br />Tn = -n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value + " = -n";
          document.getElementById("tn_box").innerHTML += "<br />" + term_value / -1 + " = n";
        }//-n
        }

    }
    function quadratic(){
      var terms = new Array(T1, T2, T3, T4);
      var first_differ = new Array(fir_T1, fir_T2, fir_T3);
      var second_differ = new Array(sec_T1, sec_T2);
      a = second_differ[0]/2;
      b = first_differ[0] - (3 * a);
      c = terms[0] - a - b;
      //NOTE document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = " + a + "n<sup>2</sup> + " + b + "n + " + c;
      if(a > 0){
        if(a == 1){
          if(b > 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> + " + b + "n + " + c;}//n²+ bn + c
          if(b == 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> + " + c;}//n² + c
          if(b == 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> - " + (c*-1);}//n² - c
          if(b < 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> - " + (b * -1) + "n + " + c;}//n² - bn + c
          if(b < 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> - " + (b * -1) + "n - " + (c * -1);}//n² - b - c
          if(b > 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> + " + b + "n - " + (c * -1);}//n² + bn - c
          if(b > 0 && c == 0 && b != 1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> + " + b + "n";}//n² + bn
          if(b < 0 && c == 0 && b != -1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> - " + (b * -1) + "n";}//n² - bn
          if(b == -1 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> - " + "n + " + c;}//n² - n + c
          if(b == 1 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> + "+ "n + " + c;}//NOTE n² + n + c
          if(b == -1 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> - "+ "n - " + (c*-1);}//n² - n - c
          if(b == -1 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> - " + "n";}//n² - n
          if(b == 1 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> + " + "n";}//n² + n
          if(b == 0 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup>";}//n²
      }else if(a != 1){
          if(b > 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> + " + b + "n + " + c;}//an²+ bn + c
          if(b == 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a + "n<sup>2</sup> + " + c;}//an² + c
          if(b == 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a + "n<sup>2</sup> - " + (c*-1);}//an² - c
          if(b < 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + (b * -1) + "n + " + c;}//an² - bn + c
          if(b < 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + (b * -1) + "n - " + (c * -1);}//an² - b - c
          if(b > 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> + " + b + "n - " + (c * -1);}//an² + bn - c
          if(b > 0 && c == 0 && b != 1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a + "n<sup>2</sup> + " + b + "n";}//an² + bn
          if(b < 0 && c == 0 && b != -1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + (b * -1) + "n";}//an² - bn
          if(b == -1 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + "n + " + c;}//an² - n + c
          if(b == 1 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> + "+ "n + " + c;}//NOTE an² + n + c
          if(b == -1 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - "+ "n - " + (c*-1);}//an² - n - c
          if(b == -1 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + "n";}//an² - n
          if(b == 1 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> + " + "n";}//an² + n
          if(b == 0 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup>";}//an²
        }

      }else if(a < 0){
        if(a == -1){
          if(b > 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> + " + b + "n + " + c;}//-n²+ bn + c
          if(b == 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> + " + c;}//-n² + c
          if(b == 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ "n<sup>2</sup> - " + (c*-1);}//-n² - c
          if(b < 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> - " + (b * -1) + "n + " + c;}//-n² - bn + c
          if(b < 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> - " + (b * -1) + "n - " + (c * -1);}//-n² - b - c
          if(b > 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> + " + b + "n - " + (c * -1);}//-n² + bn - c
          if(b > 0 && c == 0 && b != 1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> + " + b + "n";}//-n² + bn
          if(b < 0 && c == 0 && b != -1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> - " + (b * -1) + "n";}//-n² - bn
          if(b == -1 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> - " + "n + " + c;}//-n² - n + c
          if(b == 1 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> + "+ "n + " + c;}//NOTE -n² + n + c
          if(b == -1 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> - "+ "n - " + (c*-1);}//-n² - n - c
          if(b == -1 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> - " + "n";}//-n² - n
          if(b == 1 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup> + " + "n";}//-n² + n
          if(b == 0 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ "n<sup>2</sup>";}//-n²
        }else if(a != -1){
          if(b > 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> + " + b + "n + " + c;}//-an²+ bn + c
          if(b == 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a + "n<sup>2</sup> + " + c;}//-an² + c
          if(b == 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a + "n<sup>2</sup> - " + (c*-1);}//-an² - c
          if(b < 0 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + (b * -1) + "n + " + c;}//-an² - bn + c
          if(b < 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + (b * -1) + "n - " + (c * -1);}//-an² - b - c
          if(b > 0 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> + " + b + "n - " + (c * -1);}//-an² + bn - c
          if(b > 0 && c == 0 && b != 1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a + "n<sup>2</sup> + " + b + "n";}//-an² + bn
          if(b < 0 && c == 0 && b != -1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + (b * -1)+ "n";}//-an² - bn
          if(b == -1 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + "n + " + c;}//-an² - n + c
          if(b == 1 && c > 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> + "+ "n + " + c;}//NOTE -an² + n + c
          if(b == -1 && c < 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - "+ "n - " + (c*-1);}//-an² - n - c
          if(b == -1 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> - " + "n";}//-an² - n
          if(b == 1 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup> + " + "n";}//-an² + n
          if(b == 0 && c == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ a +"n<sup>2</sup>";}//-an²
        }
      }
    }

    function quadCalc(){
        var terms = new Array(T1, T2, T3, T4);
        var first_differ = new Array(fir_T1, fir_T2, fir_T3);
        var second_differ = new Array(sec_T1, sec_T2);
        var f;
        var quad = new Array(a,b,c);
        f = document.getElementById('termN').value;
        term_num = f;
        term_value = a*(term_num*term_num) + (b * term_num) + c;
        document.getElementById("termCalcTn").innerHTML = "<strong>Tn = </strong>" + term_value;
    }
    function quadCalcTn(){
          var terms = new Array(T1, T2, T3, T4);
          var first_differ = new Array(fir_T1, fir_T2, fir_T3);
          var second_differ = new Array(sec_T1, sec_T2);
          var f;
          var quad = new Array(a,b,c);
          f = document.getElementById('termTn').value;
          term_value = f;
          term_num = (-b + Math.sqrt((b * b) - 4 * a * (c - term_value)))/2 * a;
          document.getElementById("tn_box").innerHTML ="<strong>n</strong> = " + term_num;
    }

    function geometric(r,sf){
      if(sf > 0){
        if(r > 0 && sf != 1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ sf + "·" + r +"<sup>n - 1</sup>";}
        if(r < 0 && sf != 1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ sf + "·" + (r*-1) +"<sup>n - 1</sup>";}
        if(r > 0 && sf == 1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = " + r +"<sup>n - 1</sup>";}
        if(r < 0 && sf == 1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -" + (r*-1) +"<sup>n - 1</sup>";}
        if(r == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = <i style='color:red;'>0</i>";}
      }else if(sf < 0){
        if(r > 0 && sf != -1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -"+ (sf*-1) + "·" + r +"<sup>n - 1</sup>";}
        if(r < 0 && sf != -1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = "+ sf + "·" + (r*-1) +"<sup>n - 1</sup>";}
        if(r > 0 && sf == -1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = -" + (r*-1) +"<sup>n - 1</sup>";}
        if(r < 0 && sf == -1){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = " + (r*-1) +"<sup>n - 1</sup>";}
        if(r == 0){document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = <i style='color:red;'>0</i>";}
      }else if(sf == 0){
        document.getElementById("sheet"). innerHTML += "</br><strong>General term :</strong> Tn = <i style='color:red;'>0</i>";
      }
    }

    function expoCalcN(){
      term_num = (-b + Math.sqrt((b * b) - 4 * a * (c - term_value)))/2 * a;
      document.getElementById("tn_box").innerHTML ="<strong>n</strong> = " + term_num;
    }

    function calc(){
        switch(binary){
          case 0:
          linearCalc();
          break;
          case 1:
          quadCalc();
          break;
          case 2:

          break;
          case 3:
          expoCalcN();
          break;
        }
    }

    function calcTn(){
        switch(binary){
          case 0:
          linearTn();
          break;
          case 1:
          quadCalcTn();
          break;
          case 2:
          alert("It works?");
          break;
          case 3:
          alert("azure");
          break;
        }
        // //Change comparison to
        // if(1 == 2){
        //   if(binary == 0){
        //     linearTnSteps();
        //     document.getElementById("opt1").innerHTML = "";
        //   }
        //   if(binary == 1){
        //     quadCalcTn();
        //     document.getElementById("opt1").innerHTML = "<br />Not available for Quadratic Patterns";
        //   }
        // }
        // else{
      // }

    }
