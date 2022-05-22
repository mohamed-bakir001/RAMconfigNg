import {AfterViewInit, Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {DataService} from "../core/services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Systeme} from "../core/models/system.model";
import {NgxUiLoaderService} from "ngx-ui-loader";



@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit ,AfterViewInit{
  columnsToDisplay = ["name", "action"];
  idAirp?: number ;
  dataSystems? : any ;
  search :string;




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

  ngOnInit(): void {
    this.idAirp = this.activeRoute.snapshot.params['id'];
    this.onGetSystems()
  }


  swLocation(id:number) {
    this.route.navigateByUrl('/api/swlocation/'+this.idAirp +'/'+id)
  }

  return() {
    this.route.navigateByUrl("api/airplan")
  }


  search1() {
    //for implement filter
  }
}
