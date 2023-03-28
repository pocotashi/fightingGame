import { StreetFighterGame } from './StreetFighterGame.js';
import { FighterState } from './constants/fighter.js';

function populateMoveDropdown() {
    const dropdownn = document.getElementById('state-dropdown');

    Object.entries(FighterState).forEach(([, value]) => {
        const option = document.createElement('option');
        option.setAttribute('value', value);
        option.innerText = value;
        dropdownn.appendChild(option);
    })
}



window.addEventListener('load', function () {
    populateMoveDropdown();
    
    new StreetFighterGame().start();
})