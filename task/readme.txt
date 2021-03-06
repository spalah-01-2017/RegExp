==========================
ОПИСАНИЕ:
==========================
Цель задачи - создать валидацию регистрационной формы. В папке markup находится сверстанная форма без валидации. Используя браузерные события, реализуйте валидацию этой формы в соответствии с требованиями, описанными ниже. Стили и разметка уже реализованы. В папке scripts находится файл main.js (ваша реализация должна быть в нем). Он уже подключен к index.html. 

==========================
ТРЕБОВАНИЯ:
==========================
- Все обязательные поля (*) должны быть заполнены.

- Если пользователь сабмитит форму с невалидными данными в полях ввода, эти поля должны подсвечиваться (для этого достаточно навесить класс "error" на соответсвующий input, класс "valid" - на input с валидным вводом).

- Если все поля ввода заполнены валидными данными, показывайте сообщение "Successfully registered" (используя ваш модуль Message или просто alert).

- Если хотя бы одно из полей заполнено невалидными данными, показывайте сообщение "Fill all required field and verify your infromation".

- Реализуйте возможность увидеть пароль в соответсвующих полях: при нажатии комбинации клавиш ALT + S показывать пароль, при нажатии ALT + H - скрывать. Узнать коды нужных клавиш можно здесь: http://keycode.info/

==========================
ПРАВИЛА ВАЛИДАЦИИ:
==========================
- Поле Full Name - обязательное поле, т.е. должно быть заполнено. И длина данных должна быть не меньше 2 символов без учета возможных пробелов в начале и в конце. Пример валидного ввода: " Li ". Пример невалидного ввода: "Я".

- Telephone - обязательное поле. Валидными данными считается ввод номера телефона в следующем формате: "+380953334545". Т.е. принимаются только украинские номера (код Украины: 380). Дополнительно, если хотите, можете реализовать проверку, позволяющую пользователю вводить либо "+" либо "00" перед кодом ("+380953334545" и "00380953334545" - валидные номера телефона).

- Email - обязательное поле. Валидным считается корректно введенный адрес электронной почты. Пример: my@mail.com. Пользователь может вводить свой почтовый адрес только используя клавиатуру. Т.е. copy/cut/paste действия должны быть запрещены. Этого можно добиться таким образом: emailFieldNode.oncopy = emailFieldNode.onpaste = emailFieldNode.oncut = function() { return false; };

- Password fields - обязательные поля. Пароли в полях должны совпадать. Валидный пароль должен содержать хотя бы один символ в нижнем регистре, один числовой символ и всего должен содержать минимум 7 символов. Пример валидного пароля: "123456i". Также используйте индикатор пароля при валидации. Он уже есть на странице (.psw-strength), его нужно "оживить", используя следующие правила:
    - состояние-1 (пустое поле ввода). Индикатор не должен отображаться.
    - состояние-2 (введено 1-3 симовола). Индикатор должен отображаться с шириной 25% и красным фоном.
    состояние-3 (введено 4-6 символов). Индикатор должен отображаться с шириной 50% и оранжевым фоном.
    - состояние-4 (введено 7 и более символов). Индикатор должен отображаться с шириной 100% и зеленым фоном.
        
- Country - обязательное поле. Действуют те же правила валидации, что и для имени пользователя.

- Post code - обязательное поле. Поле должно содержать строго пять символов, состоящих из цифр.

- Additional information - необязательное поле. Реализуйте подсчет введенных в это поле символов. Счетчик должен показывать количество введенных символов и пересчитываться после каждого нажатия пользователя. Используйте событие 'input', похожее на 'change'. Про разницу можно почитать здесь: https://learn.javascript.ru/events-change