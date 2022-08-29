function requestValidator(input) {
    let method = input.method;
    let uri = input.uri;
    let version = input.version;
    let message = input.message;

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validMethods.includes(method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!validVersions.includes(version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (uri.length > 0) {
        let pattern = /\.*[a-z0-9]+\.*[a-z0-9]*\.*[a-z0-9]*/gim;
        let matchedUri = uri.match(pattern)[0];
        if (matchedUri.length !== uri.length) {
            throw new Error("Invalid request header: Invalid URI");
        }
    }

    let specialChars = /[\<\>\\\&\'\"]/g;
    if (message.match(specialChars)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    console.log('y');
    return input;
}

module.exports = requestValidator;

// requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });

// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });

// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });