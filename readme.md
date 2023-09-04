An input comes with three buttons, the first button creates a random number and puts the following command in the input:
const showGenerateRandom=() => {
    const randomNumber:number=Math.floor(Math.random() * 90000) + 10000;
    input?.value=randomNumber};

The second button counts the first numbers from zero to the generated random number and lists the following command in the array:
const showCalculateDigits=() => {
    
    function prime(nth:number) {
        var adadArray = [2];
        var isPrime = true;

            for(var i = 3; i <=input?.value; i++) { 
                isPrime = true;
                 for(var j = 2; j < i; j++) {
                     if(i % j === 0) {
                         isPrime = false;
                          break;
                        
                        } 
                    }
                         if(isPrime === true) {
                            adadArray.push(i); 
                            } 
            } 
            return adadArray; 
    } 
    adadArray.push(prime())};

The third button deletes the generated rando number and also takes a copy of the array and deletes the value inside it and gives us the following command:

const showClear= () => {
    input?.value="";
    function clearArray(array:adadArraytype) {
        array.splice(0, array.length);
    }
    clearArray(adadArray);
    return showClear;
};