//1.given an array use a function to reverse all the elements in ascending order andd the specific elements in descending order
function names(){
    const name=["Abby","Jimin","Zippy","Namjoon"];
    console.log(name.sort());
    console.log(name.reverse());
}
names()

//2.return positive if anelement within the array is positive and negative if an element is negative,else zero
function numbers(arr1){
    let arr2=numbers.forEach(item=>{
        if(item>0){
            console.log("positive");
        }else if(item<0){
            console.log("Negative");
        }else{
            console.log("Zero");
        }
    })
}

//3.array of objects 


//4.use for each to console each number multiplied by 2
function multiply(item){
   item.forEach((y)=>{
    console.log(y*2);
   })
}

//5.a function that takes array and consoles the first 4 items multiplied by 8 and the last 2 added by 5
function multiplyAndAdd(numArr) {
    const fournums = numArr.slice(0, 4).map(x => x * 8);
    const lastTwo = numArr.slice(-2).map(x=> x + 5);
    const  newValues= fournums.concat(lastTwo);
    console.log(newValues);
   }
   multiplyAndAdd([5, 15, 25, 35, 45,55,65]);
