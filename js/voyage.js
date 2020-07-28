"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [new Sejour("Strasbourg", 70), new Sejour("London", 130), new Sejour("Tourcoin", 400)];
    }
    // recherche du sejour par nom
    SejourService.prototype.findByNom = function (nom) {
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var sej = _a[_i];
            if (sej.nom === nom) {
                return sej;
            }
        }
        return "Pas de sejour! ";
    };
    return SejourService;
}());
var sejour = new SejourService();
console.log(sejour.findByNom("Strasbourg"));
console.log(sejour.findByNom("Mulhouse"));
