// import Axios from 'axios';

export default class hey {

}

/** source: https://rapidapi.com/apidojo/api/hotels4
 * import axios from "axios";

 * const options = {
 *   method: 'GET',
 *   url: 'https://hotels4.p.rapidapi.com/locations/search',
 *   params: {query: 'new york', locale: 'en_US'},
 *   headers: {
 *     'x-rapidapi-key': '0788f27926mshf2ab0f03f3b4d65p1f371cjsn376269b5e8bc',
 *     'x-rapidapi-host': 'hotels4.p.rapidapi.com'
 *   }
 * };
 * 
 * axios.request(options).then(function (response) {
 * 	console.log(response.data);
 * }).catch(function (error) {
 * 	console.error(error);
 * });
 */

//  const options = {
//    method: 'GET',
//    url: 'https://hotels4.p.rapidapi.com/locations/search',
//    params: {query: 'new york', locale: 'en_US'},
//    headers: {
//      'x-rapidapi-key': '0788f27926mshf2ab0f03f3b4d65p1f371cjsn376269b5e8bc',
//      'x-rapidapi-host': 'hotels4.p.rapidapi.com'
//    }
//  };

// Axios.interceptors.request.use(config => {
//   if (config.url && config.url.includes('rapidapi')) {
//     config.headers = {
//       'x-rapidapi-key': '0788f27926mshf2ab0f03f3b4d65p1f371cjsn376269b5e8bc',
//       'x-rapidapi-host': 'hotels4.p.rapidapi.com'
//     };
//   }
//   return config;
// })

// /**
//  * Mocking:
//  * e.g. location suggested by nominatim after "Zürich HB" : Zürich Hauptbahnhof, Passage Löwenstrasse, City, Altstadt, Zurich, District Zurich, Zurich, 8090, Switzerland
//  * 
//  * locations/search?q=Zürich Hauptbahnhof, Passage Löwenstrasse, City, Altstadt, Zurich, District Zurich, Zurich, 8090, Switzerland
//  */
// export default {
//   httpGet(url) {
//     // Not to use up all the credit from rapidapi free trial:
//     // if (url.includes(URL.rapSearchDestinations)) {
//     //   return new Promise((resolve) => {
//     //     resolve(locations_search_malta);
//     //   });
//     // }
//     return Axios.get(url);
//   },

//   httpPost(url, data) {
//     return Axios.post(url, data, this.config);
//   }
// }

export const URL = {
  nomLocationsSuggestions: 'https://nominatim.openstreetmap.org/', // https://nominatim.openstreetmap.org/search?q=Zürich&format=json
  rapSearchDestinations: 'https://hotels4.p.rapidapi.com/locations/search' // https://hotels4.p.rapidapi.com/locations/search?query=Zürich Hauptbahnhof, Passage Löwenstrasse, City, Altstadt, Zurich, District Zurich, Zurich, 8090, Switzerland&locale=en_US  
}

