export const settings = {
    canvas: {
        id: 'my-canvas'
    },
    hotAirBalloon: {
        width: 146,
        height: 328,
        frames: {
            sx: 0,
            sy: 316,
            dx: 73,
            dy: 250,
        },
    },
    clouds: {
        firstCloud: {
            sx: 294,
            sy: 425,
            width: 211,
            height: 116,
            x: 200,
            y: 100
        },
        secondCloud: {
            sx: 598,
            sy: 456,
            width: 153,
            height: 84,
            x: -25,
            y : 75
        },
        thirdCloud: {
            sx: 834,
            sy: 470,
            width: 126,
            height: 70,
            x: 120,
            y: 5
        },
        fallSpeed: 0.6,
    },
    windTurbine: {
        width: 117,
        height: 203,
        frames: {
            sx: 0,
            sy: 0,
            dx: 20,
        },
        fallSpeed: 0.6,
    },
    birds: {
        width: 177,
        height: 51,
        frames: [
            {sx: 0, sy: 804},
            {sx: 226, sy: 804},
            {sx: 464, sy: 804}
        ],
        x: 10,
        y: 200,
        maxInterval : 30,
        fallSpeed: 0.6,
    },
}