const osmosis = require('osmosis');
const url = 'https://www.google.fr/search?q=entreprise+informatique+nantes&oq=entreprise+informatique+nantes';

osmosis
    .get('https://www.google.fr/search?q=entreprise+informatique+nantes&oq=entreprise+infor')
    .find("#ires")
    .set({ 'related': ['h3 a'] }) // on recherche un tableau de a (et l'on va prendre son inner html)
    .data(function(data) {
        console.log(data);
    });


osmosis
    .get('https://www.pagesjaunes.fr/annuaire/nantes-44/informatique-editeurs-de-logiciels-societes-de-services')
    .find("#listResults")
    .set({ 'related': ['h2 a.denomination-links'] }) // on recherche un tableau de a (et l'on va prendre son inner html)
    .data(function(data) {
        console.log(data);
    })