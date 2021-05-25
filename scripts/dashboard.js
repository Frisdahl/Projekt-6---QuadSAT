console.log("dashboard.js is running...");

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

function createMission() {
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
create_mission_sidebar.addEventListener('click', createMission);




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
