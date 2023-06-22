import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class Child1Component {}
