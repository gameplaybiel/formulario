import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  item: Item = { id: 0, nome: '', descricao: '' };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  submitForm(): void {
    if (this.item.id === 0) {
      // Criação de item
      this.itemService.createItem(this.item).subscribe(() => {
        // Limpa o formulário após a criação
        this.item = { id: 0, nome: '', descricao: '' };
      });
    } else {
      // Atualização de item
      this.itemService.updateItem(this.item).subscribe(() => {
        // Lógica adicional após a atualização
      });
    }
  }
}

