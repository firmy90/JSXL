# Kalkulator

## Prosty kalkulator, który może wykonywać operacje arytmetyczne (dodawanie, odejmowanie, mnożenie i dzielenie) za pośrednictwem wiersza polecenia. 

### Jako część z plusem: niech wynik działania zapisuje się w pliku "historia.json"

#### app1.js - przykładowe komendy i wyniki
> node app1.js 9 + 5

sign +

9 + 5 = 14

> node app.js 9 - 5 

sign -

9 - 5 = 4

> node app1.js 9 '**' 0 

sign **

9 * 0 = 0

> node app1.js 9 / 5 

sign /

9 / 5 = 1.8

> node app1.js 9 / 0 

sign /

Cannot divide by zero

#### Przykładowy plik "historia.json"  danymi
[{"a":9,"sign":"+","b":5,"res":14},{"a":9,"sign":"+","b":12,"res":21},{"a":9,"sign":"-","b":12,"res":-3},{"a":9,"sign":"**","b":12,"res":108},{"a":9,"sign":"/","b":12,"res":0.75},{"a":9,"sign":"/","b":0,"res":"NaN"},{"a":9,"sign":"+","b":3,"res":12}]