const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function renderCurrencies(valutes) {
  itemsContainer.innerHTML = Object.values(valutes)
    .map(
      (valute) => `
    <div class="item">
      <div class="item__code">
        ${valute.CharCode}
      </div>
      <div class="item__value">
        ${valute.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    </div>
  `,
    )
    .join('');
}

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then((response) => response.json())
  .then((data) => {
    renderCurrencies(data.response.Valute);
    loader.classList.remove('loader_active');
  })
  .catch(() => {
    loader.classList.remove('loader_active');
  });
