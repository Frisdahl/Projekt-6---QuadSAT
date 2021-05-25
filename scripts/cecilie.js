console.log ("brief is running")

const antenna_modal = document.getElementById('antenna-modal');
const next_antenna = document.getElementById('next-to-antenna');
const brief_modal = document.getElementById('brief-modal');
const back_brief = document.getElementById('back-to-brief');

function openAntenna() {
 antenna_modal.style.display = "block";
 brief_modal.style.display = "none";
}

function toBrief() {
    antenna_modal.style.display = "none";
    brief_modal.style.display = "block";
}

next_antenna.addEventListener('click', openAntenna);
back_brief.addEventListener('click', toBrief);
