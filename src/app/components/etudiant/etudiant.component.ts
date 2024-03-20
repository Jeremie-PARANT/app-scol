import { Component } from '@angular/core';
import { EtudiantServiceService } from "../../services/etudiant-service.service";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {

  public etudiants: any=[];

  constructor(private etudiantsService: EtudiantServiceService) {
    this.etudiants = this.etudiantsService.etudiants;
  }
}