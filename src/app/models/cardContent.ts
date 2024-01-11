export interface MultCards{
  type:'ATUACAO' | 'DEPOIMENTO' | 'ELENCO'
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

export class CardContentElenco{
  img!:string
  titulo!:string
  subtitulo!:string
}