// const locations_search_malta = {
//   data: {
//     "term": "Rouen France",
//     "moresuggestions": 25,
//     "autoSuggestInstance": null,
//     "trackingID": "60a041344dec7ff2843bffaa58c3ba3d",
//     "misspellingfallback": false,
//     "suggestions": [
//       {
//         "group": "CITY_GROUP",
//         "entities": []
//       },
//       {
//         "group": "HOTEL_GROUP",
//         "entities": [
//           {
//             "geoId": "2528109",
//             "destinationId": "81899488",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 45.436219,
//             "longitude": 12.346284,
//             "searchDetail": null,
//             "caption": "Ca Furlan, Venice, Veneto, <span class='highlighted'>Italy</span>",
//             "name": "Ca Furlan"
//           },
//           {
//             "geoId": "48226354",
//             "destinationId": "1544243328",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 45.051823,
//             "longitude": 9.684914,
//             "searchDetail": null,
//             "caption": "<span class='highlighted'>Malta</span> Guest House Self Check-in, Piacenza, Emilia-Romagna, <span class='highlighted'>Italy</span>",
//             "name": "Malta Guest House Self Check-in"
//           },
//           {
//             "geoId": "2520322",
//             "destinationId": "287148",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 45.485378,
//             "longitude": 9.219296,
//             "searchDetail": null,
//             "caption": "Hotel <span class='highlighted'>Malta</span>, Milan, Lombardy, <span class='highlighted'>Italy</span>",
//             "name": "Hotel Malta"
//           },
//           {
//             "geoId": "2708472",
//             "destinationId": "335636",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 45.446538,
//             "longitude": 8.613638,
//             "searchDetail": null,
//             "caption": "Hotel Croce di <span class='highlighted'>Malta</span>, Novara, Piedmont, <span class='highlighted'>Italy</span>",
//             "name": "Hotel Croce di Malta"
//           },
//           {
//             "geoId": "14604927",
//             "destinationId": "575853",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 42.395795,
//             "longitude": 12.303924,
//             "searchDetail": null,
//             "caption": "Commenda Ordine di <span class='highlighted'>Malta</span>, Vignanello, Lazio, <span class='highlighted'>Italy</span>",
//             "name": "Commenda Ordine di Malta"
//           },
//           {
//             "geoId": "11599009",
//             "destinationId": "566323",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 45.51418,
//             "longitude": 12.67222,
//             "searchDetail": null,
//             "caption": "Hotel Croce di <span class='highlighted'>Malta</span>, Jesolo, Veneto, <span class='highlighted'>Italy</span>",
//             "name": "Hotel Croce di Malta"
//           },
//           {
//             "geoId": "17851",
//             "destinationId": "114918",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 43.773544,
//             "longitude": 11.248301,
//             "searchDetail": null,
//             "caption": "Croce Di <span class='highlighted'>Malta</span> Hotel, Florence, Tuscany, <span class='highlighted'>Italy</span>",
//             "name": "Croce Di Malta Hotel"
//           },
//           {
//             "geoId": "64682680",
//             "destinationId": "2070845760",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 43.876279,
//             "longitude": 8.018911,
//             "searchDetail": null,
//             "caption": "Appartamento Croce di <span class='highlighted'>Malta</span>, Imperia, Liguria, <span class='highlighted'>Italy</span>",
//             "name": "Appartamento Croce di Malta"
//           },
//           {
//             "geoId": "1458371",
//             "destinationId": "281939",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 43.876188,
//             "longitude": 8.019467,
//             "searchDetail": null,
//             "caption": "Hotel Croce di <span class='highlighted'>Malta</span>, Imperia, Liguria, <span class='highlighted'>Italy</span>",
//             "name": "Hotel Croce di Malta"
//           },
//           {
//             "geoId": "5303246",
//             "destinationId": "415289",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 38.11989,
//             "longitude": 13.364171,
//             "searchDetail": null,
//             "caption": "I Cavalieri di <span class='highlighted'>Malta</span>, Palermo, Sicily, <span class='highlighted'>Italy</span>",
//             "name": "I Cavalieri di Malta"
//           },
//           {
//             "geoId": "31733861",
//             "destinationId": "1016483552",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 40.82817,
//             "longitude": 16.55117,
//             "searchDetail": null,
//             "caption": "<span class='highlighted'>Malta</span> & Tufo, Altamura, Puglia, <span class='highlighted'>Italy</span>",
//             "name": "Malta & Tufo"
//           },
//           {
//             "geoId": "7485",
//             "destinationId": "178266",
//             "landmarkCityDestinationId": null,
//             "type": "HOTEL",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 43.887374,
//             "longitude": 10.771477,
//             "searchDetail": null,
//             "caption": "Grand Hotel Croce di <span class='highlighted'>Malta</span> Wellness & Golf, Montecatini Terme, Tuscany, <span class='highlighted'>Italy</span>",
//             "name": "Grand Hotel Croce di Malta Wellness & Golf"
//           }
//         ]
//       },
//       {
//         "group": "LANDMARK_GROUP",
//         "entities": [
//           {
//             "geoId": "553248621532499797",
//             "destinationId": "10611234",
//             "landmarkCityDestinationId": "712491",
//             "type": "LANDMARK",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 41.88298,
//             "longitude": 12.47851,
//             "searchDetail": null,
//             "caption": "Villa del Priorato dei Cavalieri di <span class='highlighted'>Malta</span>, Rome, Lazio, <span class='highlighted'>Italy</span>",
//             "name": "Villa del Priorato dei Cavalieri di Malta"
//           },
//           {
//             "geoId": "6146879",
//             "destinationId": "1700884",
//             "landmarkCityDestinationId": "712491",
//             "type": "LANDMARK",
//             "redirectPage": "DEFAULT_PAGE",
//             "latitude": 41.883093,
//             "longitude": 12.478735,
//             "searchDetail": null,
//             "caption": "Piazza dei Cavalieri di <span class='highlighted'>Malta</span>, Rome, Lazio, <span class='highlighted'>Italy</span>",
//             "name": "Piazza dei Cavalieri di Malta"
//           }
//         ]
//       },
//       {
//         "group": "TRANSPORT_GROUP",
//         "entities": []
//       }
//     ],
//     "geocodeFallback": false
//   }
// };
// // const locations_search_zurich_hb = {
// //     data: {
// //       "term": "Zürich Hauptbahnhof",
// //       "moresuggestions": 0,
// //       "autoSuggestInstance": null,
// //       "trackingID": "609ac1f3bcca755cf2614f0963efc076",
// //       "misspellingfallback": false,
// //       "suggestions": [
// //         {
// //           "group": "CITY_GROUP",
// //           "entities": []
// //         },
// //         {
// //           "group": "HOTEL_GROUP",
// //           "entities": [
// //             {
// //               "geoId": "25277",
// //               "destinationId": "288919",
// //               "landmarkCityDestinationId": null,
// //               "type": "HOTEL",
// //               "redirectPage": "DEFAULT_PAGE",
// //               "latitude": 47.378754,
// //               "longitude": 8.543519,
// //               "searchDetail": null,
// //               "caption": "Arlette Am <span class='highlighted'>Hauptbahnhof</span> Hotel, <span class='highlighted'>Zürich</span>, Canton of Zurich, Switzerland",
// //               "name": "Arlette Am Hauptbahnhof Hotel"
// //             }
// //           ]
// //         },
// //         {
// //           "group": "LANDMARK_GROUP",
// //           "entities": []
// //         },
// //         {
// //           "group": "TRANSPORT_GROUP",
// //           "entities": [
// //             {
// //               "geoId": "6021282",
// //               "destinationId": "1710881",
// //               "landmarkCityDestinationId": null,
// //               "type": "TRAIN_STATION",
// //               "redirectPage": "DEFAULT_PAGE",
// //               "latitude": 47.377839,
// //               "longitude": 8.540271,
// //               "searchDetail": null,
// //               "caption": "<span class='highlighted'>Zürich</span> <span class='highlighted'>Hauptbahnhof</span>, Zürich, Canton of Zurich, Switzerland",
// //               "name": "Zürich Hauptbahnhof"
// //             }
// //           ]
// //         }
// //       ],
// //       "geocodeFallback": false
    
// //   }
// // };