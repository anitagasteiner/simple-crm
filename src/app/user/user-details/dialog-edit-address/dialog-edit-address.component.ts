import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-edit-address',
  imports: [
    FormsModule,
    MatProgressBarModule,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatDialogTitle,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  firestore: Firestore = inject(Firestore);

  user: User = new User();

  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {

  }

  saveChanges() {

  }  

}
