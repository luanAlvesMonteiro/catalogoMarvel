import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, NavigationEnd, RouterEvent  } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public app: AppComponent,
  ) 
  { 

  }
  ngOnInit(): void 
  {
       
  }  

}
