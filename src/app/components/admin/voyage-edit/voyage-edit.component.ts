import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardContent} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {Voyage} from "../../../models/voyage";
import {VoyageService} from "../../../services/voyage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-voyage-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatCardContent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './voyage-edit.component.html',
  styleUrl: './voyage-edit.component.css'
})
export class VoyageEditComponent implements OnInit {
  voyage: Voyage = new Voyage();
  isLoading = false;
  types = ["Montagne", "Plage", "Campagne"]

  constructor(
    private activatedRoute: ActivatedRoute,
    private voyageService :VoyageService,
              private router: Router) {
  }

  ngOnInit():void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.voyageService.getOne(+id).subscribe(data => {
        this.voyage = data;
      })
    }
  }

  submitForm(voyage : Voyage) {
    this.isLoading = true;

    this.voyageService.editVoyage(voyage).subscribe(data=>{

      this.router.navigate(["/admin"])
      console.log(voyage)
    })
  }
}
