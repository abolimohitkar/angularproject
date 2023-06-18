import { Component, OnInit,Input } from '@angular/core';
import {ShareService} from 'src/app/share.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {
  

  constructor(private service:ShareService) { }

  @Input() cat:any;
  Categoryid:string="";
  CategoryName:string="";
  Subcategory:string="";

  ngOnInit(): void {
    
    this.Categoryid=this.cat.Categoryid;
    this.CategoryName=this.cat.CategoryName;
    this.Subcategory=this.cat.Subcategory;
  }

  addcategory(){
    var val = {
      Categoryid:this.Categoryid,CategoryName:this.CategoryName,Subcategory:this.Subcategory};
    this.service.addcategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatecategory(){
    var val = {
      Categoryid:this.Categoryid,CategoryName:this.CategoryName,Subcategory:this.Subcategory};
    this.service.updatecategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

 