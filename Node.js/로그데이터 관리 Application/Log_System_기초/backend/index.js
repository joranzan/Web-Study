const express = require('express');

//socket 통신을 하기 위해서는 해당 서버 세팅이 필요하다.
const { createServer } = require('http');
const { Server } = require('socket.io');
const PORT = 8080;
const cors = require('cors');


const app = express();
const logger = require("../backend/utils/log");
const fs = require('fs');

app.use(express.json());
app.use(cors());

const httpServer = createServer(app);

//웹 소켓에 대한 cors 설정도 추가
const io = new Server(httpServer, {
    cors: true
});

function sendLog(socket){
    //logs 디렉토리를 읽어서
    fs.readdir('./logs', (error, files) => {

        //디렉토리 중 첫번째 로그 파일을 읽어서 그 안의 값을 보내기
        if(error){
            console.log(`ERROR ${error}`)
        }
        else{
            //.log로 끝나는 파일만 모으기
            const logFiles = files.filter(file => file.endsWith('.log'));
            console.log(logFiles);

            //해당 파일을 읽기
            fs.readFile(`./logs/${logFiles[0]}`, (err,data) => {
                if(err){
                    console.log(`ERROR ${err}`);
                }
                else{
                    //console.log(data);
                    
                    //utf 8 형식으로 변환
                    //현재는 buffer 형식으로 출력됨
                    //<Buffer 32 30 32 33 2d 30 39 2d 30 38 20 31 30 3a 31 38 3a 32 33 20 5b 65 72 72 6f 72 20 3a 20 
                    //eb b2 84 ea b7 b8 ea b0 80 20 eb b0 9c ec 83 9d ed 95 98 ec 98 ... 13 more bytes>

                    const log = data.toString('utf8');
                    console.log(log); //2023-09-08 10:18:23 [error : 버그가 발생하였습니다]
                    
                    socket.emit("fromServer", log);

                }
            })
        }
    })
    
}

//양쪽 소켓이 연결되면 해당 콜백함수가 실행된다
io.on('connection', (socket) => {
    console.log("연결되었음");

    setInterval(() =>{

        //socket.emit
        //socket.emit("fromServer", "동료가 되어라!");
        
        sendLog(socket);
    }, 2000);

})


//http://localhost:8080/bug 에 접속하면 json형식 찍혀있음
app.get("/bug",(req, res) => {
    
    //logger.info
    //logger.warn

    logger.error("버그가 발생하였습니다");
    
    
    return res.json({
        test:"Hello"
    })
})


httpServer.listen(PORT, () => console.log(`${PORT} 서버 기동중`));