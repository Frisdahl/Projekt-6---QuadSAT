console.log("dashboard.js is running...");

// Alexander - menu til brief
const mission_container = document.getElementById('create-mission-modal');
const create_mission_btn = document.getElementById('create-mission-menu');
const cancel_mission_btn = document.getElementById('close-btn-id');
const cancel_mission_btn2 = document.getElementById('close-btn-id2');
const cancel_mission_btn3 = document.getElementById('close-btn-id3');
const cancel_mission_btn4 = document.getElementById('close-btn-id4');
const open_mission_btn = document.getElementById('open-mission');


function createMission() {
    mission_container.style.display = "block";
    brief_modal.style.display = 'block';
    antenna_modal.style.display = 'none';
    drone_modal.style.display = 'none';
}

function cancelMission() {
  mission_container.style.display = "none";
}


function openMission() {
  console.log("hej");
}


create_mission_btn.addEventListener('click', createMission);
cancel_mission_btn.addEventListener('click', cancelMission);
cancel_mission_btn2.addEventListener('click', cancelMission);
cancel_mission_btn3.addEventListener('click', cancelMission);
cancel_mission_btn4.addEventListener('click', cancelMission);
open_mission_btn.addEventListener('click', openMission);

// Cecilie - brief til antenna
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

// Mads - antenna til drone
const next_to_drone = document.getElementById('next-to-drone');
const back_to_antenna = document.getElementById('back-to-antenna');
const drone_modal = document.getElementById('drone-modal');
const drone_input = document.getElementById('drone-input');

console.log(drone_input);

function nextToDrone() {
    antenna_modal.style.display = 'none';

    drone_input.innerHTML = '';

    let droneArr = ['Drone', 'Payload', 'Connection status: connected'];

    for(let i = 0; i < droneArr.length; i++) {
        let input = document.createElement('input');
        input.setAttribute('class', 'brief-box');
        input.setAttribute('placeholder', droneArr[i])
        drone_input.appendChild(input);
    }

    drone_modal.style.display = 'block';
}

function backToAntenna() {
    drone_modal.style.display = 'none';
    antenna_modal.style.display = 'block';
}



next_to_drone.addEventListener('click', nextToDrone);
back_to_antenna.addEventListener('click', backToAntenna);

// Sidebar functions
const clear_btn = document.getElementById('clear-list');
const clear_list_warning = document.getElementById('clear-list-warning');
const cancel_clear = document.getElementById('cancel-clear');
const confirm_clear = document.getElementById('confirm-clear');
const create_mission_sidebar = document.getElementById('create-mission-sidebar');
const mission_list = document.getElementById('mission-list');

function clearList() {
    clear_list_warning.style.display = "block";
}

function cancelClear() {
    clear_list_warning.style.display = "none";
}

function confirmClear() {
    mission_list.innerHTML = '';

    clear_list_warning.style.display = "none";
}

function createMissionSidebar() {
    if(mission_list.innerHTML !== '') {
        mission_list.innerHTML = '';

        let missionArr = ['UCL', 'Test flight', 'Hong Kong'];

        for (i = 0; i < missionArr.length; i++) {
            let mission = document.createElement('p');
            mission.classList.add('mission');
            mission.id = 'mission' + i;
            mission.innerText = missionArr[i];
            mission_list.appendChild(mission);
        }
    } else {
        let missionArr = ['UCL', 'Test flight', 'Hong Kong'];

        for (i = 0; i < missionArr.length; i++) {
            let mission = document.createElement('p');
            mission.classList.add('mission');
            mission.id = 'mission' + i;
            mission.innerText = missionArr[i];
            mission_list.appendChild(mission);
        }
    }
}

clear_btn.addEventListener('click', clearList);
cancel_clear.addEventListener('click', cancelClear);
confirm_clear.addEventListener('click', confirmClear);
create_mission_sidebar.addEventListener('click', createMissionSidebar);




// Functions not yet implemented
const settings = document.getElementById('settings');
const account = document.getElementById('account');
const search = document.getElementById('search');
const remove_mission = document.getElementById('remove-missions');
const search_mission = document.getElementById('search-missions');

settings.addEventListener('click', () => {alert('Settings to be implemented later')});
account.addEventListener('click', () => {alert('Account box to be implemented later')});
search.addEventListener('click', () => {alert('search functionality to be implemented later')});
remove_mission.addEventListener('click', () => {alert('remove functionality to be implemented later')});
search_mission.addEventListener('click', () => {alert('search functionality to be implemented later')});
