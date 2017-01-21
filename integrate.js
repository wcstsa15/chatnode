// Integrate.js
//
var dbconn = require("./idatabase.js");
const assert = require('assert');

//Establish Infrastructure Integrity
console.log(process.versions)

var RequiredNodeVersion = '4.6.1';
//assert(process.versions.node == '4.6.0', 'Wrong Node Version');
assert(process.versions.node == RequiredNodeVersion, 'Wrong Node Version' + process.versions.node + "!=" + RequiredNodeVersion);
//Establish Libraries/Dependencies Integrity
//
//Establish Application Structure Integrity

//DB
dbconn.connect();
dbconn.query("");
dbconn.disconnect();    



// Assert Modules

// Assert Unit Tests

// Assert Integration


//Commit Pipeline

//Build Pipline

//Deploy Pipeline

