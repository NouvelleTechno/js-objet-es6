class CompteEpargne extends Compte{
    constructor(titulaire, montant = 50, taux = 0.005, rythme = 1000){
        super(titulaire, montant);
        this.taux = taux;
        this.rythme = rythme;

        // Intérêts de taux toutes les "rythme" millisecondes (0.5% toutes les 5 secondes)
        setInterval(() => {
            this.solde *= 1+this.taux;
        }, this.rythme);
    }
}