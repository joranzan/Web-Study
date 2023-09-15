const express = require('express');
const app = express();

const PORT = 8081;

const cors = require('cors');
const morgan = require('morgan');
const axios = require("axios");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();


app.use(cors());
app.use(morgan('dev'));

//body 데이터 파싱
app.use(express.json());

// Test용 get 요청
app.get("/", (req, res) => {
    return res.json({
        test:"Hello"
    })
})


// Post: 네이버에 원하는 데이터 요청 후 받아옴


// POST 요청으로 네이버로부터 받아와 서버에 저장한 데이터 읽어오기
app.get("/data", async (req, res) => {
    try {
        res.set("Content-Type", "application/json; charset=utf-8");
        const tempFile = fs.createReadStream("uploads/chart.json");
        return tempFile.pipe(res);
    } 
    catch (error) {
        return res.json(error);
    }
});
    
//네이버 검색 API 에, 시작일과 종료일, 검색어 등을 포함한 JSON 을 비동기통신으로 보낸 후
//네이버에서 보낸 요청에 대한 결과를 uploads/chart.js 파일로 저장
//내 백엔드 서버에 데이터 기록이다. (POST) -> API 호출 제한 있으므로 데이터 읽어오는건 GET으로!
app.post("/data", async (req, res) => {
    try {
            const url = "https://openapi.naver.com/v1/datalab/search";
            const headers = {
                    "Content-Type": "application/json",
                    "X-Naver-Client-Id": process.env.CLIENT_ID,
                    "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
                };
            
            const request_body = {
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                // (구간 단위) date, week, month 세 가지 제공
                timeUnit: req.body.timeUnit,  //월간 
                keywordGroups: req.body.keywordGroups
            };
            //내 서버가 네이버에 요청할 수 있는 발급받은 api와 원하는 데이터를 보냄 (요청)
            //돌아온 응답을 response에 저장
            const response = await axios.post(url, request_body, {
                     headers: headers,
                });

            fs.writeFile(
                    `./uploads/chart.json`,
                    JSON.stringify(response.data.results),
                    (error) => {
                            if (error) {
                            throw error;
                            //throw 문은 사용자 정의 예외(throw)
                            //예외가 발생하면 현재 함수의 실행이 중지되고 
                            //(throw 이후의 명령문은 실행되지 않는다)
                        }
                    }
                );

            return res.json(response.data.results);

        } 
        catch (error) {
            console.log(error);
            return res.json(error);
        }
});

//검색해서 저장했던 json 파일을 삭제하는 delete
app.delete("/data", (req, res) => {
    try {
            //unlink는 해당 파일 삭제한다는 뜻
            fs.unlink("uploads/chart.json", (error) => {
                if (error) {
                return res.json(error);
            }
        });
        //delete 성공시 delete:true 라는 간단한 json return
        return res.json({
            delete: true
        });
    } 
    //예외 처리
    catch (error) {
        return res.json(error);
    }
});


app.listen(PORT, () => console.log(`${PORT} 서버 기동중`));