import { storageManager } from "../utils/storageManager.js";

export class CharacterDAO
{
    constructor (json = null)
    {
        this.prefix = "Character/";
        this.parts = ["head", "body", "legs"];

        if (json == null) { json = storageManager.get("Templates/Character"); }

        if (json == null) 
        { 
            this.name = "Character";
            this.prefix = "Templates/"
            this.parts.forEach(part => {
                this[part] = { id: 0, primaryColor: "#FFFFFF", secondaryColor: "#000000" };
            });
        }
        else
        {
            this.name = json.name;
            this.head = json.head;
            this.body = json.body;
            this.legs = json.legs;
        }       
        this.validate();
    }

    save ()
    {
        this.validate();
        const key = this.prefix + this.name;
        storageManager.set(key, this.toJSON());
    }

    validate ()
    {
        const defaultPart = {id: 0, primaryColor: "#FFFFFF", secondaryColor: "#000000"};
        this.parts.forEach(part => {
            if (!this[part]) { this[part] = {...defaultPart}; }
            else
            {
                if (typeof this[part].id === 'undefined') { this[part].id = defaultPart.id; }
                if (typeof this[part].primaryColor === 'undefined') { this[part].primaryColor = defaultPart.primaryColor; }
                if (typeof this[part].secondaryColor === 'undefined') {this[part].secondaryColor = defaultPart.secondaryColor; }
            }
        });
    }

    toJSON() 
    {
        const jsonData = { name: this.name };
        this.parts.forEach(part => {
            jsonData[part] = this[part];
        });
        return jsonData;
    }
}