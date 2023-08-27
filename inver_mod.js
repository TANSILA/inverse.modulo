function myfunc()
{
    const variable1 = document.getElementById("yoh").value;
    const variable2 = document.getElementById("yuh").value;
    let i=1;
    for(i=1;i<=50;i++)
    {
     let multi = (variable1 * i);
     if(multi % variable2==1)
     {
        alert("the possible integer to get modulo value = 1 for your inverse is : " + i);
        break;
     }
    }
}