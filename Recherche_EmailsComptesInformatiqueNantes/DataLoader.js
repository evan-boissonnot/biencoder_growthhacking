const Company = require('./Company.js');

class DataLoader {
    constructor() {
        this._companies = [];
    }

    save(data, isWriting) {
        if(typeof(data) == "object" && data != null && data.related.length != null) {
            var self = this;

            data.related.forEach(function(companyName) {
                let company = new Company(companyName);
                self.companies.push(company); 
            }, this);
        }
    };

    get companies() {
        return this._companies;
    }
}

module.exports = new DataLoader();