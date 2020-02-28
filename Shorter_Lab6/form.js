"use strict";
var $ = function (id) { return document.getElementById(id); };

var registerEntries = function() {
    var header = "";
    var html = "";
    var required - "<span> Required field</span>";
    var msg = "Pleae fill in all required fields";
    var fname =$ (fname).value;
    var lanme  = $(lname).value; 
    var address1 = $(address1).value;
    var address2 = $(address2).value;
    var city = $(city).value;
    var state  = $(state).value;
    var zipcode = $ (zipecode).value;
    var gender  = $(gender).checked;
    var birth = $(birth).value;
    var mstatus = $(mstatus).value;
    var sname  = $(sname).value;
    var email = $(email).value;
    var phone = $(phone).value;
    var password = $(passowrd).value;
    var password2 = $(password2).value;

    if (fname == ""){
        fname = required;
        header = msg;
    }
    if (sname == ""){
        sname = required;
        header = msg; 
    }
    if (address1 == ""){
        address1 = required;
        header = msg;
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