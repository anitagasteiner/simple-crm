import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../../../models/user.class';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

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

  private data = inject(MAT_DIALOG_DATA) as { user: User; userId: string };
  private firestore = inject(Firestore);

  form: FormGroup;

  loading: boolean = false;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialogEditUserComponent>) {
    this.form = this.fb.group({
      firstName: [this.data.user.firstName],
      lastName: [this.data.user.lastName]
    });
  }

  async saveChanges() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    try {
      await this.updateUserData(this.data.userId, this.form.value);
      this.dialogRef.close(this.form.value); //NOTE - optional: Rückgabe an aufrufende Komponente
    } catch (error) {
      console.error('Fehler beim Speichern: ', error);
      // ev. Fehleranzeige
    } finally {
      this.loading = false;
    }
  }

  updateUserData(userId: string, data: Partial<User>) {
    const userDocRef = doc(this.firestore, `users/${userId}`);
    return updateDoc(userDocRef, data);
  }

}
