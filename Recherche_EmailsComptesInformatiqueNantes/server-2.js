const loader = require('./DataLoader.js');
const osmosis = require('osmosis');
const url = 'https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=informatique%20editeurs%20de%20logiciels%20societes%20de%20services&ou=nantes-44&proximite=0&quoiQuiInterprete=informatique%20editeurs%20de%20logiciels%20societes%20de%20services&contexte=zuMKNmgmkDnVE2vSrKuSQneKL16bkxx3e0d5jKAkSaA%3D&idOu=Z04410900&page=';


function loadData(pageIndex, callback) { // on ajoute le callback
    let save = loader.save.bind(loader);

    osmosis
       .get(url + pageIndex.toString())
       .find('#listResults li.site-internet a.pj-link') 
       .follow('@href')
       .set({ 'related': 'h1' })
       .data(function(data) {
           if(data.length > 0)  {
              //save(data);

              console.log(`Traitement de la page ${pageIndex} fini`);

              loadData(pageIndex + 1, callback); // nous avons oublié de le passer ici !
           }

           // s'il n'y a plus rien, on va pouvoir appeler le callback
           if(data.length === 0) 
                callback(loader.companies);
       })
        .debug(function(var1, var2) {
            var ee=  "";
        })
        .error(function(var1, var2) {
            var ee=  "";
        });    
}

loadData(1, computeData); // on le passe à la fonction de chargement

/// Notre fonction de traitement final
function computeData(data) {
    console.log('on a fini le chargement');


}

