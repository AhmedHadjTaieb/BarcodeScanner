import { Component } from '@angular/core';
import { BarcodeScanner}  from 'ionic-native';
import { ScanPage } from '../scan/scan'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  scanDetails(details) {
this.navCtrl.push(ScanPage, {details: details});
}
  click() {
BarcodeScanner.scan()
.then((result) => {
if (!result.cancelled) {
const barcodeData = new BarcodeData(result.text, result.format);
this.scanDetails(barcodeData);
}
})
.catch((err) => {
alert(err);
})
}

}
export class BarcodeData {
  constructor(
    public text: String,
    public format: String
  ) {}
}
