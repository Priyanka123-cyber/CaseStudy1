

//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

const array = [41, 6, 9, 2, 11, 21, 45, 11];
let num=array[0];

is_prime(num);

function is_prime(n)
 {
    let i;
    let c=0;
    for (i = 1; i <= n; i++) {
        if (n % i == 0) 
            {
            c=++c;
         }
    }
    if(c==2)
       console.log('Is prime');
       
    else
        console.log('Not prime');
        
}


//Write a JavaScript program to find the most frequent item of an array



function frequent(arr) {
    if (arr.length === 0) return null;

    let maxCount = 0;
    let mostFrequent = null;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            mostFrequent = arr[i];
        }
    }
    return mostFrequent;
}

const mostFrequent = frequent(array);
console.log ('The most frequent item is: '+mostFrequent);



//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.



for (let p= 0; p <= 15; p++) {
    let z=odd_even(p);   
}


function odd_even(l)
{
     if(l%2==0)
        console.log(l+ " is even");
    else
        console.log(l+ " is odd");
}



//Write a JavaScript program to find the sum of squares of the elements of an array.


const result = sumsquare(array);

function sumsquare(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }

    return sum;
}
console.log ('The sum of squares of the elements is: ' +result);
