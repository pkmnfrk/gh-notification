function getMyUrl(event) {
    let ret = "http";

    if (event.requestContext.protocol.indexOf("HTTPS") === 0) {
        ret += "s";
    }

    ret += "://";

    ret += event.headers.Host;

    ret += event.resource;

    return ret;
}

module.exports = {
    getMyUrl,
};
