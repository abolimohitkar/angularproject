import { Component, OnInit,Input } from '@angular/core';
import {ShareService} from 'src/app/share.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
constructor(private service:ShareService) { }

@Input() prod:any;

ProductId:string="";
Category:string="";
Name:string="";
Price:number=0;

ProductsList:any=[];

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList(){
    this.service.getAllcategoryNames().subscribe((data:any)=>{
      this.ProductsList=data;

      
      this.ProductId=this.prod.ProductId;
      this.Category=this.prod.Category;
      this.Name=this.prod.Name;
      this.Price=this.prod.Price;
      
    });
  }

  addproduct(){
    var val = {
      ProductId:this.ProductId,Category:this.Category,
      Name:this.Name,Price:this.Price};

    this.service.addproduct(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateproduct(){
    var val = {
      ProductId:this.ProductId,Category:this.Category,
      Name:this.Name,Price:this.Price};
    this.service.updateproduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  
  }

