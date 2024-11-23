import { List } from './components/List.js';
import { Currency } from './services/Currency.js';

// DOM элементы
const rootListElement = document.querySelector('#items');
const loaderElement = document.querySelector('#loader');

const currencyService = new Currency(
  'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
);
await currencyService.sendRequest();

const listComponent = new List(
  currencyService.getCurrencyData(),
  rootListElement,
  loaderElement
);
listComponent.init();
