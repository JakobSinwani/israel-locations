const axios = require('axios');
 const fs = require('fs');
const jsonCities = require('./cities.json');
const locations = require('./locations.json');
// const parser = require('csv-parse')
// const {encoding} = require('windows-1252')
    const path = `${__dirname}/cities.json`;
// //
// // fs.createReadStream(path, 'utf8')
// //     .on('error', () => {
// //         // handle error
// //     })
// //
// //     .pipe(parser())
// //     .on('data', (row) => {
// //         console.log(row);
// //     })
// //
// //     .on('end', () => {
// //         // handle end of CSV
// //     })
//
//
// fs.readFile(path, {encoding}, (err, data)=> {
//     console.log(data)
//     // err ? console.log("ERROR: " +  err.message) : fs.appendFile(`${__dirname}/cities.json`, data, (err)=> {
//     //    err ? console.log("ERROR WHEN COPY DATA", err) : console.log('sucess!')
//     // })
// })



// axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=2000')
// .then( async r => {
//     const cities = [...r.data.result.records];
//     const mapCities = [];
//     const [city] = cities;
//     console.log(city['לשכה']);
//     // cities.map(city => {
//     //     fs.appendFile(path, JSON.stringify(city) + ',', err => console.log(err.message))
//     // })
//
// })
// .catch(e => console.error(e.message))

// const mapCity = Object.entries(jsonCities[0]);
// const indexes = [0, 3,4, 8];
// const map = [];
//
// jsonCities.map(async city => {
//     const obj = {};
//     const mapCity = Object.entries(city);
//
//     mapCity.map((mc,index) => {
//         let [key, value] = mc;
//         const chek = indexes.includes(index);
//         if(chek){
//             switch (index) {
//                 case 0:
//                     key = 'id';
//                     break;
//                 case 3:
//                     key = 'name';
//                     break;
//                 case 4:
//                     key = 'eng_name'
//                     break;
//                 case 8:
//                     key = 'lodge'
//             }
//
//             obj[key] = value;
//         }
//
//         if(index === 8) map.push(obj);
//     })
//
// })
//
//
// fs.writeFile(path, JSON.stringify(map), (err, data) => {
//     err ? console.log(err.message) : console.log('sucess')
// })


// const lodges = [];
//
// jsonCities.map(({lodge}) => {
//     const chek = lodges.includes(lodge);
//     if(!chek) lodges.push(lodge);
// })
//
// fs.writeFile(`${__dirname}/lodges.json`, JSON.stringify(lodges), err => err ? console.log(err): null)


const center = ['ת"א - מרכז', 'חולון', 'ראשון לציון','ראש העין', 'רמת גן', 'רמלה','בני ברק', 'פתח תקוה'];
const arr = ['רק','כגדכגד'];
const filter = jsonCities.filter(city => center.some(c => c === city.lodge));

console.log(arr);

