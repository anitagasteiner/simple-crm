import { Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user-added',
  imports: [
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './dialog-user-added.component.html',
  styleUrl: './dialog-user-added.component.scss'
})
export class DialogUserAddedComponent {

}
