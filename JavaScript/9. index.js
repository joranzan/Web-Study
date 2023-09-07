// console.log("TEST");

// //div.test
// const firstTitle = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong");
// const firstPercent =document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span");
// const firstOpen = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > span.txt-info > strong");
// firstTitle.textContent = "미션 씹가능";
// console.log(firstTitle);
// console.log(firstPercent.textContent);
// console.log(firstOpen);

const SecondTitle = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > a > strong");
const SecondPercent = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > div > strong > span");
const SecondOpen = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong");
//const SecondDday = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong > em");
const SecondImage = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-image > a > span > img");

SecondTitle.textContent = "전망 좋은 집";
SecondPercent.textContent = "150.0%";
SecondOpen.textContent = "\n2023.07.26 \n개봉\nD-7\n"  ;
SecondImage.src = "https://www.themoviedb.org/t/p/original/lIdq6e6YOZVLyGCaWHQ3DJ7yF8z.jpg";
//SecondDday.textContent ="D-7" ;

//#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong > em
console.log(SecondTitle);
console.log(SecondPercent.textContent);
console.log(SecondOpen.textContent);
//console.log(SecondDday.textContent);
console.log(SecondImage.src);

//getAttribute("key값")
//getAttribute("key 값","value 값")
//setAttribute


//querySelectorAll
const titles = document.querySelectorAll(".title"); 
//.percent>span: 직계가족 하나의 span, .percent span: 하위 모든 span
const percents = document.querySelectorAll(".percent>span");

for(let i=0;i<titles.length;i++)
{
    let length = titles[i].textContent.length;
    titles[i].textContent="";
    for(let j=0;j<length;j++)
    {
        titles[i].textContent+="*";
    }
    percents[i].textContent = "30.0%";
    console.log(titles[i].textContent);
    console.log(percents[i].textContent);
}