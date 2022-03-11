let job = ["Teacher"," Designer"," Journalist"," Programmer"];
let city = ["Dallas"," Houston"," Lubbock"," McAllen"];
let spouse = ["Michelle","Valerie","Melissa","Lilly"];
let numKids = [0,3,5,1];

let xx = Math.floor(Math.random() * 4)

function fortune(job,city,spouse,numKids){
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

fortune (job[xx],city[xx],spouse[xx],numKids[xx])