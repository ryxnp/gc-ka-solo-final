import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Whisk } from 'src/app/models/whisk.model';
import { WhiskService } from 'src/app/services/whisk.service';

@Component({
  selector: 'app-whiskey',
  templateUrl: './whiskey.page.html',
  styleUrls: ['./whiskey.page.scss'],
})
export class WhiskeyPage implements OnInit {
  whisks: Whisk [] = [];


  constructor(private whiskService: WhiskService, private router: Router) { }

  ngOnInit() {
    this.whisks = this.whiskService.getWhisks();
  }
 
  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
}
