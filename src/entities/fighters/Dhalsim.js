import { Fighter } from "./Fighter.js";
import { FighterState } from "../../constants/fighter.js";

export class Dhalsim extends Fighter {
    constructor(x, y, direction, playerId){
        super("Dhalsim", x, y, direction, playerId);
        this.image = document.querySelector('img[alt="dhalsim"]');
        this.frames = new Map([
            //idle stance
            ['idle-1', [[12, 379, 76, 102], [38, 100]]],
            ['idle-2', [[113, 379, 71, 102], [35, 100]]],
            ['idle-3', [[212, 383, 71, 99], [35, 98]]],
            ['idle-4', [[313, 388, 75, 93], [37, 91]]],
            ['idle-5', [[413, 389, 79, 92], [39, 90]]],
            ['idle-6', [[513, 385, 77, 96], [38, 94]]],

            //move forward
            ['forwards-1',[[8, 537, 81, 100], [40, 98]]],
            ['forwards-2',[[122, 539, 90, 97], [45, 95]]],
            ['forwards-3',[[248, 537, 85, 100], [43, 98]]],
            ['forwards-4',[[383, 534, 76, 103], [38, 100]]],
            ['forwards-5',[[512, 534, 73, 103], [37, 100]]],
            ['forwards-6',[[630, 534, 69, 103], [35, 100]]],

            //move backward
            ['backwards-1',[[22, 829, 76, 105], [38,103]]],
            ['backwards-2',[[133, 832, 91, 102], [46,100]]],
            ['backwards-3',[[260, 830, 76, 104], [38,102]]],
            ['backwards-4',[[381, 827, 68, 108], [34,104]]],
            ['backwards-5',[[494, 826, 72, 109], [36,107]]],
            ['backwards-6',[[629, 827, 69, 107], [35,105]]],

            //jump up 
            ['jump-up-1', [[354, 1175, 61, 77], [30, 85]]],
            ['jump-up-2', [[447, 1159, 68, 94], [34, 98]]],
            ['jump-up-3', [[542, 1120, 62, 127], [30, 130]]],
            ['jump-up-4', [[644, 1135, 62, 93], [30, 99]]],
            ['jump-up-5', [[737, 1123, 63, 73], [30, 80]]],

            //jump forward/backward  
            ['jump-roll-1', [[354, 1175, 61, 77], [30, 85]]],
            ['jump-roll-2', [[447, 1159, 68, 94], [34, 98]]],
            ['jump-roll-3', [[32, 1307, 60, 118], [30, 106]]],
            ['jump-roll-4', [[117, 1320, 71, 93], [35, 90]]],
            ['jump-roll-5', [[209, 1317, 64, 72], [30, 68]]],
            ['jump-roll-6', [[291, 1317, 98, 94], [45, 90]]],
            ['jump-roll-7', [[32, 1307, 60, 118], [30, 106]]],

            // Jump first//last frame
            ['jump-land', [[354, 1175, 61, 77], [30, 85]]],

             //crouch
             ['crouch-1', [[25, 1160, 66, 91], [30, 88]]],
             ['crouch-2', [[113, 1173, 60, 78], [25, 74]]],
             ['crouch-3', [[204, 1184, 62, 67], [25, 58]]],
       
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-1',68], ['idle-2',68], ['idle-3',68],
                ['idle-4',68], ['idle-3',68], ['idle-2',68],
            ],
            [FighterState.WALK_FORWAWRD]: [
                ['forwards-1',65], ['forwards-2',65], ['forwards-3',65], 
                ['forwards-4',65], ['forwards-5',65], ['forwards-6',65]
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-1',65], ['backwards-2',65], ['backwards-3',65], 
                ['backwards-4',65], ['backwards-5',65], ['backwards-6',65]
            ],
            [FighterState.JUMP_START]:  [
                ['jump-land', 50], ['jump-land', -2],
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-1', 100], ['jump-up-2', 100], ['jump-up-3',100], 
                ['jump-up-4', 100], ['jump-up-5', 100], ['jump-up-4', 100],
                ['jump-up-3', 100], ['jump-up-2', -1]
            ],
            [FighterState.JUMP_FORWARD]: [
                ['jump-roll-1', 200], ['jump-roll-2', 50], ['jump-roll-3',50], 
                ['jump-roll-4', 50], ['jump-roll-5', 50], ['jump-roll-6',50],
                ['jump-roll-7', 50],  ['jump-roll-7', 0]
            ],
            [FighterState.JUMP_BACKWARD]: [
                ['jump-roll-7', 200], ['jump-roll-6', 50], ['jump-roll-5',50], 
                ['jump-roll-4', 50], ['jump-roll-3', 50], ['jump-roll-2',50],
                ['jump-roll-1', 50], ['jump-roll-1', 0]
            ],
            [FighterState.JUMP_LAND]:  [
                ['jump-land', 33], ['jump-land', 117],['jump-land', -2]
            ],
            [FighterState.CROUCH]: [['crouch-3', 0]],
            [FighterState.CROUCH_DOWN]: [
                ['crouch-1', 30], ['crouch-2', 30], ['crouch-3', 30],['crouch-3', -2]
            ],
            [FighterState.CROUCH_UP]: [
                ['crouch-3', 30], ['crouch-2', 30], ['crouch-1', 30],['crouch-1', -2]

            ]
        }

        this.initialVelocity = {
            x: {
                [FighterState.WALK_FORWAWRD]: 200,
                [FighterState.WALK_BACKWARD]: -150,
                [FighterState.JUMP_FORWARD]: 170,
                [FighterState.JUMP_BACKWARD]: -200
            },
            jump: -420,
        };

        this.gravity = 1000;


    }
}



