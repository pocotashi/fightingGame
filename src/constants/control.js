export const GamepadThumbstick = {
    DEAD_ZONE: 'deadZone',
    HORIZONTAL_AXE_ID: 'horizontalAxeId',
    VERTICAL_AXE_ID: 'verticalAxeId',
}


export const Control = {
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up',
    DOWN: 'down'
};

export const controls = [
    {
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE]: 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
            [GamepadThumbstick.VERTICAL_AXE_ID]: 1,


            [Control.LEFT]: 14,
            [Control.RIGHT]: 15,
            [Control.UP]: 12,
            [Control.DOWN]: 13,
        },
        keyboard: {
            [Control.LEFT]: 'ArrowLeft',
            [Control.RIGHT]: 'ArrowRight',
            [Control.UP]: 'ArrowUp',
            [Control.DOWN]: 'ArrowDown',
        }
    },
    {
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE]: 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
            [GamepadThumbstick.VERTICAL_AXE_ID]: 1,
            [Control.LEFT]: 14,
            [Control.RIGHT]: 15,
            [Control.UP]: 12,
            [Control.DOWN]: 13,
        },
        keyboard: {
            [Control.LEFT]: 'KeyD',
            [Control.RIGHT]: 'KeyG',
            [Control.UP]: 'KeyR',
            [Control.DOWN]: 'KeyF',
        }
    }
]