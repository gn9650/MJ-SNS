const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 4000;

const snsRouter = require("./routers/testRouter");


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/sns", snsRouter)




app.get("/call/test",(req,res)=>{
    console.log("hi");
    return res.send("why?");
});



app.listen(PORT,()=>{
    console.log(`MJ_SNS BACKEND::${PORT}SEVER START`);
});


/// db 연결 
// 프론트에서 신호를 받아 사용자 정보를 전부 터미널에 출력
// 라우터 및 디비폴더 생성(프레임워크 사용)
// 리턴은 아무거나 해도 상관없음