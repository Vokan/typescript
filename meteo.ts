console.log("Meteo App");

class Meteo {

    // ville: string --> aucun changement dans meteo.js

    constructor(private _ville:string, private _temperature:number){ 

    }
    toString():string {
        return `${this._ville} - ${this._temperature}°C`
        }
}
let nantesCeMatin = new Meteo('Nantes', 12); // pk il y a une erreur? On a pas mis en parametre les infos ! Malgré l’erreur de compilation, le fichier généré contient la mise à jour. Ceci illustre le caractère
                                            // permissif du compilateur TypeScript.

console.log(nantesCeMatin.toString());

                            