var fs = require('fs');

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    const db = JSON.parse(fs.readFileSync('./localMocks/db.json').toString());
    req.body.id = uuid()
    db[req.path.replace('/', '')].push(req.body);
    fs.writeFileSync("./localMocks/db.json", JSON.stringify(db));
    next();
    return res.json(req.body);
  }
  next();
};
