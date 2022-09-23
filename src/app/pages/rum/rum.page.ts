import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rum } from 'src/app/models/rum.model';
import { RumService } from 'src/app/services/rum.service';

@Component({
  selector: 'app-rum',
  templateUrl: './rum.page.html',
  styleUrls: ['./rum.page.scss'],
})
export class RumPage implements OnInit {
  rums: Rum[] = [];
 
  constructor(private rumService: RumService, private router: Router) { }

  ngOnInit() {
    this.rums = this.rumService.getRums();
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
}
