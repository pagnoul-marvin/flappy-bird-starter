import {Drawable} from "./Drawables";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {settings} from "../settings";

export class Birds extends Drawable implements IAnimatable {
    private y: number;
    private frameCount:number;
    private step:number;
    private maxAnimationStep:number;


    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
        this.y = settings.birds.y;
        this.frameCount = 0;
        this.step = 0;
        this.maxAnimationStep = settings.birds.frames.length-1;
    }

    draw(): void {
        this.ctx.drawImage(this.sprite,
            settings.birds.frames[this.step].sx,
            settings.birds.frames[this.step].sy,
            settings.birds.width,
            settings.birds.height,
            settings.birds.x,
            this.y,
            settings.birds.width,
            settings.birds.height,
        );
    }
    clear(): void {
        this.ctx.clearRect(settings.birds.x, this.y, settings.birds.width, settings.birds.height);
    }


    update(): void {
        this.frameCount++;
        if (this.frameCount >= settings.birds.maxInterval) {
            this.frameCount = 0;
            if (++this.step > this.maxAnimationStep) {
                this.step = 0;
            }
        }
        //this.y += settings.birds.fallSpeed;
    }

}