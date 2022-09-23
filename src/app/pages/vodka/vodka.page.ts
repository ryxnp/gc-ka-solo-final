import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vodka } from 'src/app/models/vodka.model';
import { VodkaService } from 'src/app/services/vodka.service';

@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.page.html',
  styleUrls: ['./vodka.page.scss'],
})
export class VodkaPage implements OnInit {
  vodkas: Vodka[] = [];
  constructor(private vodkaService: VodkaService, private router: Router) { }

  ngOnInit() {
    this.vodkas = this.vodkaService.getVodkas();
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
}
