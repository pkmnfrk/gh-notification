const got = require("got");

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const CALLBACK = process.env.GITHUB_CALLBACK;

module.exports = async (event, context) => {
    const { code, state } = event.queryStringParameters;

    const requestBody = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: CALLBACK,
        state,
    };

    const result = await got.post("https://github.com/login/oauth/access_token", {
        form: requestBody,
    }).json();

    console.log(result);

    return {
        statusCode: 200,
        body: {
            message: "ok",
        },
    };
};
