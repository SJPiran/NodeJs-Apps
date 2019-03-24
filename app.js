
const mycode=require('./mycode')
const req=require("request")

// req.post({
//     url:'http://boong.ir/srv/NewsSrv/News.php?Action=ShowPage,NewsN=200'
    
// },(err,res,body)=>{
//     console.log(body);
// });
mycode.print((err)=>{
if (err=='nashod'){
    console.log(err)
}else if (err=='ok'){
    console.log('shod')
}
})

console.log('avaal')
// req.post('http://boong.ir/srv/NewsSrv/test.php',(res)=>{
//     console.log(res)
// })
// r.request('http://boong.ir/srv/NewsSrv/News.php?Action=HomeNews',(res)=>{
//     console.log(res)
// })

