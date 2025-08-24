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
            "no-async-promise-executor": [
                "error", 
            ],
            "no-await-in-loop": [
                "error",
            ],
            "no-class-assign": [
                "error",
            ],
            "no-compare-neg-zero": [
                "error",
            ],
        },
    },
];
