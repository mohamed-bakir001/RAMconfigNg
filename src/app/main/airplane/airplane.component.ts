import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../core/services/data.service";
import {Router} from "@angular/router";
import {NgxUiLoaderModule, NgxUiLoaderService} from "ngx-ui-loader";



@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.css']
})

export class AirplaneComponent implements OnInit , AfterViewInit {
  columnsToDisplay = [ "tail number", "date", "action"];
  firstUpload:boolean=true;
  airplanes: any ;
  constructor(private dataSerive: DataService,
              private router:Router,
              private ngxuiService:NgxUiLoaderService) {
  }
  ngAfterViewInit() {

  }



  ngOnInit(): void {
      this.onGetAirplans()
      this.ngxuiService.stop()

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
        this.airplanes = airp
    })
  }

  onGetSystem(id:number) {
    this.router.navigateByUrl('/api/system/'+id)
  }

  return() {
    this.router.navigateByUrl('api/dashboard')
  }
}
