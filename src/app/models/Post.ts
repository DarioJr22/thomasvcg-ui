import { Operation } from './Operation';
export interface Post{
  postDTO:{
    id:number;
    title:string;
    subtitle:string;
    content:string;
    tags:string[];
    date:string;
    user:any;
  }
}

export interface TagHandler{
  tag:string
  operation:Operation
}

