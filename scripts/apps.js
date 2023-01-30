let previousSelections = [];
let rndBtn = document.getElementById('rndBtn');
let displayName = document.getElementById('displayName');
let previousNames = document.getElementById('previousNames');
let body = document.getElementById('body');
let sun1 = document.getElementById('sun1');
let sun2 = document.getElementById('sun2');
let sun3 = document.getElementById('sun3');
let sun4 = document.getElementById('sun4');
let moon1 = document.getElementById('moon1');
let moon2 = document.getElementById('moon2');
let moon3 = document.getElementById('moon3');

rndBtn.addEventListener('click', function () {
    getJson();
});
function getJson() {
    fetch('/data/data.JSON').then(
        response => response.json()
    ).then(
        data => {
            studentNames = data.studentNames;
            let selectedName = studentNames[Math.floor(Math.random() * studentNames.length)].firstName
            while (previousSelections.includes(selectedName)) {
                selectedName = studentNames[Math.floor(Math.random() * studentNames.length)].firstName;
            }
            if (previousSelections.length < 5) {
                previousSelections.push(selectedName);
            } else {
                previousSelections.shift();
                previousSelections.push(selectedName)
            }
            displayName.textContent = selectedName;
            previousNames.textContent = previousSelections;
        }
    )
}
let date = new Date();
let currentHour = date.getHours();

if (currentHour >= 6 && currentHour < 18) {
    body.className = "body";
    sun1.classList.remove('hide');
    sun2.classList.remove('hide');
    sun3.classList.remove('hide');
    sun4.classList.remove('hide');
} else {
    body.className = "body2";
    moon1.classList.remove('hide');
    moon2.classList.remove('hide');
    moon3.classList.remove('hide');
}