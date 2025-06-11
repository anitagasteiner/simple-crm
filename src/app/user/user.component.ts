import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-user',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  openDialogAddUser() {
    
  }

}
