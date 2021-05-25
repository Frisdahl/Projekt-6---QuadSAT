console.log('mads.js is running...');

const next_to_drone = document.getElementById('next-to-drone');
const back_to_antenna = document.getElementById('back-to-antenna');
const antenna_modal = document.getElementById('antenna-modal');
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