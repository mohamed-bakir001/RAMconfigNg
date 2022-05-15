import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FileService} from "../main/core/services/file-upload.service";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor(private router:Router,
              private fileServie:FileService,
              ) { }

  ngOnInit(): void {
  }







}
