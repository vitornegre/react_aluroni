import cardapio from 'data/cardapio.json';
import Cardapio from 'pages/Cardapio';

export type Cardapio = typeof cardapio;

export type Prato = typeof cardapio[0];