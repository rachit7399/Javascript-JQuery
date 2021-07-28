var str = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";
var temp_arr = [];
var arr = [];
var myArr = str.split(" ");
for(var i = 0 ; i < myArr.length ; i++)
{
    if(/^\d{10}$/.test(myArr[i]))
    myArr[i] = "XXXXXXXXXX";

    temp_arr.push(myArr[i])
    var chr = myArr[i].charAt(myArr[i].length-1);
    if( chr== '.' || chr == '?' || chr == '!'){
        if(temp_arr.length > 3)
        arr.push(temp_arr);
        temp_arr = [];
    }
}
for(var i = 0 ; i < arr.length ; i++)
{
    s = String(i+1) + " ";
    for(var j = 0 ; j < arr[i].length ; j++)
    s = s + arr[i][j] + " ";
    console.log(s)
}