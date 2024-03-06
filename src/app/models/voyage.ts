import {Image} from "./image";

export class Voyage {
  id?: number;
  mainPicture?: Image;
  destination?: string;
  lattitude?: number;
  longitude?: number;
  type?: string;
  nbStar?:number;
  pictures?: Image[]


  constructor(id?: number, mainpicture?: Image, destination?: string, lattitude?: number, longitude?: number, type?: string, nbStar?: number, pictures?: Image[]) {
    this.id = id;
    this.mainPicture = mainpicture;
    this.destination = destination;
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.type = type;
    this.nbStar = nbStar;
    this.pictures = pictures;
  }
}
