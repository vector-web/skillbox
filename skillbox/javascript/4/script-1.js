
function getMonth(currentDate){
    // Создаем массив с названиями месяцев на кирилице
    var arrMonth = [
        'Декабря',
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября'
    ];
    return arrMonth[currentDate.getMonth()];
}
function getWeekDay(currentDate){
    // Создаем массив с названиями дней недели на кирилице
    var arrWeekDay = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    return arrWeekDay[currentDate.getDay()];
}


function getTime(currentDate, type){
    var ending = {
        hours: [
            "час",
            "часа",
            "часов"
        ],
        minutes: [
            "минута",
            "минуты",
            "минут"
        ],
        seconds: [
            "секунда",
            "секунды",
            "секунд"
        ]
    };
    switch (currentDate >= 20 ? currentDate % 10 : currentDate ){
        case 1 :
            result = ending[type][0];
            break;
        case 2 :
        case 3 :
        case 4 :
            result = ending[type][1];
            break;
        default :
            result = ending[type][2];
    }
    return result;
}



var currentDate = new Date();

var objDate = {
    day: currentDate.getDate(),
    month: getMonth(currentDate),
    year: currentDate.getFullYear(),
    weekDay: getWeekDay(currentDate),
    hours: currentDate.getHours() + ' ' + getTime(currentDate.getHours(), 'hours'),
    minutes: currentDate.getMinutes() + ' ' + getTime(currentDate.getMinutes(), 'minutes')
};

function countSeconds(){
    var currentDate = new Date();
    var result = currentDate.getSeconds() + ' ' + getTime(currentDate.getSeconds(), 'seconds');
    return result;
    //return setInterval( currentDate, 1000);
}

// var curDate =
//
//
// Сегодня 6 декабря 2016 года, вторник, 20 часов 6 минут 54 секунды

console.log( objDate );
console.log( countSeconds() );