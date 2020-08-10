const map = {
    // "installation": require("./installation"),
};

module.exports = async (event, context) => {
    console.log(process.env);
    return {
        statusCode: 200,
        body: {
            "status": "ok",
        },
    };

    const action = event.headers["X-GitHub-Event"];

    if (map[action]) {
        const result = await map[action](event, context);

        if (!result) {
            return {
                statusCode: 200,
                body: {
                    message: "ok",
                },
            };
        }

        return result;
    }

    console.log(JSON.stringify(event));

    return {
        statusCode: 400,
        body: {
            "message": "Unknown action '" + action + "'",
        },
    };
};
