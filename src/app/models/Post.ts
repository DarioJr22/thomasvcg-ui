import { Operation } from './Operation';
export interface Post{
  postDTO:{
    id:string;
    title:string;
    subtitle:string;
    content:string;
    tags:string[];
    date:string;
  }
}

export interface TagHandler{
  tag:string
  operation:Operation
}

