import { storageManager } from "../utils/storageManager.js";
export class AudioDAO
{
    constructor(json = null)
    {
        this.prefix = "Audio/";
        if (json == null)
        {
            this.prefix = "Templates/"
            this.masterVolume = 0.8;
            this.music = true;
            this.effects = true;
            this.musicVolume = 0.8;
            this.effectsVolume = 0.8;
        }
        else
        {
            this.masterVolume = json.masterVolume;
            this.music = json.music;
            this.effects = json.effects;
            this.musicVolume = json.musicVolume;
            this.effectsVolume = json.effectsVolume;
        }
        this.validate();
    }

    save()
    {
        this.validate();
        storageManager.set(this.prefix + "Audio", this.toJSON());
    }

    validate()
    {
        const defaultConfig = { masterVolume: 0.8, music: true, effects: true, musicVolume: 0.8, effectsVolume: 0.8}
        if (this.masterVolume === 'undefined') { this.masterVolume = defaultConfig.masterVolume }
        if (this.music === 'undefined') { this.music = defaultConfig.music }
        if (this.effects === 'undefined') { this.effects = defaultConfig.effects }
        if (this.musicVolume === 'undefined') { this.musicVolume = defaultConfig.musicVolume }
        if (this.effectsVolume === 'undefined') { this.effectsVolume = defaultConfig.effectsVolume }
    }

    toJSON()
    {
        const jsonData = {
            masterVolume: this.masterVolume,
            music: this.music,
            effects: this.effects,
            musicVolume: this.musicVolume,
            effectsVolume: this.effectsVolume
        }
        return jsonData;
    }
}