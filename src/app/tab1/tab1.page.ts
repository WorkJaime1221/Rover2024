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
  data: any;

  constructor(private changeDetector: ChangeDetectorRef) {
    const firebaseConfig = {
      databaseURL: "https://rover2024-d1c23-default-rtdb.firebaseio.com/"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    onValue(ref(db, 'ROVER-12890736/default'), (snapshot) => {
      this.data = snapshot.val();
      this.changeDetector.detectChanges(); // Add this line
      console.log(this.data);
    });
  }
}
