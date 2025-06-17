import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../../../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
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
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  private data = inject(MAT_DIALOG_DATA) as User;

  form: FormGroup;

  loading: boolean = false;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialogEditUserComponent>) {
    this.form = this.fb.group({
      firstName: [this.data.firstName],
      lastName: [this.data.lastName]
    });
  }

  saveChanges() {
    if (this.form.valid) {
      const updateUser = this.form.value;
      this.dialogRef.close(updateUser); //NOTE - Rückgabe an aufrufende Komponente
    }
  }

}
