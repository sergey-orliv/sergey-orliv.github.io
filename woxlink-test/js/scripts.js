var submit = document.getElementById('button-submit');
var results = new Object;
var rand = "";


function value_error(x){
  if(!x.classList.contains('error')){
    x.classList.add('error');
    let mistake = x.parentNode;
    mistake.classList.add('mistake');
  }
}

function value_good(x){
  if(x.classList.contains('error')){
    x.classList.remove('error');
    let mistake = x.parentNode;
    mistake.classList.remove('mistake');
  }
}

function check_good(x){
  if(x.nextElementSibling.classList.contains('error')){
     x.nextElementSibling.classList.remove('error');
  }
}

function check_error(x){
  if(!x.nextElementSibling.classList.contains('error')){
     x.nextElementSibling.classList.add('error');
  }
}

function funcQestionOne(x){
  if(x == 1){
    results.QestionOne = "Non";
  }
  if(x == 2){
    results.QestionOne = "Yes";
  }
  if(x == 3){
    results.QestionOne = "Test";
  }
}

function funcQestionTwo(x){
  if(x == 1){
    results.QestionTwo = "Faites votre choix";
  }
  if(x == 2){
    results.QestionTwo = "Faites votre choix one";
  }
  if(x == 3){
    results.QestionTwo = "Faites votre choix two";
  }
}

function showResults(x){
  var showString ="";
  for(var key in x){
    showString+=""+key+": "+x[key]+"\n";
  }
  alert(showString);
}

submit.onclick = function(e){
  e.preventDefault();
  var form = document.getElementById('main-form');
  var nom = form.Nom;
  var prenom = form.Prenom;
  var telephone = form.Telephone;
  var cod = form.Cod;
  var courriel = form.Courriel;
  var control = form.Control;
  var agrOne = form.agreementOne;
  var agrTwo = form.agreementTwo;
  var qestionOne = form.qestionOne.value;
  var qestionTwo = form.qestionTwo.value;
  var tele_pattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$/;
  var email_pattern =/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  
  var fail = true;

  if((nom.value=="") || (nom.value==" ") || !isNaN(nom.value)){
    value_error(nom);
    fail = false;
  } else {
    value_good(nom);
  }
  
  if((prenom.value=="") || (prenom.value==" ") || !isNaN(prenom.value)){
    value_error(prenom);
    fail = false;
  } else {
    value_good(prenom);
  }
  
  if((cod.value=="") || (cod.value==" ") || isNaN(cod.value)){
    value_error(cod);
    fail = false;
  } else {
    value_good(cod);
  }
  
  if(tele_pattern.test(telephone.value) == false){
    value_error(telephone);
    fail = false;
  } else {
    value_good(telephone);
  }
  
  if(email_pattern.test(courriel.value) == false){
    value_error(courriel);
    fail = false;
  } else {
    value_good(courriel);
  }
  
  if(!agrOne.checked){
    check_error(agrOne);
    fail = false;
  } else {
    check_good(agrOne);
  }
  
  if(!agrTwo.checked){
    check_error(agrTwo);
    fail = false;
  } else {
    check_good(agrTwo);
  }
  
  if(control.value != 550){
    control.classList.add('error');
    fail = false;
  } else {
    control.classList.remove('error');
  };
  
  if(fail == true){
    results.UserName = nom.value;
    results.UserSurname = prenom.value;
    results.UserTelephon = telephone.value;
    results.UserCod = cod.value;
    results.UserEmail = courriel.value;
    funcQestionOne(qestionOne);
    funcQestionTwo(qestionTwo);
    showResults(results);
  }
};







  
  
  




