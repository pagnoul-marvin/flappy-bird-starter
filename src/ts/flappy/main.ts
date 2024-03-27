import {Background} from "./Drawables/Background";
import {Ground} from "./Drawables/Ground";
import {IAnimatable} from "./Types/IAnimatable";
import {TubesPairs} from "./Drawables/TubesPairs";
import {Birdie} from "./Drawables/Birdie";

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const sprite = new Image();
sprite.src = 'src/resources/sprite.png';
const gameStatus = {
    requestAnimationFrameId : 0,
}
const tubesPairs = new TubesPairs(canvas, ctx, sprite);
const birdie = new Birdie(canvas, ctx, sprite, tubesPairs.tubesPairs, gameStatus);

const drawables: IAnimatable[] = [
    new Background(canvas, ctx, sprite),
    birdie,
    tubesPairs,
    new Ground(canvas, ctx, sprite),
];

function animate() {
    gameStatus.requestAnimationFrameId = window.requestAnimationFrame(animate);
    drawables.forEach((drawable) => {
        drawable.draw();
        drawable.update();
    });
}

sprite.addEventListener('load', () => {
    animate();
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            birdie.goUp();
        }
    });
});