 // Задача: написать программу, для поиска заданного числа в массиве.
 // Если число найдено - вывести "Найдено значение ...", если нет - вывести "Значение ... не найдено"

// Алгоритм
// Шаг 1: Получить массив в arr и число для поиска в x
// Шаг 2: Начните с крайнего левого элемента arr[] и один за другим сравните x с каждым элементом arr[]
// Шаг 3: Если x соответствует элементу Print "Найдено".
// Шаг 4: Если x не совпадает ни с одним из элементов, выведите "Не найдено".


// Решение
let numbers = [2, 6, 7, -1, 0, 7];
let find = 10;
let isFind = false;

for (let i = 0; i < numbers.length; i++) {
    if (find === numbers[i]){
        console.log("Найдено");
        isFind = true;
    }
}

if (isFind !== true){
    console.log("Не найдено")
}