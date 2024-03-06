import {Component, OnInit} from '@angular/core';
import {VoyageService} from "../../../services/voyage.service";
import {ActivatedRoute} from "@angular/router";
import {Voyage} from "../../../models/voyage";
import {NgForOf, NgIf} from "@angular/common";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-voyage-detail',
  standalone: true,
  imports: [
    NgIf,
    NgbCarouselModule,
    NgForOf
  ],
  templateUrl: './voyage-detail.component.html',
  styleUrl: './voyage-detail.component.css'
})
export class VoyageDetailComponent implements OnInit{
  voyage?: Voyage;
  isLoading: boolean = false
  mapUrl?: SafeResourceUrl

  constructor(
    private voyageService: VoyageService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl("");
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.voyageService.getOne(+id).subscribe(data => {
        this.voyage = data;
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.voyage?.lattitude},${this.voyage?.longitude}&hl=es&z=14&output=embed`);

        this.isLoading = false;
      })
    }
  }
}
