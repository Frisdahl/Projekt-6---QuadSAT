console.log("dashboard.js is running...");


// Alexander - menu til brief
const mission_container = document.getElementById('create-mission-modal');
const create_mission_btn = document.getElementById('create-mission-menu');
const cancel_mission_btn = document.getElementById('close-btn-id');
const cancel_mission_btn2 = document.getElementById('close-btn-id2');
const cancel_mission_btn3 = document.getElementById('close-btn-id3');
const cancel_mission_btn4 = document.getElementById('close-btn-id4');
const cancel_mission_btn5 = document.getElementById('close-btn-id5');
const open_mission_btn = document.getElementById('open-mission');
const brief_input = document.getElementById('brief-input');


function createMission() {
    mission_container.style.display = "block";
    brief_modal.style.display = 'block';
    antenna_modal.style.display = 'none';
    drone_modal.style.display = 'none';
    open_mission_modal.style.display = 'none';
}

function cancelMission() {
  mission_container.style.display = "none";
}


function openMission() {
  console.log("hej");
}

// Cecilie - brief inputfelt generering

console.log(brief_input);

function briefInput() {
    brief_input.innerHTML = '';

    let briefArr = ['Title', 'Operator', 'Location', 'Date - dd.mm.yyyy'];

    for(let i = 0; i < briefArr.length; i++) {
        let input = document.createElement('input');
        input.setAttribute('class', 'brief-box');
        input.setAttribute('placeholder', briefArr[i])
        input.setAttribute('id', briefArr[i] )
        brief_input.appendChild(input);
    }

}

create_mission_btn.addEventListener('click', briefInput);
create_mission_btn.addEventListener('click', createMission);
cancel_mission_btn.addEventListener('click', cancelMission);
cancel_mission_btn2.addEventListener('click', cancelMission);
cancel_mission_btn3.addEventListener('click', cancelMission);
cancel_mission_btn4.addEventListener('click', cancelMission);
cancel_mission_btn5.addEventListener('click', cancelMission);

// Cecilie - brief til antenna
const antenna_modal = document.getElementById('antenna-modal');
const to_antenna = document.getElementById('next-to-antenna');
const brief_modal = document.getElementById('brief-modal');
const back_brief = document.getElementById('back-to-brief');
const brief_title = document.getElementById('title');

const title = document.getElementById('title');

// // console.log(title);
// // console.log(title.value);

// // function openAntenna() {
// //     if (title.value ==='') {
// //         alert (title.value);
// //       }
// //       else {
// //         antenna_modal.style.display = "block";
// //         brief_modal.style.display = "none";
// //       }

    // classlist.add

//     // if (validateTitle() === true) {
//     //     antenna_modal.style.display = "block";
//     //     brief_modal.style.display = "none";
//     // }

// }

function toBrief() {
    antenna_modal.style.display = "none";
    brief_modal.style.display = "block";
}

function toAntenna() {
    antenna_modal.style.display = "block";
    brief_modal.style.display = "none";
}

to_antenna.addEventListener('click', toAntenna);
// to_antenna.addEventListener('click', openAntenna);
back_brief.addEventListener('click', toBrief);

// Mads - antenna til drone
const next_to_drone = document.getElementById('next-to-drone');
const back_to_antenna = document.getElementById('back-to-antenna');
const drone_modal = document.getElementById('drone-modal');
const drone_input = document.getElementById('drone-input');
// const open_mission_btn = document.getElementById('open-mission');
const open_mission_modal = document.getElementById('open-mission-modal');

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

function openMission() {
    mission_container.style.display = 'block';
    open_mission_modal.style.display = 'block';
    brief_modal.style.display = 'none';
    antenna_modal.style.display = 'none';
    drone_modal.style.display = 'none';
}

next_to_drone.addEventListener('click', nextToDrone);
back_to_antenna.addEventListener('click', backToAntenna);
open_mission_btn.addEventListener('click', openMission);

// Sidebar functions
const clear_btn = document.getElementById('clear-list');
const clear_list_warning = document.getElementById('clear-list-warning');
const cancel_clear = document.getElementById('cancel-clear');
const confirm_clear = document.getElementById('confirm-clear');
const create_mission_sidebar = document.getElementById('create-mission-sidebar');
const open_mission_sidebar = document.getElementById('open-mission-sidebar');
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
    if(mission_list.innerText !== '') {
        alert('You have already created some mission files. Please clear list.');
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
create_mission_sidebar.addEventListener('click', createMission);
open_mission_sidebar.addEventListener('click', openMission);




// Functions not yet implemented
const settings = document.getElementById('settings');
const account = document.getElementById('account');
const search = document.getElementById('search');
const remove_mission = document.getElementById('remove-missions');
const search_mission = document.getElementById('search-missions');
const create_template = document.getElementById('create-template');

settings.addEventListener('click', () => {alert('Settings to be implemented later')});
account.addEventListener('click', () => {alert('Account box to be implemented later')});
search.addEventListener('click', () => {alert('search functionality to be implemented later')});
remove_mission.addEventListener('click', () => {alert('remove functionality to be implemented later')});
search_mission.addEventListener('click', () => {alert('search functionality to be implemented later')});
create_template.addEventListener('click', () => {alert('template functionality to be implemented later')});
