function validateForm(){  
var name=document.GreatLearningAssignmentForm.name.value;
var name=document.GreatLearningAssignmentForm.name.value.length;   
var email=document.GreatLearningAssignmentForm.email.value; 
var mobileNumber=document.GreatLearningAssignmentForm.mobileNumber.value;  
var mobileNumber=document.GreatLearningAssignmentForm.mobileNumber.value.length;   
var workExeperience=document.GreatLearningAssignmentForm.workExeperience.value;
  
if (name==null || name==""){  
  alert("Please fill the Name field");  
  return false;  
	}
else if (name<3) {
  alert("Name field should contain minimun 3 characters");
return false;  
}
else if (email==null || email=="") {
  alert("Please enter Your Email Address");
  return false;  
	}
else if (mobileNumber==null || mobileNumber=="") {
  alert("Please enter Your Mobile Number");
  return false;  
	}
else if (mobileNumber!=10) {
alert("Please enter valid Mobile Number");
return false;  
}
else if (workExeperience==null || workExeperience=="") {
  alert("Please write Your Work Exeperience");
  return false;  
	}

}

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }