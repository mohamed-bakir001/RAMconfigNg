import { Component, OnInit } from '@angular/core';
import {DataService} from "../core/services/data.service";
import {Swlocation} from "../core/models/swlocation.model";
import {LoadableSW} from "../core/models/swloadable.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-swlocation',
  templateUrl: './swlocation.component.html',
  styleUrls: ['./swlocation.component.css']
})
export class SwlocationComponent implements OnInit {
  systemId!: number;
  swlocations!: Swlocation[];
  loadableSws!: LoadableSW[];
  columnsToDisplaylocation = ['type', 'value', 'description', 'action']
  columnsToDisplayloadable = ['description', 'partNumber']
  private airId: number;

  constructor(private dataService: DataService,
              private activatedRoute:ActivatedRoute,
              private route:Router,
              private ngxuiService:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.systemId = this.activatedRoute.snapshot.params["idsystem"];
    this.airId = this.activatedRoute.snapshot.params["idair"];
    this.onGetSWlocation();
    //console.log(this.swlocations , "hello")
  }

  onGetSWlocation(){
    this.dataService.getSwLocations(this.systemId).subscribe(
      result=>{
        this.swlocations = result;
        console.log(this.swlocations)
      }
    )
  }

  onGetLoadableSw(swLocationId: number) {
    console.log(swLocationId)
    this.dataService.getLoadableSWs(swLocationId).subscribe(
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
