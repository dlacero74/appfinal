import { Component, OnInit, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  AlertController,
  ModalController,
  NavController,
  Platform,
  LoadingController,
  ToastController,
  ActionSheetController
} from '@ionic/angular';
import { Router } from '@angular/router';
import {
  GoogleMaps,
  GoogleMap,
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
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: GoogleMap;
  loading: any;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private platform: Platform,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public geo: Geolocation,
    public actionSheetController: ActionSheetController
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

  async onButtonClick() { 
    this.map.clear();
  
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
  
    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null , 2));
  
      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });
  
      // add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: '@ionic-native/google-maps plugin!',
        snippet: 'This plugin is awesome!',
        position: location.latLng,
        draggable: true,
        animation: GoogleMapsAnimation.BOUNCE
      });
  
      // show the infoWindow
      marker.showInfoWindow();
  
      /*// If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });*/
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
  
    toast.present();
  }
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'menu',
        cssClass:"menu",
        buttons:
     
         [{
          text: 'denuncia',
          role: 'destructive',
          icon: 'menu',
          handler: () => {
           this.navCtrl.navigateForward("/denuncia");
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            this.navCtrl.navigateForward("/menu-ini");
          }
        }, {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            this.navCtrl.navigateForward("/menu-ini");
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            this.navCtrl.navigateForward("/menu-ini");
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            this.navCtrl.navigateForward("/menu-ini");
          }
        }]
      });
      await actionSheet.present();
    }


}
