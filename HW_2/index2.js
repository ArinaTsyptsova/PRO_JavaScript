const input = document.getElementById('input')
const button = document.querySelector('.btn')
const block = document.querySelector('.block')

button.addEventListener('click', function (e) {
    try {
        const inputEl = input.value;
        if (inputEl.length < 50 || inputEl.length > 100) {
            throw new Error('Длина введенного отзыва менее 50 или более 500 символов')
        }
        block.insertAdjacentHTML("beforeend", `<p> ${inputEl} `)
    } catch (error) {
        alert(error.message)
    }
})