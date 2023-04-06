
const finalArray = posts.map(function(value,index) {

    let myobj = users.find(function(a,b) {

        return a.id == value.userId;
    })

    value["email"] = myobj.email;
    value["name"] = myobj.name;

        return value;

})

console.log(finalArray);