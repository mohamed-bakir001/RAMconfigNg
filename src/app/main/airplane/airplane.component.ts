import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {DataService} from "../core/services/data.service";
import {Airplane} from "../core/models/airplan.model";
import {catchError, map, Observable, of, Subscription} from "rxjs";



@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.css']
})
export class AirplaneComponent implements OnInit , AfterViewInit {
  columnsToDisplay = ["airplan id", "tail number", "date", "action"];

  airplanes: any ;
  constructor(private dataSerive: DataService) {
  }
  ngAfterViewInit() {
  }



  ngOnInit(): void {
    this.onGetAirplans();
    setTimeout(()=>{
      console.log(this.airplanes )
      console.log(typeof(this.airplanes))
    }, 5000)
  }

  onGetAirplans(){
    this.airplanes =  this.dataSerive.getAirplaines().subscribe(airp =>
      this.airplanes = airp
    )
  }

}
