// item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/Item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'https://api.exemplo.com/items'; // Substitua pela sua URL da API

  constructor(private http: HttpClient) {}

  // Método para obter todos os itens
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  // Método para obter um item pelo ID
  getItem(id: number): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  // Método para criar um novo item
  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  // Método para atualizar um item existente
  updateItem(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.put<Item>(url, item);
  }

  // Método para excluir um item pelo ID
  deleteItem(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
