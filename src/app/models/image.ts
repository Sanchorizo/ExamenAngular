
export class Image {
  id?: number;
  src?: string;
  alt?: string;

  constructor(id?: number , src?: string, alt?: string) {
    this.id = id;
    this.src = src;
    this.alt = alt;
  }
}
