let schedule = [
  {course: "C1", assignment: "A2", due: "Week 11", completion: "Unbegun"},
  {course: "C2", assignment: "A3", due: "Week 11", completion: "Started"},
  {course: "C3", assignment: "A3", due: "Week 10", completion: "Finished"},
  {course: "C4", assignment: "A4", due: "Week 13", completion: "Unbegun"},
  {course: "C5", assignment: "A5", due: "Week 15", completion: "Started"},
  {course: "C6", assignment: "A3", due: "Week 10", completion: "Finished"},
];

console.log(schedule);

let counter = 1;
let htmlOutput =
'<table>'+
'<tr>'+
'<th class="marksheader"></th>'+
'<th class="marksheader">COURSE</th>'+
'<th class="marksheader">ASSIGMENT</th>'+
'<th class="marksheader">DUE DATE</th>'+
'<td class="marksheader">COMPLETION</th>'+
'</tr>'+
schedule.map(sch =>
`<tr class="row`+counter++ +`">
  <td></td>
  <td>${sch.course}</td>
  <td>${sch.assignment}</td>
  <td>${sch.due}</td>
  <td class="buttonFull">
<button class="${sch.completion} buttonSize" onclick="myFunction(this)">${sch.completion}</button>
  </td>
</tr>`
); +
'</table>';

document.getElementById('gradebook').innerHTML = htmlOutput;

function  myFunction(button){
if(button.innerText == "Unbegun"){
  button.classList.remove("Unbegun")
  button.classList.add("Started")
  button.innerText = "Started";
}
else if (button.innerText == "Started"){
  button.classList.remove("Started")
  button.classList.add("Finished")
  button.innerText = "Finished";
}
else if (button.innerText == "Finished"){
  button.classList.remove("Finished")
  button.classList.add("Unbegun")
  button.innerText = "Unbegun";
}
}
