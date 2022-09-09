class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        const html = `
        	<div class="spinner-container">
        		<img class="spinner__img" src="parts/spinner/img/spinner.svg" />
        	</div>`;
        console.log(html);
        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();