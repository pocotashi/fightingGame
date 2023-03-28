import { Dhalsim } from './entities/fighters/Dhalsim.js';
import { Ken } from './entities/fighters/Ken.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/FpsCounter.js';
import { STAGE_FLOOR } from './constants/Stage.js';
import { FighterDirection, } from './constants/fighter.js';

export class StreetFighterGame {
    constructor () {
        this.context = this.getContext()
        this.fighters = [
            new Ken(184, STAGE_FLOOR, FighterDirection.LEFT),
            new Dhalsim(280, STAGE_FLOOR, FighterDirection.RIGHT),
        ];
    
        this.entities = [
            new Stage(),
            ...this.fighters,    
            new FpsCounter()    
        ];
     
        this.frameTime = {
            previousTime : 0,
            secondsPassed : 0,
        }
    }

    getContext() {
        const canvasEle = document.querySelector('canvas');
        const context = canvasEle.getContext('2d');
        context.imageSmoothingEnabled = false;
        return context;
    }

    update () {
        for (const entity of this.entities) {
            entity.update(this.frameTime, this.context)
        }
    }
    
    draw () {
        for (const entity of this.entities) {
            entity.draw(this.context)
        }
    }

    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
            secondsPassed : (time - this.frameTime.previousTime) / 1000,
            previousTime : time
        }

        this.update()
        this.draw()
    }

    handleFormSubmit(event) {
        event.preventDefault()
    
        const selectedCheckboxes = Array
        .from(event.target.querySelectorAll('input:checked'))
        .map(checkbox => checkbox.value);
        
        const options = event.target.querySelector('select');
    
        this.fighters.forEach(fighter => {
            if (selectedCheckboxes.includes(fighter.name)) {
                fighter.changeState(options.value)
            }
        })
    }
    
    start () {
        document.addEventListener('submit', this.handleFormSubmit.bind(this));
        window.requestAnimationFrame(this.frame.bind(this));
    }
   
}