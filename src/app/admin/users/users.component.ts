import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Utilisateur } from '../../interfaces/utilisateur';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  newUser: Utilisateur = { id: '', nom: '', email: '', telephone: '', type: 'STB' };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.utilisateurs = users;
    });
  }

  addUser() {
    this.userService.addUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { id: '', nom: '', email: '', telephone: '', type: 'STB' };
    });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }
}
