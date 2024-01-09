import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../../auth-google.service';
import { Router } from '@angular/router';
import { Docente } from 'src/app/model/Docente';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  docente: Docente = { ID: '', Full_Name: '', Given_Name: '', Family_Name: '', Image_URL: '', Email: '' };
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private authGoogleService: AuthGoogleService, private router: Router) {}

  ngOnInit(): void {
    this.loadDocenteData();
  }

  loadDocenteData(): void {
    const data = JSON.stringify(this.authGoogleService.getProfile());
    const userData = JSON.parse(data);

    // Update your Angular bindings instead of manipulating the DOM directly
    this.docente.Full_Name = userData["name"];
    this.docente.Given_Name = userData["given_name"];
    this.docente.Family_Name = userData["family_name"];
    this.docente.Image_URL = userData["picture"];
    this.docente.Email = userData["email"];
  }

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }
}
