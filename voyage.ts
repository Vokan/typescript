class Sejour{
    constructor(private _nom:string, private _prix:number){

    }

    get nom(){
        return this._nom;
    }

    get prix(){
        return this._prix;
    }
}

class SejourService {
     
    private _sejour:Sejour[];
    
     constructor(){ 
         this._sejour = [new Sejour("Strasbourg", 70), new Sejour("London",130), new Sejour("Tourcoin",400)]
    }
    // recherche du sejour par nom
    findByNom(nom:string ): Sejour | string{ /* le | c'est pour définir la condition
                                                si le type de retourn n'est pas de Type Sejour
                                                il va retourne un message de type String
                                            */
        for (const sej of this._sejour){
            if(sej.nom === nom){
                return sej
            }
        }
        return "Pas de sejour! "
    }
}
const sejour =new SejourService();
console.log(sejour.findByNom("Strasbourg"));
console.log(sejour.findByNom("Mulhouse"));