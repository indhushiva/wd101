let userForm= document.getElementById("user-entries");

let userEntries =[];

const retrieveEntries = () =>{
let entries = localStorage.getItem("user-entries");

if(entries){

entries = JSON.parse(entries);
}
else{
 entries = [];
}

return entries;
}

let userEntries = retrieveEntries();

const displayEntries = () => {

const entries = retrieveEntries();

const tableEntries = entries.map((entry) => {

const namecell = <' td class= 'brorder px-4 py-2'>$(entry.name}</td>;
const emailcell = <' td class= 'brorder px-4 py-2'>$(entry.email}</td>;
const passwordCell = <' td class= 'brorder px-4 py-2'>$(entry.password}</td>;
const dobCell = <' td class= 'brorder px-4 py-2'>$(entry.dob}</td>;
const acceptCell = <' td class= 'brorder px-4 py-2'>$(entry.accept}</td>;

const row= '<tr> ${namecell} ${emailcell} ${passwordCell} ${dobCell} ${acceptCell} '
return row;

}).join("\n");

const table = <table class="table-auto w-full"> <tr>

<th class="px-4 py-2">Name</th>
<th class="px-4 py-2">Email</th>
<th class="px-4 py-2">Password</th>
<th class="px-4 py-2">Dob</th>
<th class="px-4 py-2">"acceped terms?"</th>
</tr>${tableEntries}</table>

let details = document.getElemenyById("user-entries");
details.innerHTML = table;




}

const saveUserForm = (e) =>{
e.preventDefault();
const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const acceptedTermsAndconditions = document.getElementById('acceptTerms').checked;


const entry = {
name ,
email,
password,
dob,
acceptedTermsAndconditions

};

userEntries.push(entry);
localStorage.setItem("user-entries", JSON.stringify(userEntries));
displayEntries();

}

userForm.addEvenListener("submit", saveUserForm);
displayEntries();


