import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
boc = BocinaPage;
tele = TvPage;
phone = SmartphonePage;
lamp = LamparaPage;
  constructor(public navCtrl: NavController) {

  }

  bocina() {
  this.navCtrl.push(this.boc);
  }

  tv() {
  this.navCtrl.push(this.tele);
  }

  smartphone() {
  this.navCtrl.push(this.phone);
  }

  lampara() {
  this.navCtrl.push(this.lamp);
  }
}
