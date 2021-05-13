var mathObject = {
    num1:0,
    operation: '+', 
    num2:0
}

function addNumToText(num) {
    if(document.getElementById('myText').value !=0) {
        document.getElementById('myText').value = document.getElementById('myText').value + num;
    }
    else {
        document.getElementById('myText').value = num;
        addToHistory(num);

    }
}
 function clear1(){
    document.getElementById('myText').value = "";
 }
 function operation(ope){
     mathObject.num1 = document.getElementById('myText').value;
     mathObject.operation = ope;
     document.getElementById('myText').value = 0;
     
 }
 function calculate(){
    mathObject.num2 = document.getElementById('myText').value;
    if(mathObject.operation == '+'){
        document.getElementById('myText').value = parseInt(mathObject.num1) + parseInt(mathObject.num2);
        
    }
    else if(mathObject.operation == '-'){
        document.getElementById('myText').value = parseInt(mathObject.num1) - parseInt(mathObject.num2);
        
    }
    else if(mathObject.operation == '/'){
        document.getElementById('myText').value = parseInt(mathObject.num1) / parseInt(mathObject.num2);
        
    }
    else if(mathObject.operation == '*'){
        document.getElementById('myText').value = parseInt(mathObject.num1) * parseInt(mathObject.num2);
        
 }
 else if(mathObject.operation == '%'){
    document.getElementById('myText').value = parseInt(mathObject.num1) % parseInt(mathObject.num2);
    
 }
 else if(mathObject.operation == '='){
    document.getElementById('myText').value = parseInt(mathObject.num1) % parseInt(mathObject.num2);
    
 
 }

}