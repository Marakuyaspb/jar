/* iNDEX */

function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);

	productsPage.render();	
}

spinnerPage.render();

let CATALOG = [];

fetch('products.json')
    .then(res => res.json())
    .then(body => {
		CATALOG = body;

		setTimeout(() => {
			spinnerPage.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage.handleClear();
    	errorPage.render();
    })