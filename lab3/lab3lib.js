export function task1() {
    let obj = {
        className: 'open menu'
    }

    function addClass(obj, cls) {
        let subObj = {};
        let arr = obj.className ? obj.className.split(" ") : [];
        for (let i = 0; i < arr.length; i++) {
            subObj[arr[i]] = true;
        }
        subObj[cls] = true;
        arr = Object.keys(subObj);

        obj.className = arr.join(" ");
    }

    addClass(obj, 'new');
    addClass(obj, 'open');
    addClass(obj, 'me');

    console.log(obj.className); // "open menu new me"
}

export function task2() {
    let session = [
        {
            name: 'Math',
            rating: 84,
            status: 'PASS'
        },
        {
            name: 'Software design',
            rating: 50,
            status: 'FAIL'
        },
        {
            name: 'Computer graphics',
            rating: 100,
            status: 'PASS'
        }
    ];

    function showSubjectFirstPassed(session) {
        session.sort((a, b) => a.status > b.status ? a.status : b.status);
        session.forEach(item => console.log(item.name));
    }

    function addSubject(session, subject = {name: 'Math', rating: 30}) {
        let flag = false;
        session.forEach(item => (item.name === subject.name &&
            (item.rating = subject.rating,
                item.status = item.rating > 60 ? 'PASS' : 'FAIL',
                flag = true)));

        flag === false && session.push({...subject, status: subject.rating > 60 ? 'PASS' : 'FAIL'});
        return session;
    }


    function avgRating(session) {
        const summaryRating = session.reduce((total, item) => total + item.rating, 0);
        return summaryRating / session.length;
    }

    function amountFailSubject(session) {
        return session.reduce((total, item) => item.status === 'FAIL' ? total + 1 : total, 0);
    }

    function maxRating(session) {
        let ratings = [];
        session.forEach(item => ratings.push(item.rating))
        return Math.max(...ratings);
    }

    function showSomeSubject(session, rating) {
        session.forEach(item => item.rating === rating && console.log(item.name));
    }

    console.log('-------2.1--------');
    session.forEach(item => console.log(item));
    showSubjectFirstPassed(session);
    session.forEach(item => console.log(item));

    console.log('-------2.2--------');
    const newSession = addSubject(session);
    newSession.forEach(item => console.log(item));

    console.log('-------2.3--------');
    console.log(avgRating(session));

    console.log('-------2.4--------');
    console.log(amountFailSubject(session));

    console.log('-------2.5--------');
    console.log(maxRating(session));

    console.log('-------2.6--------');
    showSomeSubject(session, 30);
}

export function task3() {
    function removeClass(obj, cls) {
        let arr = obj.className ? obj.className.split(" ") : [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == cls) {
                arr.splice(i, 1);
                i--;
            }
        }
        obj.className = arr.join(' ');
    }

    let obj = {
        className: 'my menu menu'
    };
    removeClass(obj, 'menu');
    console.log(obj.className); // 'my'
}

export function task4() {
    function filterRangeInPlace(arr, a, b) {
        for (let i = 0; i < arr.length; i++) {
            if (a <= arr[i] && arr[i] >= b) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    let arr1 = [5, 3, 8, 1];

    filterRangeInPlace(arr1, 1, 4);

    console.log(arr1); // заливаються [3, 1]
}

export function task5() {
    Array.prototype.reverseSort = function () {
        let arr = [];
        for (let i = this.length; i--;) {
            arr.push(this[i]);
        }
        ;
        return arr;
    };


    let arr2 = [5, 2, 1, -10, 8];

    arr2 = arr2.sort((a, b) => a - b);
    let arrReverse = arr2.reverseSort();
    console.log(arrReverse); // 8, 5, 2, 1, -10
}

export function task6() {
    function arraySort(arr) {
        let a = 0;
        let tmp = [];
        for (let i = 0; i < arr.length; i++) {
            tmp[i] = arr[i];
        }
        tmp.sort();
        return tmp;
    }

    let arrString = ["HTML", "JavaScript", "CSS"];

    const arrSorted = arraySort(arrString);

    console.log(arrSorted); // CSS, HTML, JavaScript
    console.log(arrString);       // HTML, JavaScript, CSS

}

export function task7() {
    let arrTask7 = [1, 2, 3, 4, 5];
    arrTask7.sort(function compareRandom() {
        return Math.random() - 0.5;
    });
    console.log(arrTask7);
}

export function task8() {
    function compareAge(a, b) {
        return a.age - b.age;
    }

    var vasya = {name: "Вася", age: 23};
    var masha = {name: "Маша", age: 18};
    var vovochka = {name: "Вовочка", age: 6};

    var people = [vasya, masha, vovochka];
    people.sort(compareAge);
    for (let i in people)
        console.log(people[i].name);
    // тепер people: [vovochka, masha, vasya]
    console.log(people[0].age) // 6
}

export function task9() {
    function Dog(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;

        this.voice = () => (
            this.age < 1 && console.log('Тяф'),
            this.age >= 1 && this.age <= 3 && console.log('Гав'),
            this.age > 3 && console.log('Ррр')
        )
    }

    const firstDog = new Dog('Puffie', 'boxer', 0.5);
    firstDog.voice();

    const secondDog = new Dog('Bim', 'pug', 6);
    secondDog.voice();

    const thirdDog = new Dog('Chuck', 'doberman', 2);
    thirdDog.voice();
}

export function task10() {
    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }

    let strings = ["C++", "C#", "C++",
        "C", "C++", "JavaScript", "C++", "JavaScript"
    ];

    console.log(unique(strings)); // C++, C#, C, JavaScript
}