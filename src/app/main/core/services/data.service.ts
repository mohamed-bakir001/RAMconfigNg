import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Airplane} from "../models/airplan.model";
import {Systeme} from "../models/system.model";
import {Swlocation} from "../models/swlocation.model";
import {LoadableSW} from "../models/swloadable.model";
import {User} from "../../../core/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private host = environment.host +'/api';
  constructor(private http:HttpClient) { }

  getAirplaines():Observable<Airplane[]>{
    return this.http.get<Airplane[]>(this.host+"/airplan") ;
  }

  getAirplanByid(id:number):Observable<Airplane>{
    return this.http.get<Airplane>(this.host+"/airplan/"+id) ;
  }

  getSystemByid(id:number):Observable<Systeme>{
    return this.http.get<Systeme>(this.host+"/systeme/"+id) ;
  }


  deleteAirplan(id:number):Observable<Airplane>{
  return this.http.delete<Airplane>(this.host+"/airplan/delete/"+id) ;
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


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.host+'/users') ;
  }
}
