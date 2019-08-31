/**
 * Titulaires de comptes
 */
class Titulaire{
    /**
     * Titulaires de comptes bancaires
     * @param {string} nom 
     * @param {string} prenom 
     */
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

    /**
     * Afficher l'identité du titulaire
     */
    identite(){
        console.log(`Le titulaire s'appelle ${this.prenom} ${this.nom}`);
    }
}