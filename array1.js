const express = require('express')

let app = express()
  
app.use(express.static('public'))

let accounts= [
    {id:1,name:'alex',deposit:5},
    {id:2,name:'sarah',deposit:5},
    {id:3,name:'jim',deposit:15}
]
const account = function( holder){
if (holder == 'alex'){
result= '<br/> id: '+ accounts[0].id +'<br/> deposit: ' +accounts[0].deposit;
}else if (holder == 'sarah'){
result= '<br/> id: '+ accounts[1].id +'<br/> deposit: ' +accounts[1].deposit;
}else if (holder == 'jim'){
result= '<br/> id: '+ accounts[2].id +'<br/> deposit: ' +accounts[2].deposit;
}else {
result= 'Not found';
}
return result;
}
app.get('/array', function(request,response){
    
    let holder = request.query.holder;
    var result = account(holder)  
    response.send('The account details are:'+ result)

})
app.listen(3000)