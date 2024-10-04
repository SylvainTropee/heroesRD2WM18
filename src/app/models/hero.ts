export interface Hero {

  id : number;
  name : string;
  images : {
    sm : string
  };
  powerstats : {
    intelligence : number;
    speed : number;
    strength : number;
    durability : number;
    power : number;
    combat : number;
  }
  biography : {
    fullName : string
  }
}
