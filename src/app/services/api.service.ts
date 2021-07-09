import { Deck, Card } from 'src/app/services/api.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  Draw } from './api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getDeckDraw(deckId: string = "new", numberOfCards: number = 5): Observable<Draw> {
    return this.httpClient.get<Draw>(`${environment.apiUrl}/deck/${deckId}/draw/?count=${numberOfCards}`);
  }
  postDeck() {
    return this.httpClient.get<Deck>(`${environment.apiUrl}/deck/new?jokers_enabled=true`, {});
  }






}
