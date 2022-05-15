import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";


@Injectable({providedIn:"root"})
export class FileService {


  public server = environment.host;
  constructor(private http: HttpClient) { }

  uploadFile(formData:FormData):Observable<HttpEvent<string[]>>{
    console.log("hello", formData)
    return this.http.post<string[]>( this.server+ "/uploadfile", formData, {
      reportProgress:true,
      observe:'events'})
  }
}
