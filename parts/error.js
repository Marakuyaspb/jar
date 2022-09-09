class Error {
    render() {
        const html = `
        	<div class="container">
                <div class="error-message">
                    <h3>Технические работы</h3>
                   
                    <p>Извините за неудобства. Скоро всё обновим!</p>
                </div>
        	</div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
