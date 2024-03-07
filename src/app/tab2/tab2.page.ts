import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navCtrl: NavController) {}
  navigateToIPAddress() {
    // Replace 'your-ip-address' with the actual IP address you want to navigate to
    window.location.href = 'http://your-ip-address';
  }
  navigateToIPAddress1() {
    // Replace 'your-ip-address' with the actual IP address you want to navigate to
    window.location.href = 'http://your-ip-address';
  }
}
