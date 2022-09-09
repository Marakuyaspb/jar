
/*var out = [];
	for (var i = 0; i<products.length; i++) {
		if(products]i != indefuned)	{
			out += products[i]+'';
	}
}
 document.querySelector('#out').innerHTML = out;

*/



function renderIt(){
	fetch('products.json')
    .then(res => res.json())
    .then(body => {
		out = body;

    })
    .catch(() => {
    	errorPage.render();
    })
}
renderIt();