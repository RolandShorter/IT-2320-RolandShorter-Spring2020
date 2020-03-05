"use strict";
var $ = function (id) { return document.getElementById(id); };

 window.onload = function() {
      //$("reset_form").onclick = resetForm;
      $("mstatus").onchange = mstatusChange;
      $("fname").focus();
  };
  
  function mstatusChange() {
     var mstatus = $('mstatus').value;
	 if (mstatus=="Married") {
	    $('sname').disabled = false;
	 } else {
	 	 $('sname').disabled = true;
	 }
  }


var registerEntries = function() {
    //var header = "";
    //var html = "";
    //var required - "<span> Required field</span>";
    var msg = "Pleae fill in all required fields";
    var fname =$('fname').value;
    var lname  = $('lname').value; 
    var address1 = $('address1').value;
    var address2 = $('address2').value;
    var city = $('city').Value;
    var state  = $('state').value;
    var zipcode = $ ('zipcode').value;
    var gender  = $('gender').checked;
    var dob = $('dob').value;
    var mstatus = $('mstatus').value;
    var sname  = $('sname').value;
    var email = $('email').value;
    var phone = $('phone').value;
    var password = $('password').value;
    var password2 = $('password2').value;
	
	var formGood = true;

    if (fname == ""){
	    formGood = false;
        $('fnameLabel').className = "redtext";
    } else {
	    $('fnameLabel').className = "blacktext";
	}
	
    if (lname == ""){
		formGood = false;
        $('lnameLabel').className = "redtext";
    } else {
	    $('lnameLabel').className = "blacktext";
	}
	
    if (address1 == ""){
        formGood = false;
        $('address1Label').className = "redtext";
    } else {
	    $('address1Label').className = "blacktext";
	}
    
    if (address2 == ""){
        formGood = false;
        $('address2Label').className = "redtext";
    } else {
	    $('address2Label').className = "blacktext";
	}
    if (city == ""){
        formGood = false;
        $('citylabel').className = "redtext";
    } else {
	    $('citylabel').className = "blacktext";
	}
    if (state == ""){
        formGood = false;
        $('statelabel').className = "redtext";
    } else {
	    $('statelabel').className = "blacktext";
	}
    if (zipcode == ""){
        formGood = false;
        $('zipcodelabel').className = "redtext";
    } else {
        $('zipcodelabel').className = "blacktext";
        
	}if (gender == ""){
        formGood = false;
        $('genderlabel').className = "redtext";
    } else {
	    $('genderlabel').className = "blacktext";
	}
    if (dob == ""){
        formGood = false;
        $('doblabel').className = "redtext";
    } else {
	    $('doblabel').className = "blacktext";
	}
     if (mstatus == ""){
        formGood = false;
        $('mstatuslabel').className = "redtext";
    } else {
	    $('mstatuslabel').className = "blacktext";
	}
    if (sname == ""){
        formGood = false;
        $('snamelabel').className = "redtext";
    } else {
	    $('snamelabel').className = "blacktext";
	}
    if (email == ""){
        formGood = false;
        $('emaillabel').className = "redtext";
    } else {
	    $('emaillabel').className = "blacktext";
	}
    if (phone == ""){
        formGood = false;
        $('phonelabel').className = "redtext";
    } else {
	    $('phonelabel').className = "blacktext";
	}
    if (password == ""){
        formGood = false;
        $('passwordlabel').className = "redtext";
    } else {
	    $('passwordlabel').className = "blacktext";
    }
    if (password2 == ""){
        formGood = false;
        $('password2label').className = "redtext";
    } else {
	    $('password2label').className = "blacktext";
    }
    if (formGood) {
        $('myForm').submit();
        $('errorMsg').innerHTML = "";
    } else {
        $('errorMsg').innerHTML = msg;
    }

    
}
