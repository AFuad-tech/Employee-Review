const cardInfo = [
  {
    id: 1,
    img: "./Image/cropped-black-man-7368384_640.jpg",
    person_name: "John Doe",
    job_title: "Software Engineer",
    job_description:
      "Experienced software engineer with a passion for creating robust and efficient applications.",
  },
  {
    id: 2,
    img: "./Image/cropped-black-woman-7368389_640.jpg",
    person_name: "Jane Smith",
    job_title: "Frontend Developer",
    job_description:
      "Creative frontend developer specializing in building engaging and user-friendly web interfaces.",
  },
  {
    id: 3,
    img: "./Image/cropped-business-woman-2756210_640.jpg",
    person_name: "Alex Johnson",
    job_title: "Data Scientist",
    job_description:
      "Data scientist with a strong background in statistical analysis and machine learning.",
  },
  {
    id: 4,
    img: "./Image/cropped-man-1276384_640.jpg",
    person_name: "Emily Davis",
    job_title: "UX/UI Designer",
    job_description:
      "Passionate UX/UI designer with a focus on creating intuitive and visually appealing user experiences.",
  },
  {
    id: 5,
    img: "./Image/cropped-man-7450033_640.jpg",
    person_name: "Michael Brown",
    job_title: "Product Manager",
    job_description:
      "Experienced product manager skilled in leading cross-functional teams to deliver successful products.",
  },
  {
    id: 6,
    img: "./Image/cropped-woman-6125217_640.jpg",
    person_name: "Sophia White",
    job_title: "Full Stack Developer",
    job_description:
      "Full stack developer with expertise in both frontend and backend technologies.",
  },
];

//Choosing the img, name, job-title, job-description
const img = document.getElementById("img");
const personName = document.getElementById("name");
const jobTitle = document.getElementById("job-title");
const jobDescription = document.getElementById("job-description");
console.log(img);

//Choosing the buttons
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const randomBtn = document.getElementById("random-btn");

//Set Current Item
let currentItem = 0;

//Setting the Logic and showPerson function
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
function showPerson(person) {
  const items = cardInfo[person];
  img.src = items.img;
  personName.textContent = items.person_name;
  jobTitle.textContent = items.job_title;
  jobDescription.textContent = items.job_description;
}

//Setting the logic for the buttons
btnRight.addEventListener("click", function () {
  currentItem++;
  if (currentItem > cardInfo.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
btnLeft.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = cardInfo.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * cardInfo.length);
  showPerson(currentItem);
});
