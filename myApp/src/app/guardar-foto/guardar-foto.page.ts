import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-guardar-foto',
  templateUrl: './guardar-foto.page.html',
  styleUrls: ['./guardar-foto.page.scss'],
})
export class GuardarFotoPage implements OnInit {

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  savePicture()
  {  
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  
   
   }
}
