import { Component, OnInit } from '@angular/core';
import {ShareService} from 'src/app/share.service';


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {
  constructor(private service:ShareService) { }

  ProductsList:any=[];

  ModalTitle:string="";
  ActivateAddshowProdComp:boolean=false;
  prod:any;

  ngOnInit(): void {
    this.refreshProdList();
  }

  addClick(){
    this.prod={
      ProductId:"",
      Category:"",
      Name:"",
      Price:0,
    }
    this.ModalTitle="Add Product";
    this.ActivateAddshowProdComp=true;

  }

  editClick(item:any){
    this.prod=item;
    this.ModalTitle="Update Product";
    this.ActivateAddshowProdComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteproduct(item.ProductId).subscribe(data=>{
        alert(data.toString());
        this.refreshProdList();
      })
    }
  }

  closeClick(){
    this.ActivateAddshowProdComp=false;
    this.refreshProdList();
  }


  refreshProdList(){
    this.service.getProductList().subscribe(data=>{
      this.ProductsList=data;
      
    });
  }


}






