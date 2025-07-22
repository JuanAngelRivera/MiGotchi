import { storageManager } from "../utils/storageManager.js";
export class VideoDAO
{
    constructor(json)
    {
        this.prefix = "Video/"
        if (json == null) 
        {
            this.prefix = "Templates/";
            this.name = "Video";
            this.resolution = "1920x1080";
            this.fullscreen = true;
            this.brightness = 1.0;
            this.effectsIntensity = "medium"; //low, medium, hight
            this.fpsLimit = 60;
            this.animationSpeed = 1.0;
            this.mode = "auto"; //day, night, cicle, realtime
        }
        else
        {
            this.name = json.name;
            this.resolution = json.resolution;
            this.fullscreen = json.fullscreen;
            this.brightness = json.brightness;
            this.effectsIntensity = json.effectsIntensity;
            this.fpsLimit = json.fpsLimit;
            this.animationSpeed = json.animationSpeed;
            this.mode = json.mode;
        }
        this.validate();
    }

    save()
    {
        this.validate();
        storageManager.set(this.prefix + this.name, this.toJSON());
    }

    validate()
    {
        const defaultConfig = { resolution: "1920x1080", fullscreen: true, brightness: 1.0, effectsIntensity: "medium", fpsLimit: 60, animationSpeed: 1.0, mode: "auto" }
        if (this.resolution === 'undefined') { this.resolution = defaultConfig.resolution }
        if (this.fullscreen === 'undefined') { this.fullscreen = defaultConfig.fullscreen }
        if (this.brightness === 'undefined') { this.brightness = defaultConfig.brightness }
        if (this.effectsIntensity === 'undefined' ) { this.effectsIntensity = defaultConfig.effectsIntensity }
        if (this.fpsLimit === 'undefined') { this.fpsLimit = defaultConfig.fpsLimit }
        if (this.animationSpeed === 'undefined') { this.animationSpeed = defaultConfig.animationSpeed }
        if (this.mode === 'undefined') { this.mode = defaultConfig.mode }
    }

    toJSON()
    {
        const jsonData = {
            name: this.name,
            resolution: this.resolution,
            fullscreen: this.fullscreen,
            brightness: this.brightness,
            effectsIntensity: this.effectsIntensity,
            fpsLimit: this.fpsLimit,
            animationSpeed: this.animationSpeed,
            mode: this.mode,
        };
        return jsonData;
    }
}