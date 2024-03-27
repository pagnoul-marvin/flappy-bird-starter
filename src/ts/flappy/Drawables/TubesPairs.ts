import {Drawable} from "./Drawable";
import {IAnimatable} from "../Types/IAnimatable";
import {TubesPair} from "./TubesPair";
import {settings} from "../settings";
import {Random} from "../../framework/Helpers/Random";

export class TubesPairs extends Drawable implements IAnimatable {
    public tubesPairs: TubesPair[] = [];
    private frameCount: number;
    private maxFrameInterval: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
        this.tubesPairs.push(new TubesPair(canvas, ctx, sprite));
        this.frameCount = 0;
        this.maxFrameInterval = Random.int(settings.tubes.maxFrameInterval.min, settings.tubes.maxFrameInterval.max);
    }

    draw() {
        this.tubesPairs.forEach(tube => {
            tube.draw();
        });
    }

    update() {
        this.frameCount++;
        if (this.frameCount >= this.maxFrameInterval) {
            if (this.tubesPairs.length > settings.tubes.maxTubesPairs) {
                this.tubesPairs.shift();
            }
            this.tubesPairs.push(new TubesPair(this.canvas, this.ctx, this.sprite));
            this.frameCount = 0;
            this.maxFrameInterval = Random.int(settings.tubes.maxFrameInterval.min, settings.tubes.maxFrameInterval.max);
        }
        this.tubesPairs.forEach(tube=>{
            tube.update();
        });
    }
}