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
<input type="date" id="DOB" required><br><br>
<input type="checkbox" id="accept" name="accept" value="yes">  
<label for="accept"> Accept Terms and Conditions </label>
	
<button onclick="AddData()">Add</button>
</form>
</div>

<div id="tab">
<h1> Entries </h1>
<table id="list" cellspacing="3" cellpadding="3" border="1"><thead>
<tr>
<td>Name</td><td>Email</td><td>Password</td><td>Date of Birth</td>
</tr></thead>
<tbody></tbody></table>
</div>

<script>
function AddData(e)
{
e.preventDefault();
var rows="";
var name=document.getElementById("Name").value;
var email=document.getElementById("Email").value;
var password=document.getElementById("Password").value;
var DOB=document.getElementById("DOB").value;
rows+="<tr><td>"+name+"</td><td>"+email+"</td><td>"+password+"</td><td>"+DOB+"</td></tr>";
$(rows).appendTo("#list tbody");
}
</script>

</body>
</html>
