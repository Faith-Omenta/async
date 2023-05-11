// Write an asynchronous function that accepts a message string and a delay time 
// in milliseconds. The function should log the message to the console after the 
// specified delay time.
function message(text, delay) {
   return new Promise((resolve) => {
     setTimeout(() => {
       console.log(text);
       resolve();
     }, delay);
   });
 }
 message("Hello I am Faith Omenta",2000)

// You have an array of user IDs and a function getUserData(id) that returns a 
// Promise with user data when given a user ID. Write an asynchronous function 
// that fetches and logs the data for each user ID one by one, in sequence.
function getUserData(id){
   console.log("user data");
}
getUserData()
let userData=[{}]
let userID=new Promise((resolve,reject)=>{
let userID=[
       "35678923",
       "73654729",
       "35637882"
]
if(userData){
   return resolve(("valid"))
}
else{
   return reject(("not valid"))
}
})
async function acceptID(){
   let text=await userID
   console.log({text})
}
acceptID()

// You have an asynchronous function performTask() that returns a Promise. The 
// Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if 
// the task is successful, and a custom error message if there's an error.
function performTask(s){
   console.log("successful");
}
performTask()
let task =[{}]
let s=new Promise((resolve, reject) => {
   if (task) {
       return resolve("custom success message")
   } else {
       return reject("custom error message")
   }
})
async function words(){
   let message = await s
   console.log({message});
}
words()


