import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ShowHideMenu(){
    document.getElementsByTagName("body")[0].classList.toggle('toggle-sidebar');
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  

  

}
