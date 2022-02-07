import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(ModalComponent);
  }

  ngOnInit(): void {
  }

}

