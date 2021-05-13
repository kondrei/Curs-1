// 1.
class AngajatiIT {
    constuctor(cnp, nume, prenume, vechime, departament) {
        this.cnp = cnp;
        this.nume = nume;
        this.prenume = prenume;
        this.vechime = vechime;
        this.departament = departament;
    }

    afiseazaVarsta() {
        let anNastere = this.cnp.toString();
        let varsta = anNastere.substr(1, 2);
        if (anNastere.substr(0, 1) <= 2) {      //verifica daca cnp incepe cu 1-2 sau altceva, adica  5-6
            varsta = + '19' + varsta;
        } else {
            varsta = + '20' + varsta;
        }
        console.log(`${this.prenume} are ${new Date().getFullYear() - parseInt(varsta)} de ani`);
    }

    afișeazăAnulAngajarii() {
        console.log(`${this.prenume} a fost angajat in anul ${new Date().getFullYear() - this.vechime}`);
    }

    lucreza() {
        console.log('Neimplementat');
    }
}

class QA extends AngajatiIT {
    constructor(cnp, nume, prenume, vechime, departament) {
        super(cnp, nume, prenume, vechime, departament);
    }

    lucreaza() {
        console.log(`${this.prenume} testează software`);
    }
}

class Developer extends AngajatiIT {
    constructor(cnp, nume, prenume, vechime, departament) {
        super(cnp, nume, prenume, vechime, departament);
    }

    lucreaza() {
        console.log(`${this.prenume} scrie cod`);
    }
}

let angajat = new AngajatiIT();
angajat.cnp = 1800311244032;
angajat.nume = 'Dan';
angajat.prenume = 'Andrei';
angajat.varsta = 40;
angajat.vechime = 1;
angajat.afiseazaVarsta();
angajat.afișeazăAnulAngajarii()
angajat.lucreza();

let qaAngajat = new QA;
qaAngajat.prenume = 'Ion'
qaAngajat.cnp = 5000311244032;
qaAngajat.afiseazaVarsta();
qaAngajat.lucreaza();

let develepoerAngajat = new Developer;
develepoerAngajat.prenume = 'Vasile';
develepoerAngajat.vechime = 5;
develepoerAngajat.afișeazăAnulAngajarii();
develepoerAngajat.lucreaza();


// 2.
const URL = 'https://randomuser.me/api/';

async function getRandomUser() {
    document.getElementById('loader').style.display = "inline";
    const result = await fetch(URL);
    const convertJson = await result.json();
    const { email, picture, name, dob, gender } = convertJson.results[0];
    console.log(email, picture.large, name.first, name.last, dob.age);
    document.getElementById("picture").setAttribute('src', picture.large);
    document.getElementById("name").innerHTML = '<strong>Name: </strong>' + name.first + ' ' + name.last;
    document.getElementById("gender").innerHTML = '<strong>Gender: </strong>' + gender;
    document.getElementById("email").innerHTML = '<strong>email: </strong>' + email;
    document.getElementById("age").innerHTML = '<strong>Age: </strong>' + dob.age;
    document.getElementById('loader').style.display = "none";
}

getRandomUser();

document.getElementById('generate').addEventListener('click', getRandomUser);

// 3.
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vanilla = [];
for (let x = 0; x < arr.length; x++) {
    vanilla[x] = arr[x] + arr[x] * 15;
}

console.log(`Vanilla  ${vanilla}`);


const arrow = arr.forEach(element => {
    console.log(`Arrow Function ${arr[element] + arr[element] * 15}`);
});

function elementOperations(element) {
    return element + element * 15;
}

const arr2 = arr.map(elementOperations);

console.log(`ES6  ${arr2}`);

const newArray = [...arr];
console.log(arr);

console.log(arr.map(function (element) {
    return element.toString() + element.toString();
}));
