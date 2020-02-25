import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

   contactList = [
    { id: 1, name: 'rabbani', phone: '01751394949'},
    { id: 2, name: 'Sarkar', phone: '01751394959'}
  ]
  constructor( private router: Router) { }
  
  ngOnInit(): void {
  }
  select(item){
    this.router.navigate(['/contacts', item.id])
  }
}
