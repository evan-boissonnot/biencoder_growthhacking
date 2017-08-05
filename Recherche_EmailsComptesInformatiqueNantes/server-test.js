const loader = require('./DataLoader.js');
const osmosis = require('osmosis');

// osmosis
//    .get('https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=informatique%20editeurs%20de%20logiciels%20societes%20de%20services&ou=nantes-44&proximite=0&quoiQuiInterprete=informatique%20editeurs%20de%20logiciels%20societes%20de%20services&contexte=zuMKNmgmkDnVE2vSrKuSQneKL16bkxx3e0d5jKAkSaA%3D&idOu=Z04410900&page=1')
//    .find('#listResults')
//    .follow('li.site-internet a[href]')
//    .find('div')
//    .set({
//        'title': 'h1'
//    })
// .data(console.log)   // enable logging to see what is does.
// .debug(console.log)


var scrapper = new osmosis.get('https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=informatique%20editeurs%20de%20logiciels%20societes%20de%20services&ou=nantes-44&proximite=0&quoiQuiInterprete=informatique%20editeurs%20de%20logiciels%20societes%20de%20services&contexte=zuMKNmgmkDnVE2vSrKuSQneKL16bkxx3e0d5jKAkSaA%3D&idOu=Z04410900&page=1');

scrapper
   .find('#listResults')
   .follow('li.site-internet a[href]')
   .set({
       'title': 'h1'
   })
.data(console.log);

scrapper.run();


// Abandon de osmosis ? pas assez de doc, des comportements étranges !

// A essayer : http://www.codingdefined.com/2016/01/web-scraping-libraries-for-nodejs.html
// A essayer : https://github.com/IonicaBizau/scrape-it
// A essayer : https://scotch.io/tutorials/scraping-the-web-with-node-js
// A essayer : http://www.netinstructions.com/simple-web-scraping-with-node-js-and-javascript/