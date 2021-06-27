import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

  public readonly URL = {
    nomLocationsSuggestions: 'https://nominatim.openstreetmap.org/', // https://nominatim.openstreetmap.org/search?q=Zürich&format=json
    rapSearchDestinations: 'https://hotels4.p.rapidapi.com/locations/search' // https://hotels4.p.rapidapi.com/locations/search?query=Zürich Hauptbahnhof, Passage Löwenstrasse, City, Altstadt, Zurich, District Zurich, Zurich, 8090, Switzerland&locale=en_US  
  }
  constructor(private http: HttpClient) {
    

  }
  
  get(url: string): Observable<any> {
    if (url.includes(this.URL.rapSearchDestinations)) {

      // const obs = new Observable<RapidApiResponse>(subscriber => {
      //   subscriber.next(locations_search_malta)
      // });
      // return obs;
      const headers = new HttpHeaders({
        ['x-rapidapi-key']: '0788f27926mshf2ab0f03f3b4d65p1f371cjsn376269b5e8bc',
        ['x-rapidapi-host']: 'hotels4.p.rapidapi.com'
      }
      )
      return this.http.get(url, {headers: headers});
    }

    return this.http.get(url);
  }

  post(url: string, data: any) {
    return this.http.post(url, data);
  }
}
class RapidApiResponse {
    term: string
    moresuggestions: number
    autoSuggestInstance: Object
    trackingID: string
    misspellingfallback: boolean
    suggestions: any
}
let locations_search_malta: RapidApiResponse;
locations_search_malta = {
  "term": "Rouen France",
  "moresuggestions": 25,
  "autoSuggestInstance": null,
  "trackingID": "60a041344dec7ff2843bffaa58c3ba3d",
  "misspellingfallback": false,
  "suggestions": [
    {
      "group": "CITY_GROUP",
      "entities": []
    },
    {
      "group": "HOTEL_GROUP",
      "entities": [
        {
          "geoId": "2528109",
          "destinationId": "81899488",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 45.436219,
          "longitude": 12.346284,
          "searchDetail": null,
          "caption": "Ca Furlan, Venice, Veneto, <span class='highlighted'>Italy</span>",
          "name": "Ca Furlan"
        },
        {
          "geoId": "48226354",
          "destinationId": "1544243328",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 45.051823,
          "longitude": 9.684914,
          "searchDetail": null,
          "caption": "<span class='highlighted'>Malta</span> Guest House Self Check-in, Piacenza, Emilia-Romagna, <span class='highlighted'>Italy</span>",
          "name": "Malta Guest House Self Check-in"
        },
        {
          "geoId": "2520322",
          "destinationId": "287148",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 45.485378,
          "longitude": 9.219296,
          "searchDetail": null,
          "caption": "Hotel <span class='highlighted'>Malta</span>, Milan, Lombardy, <span class='highlighted'>Italy</span>",
          "name": "Hotel Malta"
        },
        {
          "geoId": "2708472",
          "destinationId": "335636",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 45.446538,
          "longitude": 8.613638,
          "searchDetail": null,
          "caption": "Hotel Croce di <span class='highlighted'>Malta</span>, Novara, Piedmont, <span class='highlighted'>Italy</span>",
          "name": "Hotel Croce di Malta"
        },
        {
          "geoId": "14604927",
          "destinationId": "575853",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 42.395795,
          "longitude": 12.303924,
          "searchDetail": null,
          "caption": "Commenda Ordine di <span class='highlighted'>Malta</span>, Vignanello, Lazio, <span class='highlighted'>Italy</span>",
          "name": "Commenda Ordine di Malta"
        },
        {
          "geoId": "11599009",
          "destinationId": "566323",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 45.51418,
          "longitude": 12.67222,
          "searchDetail": null,
          "caption": "Hotel Croce di <span class='highlighted'>Malta</span>, Jesolo, Veneto, <span class='highlighted'>Italy</span>",
          "name": "Hotel Croce di Malta"
        },
        {
          "geoId": "17851",
          "destinationId": "114918",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 43.773544,
          "longitude": 11.248301,
          "searchDetail": null,
          "caption": "Croce Di <span class='highlighted'>Malta</span> Hotel, Florence, Tuscany, <span class='highlighted'>Italy</span>",
          "name": "Croce Di Malta Hotel"
        },
        {
          "geoId": "64682680",
          "destinationId": "2070845760",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 43.876279,
          "longitude": 8.018911,
          "searchDetail": null,
          "caption": "Appartamento Croce di <span class='highlighted'>Malta</span>, Imperia, Liguria, <span class='highlighted'>Italy</span>",
          "name": "Appartamento Croce di Malta"
        },
        {
          "geoId": "1458371",
          "destinationId": "281939",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 43.876188,
          "longitude": 8.019467,
          "searchDetail": null,
          "caption": "Hotel Croce di <span class='highlighted'>Malta</span>, Imperia, Liguria, <span class='highlighted'>Italy</span>",
          "name": "Hotel Croce di Malta"
        },
        {
          "geoId": "5303246",
          "destinationId": "415289",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 38.11989,
          "longitude": 13.364171,
          "searchDetail": null,
          "caption": "I Cavalieri di <span class='highlighted'>Malta</span>, Palermo, Sicily, <span class='highlighted'>Italy</span>",
          "name": "I Cavalieri di Malta"
        },
        {
          "geoId": "31733861",
          "destinationId": "1016483552",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 40.82817,
          "longitude": 16.55117,
          "searchDetail": null,
          "caption": "<span class='highlighted'>Malta</span> & Tufo, Altamura, Puglia, <span class='highlighted'>Italy</span>",
          "name": "Malta & Tufo"
        },
        {
          "geoId": "7485",
          "destinationId": "178266",
          "landmarkCityDestinationId": null,
          "type": "HOTEL",
          "redirectPage": "DEFAULT_PAGE",
          "latitude": 43.887374,
          "longitude": 10.771477,
          "searchDetail": null,
          "caption": "Grand Hotel Croce di <span class='highlighted'>Malta</span> Wellness & Golf, Montecatini Terme, Tuscany, <span class='highlighted'>Italy</span>",
          "name": "Grand Hotel Croce di Malta Wellness & Golf"
        }
      ]
    },
  ]
}