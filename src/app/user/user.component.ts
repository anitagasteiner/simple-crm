import { Component, inject, model, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { DialogUserAddedComponent } from './dialog-user-added/dialog-user-added.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user: User = new User();

  readonly dialog = inject(MatDialog);
  readonly userAdded = inject(MatDialog);

  openDialogAddUser(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.openDialogUserAdded();
      }
    });
  }

  openDialogUserAdded(): void {
    const dialogRef = this.userAdded.open(DialogUserAddedComponent, {});
    setTimeout(() => {
      dialogRef.close();      
    }, 5000);
  }

}
