
words = ['level','noon','mom','happy','ssafy','life']

function palindrome(word){
    let start_idx = 0;
    let end_idx = word.length-1;
    let palin = true;
    
    while(start_idx<=end_idx)
    {
        if(word[start_idx]===word[end_idx])
        {
            start_idx++;
            end_idx--;
        }
        else{
            palin = false;
            break;
        }
    }
    return palin;
}

for(const word of words)
{
    console.log(palindrome(word));
}