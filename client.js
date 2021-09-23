const net = require("net");
const { stdin } = require("process");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  }, () => {
    console.log("Connection successful")
  });
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log("Server returning: ", data);
  });

  conn.on('connect', () => {
    console.log("Successfully connect to game server")
    conn.write('Name: BUG');
  });

  return conn;
};

module.exports = {
  connect
}