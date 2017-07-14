import { Component, OnInit } from '@angular/core';
import {InsService} from "../../services/ins/ins.service";

@Component({
  selector: 'app-ins',
  templateUrl: './ins.component.html',
  styleUrls: ['./ins.component.css']
})
export class InsComponent implements OnInit {

  constructor(
    private insService: InsService
  ) { }

  ngOnInit() {
    this.insService.createIn(24);
  }

}
