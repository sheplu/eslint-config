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
            "no-cond-assign": [
                "error", "always",
            ],
            "no-const-assign": [
                "error",
            ],
            "no-constant-binary-expression": [
                "error",
            ],
            "no-constant-condition": [
                "error",
            ],
            "no-constructor-return": [
                "error",
            ],
            "no-control-regex": [
                "error",
            ],
            "no-debugger": [
                "error",
            ],
            "no-dupe-args": [
                "error",
            ],
            "no-dupe-class-members": [
                "error",
            ],
            "no-dupe-else-if": [
                "error",
            ],
            "no-dupe-keys": [
                "error",
            ],
            "no-duplicate-case": [
                "error",
            ],
            "no-duplicate-imports": [
                "error",
            ],
            "no-empty-character-class": [
                "error",
            ],
            "no-empty-pattern": [
                "error", {
                    "allowObjectPatternsAsParameters": false,
                },
            ],
        },
    },
];
