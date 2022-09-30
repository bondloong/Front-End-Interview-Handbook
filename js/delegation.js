/* Делегирование событий

Делегирование событий - это техника добавления слушателей событий в родительский элемент вместо добавления их в элементы-потомки. 
Слушатель срабатывает всякий раз, когда событие срабатывает на элементах-потомках, благодаря тому, что событие распространяется по DOM. 
Преимуществами этой техники являются:
Уменьшается объем памяти, поскольку требуется только один единственный обработчик на родительском элементе, 
вместо того, чтобы подключать обработчики событий на каждом потомке.
Нет необходимости отвязывать обработчик от удаленных элементов и привязывать событие для новых элементов.
*/

<ul id="parent-list">
	<li id="post-1">Item 1</li>
	<li id="post-2">Item 2</li>
	<li id="post-3">Item 3</li>
	<li id="post-4">Item 4</li>
	<li id="post-5">Item 5</li>
	<li id="post-6">Item 6</li>
</ul>


/* Не верно */
const liElements = document.querySelectorAll('ul > li');

for (let li of liElements) {
    li.addEventListener('click', (event) => {
      console.log(event.target.innerHTML)
    })
}


/* Верно */
const ul = document.getElementById('parent-list')

ul.addEventListener('click', (event) => {
  console.log(event.target.innerHTML)
})