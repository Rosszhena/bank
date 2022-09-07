export interface RespuestaEnlace {
  url: string;
}

export interface link {
  alias: number;
  _links:{
    self: string;
    short: string;
  }

}

export interface post {
  url: string;
}

export interface Links {
  self: string;
  short: string;
}
