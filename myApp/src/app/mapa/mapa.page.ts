import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, Platform,LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
   GoogleMaps,

  GoogleMapsEvent,
  Marker,
  MarkerOptions,
  GoogleMapsAnimation,
  MyLocation,
  HtmlInfoWindow,
  BaseArrayClass,
  ILatLng,
  LatLng
 } from '@ionic-native/google-maps';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage implements OnInit {
  
  map: GoogleMaps;
  loading: any;
  
  constructor(
    
    private platform: Platform
//,private loadinCtrl: LoadingController
  ) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
    }

    loadMap() {
      this.map = GoogleMaps.create('map_canvas', {
        controls:{
          myLocationButton:true
        },
        camera: {
          target: {
            lat: 4.645796,
            lng: -74.088352
           
          },
          zoom: 11,
          tilt: 30
        },
        
      });
  }
  //Ubicarme
async onButtonClick() {
  this.map.clear();

  this.loading = await this.loadingCtrl.create({
    message: 'Please wait...'
  });
  await this.loading.present();

  // Get the location of you
  this.map.getMyLocation().then((location: MyLocation) => {
    this.loading.dismiss();
    console.log(JSON.stringify(location, null ,2));

    // Move the map camera to the location with animation
    this.map.animateCamera({
      target: location.latLng,
      zoom: 17,
      tilt: 30
    });

}
