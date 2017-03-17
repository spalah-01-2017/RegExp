## Домашнее задание

### Теория

[Примеры](./example.js)

[Регулярные выражения](https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter9.html)

[Классы и спецсимволы](https://learn.javascript.ru/regexp-character-classes)

[Квантификаторы +, *, ? и {n}](https://learn.javascript.ru/regexp-quantifiers)

[Начало строки ^ и конец $](https://learn.javascript.ru/regexp-ahchors)

[Метод replace](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

[Про многострочный режим (примеры лучше рассматривать с помощью console.log, а не alert)](https://learn.javascript.ru/regexp-multiline-mode)

#### Полезные ссылки:

- [https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)
- [https://regexper.com](https://regexper.com)
- [http://regexr.com/](http://regexr.com/)




### Практика


#### (1) ⭐ Напишите функцию htmlStrip, которая удаляет HTML тэги в строке. При этом в тэге могут быть атрибуты.
```javascript
htmlStrip('<div> hi </div>'); // ' hi '
htmlStrip('<div class="message">hello word</div>'); // 'hello word'
```

#### (2) ⭐ Реализуйте функцию removeUrlAnchor (задание [отсюда](http://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript)), которая принимает URL с якорем в качестве аргумента и возвращает URL без якоря. Сделайте две реализации: с помощью регулярного выражения и без него.
```javascript
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')
```

#### (3) ⭐ Реализуйте валидацию имени, используя инструкцию ниже и ориентируясь на [пример](http://output.jsbin.com/nizolalene).

3.1 Напишите регулярное выражение, удовлетворяющее следующим критериям:
- Количество слов в имени: 2-3 (можно заменить это на условие 1-3 слова в имени)
- Каждое слово начинается с большой буквы, за которой идут маленькие
- Минимальная длина слова - 2 символа
- В имени не должно быть никаких символов, кроме a-z
- Между словами имени должен быть один пробельный символ
    
3.2 Сделайте визуальное представление работы вашего регулярного выражения (или возьмите готовое из примера, если не хотите верстать). Минимальные требования: 
- Наличие поля ввода (input)
- Срабатывание проверки на правильность ввода при каждом нажатии клавиши пользователем
- Отображение результата проверки рядом с полем ввода (valid/invalid), либо другое визуальное оповещение для пользователя, не используя стандартные браузерные функции (alert)
    
#### (4) ⭐ Выполните задание по валидации формы из папки [task](./task).
