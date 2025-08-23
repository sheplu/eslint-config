export default [
    {
        rules: {
            "array-callback-return": [
                "error", {
                    "allowImplicit": false,
                    "checkForEach": true,
                    "allowVoid": false,
                },
            ],
            "constructor-super": [
                "error",
            ],
            "for-direction": [
                "error",
            ],
            "getter-return": [
                "error", {
                    "allowImplicit": false,
                },
            ],
        },
    },
];
