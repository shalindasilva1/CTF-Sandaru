import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(pageNo:string){
    this.router.navigate(['/'+pageNo]);
  }
}
