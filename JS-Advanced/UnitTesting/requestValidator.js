function solve(obj) {
  let methodCouldBe = ["GET", "POST", "DELETE", "CONNECT"];
  let uriPattern = /^[\*A-Za-z0-9\.]+$/gm;
  let versionCouldBe = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let messagePatern = /[<>\\&'"]/;


if(obj.method == undefined || !methodCouldBe.includes(obj.method)){
    throw Error(`Invalid request header: Invalid Method`);
}else if (obj.uri == undefined || obj.uri === '' || uriPattern.test(obj.uri) === false){
    throw Error(`Invalid request header: Invalid URI`);
}else if (obj.version == undefined || !versionCouldBe.includes(obj.version)){
    throw Error(`Invalid request header: Invalid Version`);
}else if(obj.message == undefined || messagePatern.test(obj.message)){
    throw Error(`Invalid request header: Invalid Message`);
}else {
    return obj;
}



}
console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  
  ));
