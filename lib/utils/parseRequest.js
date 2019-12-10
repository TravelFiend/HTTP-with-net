module.exports = rawRequest => {
    const methodRegex = /^\w+/g;
    const bodyRegex = /(\{.*?\})/g;

    if(bodyRegex.test(rawRequest) === true){
        return {
            body: rawRequest.match(bodyRegex).toString(),
            method: rawRequest.match(methodRegex).toString(),
            path: rawRequest.split(' ')[1]
        };
    }
    return {
        method: rawRequest.match(methodRegex).toString(),
        path: rawRequest.split(' ')[1]
    };
};
