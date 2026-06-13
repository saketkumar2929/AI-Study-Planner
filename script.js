let subjects =
JSON.parse(localStorage.getItem("subjects")) || [];

displaySubjects();

function addSubject(){

const subject =
document.getElementById("subject").value;

const priority =
document.getElementById("priority").value;

const hours =
document.getElementById("hours").value;

if(subject === "" || hours === ""){
alert("Fill all fields");
return;
}

subjects.push({
subject,
priority:Number(priority),
hours:Number(hours)
});

localStorage.setItem(
"subjects",
JSON.stringify(subjects)
);

displaySubjects();

document.getElementById("subject").value="";
document.getElementById("hours").value="";
}

function displaySubjects(){

const list =
document.getElementById("subjectList");

list.innerHTML="";

subjects.forEach(item=>{

const li=document.createElement("li");

li.innerHTML=
`${item.subject} - ${item.hours} hrs - Priority ${item.priority}`;

list.appendChild(li);

});
}

function generatePlan(){

const plan =
document.getElementById("plan");

plan.innerHTML="<h2>Smart Study Plan</h2>";

let sorted =
[...subjects].sort((a,b)=>
b.priority-a.priority
);

sorted.forEach(item=>{

const div =
document.createElement("div");

div.classList.add("plan-card");

div.innerHTML=
`
<b>${item.subject}</b><br>
Study Time: ${item.hours} Hours<br>
Priority Level: ${item.priority}
`;

plan.appendChild(div);

});
}