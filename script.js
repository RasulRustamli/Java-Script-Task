
//Task 1-1
function find(parametr){
    let bolloen=false
    for (let index = 0; index < arr.length; index++) {
        if(parametr = arr[index]){
            bolloen=true;
            break;
        }
    }
    console.log(bolloen)
}
let arr=[85,75,]
find(54)
//Task 1-2
function evencount(){
    let count=0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]%2 == 0){
            console.log(arr[index]) 
            count++;
        }
    }
    if(count==0) console.log("array dont have even number" )
}
evencount()
//Task 2
function calculator(num1,num2,o){
    switch (o) {
        case '+': 
        sum=num1+num2   
            console.log(sum);
            break;
        case '-': 
        sum=num1-num2   
            console.log(sum);
            break;
        case '*': 
        sum=num1*num2   
            console.log(sum);
            break;
        case '/': 
        sum=num1/num2   
            console.log(sum);
            break;
        
        default:"please enter correct format"
            break;
    }
}
calculator(2,3,'+')


