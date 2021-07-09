export interface Deck {
    success?: boolean;
    deck_id?: string;
    shuffled?: boolean;
    remaining?: number;
   }

   export interface Draw {
    success: boolean;
    deck_id: string;
    cards: Card[];
   }

const newLocal = null;
   export interface Card {
    code: string;
    value: string;
    suit: string;
    image: string;
    images: {
    svg: string;
    png: string;
    };

      }


