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
    const result = await fetch(URL);
    const convertJson = await result.json();
    console.log(convertJson);
    console.log(convertJson.results[0].picture.large);
    console.log(convertJson.results[0].name.first, convertJson.results[0].name.last);
    console.log(convertJson.results[0].gender);
    console.log(convertJson.results[0].email);
    console.log(convertJson.results[0].dob.age);
}

getRandomUser();