let week = 10;
document.getElementById('weekNum').value = week;
function changeWeek(newWeek) {
  week = newWeek;
  printCourses();
}



let schedule = [
  {course: "C1", assignment: "A2", due:11, completion: "unbegun"},
  {course: "C2", assignment: "A3", due:11, completion: "started"},
  {course: "C3", assignment: "A3", due:10, completion: "finished"},
  {course: "C4", assignment: "A4", due:13, completion: "unbegun"},
  {course: "C5", assignment: "A5", due:15, completion: "started"},
  {course: "C6", assignment: "A3", due:10, completion: "finished"},
];

console.log(schedule);

// let counter = 1;

function printCourses() {

  let htmlOutput =
    '<table>'+
    '<tr>'+
    '<th class="marksheader"></th>'+
    '<th class="marksheader">COURSE</th>'+
    '<th class="marksheader">ASSIGMENT</th>'+
    '<th class="marksheader">DUE DATE</th>'+
    '<td class="marksheader">COMPLETION</th>'+
    '</tr>'+
    schedule.map((sch, index) =>
    `<tr class="`+ ((sch.due <= week) ? 'due' : '') +`">
      <td></td>
      <td>${sch.course}</td>
      <td>${sch.assignment}</td>
      <td>Week ${sch.due}</td>
      <td class="buttonFull">
    <button class="${sch.completion} buttonSize" onclick="myFunction(${index})">${sch.completion}</button>
      </td>
    </tr>`
    ).join('') +
    '</table>';

  document.getElementById('gradebook').innerHTML = htmlOutput;
}


function  myFunction(index){

  if (schedule[index].completion == "unbegun") {
    schedule[index].completion = "started";
  }
  else if (schedule[index].completion == "started") {
    schedule[index].completion = "finished";
  }
  else if (schedule[index].completion == "finished") {
    schedule[index].completion = "unbegun";
  }
  // else if () {
  //
  // }
  //
  // if(button.innerText == "Unbegun"){
  //   button.classList.remove("Unbegun")
  //   button.classList.add("Started")
  //   button.innerText = "Started";
  // }
  // else if (button.innerText == "Started"){
  //   button.classList.remove("Started")
  //   button.classList.add("Finished")
  //   button.innerText = "Finished";
  // }
  // else if (button.innerText == "Finished"){
  //   button.classList.remove("Finished")
  //   button.classList.add("Unbegun")
  //   button.innerText = "Unbegun";
  // }
  printCourses();
}

printCourses();
