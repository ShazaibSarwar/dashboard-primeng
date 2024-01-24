import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CalendarModule} from "primeng/calendar";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CalendarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
