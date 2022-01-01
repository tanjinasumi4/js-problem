// Utility method to check weather a number is even or not
function isEven(num) {
    return num % 2 == 0;
}

// vaxTrail function for data seperation
function vaxTrail (persons) {
    let A = [], B = [], C = [], D = [];

    for (let i = 0; i < persons.length; ++i) {
        if (persons[i].age >= 20 && persons[i].age <= 30 && persons[i].temperature < 100) {
            A.push(persons[i])
        } else if (persons[i].age >= 31 && persons[i].age <= 40 && persons[i].temperature < 100) {
            B.push(persons[i])
        } else if (persons[i].age >= 41 && persons[i].age <= 50 && persons[i].temperature < 100) {
            C.push(persons[i])
        } else if (persons[i].temperature >= 100) {
            D.push(persons[i])
        }
    }

    // Sorting based on even ages
    A?.sort((a, b) => (isEven(a.age) ? -1 : 1))
    B?.sort((a, b) => (isEven(a.age) ? -1 : 1))
    C?.sort((a, b) => (isEven(a.age) ? -1 : 1))
    D?.sort((a, b) => (isEven(a.age) ? -1 : 1))


    // the object which will be returned from this function
    let rtn_obj = {
        A: A,
        B: B,
        C: C,
        D: D,
    }

   console.log(rtn_obj)
   return rtn_obj;
}


// Person array where the data is stored
let persons = [
    {
        name: 'Niha',
        age: 27,
        temperature: 90,
    },
    {
        name: 'Tanjina',
        age: 25,
        temperature: 90,
    },
    {
        name: 'Mahi',
        age: 26,
        temperature: 90,
    },
    {
        name: 'Tower',
        age: 29,
        temperature: 90,
    },
    {
        name: 'Nusaiba',
        age: 28,
        temperature: 90,
    },
]

// Function call
vaxTrail(persons);