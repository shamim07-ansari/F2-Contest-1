/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];
  
function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developers = arr.filter((employee) => employee.profession === "developer");
    console.log(developers);
}
  
function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}
  
function addData() {
    //Write your code here, just console.log
    const newEmployee  = {
        id : 4,
        name :"Shamim",
        age : "22",
        profession : "intern"
    };
    arr.push(newEmployee);
    console.log(arr);
}
  
function removeAdmin() {
    //Write your code here, just console.log
    const filterdArr = arr.filter((employee) => employee.profession !== "admin");
    console.log(filterdArr);
}
  
function concatenateArray() {
    //Write your code here, just console.log
    const newArray =[
      {id :5, name: "Ram" , age : "21" , profession: "UI/UX designer"},
      {id :6, name: "Shaym" , age : "22" , profession: "Manager"},
      {id :7, name: "Sita" , age : "23" , profession: "Jr.Developer"}
    ];
  
    const concatenateArray = arr.concat(newArray);
    console.log(concatenateArray);
}