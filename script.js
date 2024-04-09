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
const { name, phone, parents, ...restOfTheProperties } = person;
console.log(restOfTheProperties);
console.log(person);
