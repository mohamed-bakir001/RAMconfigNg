import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../core/services/data.service";
import {Router} from "@angular/router";
import {NgxUiLoaderModule, NgxUiLoaderService} from "ngx-ui-loader";
import {User} from "../../core/models/user.model";
import {TokenStorageService} from "../../core/services/token-storage.service";
import {MatTableDataSource} from "@angular/material/table";
import {Systeme} from "../core/models/system.model";
import {Airplane} from "../core/models/airplan.model";



@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.css']
})

export class AirplaneComponent implements OnInit , AfterViewInit {
  columnsToDisplay = [ "tailNumber", "date", "action"];
  firstUpload:boolean=true;
  airplanes: any ;
  user: User = this.tokenService.getUser()
  role = this.user.roles[0]
  constructor(private dataSerive: DataService,
              private router:Router,
              private ngxuiService:NgxUiLoaderService,
              private tokenService:TokenStorageService) {
  }
  ngAfterViewInit() {

  }



  ngOnInit(): void {
      this.onGetAirplans()
      this.ngxuiService.stop()
      this.airplanes.filterPredicate = function customFilter(data , filter :string ): boolean {
      return (data.tailNumber.startsWith(filter));
    }

  }

  onDeleteAirplan(id:number){
    this.ngxuiService.start()
    this.dataSerive.deleteAirplan(id).subscribe(air=>{

      setTimeout(()=>{
        this.onGetAirplans();
        this.ngxuiService.stop();
      }, 1000)
    })
  }

  onGetAirplans(){
    this.ngxuiService.start()
    this.airplanes =  this.dataSerive.getAirplaines().subscribe(airp =>{
        this.airplanes = new MatTableDataSource<Airplane>(airp)
    })
  }

  onGetSystem(id:number) {
    this.router.navigateByUrl('/api/system/'+id)
  }

  return() {
    this.router.navigateByUrl('api/dashboard')
  }

  onSearch(event) {
    this.airplanes.filter = event.target.value.trim().toLowerCase();
    console.log( this.airplanes)

  }
}
