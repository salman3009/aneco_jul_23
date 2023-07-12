
    let list=[{
        fullName:"akash",
        age:21,
        address:"chennai"
    },
    {
        fullName:"suresh",
        age:21,
        address:"bangalore"
    },
    {
        fullName:"ganesh",
        age:21,
        address:"madurai"
    }];
    let result = list.map((obj)=>{
        return {location:"india",...obj}
    });
    console.log(result);


