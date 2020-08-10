
function wrap(controller) {
    return async (event, context) => {
        let result = controller(event, context);
        if (result instanceof Promise) {
            result = await result;
        }

        if (typeof result === "object") {
            if (result.body && typeof(result.body) !== "string") {
                result.body = JSON.stringify(result.body);
            }
        }
        return result;
    };
}

module.exports = {
    "github": wrap(require("./controllers/github")),
    "github-auth": wrap(require("./controllers/github-auth")),
    "github-start": wrap(require("./controllers/github-start")),
    "discord": wrap(require("./controllers/discord")),
    "discord-auth": wrap(require("./controllers/discord-auth")),
};
