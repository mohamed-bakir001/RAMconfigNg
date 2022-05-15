import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {DataService} from "../core/services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Systeme} from "../core/models/system.model";
import {MatPaginator, PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit ,AfterViewInit{
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  columnsToDisplay = ["name", "action"];
  idAirp?: number ;
  dataSystems? : any ;
  pageSize!: any;
  pageIndex!: number
  pageEvent!: void;
  dataLength: any;


  constructor(private _liveAnnouncer: LiveAnnouncer,
              private route:Router,
              private dataService:DataService,
              private activeRoute: ActivatedRoute) {}



  ngAfterViewInit() {

  }




  onGetSystems(){
    this.dataService.getSystems(this.idAirp).subscribe(
      system => {
        this.dataSystems = new MatTableDataSource<Systeme>(system)
        this.dataLength= system.length
      });
  }

  ngOnInit(): void {
    this.idAirp = this.activeRoute.snapshot.params['id'];
    this.onGetSystems()
  }

  getServerData($event?: PageEvent) {

  }

  swLocation(id:number) {
    this.route.navigateByUrl('/api/swlocation/'+id)
  }
}
