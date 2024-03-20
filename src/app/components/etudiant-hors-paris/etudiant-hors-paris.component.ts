import { Component } from '@angular/core';
import { EtudiantServiceService } from "../../services/etudiant-service.service";

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent {
  
  public etudiants: any=[];

  constructor(private etudiantsService: EtudiantServiceService) {
    this.etudiants = this.etudiantsService.etudiants;
  }
}
