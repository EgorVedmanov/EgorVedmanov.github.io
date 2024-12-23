/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('нe cпpaшивaй, пo кoм звoнит кoлoкoл, oн звoнит и пo тебe')
})