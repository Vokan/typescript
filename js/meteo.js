"use strict";
console.log("Meteo App");
var Meteo = /** @class */ (function () {
    // ville: string --> aucun changement dans meteo.js
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
var nantesCeMatin = new Meteo('Nantes', 12); // pk il y a une erreur? On a pas mis en parametre les infos ! Malgré l’erreur de compilation, le fichier généré contient la mise à jour. Ceci illustre le caractère
// permissif du compilateur TypeScript.
console.log(nantesCeMatin.toString());
