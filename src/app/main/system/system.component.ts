import {AfterViewInit, Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {DataService} from "../core/services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Systeme} from "../core/models/system.model";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Airplane} from "../core/models/airplan.model";




@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit ,AfterViewInit{
  columnsToDisplay = ["name", "action"];
  idAirp?: number ;
  airplan:Airplane ;
  dataSystems? : any ;





  constructor(private route:Router,
              private dataService:DataService,
              private activeRoute: ActivatedRoute,
              private ngxuiService:NgxUiLoaderService) {}



  ngAfterViewInit() {

  }




  onGetSystems(){
    this.dataService.getSystems(this.idAirp).subscribe(
      system => {
        this.dataSystems = new MatTableDataSource<Systeme>(system)
      });
  }

  onGetAirplan(id:number){
    this.dataService.getAirplanByid(id).subscribe(airp=>{
      this.airplan = airp ;
      console.log(this.airplan)
    })
  }

  ngOnInit(): void {
    this.idAirp = this.activeRoute.snapshot.params['id'];
    this.onGetAirplan(this.idAirp) ;
    this.onGetSystems()
  }


  swLocation(id:number) {
    this.route.navigateByUrl('/api/swlocation/'+this.idAirp +'/'+id)
  }

  return() {
    this.route.navigateByUrl("api/airplan")
  }


  onSearch(event) {
    this.dataSystems.filter = event.target.value.toLowerCase();
  }
}
