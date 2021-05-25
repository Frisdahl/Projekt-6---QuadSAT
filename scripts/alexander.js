const mission_container = document.getElementById('create-mission-modal');
const create_mission_btn = document.getElementById('create-mission-menu');
const cancel_mission_btn = document.getElementById('close-btn-id');
const open_mission_btn = document.getElementById('open-mission');

console.log(mission_container);

function createMission() {
    mission_container.style.display = "block";
}

function cancelMission() {
  mission_container.style.display = "none";
}


function openMission() {
  console.log("hej");
}




create_mission_btn.addEventListener('click', createMission);
cancel_mission_btn.addEventListener('click', cancelMission);
open_mission_btn.addEventListener('click', openMission);
