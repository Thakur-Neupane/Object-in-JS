// const person = {
//     name: "Thakur Neupane",
//     phone: 12342345,
//     isMarried: true,
//     skills: ["html", "css", "js", "react" , ["flexbox", "grid System"]],
//     hasPet: undefined,
//     gender: null,
//     parents: {
//         f: "harry",
//         m:"merry",
//     },
//     bio: () => {
//         return "hi there"
//     },
// };


// Accessing first level properties
// const data = person.name;
// const data = person["skills"];

// const data = person.skills[4][1]; is called 2d Arrays

// const data = person.parents.f;
// const data = person.bio();


// Updating data
// person.name = "Dipesh"
// person.address="sydney"
// person.parents.md= "20-20-20"
// person.skills.push("hehehehehheehe");
// person.skills[4].push("hehehehehheehe");


// Delete the data from Object

// person.phone = null;
// person.phone = undefined;
// delete person.phone (It still holds the memory )
// person.skills.pop();
// person.skills[4].pop();
// delete person.parents.m;


// JS-ES6

// Destructuring
// const { name, phone, room } = person;
// console.log(name, phone, room);




// Setting default values with Destructuring
// const { name, phone, room ="N/A"} = person;
// console.log(name, phone, room);


// Rest Method
// const { name, phone, parents, ...restOfTheProperties } = person;
// console.log(restOfTheProperties);
// console.log(person);


// Spread Method
// const career = {
//     jobTitle: "Software Engineer",
//     salary: 345678,
// };
// const combo = { ...person, ...career };
// console.log(combo);


// Shallow copy vs Deep Copy
// old style for shallow copy
const person = {
    name: "Thakur Neupane",
    phone: 12342345,
    isMarried: true,
    skills: ["html", "css", "js", "react" , ["flexbox", "grid System"]],
    hasPet: undefined,
    gender: null,
    parents: {
        f: "harry",
        m:"merry",
    },
    bio: () => {
        return "hi there"
    },
};

// const p1 = Object.assign({}, person); old style
// person.parents.m= "Shyam"
// console.log(person);
// console.log(p1);
// const p1 = { ...person }
// person.parents.m= "Shyam"
// console.log(p1);
// console.log(person);





// deep copy

// const p1 = JSON.stringify(person);
// console.log(p1);
// const p1 = JSON.parse(JSON.stringify(person));
// person.parents.m="gjhk"
// console.log(p1);
// console.log(person);


// Loop through objects
// for (let key in person) {
//     // console.log(key);
//     console.log(key, person[key]);
// }


const personArg = Object.entries(person);
// const personArg = Object.keys(person);
// const personArg = Object.values(person);
console.log(personArg);