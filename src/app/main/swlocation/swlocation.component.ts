import { Component, OnInit } from '@angular/core';
import {DataService} from "../core/services/data.service";
import {Swlocation} from "../core/models/swlocation.model";
import {LoadableSW} from "../core/models/swloadable.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Airplane} from "../core/models/airplan.model";
import {Systeme} from "../core/models/system.model";

@Component({
  selector: 'app-swlocation',
  templateUrl: './swlocation.component.html',
  styleUrls: ['./swlocation.component.css']
})
export class SwlocationComponent implements OnInit {
  systemId!: number;
  system:Systeme;
  swlocation:Swlocation;
  swlocations!: Swlocation[];
  loadableSws!: LoadableSW[];
  columnsToDisplaylocation = ['type', 'value', 'description', 'action']
  columnsToDisplayloadable = ['description', 'partNumber']
  airId: number;
  airplan:Airplane;
  constructor(private dataService: DataService,
              private activatedRoute:ActivatedRoute,
              private route:Router,
              private ngxuiService:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.systemId = this.activatedRoute.snapshot.params["idsystem"];
    this.airId = this.activatedRoute.snapshot.params["idair"];
    this.onGetAirplan(this.airId);
    this.onGetSystem(this.systemId);
    this.onGetSWlocations();
    console.log(this.swlocations , "hello")
    console.log(this.swlocations.length)
  }

  onGetAirplan(id:number){
    this.dataService.getAirplanByid(id).subscribe(airp=>{
      this.airplan = airp ;
      console.log(this.airplan)
    })
  }

  onGetSystem(id:number){
    this.dataService.getSystemByid(id).subscribe(system=>{
      this.system = system ;
      console.log(this.system)
    })
  }


  onGetSWlocations(){
    this.dataService.getSwLocations(this.systemId).subscribe(
      result=>{
        this.swlocations = result;
        console.log(this.swlocations);
      }
    )
  }

  onGetLoadableSw(swLocation:Swlocation ) {
    this.swlocation = swLocation;
    this.dataService.getLoadableSWs(swLocation.swlocationId).subscribe(
      result => {
        this.loadableSws = result;
        console.log(this.loadableSws)
      }
    )
  }

  return() {
    this.route.navigateByUrl("api/system/" + this.airId);
  }
}
