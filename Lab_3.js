let min = 5;
let max = 30;
let five = 0;
let four = 0;
let two = 0;

class student {
    constructor(names) {
        this.name = names[generateNumber(0,listNames.length -1)];
        this.progress = 5;
        this.marks = [];
        for (let i = 0; i < 5; i++) {
            this.marks.push(generateNumber(2,5));
            if(this.marks[i] < this.progress ) {
                this.progress = this.marks[i];
            }
        }
    }
}

function generateNumber(min,max){
    return (Math.random() * (max - min) + min).toFixed(0);
}

function createStudent(students,min, max){
    let stdAmount = generateNumber(min,max);
    for (let i = 0; i < stdAmount; i++) {
        let newStudent = new student(listNames);
        students.push(newStudent);
    }
}

let listNames = ["Иванов Иван","Данилюк Сергей","Сидоров Пётр","Кофанов Илья","Фофанов Александр","Сергеев Данил","Свист Валерий","Береговой Владимир","Риф Алексей","Ирочкин Кирилл","Рост Лиза","Леонидова Рита","Ивасюк Луиза","Приходько Полина","Картухова Настя","Лаврентиева Викторя","Морозова Ирина","Кропотухина Елена"];
let listStudents = [];

function generateList(students){
    let html = ""; 
    createStudent(students,min,max);


    students.sort(function (a, b){ 
        return b.progress - a.progress;
    });


    for (let i = 0; i < students.length; i++) {
        html+="<p>" + students[i].name+ " ";

        for (let j = 0; j < 5; j++) {
            html+= "| " + students[i].marks[j] + " |"
        };

            switch (+students[i].progress) {
            case 5: html+= " - отличник";
                ++five; break;
            case 4:
            case 3: html+= " - хорошист";
                ++four; break;
            case 2: html+= " - неуспевающий";
                ++two; break;
        }
        
        html+="</p>";
    }
    
    html+="<h2>Отличники: "+five+" | Хорошисты: "+four+" | Неуспивающие: "+two+"</h2>";
    document.querySelector("#studentsList").innerHTML = html;
}

generateList(listStudents);



