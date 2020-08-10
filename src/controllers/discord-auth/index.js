const got = require("got");
const { getMyUrl } = require("../../util/lambdaUtil");

const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

// eslint-disable-next-line no-unused-vars
const SCOPES = [
    "bot",
    "webhook.incoming",
];

// const redirectUri = "https://zbofdp8vzi.execute-api.us-east-1.amazonaws.com/dev/discord-auth";

module.exports = async (event, context) => {
    const { code } = event.queryStringParameters;

    const requestBody = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: getMyUrl(event),
        scope: SCOPES.join(" "),
    };

    console.log(requestBody);

    try {
        const result = await got.post("https://discord.com/api/oauth2/token", {
            form: requestBody,
            headers: {
                "user-agent": "GHNotification (https://github.com/pkmnfrk/gh-notification",
            },
        }).json();

        console.log(result);
    } catch (e) {
        console.log(e.response.body);
    }

    return {
        statusCode: 200,
        body: {
            message: "ok",
        },
    };
};
