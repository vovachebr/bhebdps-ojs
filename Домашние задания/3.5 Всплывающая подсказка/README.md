# Всплывающая подсказка

## Описание 

Необходимо написать всплывающую подсказку для элементов. Подсказка появляется
после клика на элементе.

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка

Базовая разметка элемента, который нуждается в подсказке:

```html
<a href="" class="has-tooltip" title="Что бы вы хотели?">Помогите пожалуйста</a>
```

Шаблон подсказки выглядит так:

```html
<div class="tooltip">Текст подсказки</div>
```

Данные для текста подсказки берутся из атрибута *title*

Подсказки активируются классом *tooltip_active*


### Процесс реализации

1. Реализуйте появление подсказки на основе положения текста
2. Показывайте подсказку при клике на элемент.

### Повышенный уровень сложности #1 (не обязательно)

В один момент времени должна показываться только одна подсказка

### Повышенный уровень сложности #2 (не обязательно)

Добавьте ссылке дополнительный атрибут data-position для настройки места появления
подсказки:

1. top - над текстом
2. left - слева от текста
3. right - справа от текста
4. bottom - снизу от текста 
