import { ScreenEffects } from "./Animations.js";
import { templateManager } from "../utils/TemplateManager.js";
import { CharacterDAO } from "../daos/CharacterDAO.js";
import { storageManager } from "../utils/storageManager.js";

document.addEventListener("DOMContentLoaded", () => 
{
    templateManager.verification();
    storageManager.print();
});