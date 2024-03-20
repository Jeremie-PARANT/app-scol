import { Component } from '@angular/core';
import { SpecServiceService } from "../../services/spec-service.service";

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {

  public specialites: any=[];

  constructor(private specialitesService: SpecServiceService) {
    this.specialites = this.specialitesService.specialites;
  }

}
