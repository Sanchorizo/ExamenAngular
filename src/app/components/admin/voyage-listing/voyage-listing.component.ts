import { Component } from '@angular/core';
import {Voyage} from "../../../models/voyage";
import {VoyageService} from "../../../services/voyage.service";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ModalConfirmComponent} from "../modal-confirm/modal-confirm.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-voyage-listing',
  standalone: true,
    imports: [
        RouterLink,
        NgForOf,
        NgIf
    ],
  templateUrl: './voyage-listing.component.html',
  styleUrl: './voyage-listing.component.css'
})
export class VoyageListingComponent {
  voyages?:Voyage[]
  isLoading: boolean = false

  constructor(
    private voyageService: VoyageService,
    public dialog: MatDialog,
    private matSnackbar:MatSnackBar
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

  deleteCategoryModal(enterAnimationDuration: string, exitAnimationDuration: string, id: number | undefined){
    let dialogue = this.dialog.open(ModalConfirmComponent, {
      data:{voyage: this.voyages},
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogue.afterClosed().subscribe(result => {
      if(result && id){
        this.isLoading =true

        this.voyageService.removeVoyage(<number>id).subscribe(data => {
            this.ngOnInit();
            this.openSnackBar();
          }
        )
      } else{
        this.isLoading = false
      }
    });
  }


  openSnackBar() {
    this.matSnackbar.open('Suppression effectuée', 'Fermer', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

}
