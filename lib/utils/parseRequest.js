module.exports = rawRequest => {
    const methodRegex = /^\w+/g;
    const requestArr = rawRequest.split('\n');
    const realBody = requestArr[requestArr.length - 1];
    
    if(realBody) {
        return {
            body: realBody,
            method: rawRequest.match(methodRegex).toString(),
            path: rawRequest.split(' ')[1]
        };
    }
    return {
        method: rawRequest.match(methodRegex).toString(),
        path: rawRequest.split(' ')[1]
    };
};
