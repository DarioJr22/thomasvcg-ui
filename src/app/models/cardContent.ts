export interface MultCards{
  type:string
  content:CardContent[]
  mode:string | "free" | "snap" | "free-snap" | "free" | "snap" | "free-snap" | undefined
  loop:boolean
  perView:number
  spacing:number

}

export class CardContent{
  header!:any
  main!:any
  footer!:any
  type!:any
  bg!:string
}
