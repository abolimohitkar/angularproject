import { Component, OnInit } from '@angular/core';
import {ShareService} from 'src/app/share.service';

@Component({
  selector: 'app-show-del',
  templateUrl: './show-del.component.html',
  styleUrls: ['./show-del.component.css']
})
export class ShowDelComponent implements OnInit {

  constructor(private service:ShareService) { }

  CategoryList:any=[];

  ModalTitle:string="";
  ActivateAddupdateCatComp:boolean=false;
  cat:any;

  CategoryIdFilter:string="";
  TitleFilter:string="";
  CategoryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCatList();
  }

  addClick(){
    this.cat={
      Categoryid:"",
      CategoryName:"",
      Subcategory:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddupdateCatComp=true;

  }

  editClick(item:any){
    this.cat=item;
    this.ModalTitle="Update Category";
    this.ActivateAddupdateCatComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deletecategory(item.Categoryid).subscribe(data=>{
        alert(data.toString());
        this.refreshCatList();
      })
    }
  }

  closeClick(){
    this.ActivateAddupdateCatComp=false;
    this.refreshCatList();
  }


  refreshCatList(){
    this.service.getCatList().subscribe(data=>{
      this.CategoryList=data;
      this.CategoryListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CategoryIdFilter = this.CategoryIdFilter;
    var TitleFilter = this.TitleFilter;

    this.CategoryList = this.CategoryListWithoutFilter.filter(function (el:any){
        return el.Categoryid.toString().toLowerCase().includes(
          CategoryIdFilter.toString().trim().toLowerCase()
        )&&
        el.Title.toString().toLowerCase().includes(
          TitleFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.CategoryList = this.CategoryListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}

