

//onclick="myFunction(); return false;"
//<script>

	function name_onblur() {
x=document.myform.fullname.value ;
if(x.length==0)
  {
   alert("Please Enter Your Name");
  return false;
  }
  for(var i=0;i<x.length;i++)
  {
        y=x.charAt(i);
		if(y==' ')
	      {
	      }
        else if(y>=0 || y<=9)
        {
         window.alert("Invalid Name");
         return false;
         break;
         }
  }
  
return true;
}

function email_onblur() {
at=document.myform.email.value.indexOf("@"); 

if (at == -1)
	{
	alert("Not a Valid E-mail Address")
	return false
	}
return true;
}

function phone_onblur() {
x= document.myform.mobile.value;
if(x.length==0)
  {
   alert("Please Enter Your Phone No.");
  return false;
  }
for(var i=0;i<x.length;i++)
	    {
	      y=x.charAt(i);
          
	      if(y>0 || y<9 || y=='+')
	      {
	      }
	      else
	         {
	         window.alert("Phone No. Must be Digit only");
	         return false;
	         break; 
	         }
	      }
}
	$(document).ready(function () {
		$("#location").val(window.location)
// process the form/*
/*
$('form').submit(function (event) {



  // process the form
  $.ajax({
	type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
	url: 'https://script.google.com/macros/s/AKfycbwurn_7KFfCSt75vehhzmAWEyr4bz-sHL0cCFcjOeB2MdpDyvpNcS0UpnUNHvFz-aiF/exec?callback=loadData',
	data: $("#idForm").serialize(), // our data object
	dataType: 'json', // what type of data do we expect back from the server
	encode: true,
	success: function (data, textStatus, xhr) {
	  alert(xhr.status);
	  console.log(xhr.status);
	}, error: function (XMLHttpRequest, textStatus, errorThrown) {

	  $('#idForm')[0].reset();
	  alert($("#message").html());
	}
  })
	.done(function (data) {

	  alert(data);
	  console.log(data);
	});

  // stop the form from submitting the normal way and refreshing the page
  event.preventDefault();
});*/

});
	function loadData()
	{

	}
function myFunction(){

	
var form = $("#idForm"); 


$.ajax({
    type: "POST",
    url: "https://script.google.com/macros/s/AKfycbwurn_7KFfCSt75vehhzmAWEyr4bz-sHL0cCFcjOeB2MdpDyvpNcS0UpnUNHvFz-aiF/exec?callback=loadData",// where you wanna post
    data: form.serialize(),
    processData: false,
    contentType: false,
	crossDomain: true,
    error: function(jqXHR, textStatus, errorMessage) {
		alert($("#message").html());
	   window.location.href = 'http://crm.bonrix.in/contact-us.html';
    },
    success: function(data) {console.log(data)
	alert("sdf")
	} 
});



}
//</script>