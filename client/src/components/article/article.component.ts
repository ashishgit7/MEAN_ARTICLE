import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import {tags,article} from '../../models/interfaces'


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public headerValue:string= ""
  public descValue:string= ""
  public searchValue:string= ""
  public articleList:article[]
  public prevTagList:tags[]

  constructor(private _articleService: ArticleService) { }
  check(tagList:tags[]):boolean{
    const found:boolean =  tagList.some((tag)=>this.searchValue===tag.name)
    if(found||this.searchValue=='')
    return true
    else return false
  }
  disp():void{
    const article = {
      header:this.headerValue,
      desc: this.descValue,
      tags:[]
    }
    this._articleService.addArticle(article).subscribe(data=>this.getData())
  }
  getData():void{
    this._articleService.getArticles()
    .subscribe(data=> this.articleList=data)
    this._articleService.getTag()
    .subscribe(data=>this.prevTagList=data)
  }
  ngOnInit(): void {
    this.getData()
  }

}
