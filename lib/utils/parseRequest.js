module.exports = rawRequest => {
    const methodRegex = /^\w+/g;
    const requestArr = rawRequest.split('\r\n\r\n');
    const body = requestArr[1];
    
    if(body) {
        return {
            body: body,
            method: rawRequest.match(methodRegex).toString(),
            path: rawRequest.split(' ')[1]
        };
    } else {
        return {
            method: rawRequest.match(methodRegex).toString(),
            path: rawRequest.split(' ')[1]
        };

    }
};
