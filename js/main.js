let schedule = [
  {course: "C1", assignment: "A2", due: "Week 11", completion: "Not Started"},
  {course: "C2", assignment: "A3", due: "Week 11", completion: "Started"},
  {course: "C3", assignment: "A3", due: "Week 10", completion: "Finished"},
  {course: "C4", assignment: "A4", due: "Week 13", completion: "Not Started"},
  {course: "C5", assignment: "A5", due: "Week 15", completion: "Started"},
  {course: "C6", assignment: "A3", due: "Week 10", completion: "Finished"},
];

console.log(schedule);

let htmlOutput = schedule.map(sch => `
  <table>
  <tr>
  <th class="marksheader"></th>
  <th class="marksheader">COURSE</th>
  <th class="marksheader">ASSIGMENT</th>
  <th class="marksheader">DUE DATE</th>
  <th class="marksheader">COMPLETION</th>
  </tr>
  <tr>
    <th></th>
    <th>${course.0}</th>
    <th>${assignment.0}</th>
    <th>${due.0}</th>
    <th class="work">${completion.0}</th>
  </tr>
  <tr>
    <th></th>
    <th>${course.1}</th>
    <th>${assignment.1}</th>
    <th>${due.1}</th>
    <th class="study">${completion.1}</th>
  </tr>
  <tr>
    <th></th>
    <th class="projectdue">${course.2}</th>
    <th class="projectdue">${assignment.2}</th>
    <th class="projectdue">${due.2}</th>
    <th class="projectdue">${completion.2}/th>
  </tr>
  <tr>
    <th></th>
    <th>${course.3}</th>
    <th>${assignment.3}</th>
    <th>${due.3}</th>
    <th class="relax">${completion.3}</th>
  </tr>
  <tr>
    <th></th>
    <th>${course.4}</th>
    <th>${assignment.4}</th>
    <th>${due.4}</th>
    <th class="commute">${completion.4}</th>
  </tr>
  <tr>
    <th></th>
    <th class="projectdue">${course.5}</th>
    <th class="projectdue">${assignment.5}</th>
    <th class="projectdue">${due.5}</th>
    <th class="projectdue">${completion.5}</th>
  </tr>
  </table>`).join('');

document.getElementById('gradebook').innerHTML = htmlOutput;

//document.getElementById('gradebook').innerHTML = "test"
//console.log( schedule[1].id );

//schedule.forEach( schdl => {
//document.getElementById('gradebook').innerHTML += ""

//}

//map the function into empty div
