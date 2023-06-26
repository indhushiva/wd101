<html>
<head>
<title>Registration Form</title>
</head>
<body>
<div id="data">
<form align="center"><h3><b>Student Form</b></h3><br>
<label for="name"><b>Name</b></label>
<input type="text" id="name" required><br><br>
<label for="email"><b>Email</b></label>
<input type="text" id="email" required><br><br>
<label for="name"><b>Password</b></label>
<input type="text" id="password" required><br><br>
<label for="name"><b>Date of Birth</b></label>
<input type="date" id="DOB" onblur="getAge()" required><br><br>
<input type="checkbox" id="accept" name="accept" value="yes">  
<label for="accept"> Accept Terms and Conditions </label>
	
<button onclick="AddData()">Submit</button>
</form>
</div>

<div id="tab">
<h1> Entries </h1>
<table id="list" cellspacing="3" cellpadding="3" border="1"><thead>
<tr>
<td>Name</td><td>Email</td><td>Password</td><td>Dob</td><td>accepted terms?</td>
</tr></thead>
<tbody></tbody></table>
</div>

<script>
function AddData(e)
{
e.preventDefault();
var rows="";
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var DOB=document.getElementById("DOB").value;
if(DOB !="")
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var da = today.getDate() - birthDate.getDate();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(m<0){
        m +=12;
    }
    if(da<0){
        da +=30;
    }

  if(age < 18 || age > 100)
{
alert("Age "+age+" is restrict");

} else {

alert("Age "+age+" is allowed");
}
} else {
alert("please provide your date of birth");
}
}


rows+="<tr><td>"+name+"</td><td>"+email+"</td><td>"+password+"</td><td>"+DOB+"</td></tr>";
$(rows).appendTo("#list tbody");
}
</script>
</body>
</html>
