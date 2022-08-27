console.log(sanjay);

const obj = {
  name: "Sanjay",
  age: 30,
  dob: "YYYY-MM-DD",
  bio: {
    height: 188,
    weight: 90,
  },
  skills: ["JS", "Python"],
  projects: [
    {
      name: "RC Toy Car",
      langs: ["JS", "ARM"],
    },
    {
      name: "DIP",
      langs: ["Python"],
    },
  ],
};

// create a variable dob with dob value

const { dob, skills, bio: { height, weight } } = obj;
console.log(dob, skills, height, weight);

// destructure first project
const { projects: [{ name, langs: [lang1Name] }, { langs: [projectTwoLang1] }] } = obj;
console.log(name, lang1Name, projectTwoLang1);