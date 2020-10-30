var config = {
  "token": "1246728564:AAFSe8J-5NX3Oud2lAuqd14rDkxibmgZm7Q",
  "update_type": "long-polling", // or "webhook"
  "webhook": "https://www.example.com/<token>",
  //"proxy": "http://127.0.0.1:8118",
  //"bot_name": "example_bot", // check bot name,
  "admin_id": "35197423",
  "db": {
    host: '127.0.0.1',
    port: 27017,
    //username: '',
    //password: '',
  }
};

module.exports = config;
