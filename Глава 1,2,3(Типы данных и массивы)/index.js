//Складываем строки
var greeting = "Привет, ";
var name = "Ник";
console.log(greeting + name);

// Рисуем котиков
var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
    }
   };
   drawCats(10);

// Попробуйте сами разобраться, как с помощью только что изученных
// команд превратить строку "эЙ, кАК деЛа?" в "Эй, как дела?".
// Если ничего не выходит, сверьтесь с разделами, где рассказывается
// о получении символа строки и использовании slice
   var whatsUp = "эЙ, кАК деЛа?";
   var slicedWhatsUp = whatsUp.slice(1); //функция slice обрезает нашу строку начиная со второго символа(рассчёт начинается с нуля по индексу)
   var lowerSlicedWhatsUp = slicedWhatsUp.toLowerCase(); // toLowerCase() переводит строку в нижний регистр
   var firstLetter = whatsUp[0].toUpperCase(); // toUpperCase() переводит строку в верхний регистр
   console.log(firstLetter+lowerSlicedWhatsUp);

   //короткая запись верхнего кода
   var sillyString = "эЙ, кАК деЛа?";
   console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase());

// Вас попросили написать JavaScript-код для автоматической
// системы управления кинотеатром. Задача состоит в том,
// чтобы опре делить, пускать ли зрителя на фильм «с 12 лет
// и старше» или нет.
// Правила таковы: если посетителю 12 лет или больше,
// он может проходить. Если ему еще не исполнилось 12, но его
// сопровождает взрослый, пусть тоже проходит. Во всех
// остальных случаях вход запрещен.
   var age = 12;
   var accompanied = false;
   console.log(age >= 12 || accompanied); //логическое ИЛИ(+) дизьюнкция


    //МАССИВЫ!!!
   var animals = ["Лама", "Медведь", "Пес", "Кот"];
   animals.shift(); //удаляет первый элемент массива
   console.log(animals);

   var animals = ["Лама", "Медведь", "Пес", "Кот"];
   animals.pop(); //удаляет последний  элемент массива
   console.log(animals);

   var animals = ["Лама", "Медведь", "Пес", "Кот"];
   animals.unshift("Зебра"); //добавляет элемент массива в начало
   console.log(animals);

   var animals = ["Лама", "Медведь", "Пес", "Кот"];
   animals.push("Рыба"); //добавляет элемент массива в конец
   console.log(animals);

   var animals = ["Лама", "Медведь", "Пес", "Кот"];
   var lastAnimal = animals.pop(); //мы сохранили последний элемент массива в переменную lastAnimal и в случае надобности можем ее вызвать 
   console.log(lastAnimal);

   var animals = ["Лама", "Медведь", "Пес", "Кот"];
   console.log(animals[animals.length-1]); //выводит последний элемент массива каким бы не была его длина 

   var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
   var scalyAnimals = ["Удав", "Годзилла"];
   var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals); // метод .concat() склеивает два массива
   console.log(furryAndScalyAnimals);

   var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
   var scalyAnimals = ["Удав", "Годзилла"];
   var featheredAnimals = ["Ара", "Додо"];
   var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals); //так же через запятую можем склеивать несколько массивов
   console.log(allAnimals);

   var colors = ["красный", "зеленый", "синий"];
   console.log(colors.indexOf("синий")); //этот метод возвращает нам индекс элемента 

   var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
   console.log(boringAnimals.join("; ")); // этот метод элементы массива превращает в строку через разделитель(separator) ;

   //Math.floor отбрасывает все цифры после запятой
   //Значение Math.random() имеют границу от 0 до 1, поэтому можно юзать нужный нам коэфициент
   console.log(Math.floor(Math.random() * 4)); // При каждом запуске этот код будет возвращать случайное число от 0 до 3 (включая 0 и 3). 

   var randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
   console.log(randomWords[Math.floor(Math.random() * 4)]); //можно так же выводить рандомные слова 

   //Генерируем рандомную дразнилку
   var randomBodyParts = ["глаз", "нос", "череп"];
   var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
   var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
   var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)]; 
   var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
   var randomWord = randomWords[Math.floor(Math.random() * 5)];
   var randomInsult = "У тебя " + randomBodyPart + "," + " словно " + randomAdjective + " " + randomWord + "!!!";
   console.log(randomInsult);

   var randomBodyParts = ["глаз", "нос", "череп", "ухо", "руки"];
   var randomAdjectives = ["вонючая", "унылая", "дурацкая", "глупая", "остойная"];
   var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса", "бычара"];
   var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]; // умножаем не на кол-во элементов в массиве, 
   var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];// а на его длину
   var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];// поэтому мы можем смело добавлять новые слова в массивы
   var randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");
   console.log(randomInsult);

   var numbers = [3,2,1]
   console.log([numbers[0], " больше, чем ", numbers[1], " больше, чем ", numbers[2]].join(""));



 

