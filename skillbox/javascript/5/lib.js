'use strict';

(function (){

    var min = 1;
    var max = 1000;
    var random = Math.floor(Math.random() * (max - min)) + min;
    console.log('Загаданное число: ' + random);

    while(true){
        var num = 1;
        window.start = function (){

            var number = prompt('Угадай число, которое я загадал.');
            if(number === null){
                break;
            }
            else if(isNaN(number)){
                alert('Введите число!');
            }
            else{
                number = parseInt(number);
                if(number == random){
                    alert('Правильно!');
                    //var  startAgain = confirm('Хотите поиграть ещё раз?');
                    // if(!startAgain){
                    //     break;
                    // }
                }
                else if(number > random){
                    alert('Меньше!');
                }
                else if(number < random){
                    alert('Больше!');
                }
                else{
                    alert('Введите число!');
                }
            }

        };

    }
    //
    // window.start = function(){
    //
    //     // Бесконечный цикл
    //     while(true){
    //
    //         // Если пользователь согласился "Поиграть ещё раз", то
    //         // генерируем новое случайное число
    //         if(startAgain){
    //             random = Math.floor(Math.random() * (max - min)) + min;
    //             console.log('Загаданное число: ' + random);
    //
    //             // Выполняем только один раз в цикле,
    //             // до тех пор, пока пользователь ещё раз не захочет поиграть.
    //             startAgain = false;
    //         }
    //
    //         // Запрашиваем число у пользователя
    //         var number = prompt('Угадай число, которое я загадал.');
    //
    //         if(number === null){
    //             // Если Esc, то выходим из программы
    //             console.log('Выход из программы');
    //             break;
    //         }
    //         else if(isNaN(number)){
    //             // Если ввели пробелы, пустые строки, строки, то сообщаем, что нужо ввести число
    //             // и повторяем цикл
    //             alert('Введите число!');
    //         }
    //         else{
    //
    //             // Обрабатываем строки с цифрами, отсекаем пробелы,
    //             // преобразуем в целые числа.
    //             number = parseInt(number);
    //
    //             if(number == random){
    //                 // Если угадали число
    //                 alert('Правильно!');
    //
    //                 // Запрос на повтроную игру
    //                 var  startAgain = confirm('Хотите поиграть ещё раз?');
    //
    //                 // Если получили отказ, то выходим из цикла,
    //                 // Прекращаем игру
    //                 if(!startAgain){
    //                     break;
    //                 }
    //             }
    //             else if(number > random){
    //                 alert('Меньше!');
    //             }
    //             else if(number < random){
    //                 alert('Больше!');
    //             }
    //             else{
    //                 // Если number = NaN, то выводим сообщение и повторяем запрос числа
    //                 alert('Введите число!');
    //             }
    //         }
    //     }
    //     //if(startAgain){
    //         var  startAgain = confirm('Хотите поиграть ещё раз?');
    //         random = Math.floor(Math.random() * (max - min)) + min;
    //         console.log('Загаданное число: ' + random);
    //
    //         // Выполняем только один раз в цикле,
    //         // до тех пор, пока пользователь ещё раз не захочет поиграть.
    //         startAgain = false;
    //     //}
    //}

})()