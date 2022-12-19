

import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalPage } from '../../modal/modal.page';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  @ViewChild('map') mapRef!: ElementRef;
  map!: GoogleMap;
  latitude: any= 0;
  langitude:any = 0;
  name:any =0;
  movieApiUrl='';
  movieData = {
    title: '',
    description: '',
    imageUrl: ''
  };
  
  constructor(private modalCtrl: ModalController,private geolocation: Geolocation) {

 this.geolocation.getCurrentPosition().then((resp) => {
  this.latitude=resp.coords.latitude
  this.langitude= resp.coords.longitude
  this.name=resp.coords.heading
  console.log("langitude",this.langitude)
  }).catch((error) => {
    console.log('Error getting location', error);
  });


  }
  getCurrentPosition() {
    throw new Error('Method not implemented.');
  }


  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {

    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,

      config: {

        center: {
          lat:this.latitude,
          lng: this.langitude,
        },
        zoom: 12,
      },
    });
    await this.addMarkers();
  }

  async addMarkers() {


    const markers: Marker[] = [
      {
        coordinate: {
          lat: this.latitude,
          lng: this.langitude,
        },
        title: 'air de repos',
        snippet: 'Best place on earth',


      },
      {
        coordinate: {
          lat: this.latitude+.25,
          lng: this.langitude+.7
        },
        title: 'random place',
        snippet: 'Not sure',

      },

    ];

    const result = await this.map.addMarkers(markers);

    this.map.setOnMarkerClickListener(async (marker) => {
      const modal = await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {
          marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();
    });
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

