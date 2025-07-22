export class storageManager
{
    static set (key, value)
    {
        try
        {
            const json = JSON.stringify(value);
            localStorage.setItem(key, json);
        }
        catch (e)
        {
            console.error('Error en set', e);
        }
    }

    static get (key)
    {
        try
        {
            const json = localStorage.getItem(key);
            console.log("Json raw de ", key, "->", json )
            if (!json) return null;
            return JSON.parse(json);
        }
        catch(e)
        {
            console.error("Error en get", e);
            return null;
        }
    }

    static exists (key)
    {
        return localStorage.getItem(key) !== null;
    }

    static remove (key)
    {
        localStorage.removeItem(key);
    }

    static clear ()
    {
        localStorage.clear();
    }

    static print() 
    {
        for (let i = 0; i < localStorage.length; i++) 
            {
            const key = localStorage.key(i);
            try 
            {
                const value = JSON.parse(localStorage.getItem(key));
                console.log(`🔑 ${key}:`, value);
            } 
            catch (e) 
            {
                const value = localStorage.getItem(key);
                console.log(`🔑 ${key}: (no JSON)`, value);
            }
        }
    }
}