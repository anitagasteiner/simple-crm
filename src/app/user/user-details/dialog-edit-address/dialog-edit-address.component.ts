import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../../models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  imports: [
    MatProgressBarModule,
    ReactiveFormsModule,       
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,    
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  private data = inject(MAT_DIALOG_DATA) as User; 

  form: FormGroup;

  loading: boolean = false;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {
    this.form = this.fb.group({
      street: [this.data.street],
      zipCode: [this.data.zipCode],
      city: [this.data.city]
    });
  }

  saveChanges() {
    if (this.form.valid) {
      const updateAddress = this.form.value;
      this.dialogRef.close(updateAddress); //NOTE - Rückgabe an aufrufende Komponente
    }
  }  

}
