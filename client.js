const net = require("net");
const { stdin } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  }, () => {
    console.log("Connection successful")
  });

  conn.on
  // interpret incoming data as text
  conn.setEncoding("utf8");
  stdin.setEncoding("utf8");

  conn.write(`Name: ghi has connected!!!`);


  conn.on('data', (data) => {
     console.log(data);
  });

  return conn;
};

module.exports = {
  connect
}