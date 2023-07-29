console.log("Hello World!\n==========\n");

// FOR and IF/ELSE
// Exercise 1 Section
console.log("EXERCISE 1:\n====ignore Even======\n");
for ( let i = 0; i <= 100; i++)
{
    if (i %2 == 0)
    {
    continue;
    }
    else
    {
    console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n====FIZZBUZZ====for loop==\n");
for ( let n = 0; n <= 100; n++)
{
    console.log(n);

    if (n % 3 == 0 && n % 5 == 0)
    {
        console.log("FIZZBUZ")
    }
    else if (n % 5 == 0 )
    {
        console.log("BUZZ");
    }
    else if (n % 3 == 0)
    {
        console.log("FIZZ");
    }
}
// WHILE
// Exercise 1 Section
console.log("EXERCISE 1:\n========while  loop==\n");
let m = 1;
while (m <= 100 )
{
    if (m % 2 !== 0)
    { console.log(m);
    }
    m++;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n====FIZZBUZZ====while loop==\n");
let p =1;
while (p <= 100 )
{
    console.log(p);

    if (p % 3 == 0 && p % 5 == 0)
    {
        console.log("FIZZBUZ")
    }
    else if (p % 5 == 0 )
    {
        console.log("BUZZ");
    }
    else if (p % 3 == 0)
    {
        console.log("FIZZ");
    }

    p++;
}

// DO WHILE
// Exercise 1 Section
console.log("EXERCISE 1:\n========do while  loop==\n");
let x = 1;
do
{
    if (x % 2 !== 0)
    { 
        console.log(x);
    }
    x++;
} while (x <= 100 )

// Exercise 2 Section
console.log("EXERCISE 2:\n====FIZZBUZZ====do while loop==\n");
let z = 1;
do{

    console.log(z);

    if (z % 3 == 0 && z % 5 == 0)
    {
        console.log("FIZZBUZ")
    }
    else if (z % 5 == 0 )
    {
        console.log("BUZZ");
    }
    else if (z % 3 == 0)
    {
        console.log("FIZZ");
    }

    z++;
} while (z <= 100)

//Exercise 4 : FIND Value
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
//let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
//let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log("EXERCISE 4:\n====FIND Value==\n");
let valueFound = false;
//let value=550;
for ( let c = 1; c <= n; c++)
    {   
    if (c == value)
    {
      console.log(`Found ${value} in the range 1 to ${n}.`);
      valueFound = true;
      break;
    } 
    //else {
      //  valueFound = false;
    //}
    }
    if (valueFound == false)
    {
       console.log(`Did  not find ${value} in the range 1 to ${n}.`);
    }
    

    //if (c==n)
    //if (valueFound)
    //{console.log(`Found ${value} in the range 1 to ${n}.`);}
    //else 
    //{
    //    console.log(`Did  not find ${value} in the range 1 to ${n}.`);
   // }
   //}
   //console.log(`Found ${value}!`);
//console.log(`did  not find ${value}..`);

//Exercise 5 : BONUS FIZZBUZZ