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
            "no-ex-assign": [
                "error",
            ],
            "no-fallthrough": [
                "error", {
                    "commentPattern": "break[\\s]*omitted",
                    "allowEmptyCase": false,
                    "reportUnusedFallthroughComment": true,
                },
            ],
            "no-func-assign": [
                "error",
            ],
            "no-import-assign": [
                "error",
            ],
            "no-inner-declarations": [
                "error", "both", {
                    "blockScopedFunctions": "disallow",
                },
            ],
            "no-invalid-regexp": [
                "error", {
                    "allowConstructorFlags": [],
                },
            ],
            "no-irregular-whitespace": [
                "error", {
                    "skipStrings": false,
                    "skipComments": false,
                    "skipRegExps": false,
                    "skipTemplates": false,
                    "skipJSXText": false,
                },
            ],
            "no-loss-of-precision": [
                "error", 
            ],
            "no-misleading-character-class": [
                "error", {
                    "allowEscape": true,
                },
            ],
            "no-new-native-nonconstructor": [
                "error",
            ],
            "no-obj-calls": [
                "error",
            ],
            "no-promise-executor-return": [
                "error", {
                    "allowVoid": false,
                },
            ],
            "no-prototype-builtins": [
                "error", 
            ],
            "no-self-assign": [
                "error", {
                    "props": true,
                },
            ],
        },
    },
];
