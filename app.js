const currencyOne = document.querySelector('.currencyOne');
const currencyTwo = document.querySelector('.currencyTwo');
const valueOne = document.querySelector('.valueOne');
const valueTwo = document.querySelector('.valueTwo');
const conversion = document.querySelector('.conversion');


currencyOne.addEventListener('change', update);
currencyTwo.addEventListener('change', update);
valueOne.addEventListener('input', update);




function update() {
  const x = valueHolder.key;
    const currencySelectedOne = currencyOne.value;



    let api = `https://v6.exchangerate-api.com/v6/${x}/latest/${currencySelectedOne}`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const currencySelectedTwo = data.conversion_rates[currencyTwo.value];

            const currencyOneValue = valueOne.value;
            valueTwo.value = (currencySelectedTwo * currencyOneValue).toFixed(2);
            conversion.value = currencySelectedTwo;
            })
    }



update();
