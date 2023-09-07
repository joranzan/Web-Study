const p1 = ['rock', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'paper', 'paper', 'rock', 'scissors']
const p2 = ['paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'rock']



const playGame = (p1_choice, p2_choice) => {
	// 작성해 주세요
    if(p1_choice==='rock')
    {
        if(p2_choice==='rock') console.log(0);
        else if(p2_choice=='scissors') console.log(1);
        else console.log(2);
    }
    else if(p1_choice==='scissors')
    {
        if(p2_choice==='rock') console.log(2);
        else if(p2_choice==='scissors') console.log(0);
        else console.log(1);
    }
    else //보자기
    {
        if(p2_choice==='rock') console.log(1);
        else if(p2_choice==='scissors') console.log(2);
        else console.log(0);
    }
}

for(let i=0;i<p1.length;i++)
{
    playGame(p1[i],p2[i]);
}
// 2
// 0
// 2
// 0
// 2
// 1
// 2
// 1
// 0
// 2












// rock: 0  scissor: 1  paper: 2
for(let i = 0;i < 10; i++ )
{
    if(p1[i]=='rock') p1[i]=0;
    else if(p1[i]=='scissors') p1[i]=1;
    else p1[i]=2;

    if(p2[i]=='rock') p2[i]=0;
    else if(p2[i]=='scissors') p2[i]=1;
    else p2[i]=2;
}

// rock: 0  scissor: 1  paper: 2
// 0>1  1>2 2>0

for(let i=0;i<10;i++)
{
    if(p1_choice=='rock')
    {
        if(p2_choice=='rock') console.log(0);
        else if(p2_choice=='scissors') console.log(1);
        else console.log(2);
    }
    else if(p1_choice=='scissors')
    {
        if(p2_choice=='rock') console.log(2);
        else if(p2_choice=='scissors') console.log(0);
        else console.log(1);
    }
    else //보자기
    {
        if(p2_choice=='rock') console.log(1);
        else if(p2_choice=='scissors') console.log(2);
        else console.log(0);
    }





}