import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { BarcodeData }from'../home/home';
/*
  Generated class for the Scan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  barcodeData: BarcodeData;
constructor(private nav: NavController, navParams: NavParams) {
  this.barcodeData = navParams.get('details');
}

}
