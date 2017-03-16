//+380953332221
//+380991112223
//+380974445556
//+380(93)3334445

if(chars.slice(0,4) === '+380' && chars[4] === '(' || ...)

/\+380\(?\d\d\)?\d{7}/.test('')

'+380(95)3334445'.match(/\+380\(?\d\d\)?\d{7}/); //['+380(95)3334445']

//OR --> |
/\+|(00)/.test('+'); //true
/\+|(00)/.test('00'); //true

/^(\+|00)380\(?\d\d\)?\d{7}$/.test('+380(95)3334445') //?

/chars|numbers/.test('chars');//true
/chars|numbers/.test('numbers');//true

/\+|00380/.test('+380'); //true
/\+|00380/.test('+0380'); //true
/^(\+|00)380/.test('+0380'); //false

//+
/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/ //(1)
/[abcdefghijklmnopqrstuvwxyz]/ //(2)
/[abcdefghijklmno pqrstuvwxyz]/.test('$ ')//true
/[a-z]/ //(3)

/[A-Za-z]/

'XA12345'.match(/[A-Z]/); //['X']
'XA12345'.match(/[A-Z]+/); //['XA']

//names
'joe'.match(/[a-z]+/); //['joe']
'Joe'.match(/[a-z]+/); //['oe']
'Joe'.match(/[A-Za-z]+/); //['Joe']
'Joe'.match(/[a-z]+/i); //['Joe']

//repeat
'bottle'.match(/[a-z][a-z][a-z][a-z][a-z][a-z]/); //["bottle"]
'bottle'.match(/[a-z]{6}/); //["bottle"]

//http://www.twitter.com/username
/^http\:\/\/www\.twitter\.com\/\w+$/

//task
"New Zealand".match(/<your_reg>/); //["New Zealand"]
"New Guinea".match(/<your_reg>/); //["New Guinea"]
"Newfoundland".match(/<your_reg>/); //["Newfoundland"]
var reg = /<your_reg>/;
"Country Newfealand fgfgd".match(<your_reg>); //["Newfealand"]
"CountryNewfealand fgfgd".match(/new ?[a-z]+/i)

//группирующие скобки, границы слова
//ok, Okay, sure, yes, y
//Is it appropriate for you? - It's ok. (Okay, Sure, yes, y)
"It's ok.".match(/ok/); //['ok']
"Look.".match(/ok/); //['ok']

"Look.".match(/\bok\b/); //null
"It's ok.".match(/\bok\b/); //['ok']
/\b(ok(ay)?|sure|y(es)?)\b/i

//() (?:)
'dfgfb okay sure'.match(/\b(ok(ay)?|(sure)|y(es)?)\b/i) //["okay", "okay", "ay", undefined, undefined]

'dfgfb okay sure'.match(/\b(?:ok(?:ay)?|sure|y(?:es)?)\b/i) //["okay"]


//task
'65.83657'
'-151.875000'
'75.810143'
/-?\d+\.\d+/

//task twitter
//http://www.twitter.com/username
/^http\:\/\/www\.twitter\.com\/\w+$/
//https
//www - может быть, может не быть
//twitter.com || twitter.org
/^https?\:\/\/(www\.)?twitter\.(com|org)\/\w+$/

//пример
//-текст не должен содержать цифры
//-текст не должен быть больше 40 символов
//-текст не должен быть меньше 20 символов
/^\D{20,40}$/

//поиск слов, не имеющих гласных
'hello sdsfd world rfrf'.match(/\b[^aeiouy]+\b/g)
