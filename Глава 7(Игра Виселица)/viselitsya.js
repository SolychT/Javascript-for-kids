//создаем массив со словами
var words = ["программа", "макака", "прекрасный", "оладушек"]
//Выбираем случайное слово
var word = word[Math.floor(Math.random()*words.length)];
//Создаём итоговый массив
var answerArray=[];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
var remainingLetters = word.length; //оставшиеся буквы
//Игровой цикл
while (remainingLetters > 0){
    //Показываем состояние игры
    alert(answerArray.join(" "));
    //Запрашиваем вариант ответа
    var guess = prompt("Угадайте букву или нажмите ОТМЕНА");
    if (guess === null){
        //выходим из игрового цикла
        break;
    } else if (guess.length !== 1){
    alert("Пожалуйста, введите одиночную букву.")
    } else{
        //Обновляем состояние игры
    for (var j=0; j < word.length; j++){
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--
        }
    }
    }
    //конец игрового цикла
}
//Отображаем ответ и поздравляем игрока
alert(answerArray.join(""));
alert("Отлично! Было загадано слов" + word);








