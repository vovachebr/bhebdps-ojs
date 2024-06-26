## Описание задания

Необходимо разработать форму авторизации, через которую пользователь может отправлять данные
 на сервер и получать ответ, а так же хранить данные о залогиневшемся пользователе.

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка

Форма авторизации представлена разметкой вида:

```html
<div class="signin" id="signin">
    <h2 class="title">Вход</h2>
    <form action="https://students.netoservices.ru/nestjs-backend/auth" id="signin__form">
        <div class="row">
            <input type="text" name="login" class="control" placeholder="Логин">
        </div>
        <div class="row">
            <input type="password" name="password" class="control" placeholder="Пароль">
        </div>
        <div class="row">
            <button class="btn" id="signin__btn">Войти</button>
        </div>
    </form>
</div>
```

Для отображения формы необходимо задать класс *signin_active*:

```html
<div class="signin signin_active">
    <!-- ... -->
</div>
```

В момент, когда пользователь нажимает на кнопку *#signin__btn*, необходимо
направить AJAX-запрос с содержимым формы по адресу 
*https://students.netoservices.ru/nestjs-backend/auth*

**Важно** Если отправка формы будет реализована неверно, вы можете получить ошибку от сервера.


При неверных данных для входа вы получите JSON-ответ

```json
{
  "success": false
}
```

При успешной авторизации (__логин__ *demo*, __пароль__ *demo*)

```json
{
  "success": true,
  "user_id": 123 
}
```

Блок приветствия пользователя представлен разметкой вида:

```html
<div class="welcome" id="welcome">
    Добро пожаловать, пользователь #<span id="user_id"></span>
</div>
```

Для его показа вам необходимо задать класс *welcome_active*:

```html
<div class="welcome welcome_active">
    <!-- ... -->
</div>
```

## Процесс реализации

1. Реализуйте механизм авторизации. 
Для этого передайте данные формы с помощью POST-запроса по адресу
*https://students.netoservices.ru/nestjs-backend/auth*
    1. После успешного входа, сохраните полученный id-пользователя в локальное хранилище
    2. При успешной авторизации, задайте id пользователя в блок *#welcome* и отобразите его
    3. Если авторизация не удалась, выведите сообщение «Неверный логин/пароль»
2. При загрузке страницы, в случае, если в локальном хранилище имеется 
id пользователя, выведите блок *#welcome* с заданным id пользователя
3. Добавьте возможность деавторизации. 
4. После попытки авторизации данные из полей формы необходимо очищать
