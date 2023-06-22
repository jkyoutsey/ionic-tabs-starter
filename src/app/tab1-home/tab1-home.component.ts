import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1-home',
  templateUrl: './tab1-home.component.html',
  styleUrls: ['./tab1-home.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class Tab1HomeComponent {}
