let finalArray = users.map(function(value,index){


    let myposts = posts.filter(function(a,b){

        return a.userId == value.id;
    })


    value["posts"] = myposts;

    return value;

})

console.log(finalArray);