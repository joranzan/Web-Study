
const toggleButton = document.querySelector(".toggle-button");
const body = document.querySelector('body');
const header = document.querySelector(".header-nav-list-wrapper");
const bookmarkTexts = document.querySelectorAll(".bookmark-text");
const searchInput = document.querySelector("#search-input");
toggleButton.addEventListener('click',function()
{
    toggleButton.classList.toggle("toggle-button-darkmode");
    body.classList.toggle("body-background-darkmode");
    header.classList.toggle("text-darkmode");

    // toggle button darkmode 존재하면 일반모드 표시
    if(toggleButton.classList.contains("toggle-button-darkmode")){
        toggleButton.textContent = "일반 모드";
    }
    else{
        toggleButton.textContent = "다크 모드";
    }

    for(let i=0;i<bookmarkTexts.length;i++)
    {
        bookmarkTexts[i].classList.toggle("text-darkmode");
    }

})

searchInput.addEventListener("keyup",function(e){
    //enter눌러야만 검색창 넘어가기
    if(e.code ==="Enter"){
        // 값이 비어있으면 검색 x
        if(e.target.value==="")
        {
            alert("검색어를 입력하지 않았습니다.")
            return;
        }
    // https://www.google.com/search?q= + 검색어
    const target = "https://www.google.com/search?q=";
    // 자바스크립트로 이동 2가지
    //1. location.href 바로 이동
    //location.href = target+e.target.value;
    //2. window.open 새창
    window.open(target+e.target.value, "_blank");
    }
    
})

