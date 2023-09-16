function myfunc()
{
    const variable1 = document.getElementById("yoh").value;
    const variable2 = document.getElementById("yuh").value;
    let i=1;
    let multi;
    if(isEmpty(variable1) || isEmpty(variable2))
    {
        alert("please fill all the field");
        break;
    }
    for(i=1;i<=50;i++)
    {
     multi = (variable1 * i);
     if(multi % variable2==1)
     {
        alert("The possible integer to get modulo value = 1 for your inverse is : " + i);
        break;
     }
    }
    if(multi % variable2 != 1)
   {
    alert(`This equation has no solution!\n Because ${variable1} and ${variable2} are co-primes`);
   }
}
