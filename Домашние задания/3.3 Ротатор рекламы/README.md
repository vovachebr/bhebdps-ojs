# Ротатор рекламы

Домашнее задание к занятию 3.3 «Объект события. Работа с HTML-формами. Изменение структуры HTML-документа. DOM — Document object model».

## Описание 

Необходимо реализовать механизм смены текстовых объявлений. 
Каждое объявление меняется через 1 секунду.

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка

Разметка элементов выглядит следующим образом:

```html
<p>
  Я
  <span class="rotator">
    <span class="rotator__case rotator__case_active">Бог JS</span>
    <span class="rotator__case">Лучший программист на земле</span>
    <span class="rotator__case">покорю этот мир</span>
    <span class="rotator__case">учусь в Нетологии</span>
    <span class="rotator__case">счастливый как никто</span>
    <span class="rotator__case">радуюсь жизни</span>
  </span>
</p>
```

Для того, чтобы задать текстовый элемент активным, установите у него класс
*rotator__case_active*:

```html
<span class="rotator__case rotator__case_active">Бог JS</span>
```

### Процесс реализации

1. Каждую секунду меняйте класс с одного элемента на другой
2. Сделайте акцент на том, чтобы на странице можно было использовать несколько
ротаторов одновременно
3. Смена текстовых блоков должна быть бесконечной.

_Подумайте, как из setInterval сделать бесконечный цикл_
  
### Повышенный уровень сложности (не обязательно)

Добавьте через *data-атрибуты* тегов опции:

1. Цвет текста
2. Скорость смены слайдов

![Demo](./extended-demo.gif)

Пример HTML-разметки:

```html
<p>
  Я
  <span class="rotator">
    <span class="rotator__case rotator__case_active" data-speed="1000" data-color="red">Бог JS</span>
    <span class="rotator__case" data-speed="2000" data-color="green">Лучший программист на земле</span>
    <span class="rotator__case" data-speed="1000" data-color="#000">покорю этот мир</span>
    <span class="rotator__case" data-speed="1000" data-color="red">учусь в Нетологии</span>
    <span class="rotator__case" data-speed="500" data-color="blue">счастливый как никто</span>
    <span class="rotator__case" data-speed="200" data-color="gray">радуюсь жизни</span>
  </span>
</p>
```