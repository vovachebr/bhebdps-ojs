export class Currency {
  currencyData = null;

  constructor(urlCurrency) {
    this.url = urlCurrency;
  }

  async sendRequest() {
    try {
      if (!localStorage.getItem('currencyData')) {
        const response = await fetch(this.url);
        const sourceData = await response.json();

        this.currencyData = sourceData?.response?.Valute;

        localStorage.setItem('currencyData', JSON.stringify(this.currencyData));

        return;
      }

      this.currencyData = JSON.parse(localStorage.getItem('currencyData'));
    } catch (e) {
      this.currencyData = {
        Error: {
          Value: 'Can not get currency data',
          Name: e,
        },
      };

      throw new Error('Can not get currency data', e);
    }
  }

  getCurrencyData() {
    return this.currencyData;
  }
}
