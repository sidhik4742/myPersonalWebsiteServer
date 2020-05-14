$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        html : true,
        placement : 'right'
    });
    $("#formButton").click(function(){
        var fullName = $("#fullName").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var message = $("#message").val();
        //console.log("FullName : "+fullName);
        //console.log("Email : "+email);
        //console.log("Mobile No : "+phone);
        //console.log("Message : "+message);
        if(validator()){
            console.log("Form Submitted");
            $("#Myform").submit();
            alert("Thank you for Submission");
            //var formData = $(this).serializeArray();
            //console.log(formData);
        }
        else{
            alert("Error While submitting");
            console.log("error while submitting");
        }
    });

    function validator(){
        var fullName = $("#fullName").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var emailValidator = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //console.log("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;");
        //console.log("FullName : "+fullName);
        // console.log("Email : "+email);
        if(!emailValidator.test(email)){
            alert("Invalid Email ID...!!!!!");
            return false;
        }
        else if(phone.length !== 10){
            alert("Please enter the correct mobile No...!!!!! ")
        }
        else{
            return true;
        }
    }
});



