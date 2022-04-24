const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/user", (req, res, next) => {
  const query1 = `
            SELECT  username
            FROM    user
            
        `;
  try {
    db.query(query1, (err, row) => {
      if (err) {
        console.error(err);
        throw "데이터베이스 접근 에러 발생";
      }
      console.log(row);
      return res.status(200).json(row);
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send("데이터 베이스 오류 발생");
  }
});

router.post("/get/one", (req, res, next) => {
  const { userId } = req.body;

  console.log(userId);

  const selectQuery = `
        SELECT  id,
                username,
                avatar,
                birth,
                msg
                
        FROM    user
        WHERE   id = ${userId}
    `;
  try {
    db.query(selectQuery, (err, row) => {
      if (err) {
        console.error(err);
        throw "사용자를 불러올 수 없습니다.";
      }

      if (row.length < 1) {
        throw "사용자 정보가 존재하지 않습니다.";
      }

      console.log(row);
      return res.status(200).json(row[0]);
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send("데이터 베이스 오류 발생");
  }
});

router.post("/get/friends", (req, res, next) => {
  const { userId } = req.body;

  const selectQuery = `
        SELECT  id,
                username,
                avatar
        FROM    user
        WHERE   id  in (
            SELECT  follwerId
            FROM    follow
            WHERE   followingId = ${userId}
        )
    `;
  try {
    db.query(selectQuery, (err, row) => {
      if (err) {
        console.error(err);
        throw "사용자를 불러올 수 없습니다.";
      }

      if (row.length < 1) {
        throw "사용자 정보가 존재하지 않습니다.";
      }

      console.log(row);
      return res.status(200).json(row);
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send("데이터 베이스 오류 발생");
  }
});

router.post("/get/feed", (req, res, next) => {
  const { userId } = req.body;

  const selectQuery = `
    SELECT  id,
            content,
            imgURL,
            createdAt,
            userId
    FROM    feed
    WHERE   userId <> ${userId}
    AND     isDelete = 0
    ORDER BY createdAt DESC;
  `;
  try {
    db.query(selectQuery, (err, rows) => {
      if (err) {
        console.error(err);
        throw "피드값을 불러올 수 없습니다";
      }
      if (rows.length < 1) {
        throw "피드값이 존재하지 않습니다.";
      }
      console.log(rows);
      return res.status(200).json(rows);
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send("피드쪽 데이터 베이스 오류 발생");
  }
});

module.exports = router;