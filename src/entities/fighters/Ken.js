import { FighterState } from '../../constants/fighter.js';
import {Fighter} from './Fighter.js';

export class Ken extends Fighter {
    constructor(x, y, direction, playerId) {
        super('Ken', x, y, direction, playerId);
        this.image = document.querySelector('img[alt="ken"]');
        this.frames = new Map([
            //idle stance
            ['idle-1', [[346, 688, 60, 89], [34, 86]]],
            ['idle-2', [[2, 687, 59, 90], [33, 87]]],
            ['idle-3', [[72, 685, 58, 92], [32, 89]]],
            ['idle-4', [[142, 684, 55, 93], [31, 90]]],

            //move forward
            ['forwards-1',[[8, 872, 53, 83], [27,81]]],
            ['forwards-2',[[70, 867, 60, 88], [35,86]]],
            ['forwards-3',[[140, 866, 64, 90], [35,87]]],
            ['forwards-4',[[215, 865, 63, 89], [29,88]]],
            ['forwards-5',[[288, 866, 54, 89], [25,87]]],
            ['forwards-6',[[357, 867, 50, 89], [25,86]]],

            //move backward
            ['backwards-1',[[417, 868, 61, 87], [35,85]]],
            ['backwards-2',[[487, 866, 59, 90], [36,87]]],
            ['backwards-3',[[558, 865, 57, 90], [36,88]]],
            ['backwards-4',[[629, 864, 58, 90], [28,89]]],
            ['backwards-5',[[702, 865, 58, 91], [36,88]]],
            ['backwards-6',[[773, 866, 57, 89], [36,87]]],

            //jump up 
            ['jump-up-1', [[724, 1036, 56, 104], [32, 107]]],
            ['jump-up-2', [[792, 995, 50, 89], [25, 103]]],
            ['jump-up-3', [[853, 967, 54, 77], [25, 103]]],
            ['jump-up-4', [[911, 966, 48, 70], [28, 101]]],
            ['jump-up-5', [[975, 977, 48, 86], [25, 103]]],
            ['jump-up-6', [[1031, 1008, 55, 103], [32, 107]]],

            //jump forward/backward
            ['jump-roll-1', [[1235, 1035, 59, 108], [25, 106]]],
            ['jump-roll-2', [[1300, 989, 62, 80], [22, 90]]],
            ['jump-roll-3', [[1363, 994, 104, 42], [61, 76]]],
            ['jump-roll-4', [[1468, 957, 53, 82], [42, 111]]],
            ['jump-roll-5', [[1541, 988, 122, 44], [71, 81]]],
            ['jump-roll-6', [[1664, 976, 72, 89], [53, 98]]],
            ['jump-roll-7', [[1748, 977, 55, 103], [32, 107]]],

            // Jump first//last frame
            ['jump-land', [[660, 1060, 55, 85], [29,83]]],
            
            //crouch
            ['crouch-1', [[8, 779, 53, 83], [25, 106]]],
            ['crouch-2', [[78, 792, 59, 72], [25, 66]]],
            ['crouch-3', [[147, 801, 63, 63], [25, 58]]],

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
                ['jump-up-4', 100], ['jump-up-5', 100], ['jump-up-6', -1]
            ],
            [FighterState.JUMP_FORWARD]: [
                ['jump-roll-1', 200], ['jump-roll-2', 50], ['jump-roll-3',50], 
                ['jump-roll-4', 50], ['jump-roll-5', 50], ['jump-roll-6', 50],
                ['jump-roll-7', 0]
            ],
            [FighterState.JUMP_BACKWARD]: [
                ['jump-roll-7', 200], ['jump-roll-6', 50], ['jump-roll-5',50], 
                ['jump-roll-4', 50], ['jump-roll-3', 50], ['jump-roll-4', 50],
                ['jump-roll-1', 0]
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

