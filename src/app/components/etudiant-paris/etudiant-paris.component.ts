import { Component } from '@angular/core';
import { EtudiantServiceService } from "../../services/etudiant-service.service";

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrl: './etudiant-paris.component.css'
})
export class EtudiantParisComponent {

  public etudiants: any=[];

  constructor(private etudiantsService: EtudiantServiceService) {
    this.etudiants = this.etudiantsService.etudiants;
  }
}
