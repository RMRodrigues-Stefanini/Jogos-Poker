import { Component, Input, OnInit } from '@angular/core';
import { Card, Deck } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})

export class DeckComponent implements OnInit {
  @Input() deck: Deck = {};

  public cards: Card[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.deckDraw();

  }

  deckDraw() {
    this.apiService
      .getDeckDraw(this.deck.deck_id)
      .subscribe((draw) =>{ this.cards = draw.cards,
        this.checkGame()});
  }
  jogos=0;
  mao = "Voce nao tem nenhum jogo";
  checkGame(){
      console.log(this.cards);
      for(let i in this.cards){
        for(let j in this.cards){
          if(this.cards[i].value === this.cards[j].value){
            this.jogos++;
          }
        }
       }
              this.jogos = this.jogos - 5;
              console.log(this.jogos);
              if(this.jogos == 2){
                this.mao = "Voce tem uma dupla";

              }
              else if (this.jogos == 6){
                this.mao = "Voce tem um trio";
              }
              else if (this.jogos == 4){
                this.mao = "Voce tem duas duplas";
              }
              else if (this.jogos == 5){
                this.mao = "Voce tem um Full House (uma dupla e um trio)";
              }

              else if (this.jogos == 11){
                this.mao = "Voce tem uma quadra";
              }
              else if((this.cards[0].suit == this.cards[1].suit) && (this.cards[1].suit == this.cards[2].suit)
                      && (this.cards[2].suit == this.cards[3].suit) && (this.cards[3].suit == this.cards[4].suit)){
                this.mao= "Voce tem um Flush"

                      }
        }
      }
