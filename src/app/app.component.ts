import {Component, OnInit} from '@angular/core';
import {DataService} from "./main/core/services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'config-ng';

  constructor(private dataService:DataService) {
  }
  ngOnInit(): void {
    this.dataService.getSwLocations(100).subscribe(
      airplan =>console.log(airplan)
    )

  }
}
