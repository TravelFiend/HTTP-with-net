module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
    return `${status}
        Content-Length: ${body.length}
        Content-Type: ${contentType}
        ${body}
    `;
};
