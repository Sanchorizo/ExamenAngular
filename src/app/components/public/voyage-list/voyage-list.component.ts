import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Voyage} from "../../../models/voyage";
import {VoyageService} from "../../../services/voyage.service";
import {RouterLink} from "@angular/router";

interface onInit {
}

@Component({
  selector: 'app-voyage-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './voyage-list.component.html',
  styleUrl: './voyage-list.component.css'
})
export class VoyageListComponent implements onInit{
  voyages?:Voyage[]
  isLoading: boolean = false

  constructor(
    private voyageService: VoyageService,
  ) {

  }

  ngOnInit(){
    this.isLoading= true
    this.voyageService.getAll().subscribe(
      data=>{
        this.voyages = data;
        console.log(this.voyages);
        this.isLoading = false
      }
    )
}
}
