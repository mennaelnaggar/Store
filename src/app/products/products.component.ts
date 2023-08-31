import { Component,  } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent     {
      searchValue:string='';
      toggleData:boolean=true;
      allProducts:any[]=[

      ]
  constructor(){}
     toggleDescription(){
        this.toggleData= false;
     }
  }

