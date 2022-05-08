import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

export class FileService {
  public server = environment.server;
  constructor(private http: HttpClient) { }

}
