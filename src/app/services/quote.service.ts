import { Injectable } from '@angular/core';

export class Quote {
  text: string;
  author: string;
}

const QUOTES: Quote[] = [
  {
    text: 'Never impose on others what you would not choose for yourself.',
    author: 'Confucius'
  },
  {
    text: 'The government that governs least, governs best.',
    author: 'Thomas Paine'
  },
  {
    text: 'The man that reads nothing at all is better educated than the man that reads nothing but newspapers.',
    author: 'Thomas Jefferson'
  },
  {
    text: 'If tyranny and oppression come to this land, it will be in the guise of fighting a foreign enemy.',
    author: 'James Madison'
  },
  {
    text: 'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.',
    author: 'Albert Einstein'
  },
  {
    text: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
    author: 'Mark Twain'
  },
  {
    text: 'The liberties of a people never were, nor ever will be, secure,'
        + ' when the transactions of their rulers may be concealed from them.',
    author: 'Patrick Henry'
  }
];

@Injectable()
export class QuoteService {
  private static allQuotes: Quote[] = QUOTES;

  public get quotes(): Quote[] {
    return QuoteService.allQuotes;
  }
}
