import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {DataService} from "../core/services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Systeme} from "../core/models/system.model";


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit ,AfterViewInit{

  columnsToDisplay = ["system id", "name", "action"];
  id?: number ;
  systems? : Systeme[] ;

  constructor(private _liveAnnouncer: LiveAnnouncer,
              private route:Router,
              private dataService:DataService,
              private activeRoute: ActivatedRoute) {}



  ngAfterViewInit() {

  }




  onGetSystems(){
    this.dataService.getSystems(this.id).subscribe(
      system => this.systems = system
    );
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.onGetSystems()
  }

}
