 const data = [
    { name: "John Doe", age: 28, occupation: "Software Engineer", city: "New York" },
    { name: "Jane Smith", age: 34, occupation: "Data Scientist", city: "San Francisco" },
    { name: "Alice Johnson", age: 24, occupation: "Graphic Designer", city: "Chicago" },
    { name: "Bob Brown", age: 45, occupation: "Project Manager", city: "Los Angeles" },
    { name: "Charlie Davis", age: 30, occupation: "Web Developer", city: "Seattle" },
    { name: "Eva Green", age: 29, occupation: "UX Designer", city: "Austin" },
    { name: "Frank Wilson", age: 50, occupation: "CEO", city: "Boston" },
    { name: "Grace Lee", age: 27, occupation: "Marketing Specialist", city: "Denver" },
    { name: "Henry Clark", age: 33, occupation: "DevOps Engineer", city: "Atlanta" },
    { name: "Ivy Adams", age: 22, occupation: "Intern", city: "Miami" },
    { name: "Jack White", age: 40, occupation: "Product Manager", city: "Portland" },
    { name: "Karen Harris", age: 35, occupation: "Business Analyst", city: "Dallas" },
    { name: "Leo Martinez", age: 31, occupation: "Mobile Developer", city: "Phoenix" },
    { name: "Mona Patel", age: 26, occupation: "UI Designer", city: "Houston" },
    { name: "Nina Garcia", age: 29, occupation: "Content Writer", city: "San Diego" },
    { name: "Oscar Brown", age: 38, occupation: "System Administrator", city: "Philadelphia" },
    { name: "Paul Wilson", age: 42, occupation: "Network Engineer", city: "San Antonio" },
    { name: "Quincy Adams", age: 23, occupation: "Junior Developer", city: "Las Vegas" },
    { name: "Rachel Green", age: 36, occupation: "HR Manager", city: "Nashville" },
    { name: "Steve Taylor", age: 39, occupation: "Data Analyst", city: "Detroit" },
    { name: "Tina Moore", age: 32, occupation: "Sales Executive", city: "Orlando" },
    { name: "Uma King", age: 28, occupation: "Backend Developer", city: "Minneapolis" },
    { name: "Victor Lee", age: 41, occupation: "Frontend Developer", city: "Charlotte" },
    { name: "Wendy Scott", age: 37, occupation: "QA Engineer", city: "Raleigh" },
    { name: "Xander Hall", age: 25, occupation: "Technical Writer", city: "Salt Lake City" },
    { name: "Yara Young", age: 30, occupation: "Cloud Engineer", city: "Kansas City" },
    { name: "Zack Allen", age: 27, occupation: "Database Administrator", city: "Indianapolis" },
    { name: "Amy Wright", age: 33, occupation: "Scrum Master", city: "Columbus" },
    { name: "Brian Carter", age: 29, occupation: "Full Stack Developer", city: "Milwaukee" },
    { name: "Cathy Evans", age: 31, occupation: "DevOps Engineer", city: "Tampa" }
  ];
pageSize = 5;
totalPages = data.length;
pages = data.length/pageSize;
currentPage = 1;

  const column =[
    'Name', 'Age', 'Occupation', 'City'
  ]
currentPageData = [];
const tableHead = document.querySelector('.head');
const tableBody = document.querySelector('.body')
const cp = document.querySelector('.currentPage');
const prevPage = document.querySelector('.prev');
const nextPage = document.querySelector('.next');

prevPage.addEventListener('click', goToPrev);
nextPage.addEventListener('click', goToNext);
getData();
renderData();


function goToPrev(){
    if(currentPage >= pages) return;
    currentPage= currentPage+1;
    console.log(currentPage)
    getData();
    renderData();
}
function goToNext(){
    if(currentPage<=1) return;
    currentPage = currentPage-1;
    console.log(currentPage)
    getData();
    renderData();
}
column.forEach((row) =>{
 
    const td = document.createElement('th')
    td.textContent = row;
    tableHead.appendChild(td);
})

function renderData(){
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
    currentPageData.forEach((row)=>{
    const tr = document.createElement('tr')
        for (const key in row) {
            const td = document.createElement('td');
            td.textContent = row[key];
            tr.appendChild(td);
        }
    tableBody.append(tr)
    
    })
}

function getData(){
    currentPageData = [];
    for(let i = (pageSize * currentPage) - pageSize ; i<currentPage*pageSize; i++){
        currentPageData.push(data[i]);
    }
    cp.textContent = currentPage;
}
