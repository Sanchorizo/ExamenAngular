import { Component } from '@angular/core';
import {Voyage} from "../../../models/voyage";
import {VoyageService} from "../../../services/voyage.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {NgForOf, NgIf} from "@angular/common";
import {MatCardContent} from "@angular/material/card";



@Component({
  selector: 'app-voyage-add',
  standalone: true,
  imports: [
    FormsModule,
    MatLabel,
    MatError,
    MatFormField,
    MatSelect,
    MatInput,
    MatOption,
    NgForOf,
    NgIf,
    MatCardContent
  ],
  templateUrl: './voyage-add.component.html',
  styleUrl: './voyage-add.component.css'
})
export class VoyageAddComponent {
  voyage: Voyage = new Voyage();
  isLoading = false;
  types = ["Montagne", "Plage", "Campagne"]
  constructor(private voyageService :VoyageService,
              private router: Router,
              private matSnackbar :MatSnackBar) {
  }

  submitForm(voyage: Voyage){
    this.isLoading = true;
    console.log(voyage)
    console.log(this.voyage)

    this.voyageService.postVoyage(voyage).subscribe(data=>{
      console.log(data)

      this.matSnackbar.open('Nouvelle destination ajoutée!', 'Fermer', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom'}),
        this.router.navigate(["/admin"])
    })
  }
  addPicture() {
    if (this.voyage) {
      if (!this.voyage.pictures) {
        this.voyage.pictures = [];
      }
      this.voyage.pictures.push({ src: '', alt: '' });
    }
  }
  onMainPictureChange(newValue: string) {
    if (this.voyage.mainPicture === undefined) {
      this.voyage.mainPicture = { src: newValue, alt: "" };
    } else {
      this.voyage.mainPicture.src = newValue;
    }
  }

  onMainPictureAltChange(newValue: string) {
    if (this.voyage.mainPicture === undefined) {
      this.voyage.mainPicture = { src: "", alt: newValue };
    } else {
      this.voyage.mainPicture.alt = newValue;
    }
  }
}
