const loader = require('./DataLoader.js');
const osmosis = require('osmosis');
const url = 'https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=informatique%20editeurs%20de%20logiciels%20societes%20de%20services&ou=nantes-44&proximite=0&quoiQuiInterprete=informatique%20editeurs%20de%20logiciels%20societes%20de%20services&contexte=zuMKNmgmkDnVE2vSrKuSQneKL16bkxx3e0d5jKAkSaA%3D&idOu=Z04410900&page=';

osmosis
    .get('https://www.google.fr/search?q=entreprise+informatique+nantes&oq=entreprise+infor')
    .find("#ires")
    .set({ 'related': ['h3 a'] }) // on recherche un tableau de a (et l'on va prendre son inner html)
    .data(function(data) {
        console.log(data);
    });


function loadData(pageIndex) {
    let save = loader.save.bind(loader);

    osmosis
       .get(url + pageIndex.toString())
       .find("#listResults")
       .set({ 'related': ['h2 a.denomination-links'] }) // on recherche un tableau de a (et l'on va prendre son inner html)
       .data(function(data) {
           if(data.related.length > 0)  {
              save(data);
              loadData(pageIndex + 1);
           }
       });    
}

loadData(1);
