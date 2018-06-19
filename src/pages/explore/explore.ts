import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { Geolocation, Geoposition} from '@ionic-native/geolocation';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class explorePage {

  Coordinates: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    /*Initializing geolocation*/
  }

  ionViewDidLoad() {
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
     console.log(data);
     this.Coordinates = data.coords;
     this.executemap()
    });

  }
   executemap(){

       /*Initializing Map*/
      mapboxgl.accessToken = 'pk.eyJ1IjoiYWx2YXJvY2t2cCIsImEiOiJjaXlhOXZucmswMDR4MnFvaHU0NGo1d2pyIn0.HNpamM-Th28TGUxrLcTjZg';
      var map = new mapboxgl.Map({
         style: 'mapbox://styles/alvarockvp/cj7lsr0o98gov2rqi8h536qnm',
         center: [this.Coordinates.longitude, this.Coordinates.latitude],
         zoom: 16,
         pitch: 80,
         minZoom: 5, //restrict map zoom - buildings not visible beyond 13
         maxZoom: 24,
         container: 'map'
       });
        map.on('load', function() {
     map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
       'fill-extrusion-color': '#aaa',
       'fill-extrusion-height': {
        'type': 'identity',
        'property': 'height'
       },
       'fill-extrusion-base': {
        'type': 'identity',
        'property': 'min_height'
       },
       'fill-extrusion-opacity': .6
      }
     });
    });
   }

  }
