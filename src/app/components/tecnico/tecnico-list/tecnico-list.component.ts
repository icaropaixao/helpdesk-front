import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
  ELEMENT_DATA:tecnico[] = [
    {
      id:1,
    nome: 'Ícaro Reis',
    cpf: '188.774.297-20',
    email:'icaro@email.com',
    senha: '123',
    perfis:['0'],
    dataCriacao: '10/06/2025'
    }
    
  ]

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email','acoes'];
  dataSource = new MatTableDataSource<tecnico>(this.ELEMENT_DATA);

  constructor() { }

 
  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

