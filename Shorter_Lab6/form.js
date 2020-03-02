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
 
    }
    if (address2 == ""){
        address2 = required;
        header = msg;
    }
    if (city == ""){
        city = required;
        header = required;
    }
    if (state == ""){
        state = required;
        header = required;
    }
    if (zipcode == ""){
        zipcode = required;
        header = msg;
    }
    if (gender == false){
        gender = required;
        header = msg;
    }
    if (birth == ""){
        birth = required;
        header = msg;
    }
    if (mstatus == ""){
        mstatus = required;
        header = msg;
    }
    if (sname == ){
        
    }
    if (email == ""){
        email = required;
        header = msg;
    }
    if (phone == ""){
        phone = required;
        header = msg;
    }
    if (password == ""){
       password = required;
       header = msg; 
    }
    if (password2 == ""){
       password2 = required;
       header = msg; 
    }

};

var resetForm = funtion() {
    $("myForm").reset();
    $(fname)
}