## Описание задания
Необходимо доработать интерфейс онлайн-читалки электронных книг с возможностью смены размера
шрифта

![Demo](./demo.png)

HTML-разметка элемента управления размером выглядит следующим образом:

```html
<div class="book__control book__control_font-size">
    <a href="" class="font-size font-size_small" data-size="small">A</a>
    <a href="" class="font-size font-size_active">A</a>
    <a href="" class="font-size font-size_big" data-size="big">A</a>
</div>
```

HTML-разметка читалки выглядит так:

```html
<div class="book" id="book">
    <!-- содержимое -->
</div>
```

У этого элемента есть два дополнительных класса: book_fs-big и book_fs-small.
Именно они делают текст меньшего или большего размеров:

```html
<!-- увеличенный шрифт -->
<div class="book book_fs-big" id="book"></div>

<!-- обычный шрифт (нет классов) -->
<div class="book" id="book"></div>

<!-- уменьшенный шрифт -->
<div class="book book_fs-small" id="book"></div>
```

## Процесс реализации

При нажатии на один из элементов с классом *font-size*, вам необходимо:

1. Поставить этому элементу класс *font-size_active*
2. В зависимости от размера, поставить элементу с классом *book* соответствующий класс

Добавьте возможность управления цветом текста и цветом фона.


Для этого вам необходимо расскомментировать HTML-код в файле *task.html*:

```html
<div class="book__control book__control_color">
    <span class="color__title">Текст:</span>
    <a href="" class="color text_color_black color_active" data-text-color="black"></a>
    <a href="" class="color text_color_gray" data-text-color="gray"></a>
    <a href="" class="color text_color_whitesmoke" data-text-color="whitesmoke"></a>
</div>
<div class="book__control book__control_background">
    <span class="color__title">Фон:</span>
    <a href="" class="color bg_color_black" data-bg-color="black"></a>
    <a href="" class="color bg_color_gray" data-bg-color="gray"></a>
    <a href="" class="color bg_color_white color_active" data-bg-color="white"></a>
</div>
```

В CSS уже предусмотрены следующие классы для элемента ```<div class="book" id="book"></div>```:

__Цвет текста:__

1. book_color-gray
2. book_color-whitesmoke
3. book_color-black

__Фон:__

1. book_bg-gray
2. book_bg-black
3. book_bg-white