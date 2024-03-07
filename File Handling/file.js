

var fs = require('fs');
    
                        // THIS IS SYNC METHOD 
// fs.writeFileSync("./test.txt", "Hi This is Piyush Bharadwajn");   

                        //THS IS WAS ASYNC METHOD
// fs.writeFile("./testt.txt","This is Async file",(err,result)=>{
//     if (err) {
//         console.log("Error",err);        
//     }
//     else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./testt.txt","jywgfydhgeveyhryryfgrfyr");

// fs.appendFile("./testt.txt","dellllllllllllllll",(err)=>{
// if(err) throw err;
// console.log("saveejh")   

        

//     }
// )


// const result = fs.readFileSync(". /piyush.txt", "utf-8")
// console.log(result);




// fs.appendFile('test.txt', 'Hello content!  jghg ghgh ', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

const mo = require("./module")

console.log(mo.add("PIYUSH"));

console.log(mo.multi(45,25));

