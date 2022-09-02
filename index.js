const loadData = (search) => {
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.drinks))

}
const displayData = (datas) => {
    // console.log(datas);
    const sectionContainer = document.getElementById('section-container');
    sectionContainer.innerHTML = '';
    // datas = datas.slice(0, 20);

    const notFound = document.getElementById('no-message')
    if (datas === null) {
        notFound.classList.remove('hidden');
    }
    else {
        notFound.classList.add('hidden');
    }


    datas.forEach(data => {
        // console.log(data);

        const { strCategory, strDrinkThumb, idDrink, strDrink, strInstructions } = data;

        const createDiv = document.createElement('div');

        createDiv.innerHTML = `
                    <div class="card card-compact w-full h-full bg-base-100 shadow-xl">
                    <figure><img src="${strDrinkThumb}" alt="" /></figure>
                    <div class="card-body">
                    <h2 class="card-title">${strDrink}</h2>
                    <p>${strInstructions}</p>
                    <div class="card-actions justify-center">
                   <label  onclick="loadCocktail(${idDrink})" for="my-modal-6" class="btn btn-primary">See more</label>
                    </div>
                   </div>
                   </div>
        `;
        sectionContainer.appendChild(createDiv);

    });
}
const searchDetails = () => {
    const inputField = document.getElementById('input-field');
    inputFieldValue = inputField.value;
    inputField.value = '';
    loadData(inputFieldValue);
}

const loadCocktail = (id) => {
    url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => loadCocktailDisplay(data.drinks[0]))
}
const loadCocktailDisplay = (item) => {
    // console.log(item);
    const { strDrink, strCategory, strDrinkThumb, strInstructions } = item
    const openModal = document.getElementById('modal-open');
    openModal.innerHTML = '';
    const createModal = document.createElement('div');
    createModal.innerHTML = `
                 <figure><img src="${strDrinkThumb}" alt="" /></figure>
                  <p class="py-4">${strCategory}</p>
                  <p>${strInstructions}</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">close!</label>
                    </div>
    `;
    openModal.appendChild(createModal);

}
// loadData();