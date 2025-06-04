import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NocteCirclesComponent } from './components/nocte-circles/nocte-circles.component';
import { NocteCirclesV2Component } from "./components/nocte-circles-v2/nocte-circles-v2.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NocteCirclesV2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nocte-Grafika';
}
