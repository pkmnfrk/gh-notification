const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CALLBACK = process.env.GITHUB_CALLBACK;

module.exports = async (event, context) => {
    const url = "https://github.com/login/oauth/authorize?" +
        `client_id=${encodeURIComponent(CLIENT_ID)}` +
        `redirect_uri=${encodeURIComponent(CALLBACK)}` +
        // `state=tbd`
        ""
        ;

    return {
        statusCode: 301,
        headers: {
            "Location": url,
        },
    };
};
