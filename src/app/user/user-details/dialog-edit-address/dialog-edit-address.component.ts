import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../../models/user.class';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

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

  private data = inject(MAT_DIALOG_DATA) as { user: User; userId: string };
  private firestore = inject(Firestore);

  form: FormGroup;

  loading: boolean = false;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {
    this.form = this.fb.group({
      street: [this.data.user.street],
      zipCode: [this.data.user.zipCode],
      city: [this.data.user.city]
    });
  }

  async saveChanges() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    try {
      await this.updateUserAddress(this.data.userId, this.form.value);
      this.dialogRef.close(this.form.value);
    } catch (error) {
      console.error('Fehler beim Speichern: ', error);
      // ev. Fehleranzeige 
    } finally {
      this.loading = false;
    }
  }

  updateUserAddress(userId: string, data: Partial<User>) {
    const userDocRef = doc(this.firestore, `users/${userId}`);
    return updateDoc(userDocRef, data);
  }

}
