const getTotalBalanceByGender = (users, gender) =>{
//  const sumio 

 return users.filter((genderus)=> genderus.gender===gender)
    .reduce((unit, uni) => {
      
      return unit + uni.balance;
    }, 0);
}


const allUsers = [
  {
  name: "Moore Hensley",
  gender: "male",
  balance: 2811
},
{
  name: "Sharlene Bush",
  gender: "female",
  balance: 3821
},
{
  name: "Ross Vazquez",
  gender: "male",
  balance: 3793
},
{
  name: "Elma Head",
  gender: "female",
  balance: 2278
},
{
  name: "Carey Barr",
  gender: "male",
  balance: 3951
},
{
  name: "Blackburn Dotson",
  gender: "male",
  balance: 1498
},
{
  name: "Sheree Anthony",
  gender: "female",
  balance: 2764
}
];

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863