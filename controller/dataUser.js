
var http = require("http");
    url = "http://localhost:3001/users";

// get is a simple wrapper for request()
// which sets the http method to GET
var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    }); 

    response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        data = JSON.parse(buffer);
        route = data;
        // extract the distance and time
        return x = route
    }); 
}); 

exports.index = async (req, res, next) => {
  // res.sendFile(`${process.cwd()}/views/index.html`)

  res.render("index", {
    title: "Home Page"
  });
};

exports.inscription = async (req, res, next) => {
    // res.sendFile(`${process.cwd()}/views/index.html`)
  
    res.render("inscription", {
      title: "Inscription"
    });
  };


  exports.post = async (req, res, next) => {
    
    res.render("post", {
      data : x,
      title: "Users List"
    });
  };
  