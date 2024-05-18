import {WindTurbine} from "./drawables/WindTurbine";
import {Cloud} from "./drawables/Cloud";
import {HotAirBalloon} from "./drawables/HotAirBalloon";
import {Birds} from "./drawables/Birds";
import {settings} from "./settings";
import {Drawable} from "./drawables/Drawables";
import {IAnimatable} from "../framework/types/IAnimatable";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D
    private readonly sprite: HTMLImageElement;
    private date: Date;
    private nightHour: number;
    private windTurbine: WindTurbine;
    private firstCloud: Cloud;
    private secondCloud: Cloud;
    private thirdCloud: Cloud;
    private birds: Birds;
    private hotAirBalloon: HotAirBalloon;
    private animateObjects: IAnimatable[];

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.sprite = new Image();
        this.sprite.src = '/src/resources/sprite.png';
        this.windTurbine = new WindTurbine(this.canvas, this.ctx, this.sprite);
        this.firstCloud = new Cloud(
            this.canvas,
            this.ctx,
            this.sprite,
            settings.clouds.firstCloud.sx,
            settings.clouds.firstCloud.sy,
            settings.clouds.firstCloud.width,
            settings.clouds.firstCloud.height,
            settings.clouds.firstCloud.x,
            settings.clouds.firstCloud.y
        );
        this.secondCloud = new Cloud(
            this.canvas,
            this.ctx,
            this.sprite,
            settings.clouds.secondCloud.sx,
            settings.clouds.secondCloud.sy,
            settings.clouds.secondCloud.width,
            settings.clouds.secondCloud.height,
            settings.clouds.secondCloud.x,
            settings.clouds.secondCloud.y
        );
        this.thirdCloud = new Cloud(
            this.canvas,
            this.ctx,
            this.sprite,
            settings.clouds.thirdCloud.sx,
            settings.clouds.thirdCloud.sy,
            settings.clouds.thirdCloud.width,
            settings.clouds.thirdCloud.height,
            settings.clouds.thirdCloud.x,
            settings.clouds.thirdCloud.y
        );


        this.hotAirBalloon = new HotAirBalloon(this.canvas, this.ctx, this.sprite);
        this.birds = new Birds(this.canvas, this.ctx, this.sprite);
        this.nightSession();
        this.animateObjects = [
            this.windTurbine,
            this.firstCloud,
            this.secondCloud,
            this.thirdCloud,
            this.birds,
            this.hotAirBalloon,
        ];
        this.sprite.addEventListener('load', () => {
            this.animate();
        });
    }

    nightSession() {
        this.date = new Date();
        this.nightHour = 18;
        if (this.date.getHours() >= this.nightHour) {
            this.canvas.classList.add('night');
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.animateObjects.forEach(animateObject => {
            animateObject.update();
            animateObject.clear();
            animateObject.draw();
        });
    }
}






