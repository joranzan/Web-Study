const mysql = require("mysql2/promise");


const pool = mysql.createPool({
	// aws ip
	host: "(localhost 또는 본인의 IP주소)",
	// mysql username
	user: "(mySQL 세션 만들 때 사용한 USERNAME)",
	// mysql user password
	password: "(mySQL 세션 만들 때 사용한 PASSWORD)",
	// db name
	database: "order_system",
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = { pool };
