import { Component, OnInit } from '@angular/core';
import {FileService} from "../core/services/file-upload.service";
import {HttpErrorResponse, HttpEvent, HttpEventType} from "@angular/common/http";
import { saveAs } from 'file-saver';
import {Observable} from "rxjs";
import {Router} from "@angular/router";


interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";

  file:File;
  filenames: string[] =[] ;
  fileStatus = {status: '', requestType: '', percent: 0} ;

  constructor(private fileService:FileService,
              private route:Router) { }

  ngOnInit(): void {
  }

  // On file Select



  resportProgress(httpEvent: HttpEvent<string[] | Blob>):void  {
    switch(httpEvent.type){
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total, 'Downloading...');
        break;
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total, 'Uploading...');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if(httpEvent.body instanceof Array){
          for(const filename of httpEvent.body){
            this.filenames.unshift(filename) ;
          }
        }else{
          saveAs(new File([httpEvent.body!], httpEvent.headers.get("File-Name")!,
            {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}
          ))
          // saveAs(new File([httpEvent.body!], httpEvent.headers.get("File-Name")!,
          //   {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}
          // ))
        }
        this.fileStatus.status = 'done';
        break;

      default:
        console.log(httpEvent) ;
        break;
    }
  }


  private updateStatus(loaded: number, total: number, requestType: string) {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total) ;
  }

  onUploadFiles() :void {
    if(this.file){
      const formData = new FormData() ;
      if(this.file.type == 'text/xml'){
        formData.append('file', this.file, this.file.name)
        this.fileService.uploadFile(formData).subscribe(
          event=>{
            this.resportProgress(event)
            this.route.navigateByUrl('/api/airplan')
          },
          (error:HttpErrorResponse)=>{
            console.log(error);
          })
      }else{
        console.log('file is not xml ....!')
      }

    }else{
      console.log("this file is unifined")
    }

  }


  onChange(eve:any) {
    this.file = eve.item(0)
    console.log(eve.item(0), this.file.type)
  }
}
