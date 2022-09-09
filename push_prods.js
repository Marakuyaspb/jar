/* PRODUCTS */


class Products {

	render() {
		let htmlCatalog = '';
		
		CATALOG.forEach(({model_name, model_photo, price, square, max_power, noize, inv_tech, en_eff_class, wi_fi}) => {
			console.log('aaaa!');

			htmlCatalog += `
				<li>
					<span>${model_name}</span>
					<img src="${model_photo}" />
					<span>${price}</span>
				</li>
			`;
			});

			const html = `
			<ul class = "smth">
				${htmlCatalog}
			</ul>

		`;
		ROOT_PRODUCTS.innerHTML = html;
		}
	}

const productsPage = new Products();







	/*render() {
		let htmlCatalog = '';


		CATALOG.forEach((model_name, model_photo, price, square, max_power, noize, inv_tech, en_eff_class, wifi) => {

			let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

			htmlCatalog += `
				<li>
					<span>${model_name}</span>
					<img src="${model_photo}" />
					<span>${price}</span>
				</li>
			`;
		});

		consthtml = `
			<ul class = "smth">
				${htmlCatalog}
			</ul>

		`;
		allProducts.innerHTML = htmlProducts;
	}  
	
}

const productsPage = new Products();
productsPage.render();*/









/*function builtIt (data) {
	document.querySelector('.cards').innerHTML = `<table class="model_name"></table>` for(key in data) {
		let row = document.createElement('tr')
		row.innerHML = `<td colspan="2">${key}</td>`
		document.querySekector('.model_parametr')
	}
};
builtIt();
*/


/*function pushAll () {
	function buildProductsViewHtml (products, homeHtml) {
		var finalHtml = homeHtml;
		finalHtml += "<section class='row'>";

		for (var i = 0; i < products.length; i++) {

			var html = homeHtml;

			var model_name = "" + products[1].model_name;
			var model_photo = "" + products[1].model_photo;
			var model_price = "" + products[1].model_price;
			var square = "" + products[1].square;
			var max_power = "" + products[1].max_power;
			var noize = "" + products[1].noize;
			var inv_tech = "" + products[1].inv_tech;
			var en_eff_class = "" + products[1].en_eff_class;
			var wi_fi = "" + products[1].wi_fi;

			html = insertProperty(html,"model_name", model_name);
			html = insertProperty(html,"model_photo", model_photo);
			html = insertProperty(html,"model_price", model_price);
			html = insertProperty(html,"square", square);
			html = insertProperty(html,"max_power", max_power);
			html = insertProperty(html,"noize", noize);
			html = insertProperty(html,"inv_tech", inv_tech);
			html = insertProperty(html,"en_eff_class", en_eff_class);
			html = insertProperty(html,"wi_fi", wi_fi);

			finalHtml += html;
		}

		finalHtml += "</section>";
		return finalHtml;
	}
}
*/






/* with Ajax

function pushAll (global) {

	var t1 = {};

	var homeHtml = "snippets/product_card.html";
	var allProducts = "products.json";



	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>";
		insertHtml(selector, html);
	};

	var insertProperty = function (string, propName, propValue) {
		var propToReplace = "{{" + propName + "}}";
		string = string
			.replace(new RegExp(propToReplace, "g"), propValue);
		return string;
	}

	document.addEventListener("DOMContentLoaded", function (event) {
		showLoading("#main-content");
		$ajaxUtils.sendGetrequest(
			homeHtml,

			function (responceText) {
				document.querySelector(#main-content).innerHTML = responceText;
			}, false),
	});

	t1.loadProducts = function () {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			allProducts,
			buildAndShowProductsHTML);
	};


	function buildAndShowProductsHTML (products) {
		$ajaxUtils.sendGetRequest(
			function(homeHtml) {
				homeViewHtml = 
				buildAndShowProductsHTML(products, homeHtml);
				insertHtml("#main-content", homeViewHtml);
			},
		false);
	}

	function buildProductsViewHtml (products, homeHtml) {
		var finalHtml = homeHtml;
		finalHtml += "<section class='row'>";

		for (var i = 0; i < products.length; i++) {

			var html = homeHtml;

			var model_name = "" + products[1].model_name;
			var model_photo = "" + products[1].model_photo;
			var model_price = "" + products[1].model_price;
			var square = "" + products[1].square;
			var max_power = "" + products[1].max_power;
			var noize = "" + products[1].noize;
			var inv_tech = "" + products[1].inv_tech;
			var en_eff_class = "" + products[1].en_eff_class;
			var wi_fi = "" + products[1].wi_fi;

			html = insertProperty(html,"model_name", model_name);
			html = insertProperty(html,"model_photo", model_photo);
			html = insertProperty(html,"model_price", model_price);
			html = insertProperty(html,"square", square);
			html = insertProperty(html,"max_power", max_power);
			html = insertProperty(html,"noize", noize);
			html = insertProperty(html,"inv_tech", inv_tech);
			html = insertProperty(html,"en_eff_class", en_eff_class);
			html = insertProperty(html,"wi_fi", wi_fi);

			finalHtml += html;
		}

		finalHtml += "</section>";
		return finalHtml;
	}

global.$t1 = t1;
}) (window);*/
