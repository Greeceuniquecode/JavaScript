obj = {
    "name": 'Greece Dahal',
    "address": "USA",
    "age": 18,
    "contactno": 980909090
}
console.log(obj.name);//accessing single value of object
console.log('your name is', obj.name,
    'your address is ', obj.address,
    'you are', obj.age, "years old",
    'your contact number is', obj.contactno,
);
console.log(Object.keys(obj));
console.log(Object.values(obj));
users = [
    {
        "name": 'Suman Regmi',
        "email": "hey123@gmail.com",
        "address": 'baliya',
    },
    {
        "name": 'Greece Dhakal',
        "email": 'notgrish2@gmail.com',
        'address': 'Greece'
    }
]
// console.log(users);
users.map((user)=>{
    console.log(user.name);
})

