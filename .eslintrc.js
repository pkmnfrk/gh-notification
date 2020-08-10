module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2020: true,
    },
    extends: [
        "google",
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        "quotes": ["error", "double", { avoidEscape: true }],
        "indent": ["error", 4],
        "linebreak-style": ["off"],
        "object-curly-spacing": ["error", "always"],
        "require-jsdoc": ["off"],
    },
};
