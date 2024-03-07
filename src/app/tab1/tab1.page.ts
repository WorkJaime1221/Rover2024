import { Component } from '@angular/core';
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //variables para almacenar los datos de la base de datos
  dataRover: any;
  dataCansat: any;

  constructor(private changeDetector: ChangeDetectorRef) {
    const firebaseConfig = {
      databaseURL: "https://rover2024-d1c23-default-rtdb.firebaseio.com/"
    };

    const app = initializeApp(firebaseConfig);
    const dbcansat = getDatabase(app);
    const dbrover = getDatabase(app);

    onValue(ref(dbcansat, 'MisionVENUS2024-12966544/default'), (snapshot) => {
      this.dataRover = snapshot.val();
      this.changeDetector.detectChanges(); 
      console.log(this.dataRover);
    });

    onValue(ref(dbrover, 'ROVER-12890736/default'), (snapshot) => {
      this.dataCansat = snapshot.val();
      this.changeDetector.detectChanges(); 
      console.log(this.dataCansat);
    });
  }
}
