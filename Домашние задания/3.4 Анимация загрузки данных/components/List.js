export class List {
  constructor(dataForRender, rootElement, loaderElement) {
    this.dataForRender = dataForRender;
    this.rootElement = rootElement;
    this.loaderElement = loaderElement;
  }

  init() {
    this.renderList();
    this.disableLoader();
  }

  disableLoader() {
    this.loaderElement.classList.remove('loader_active');
  }

  createDivAndAddClass() {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');

    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');

    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');

    return { item, itemCode, itemValue, itemCurrency };
  }

  renderList() {
    Object.entries(this.dataForRender).forEach(([key, value]) => {
      const { item, itemCode, itemValue, itemCurrency } =
        this.createDivAndAddClass();

      itemCode.textContent = key;
      itemValue.textContent = value.Value;
      itemCurrency.textContent = value.Name;

      item.appendChild(itemCode);
      item.appendChild(itemValue);
      item.appendChild(itemCurrency);

      this.rootElement.appendChild(item);
    });
  }
}
