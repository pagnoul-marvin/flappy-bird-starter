import {Drawable} from "./Drawables";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {settings} from "../settings";

export class Cloud extends Drawable implements IAnimatable {
    private sx: number;
    private sy: number;
    private width: number;
    private height: number;
    private y: number;
    private x: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, sx: number, sy: number, width: number, height: number, x: number, y: number) {
        super(canvas, ctx, sprite);
        this.sx = sx;
        this.sy = sy;
        this.width = width;
        this.height = height;
        this.y = y;
        this.x = x;
    }

    draw() {
        this.ctx.drawImage(this.sprite,
            this.sx,
            this.sy,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    clear(): void {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    update(): void {
        //this.y += settings.clouds.fallSpeed;
    }
}