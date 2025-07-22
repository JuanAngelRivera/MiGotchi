import { CharacterDAO } from "../daos/CharacterDAO.js";
import { storageManager } from "./storageManager.js";
import { AudioDAO } from "../daos/AudioDAO.js";
import { VideoDAO } from "../daos/VideoDAO.js";

export class templateManager
{
static verification()
{
    console.info("INICIANDO VERIFICACION");
    this.verifyCharacter();
    this.verifyAudio();
    this.verifyVideo();
}

    static verifyCharacter()
    {
        try 
        {
            const characterTemplate = storageManager.get("Templates/Character");
            if(!characterTemplate)
            {
                const characterDAO = new CharacterDAO();
                characterDAO.save();
            }
        }
        catch(e) 
        {
            console.error("Error verificando plantilla de Character", e);
        }
    }

    static verifyAudio()
    {
        try
        {
            const audioTemplate = storageManager.get("Templates/Audio");
            if (!audioTemplate)
            {
                const audioDAO = new AudioDAO();
                audioDAO.save();
            }
        }
        catch(e)
        {
            console.error("Error verificando plantilla de audio", e);
        }
    }

    static verifyVideo()
    {
        try
        {
            const videoTemplate = storageManager.get("Templates/Video");
            if(!videoTemplate)
            {
                const videoDAO = new VideoDAO();
                videoDAO.save();
            }
        }
        catch(e)
        {
            console.error("Error verificando plantilla de video", e);
        }
    }
}