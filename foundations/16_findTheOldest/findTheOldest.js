const findTheOldest = function(people) {
const oldest = people.reduce((older,next)=>{
        let currYear = new Date().getFullYear();
        let oldAge;
        let nextAge;
    if(!older.yearOfDeath) oldAge=currYear-older.yearOfBirth;
    else oldAge=older.yearOfDeath-older.yearOfBirth;
    if(!next.yearOfDeath) nextAge=currYear-next.yearOfBirth;
    else nextAge=next.yearOfDeath-next.yearOfBirth;
    if(oldAge>nextAge)return older;
    else return next;
},people[0])
return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
