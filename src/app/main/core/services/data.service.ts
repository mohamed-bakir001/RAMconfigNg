import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Airplane} from "../models/airplan.model";
import {Systeme} from "../models/system.model";
import {Swlocation} from "../models/swlocation.model";
import {LoadableSW} from "../models/swloadable.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private host = environment.host;
  constructor(private http:HttpClient) { }

  getAirplaines():Observable<Airplane[]>{
    return this.http.get<Airplane[]>(this.host+"/airplan") ;
  }

  getSystems(id: number | undefined):Observable<Systeme[]>{
    return this.http.get<Systeme[]>(this.host+"/system/"+id) ;
  }

  getSwLocations(id : number):Observable<Swlocation[]>{
    return this.http.get<Swlocation[]>(this.host+"/swlocation/"+id) ;
  }

  getLoadableSWs(id : number):Observable<LoadableSW[]>{
    return this.http.get<LoadableSW[]>(this.host+"/loadablesw/"+id) ;
  }
}
