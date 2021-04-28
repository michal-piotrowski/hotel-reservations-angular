import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import * as L from 'leaflet';
 
@Component({
  selector: 'app-hotel-map',
  templateUrl: './hotel-map.component.html',
  styleUrls: ['./hotel-map.component.scss']
})
export class HotelMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let map = L.map('leaflet-map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }

}

