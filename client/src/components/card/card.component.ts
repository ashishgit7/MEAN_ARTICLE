import { Component, OnInit,Input } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import {tags,article} from '../../models/interfaces'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input () article:article
  @Input () ind:number
  prevTagList:tags[]
  public tagValue:string
  constructor(private _articleService: ArticleService) { }

  ran(i:number):string{
    if(i%3==0)
      return "bg-warning"
    
    else if(i%3==1)
      return "bg-success"
    
    else
      return "bg-danger"
  }

  ngOnInit(): void {
    this.getTagList()
  }

  getTagList():void{
    this._articleService.getTag().subscribe((data)=>this.prevTagList=data)
  }

  addTag():void{
    if(!this.prevTagList.some((tag)=>tag.name===this.tagValue)){
      const tag={
        name:this.tagValue
      }
      this._articleService.addTag(tag).subscribe(()=>this.getTagList())
    }
    if(!this.article.tags.includes(this.tagValue)){
      const newArticle = this.article
      newArticle.tags.push(this.tagValue)
      this._articleService.updateArticle(newArticle,newArticle._id).subscribe()
    }
  }
}
