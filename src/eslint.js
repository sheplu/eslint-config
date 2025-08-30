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
            "no-self-compare": [
                "error",
            ],
            "no-setter-return": [
                "error",
            ],
            "no-sparse-arrays": [
                "error",
            ],
            "no-template-curly-in-string": [
                "error",
            ],
            "no-this-before-super": [
                "error",
            ],
            "no-unassigned-vars": [
                "error",
            ],
            "no-undef": [
                "error", {
                    "typeof": true,
                },
            ],
            "no-unexpected-multiline": [
                "error",
            ],
            "no-unmodified-loop-condition": [
                "error",
            ],
            "no-unreachable": [
                "error",
            ],
            "no-unreachable-loop": [
                "error", {
                    "ignore": [],
                },
            ],
            "no-unsafe-finally": [
                "error",
            ],
            "no-unsafe-negation": [
                "error", {
                    "enforceForOrderingRelations": true,
                },
            ],
            "no-unsafe-optional-chaining": [
                "error", {
                    "disallowArithmeticOperators": true,
                },
            ],
            "no-unused-private-class-members": [
                "error",
            ],
            "no-unused-vars": [
                "error", {
                    "vars": "all",
                    "varsIgnorePattern": "",
                    "args": "all",
                    "argsIgnorePattern": "",
                    "caughtErrors": "all",
                    "caughtErrorsIgnorePattern": "",
                    "destructuredArrayIgnorePattern": "",
                    "ignoreClassWithStaticInitBlock": "",
                    "ignoreRestSiblings": false,
                    "ignoreUsingDeclarations": false,
                    "reportUsedIgnorePattern": false,
                },
            ],
            "no-use-before-define": [
                "error", {
                    "functions": true,
                    "classes": true,
                    "variables": true,
                    "allowNamedExports": false,
                    "enums": true,
                    "typedefs": true,
                    "ignoreTypeReferences": false,
                },
            ],
            "no-useless-assignment": [
                "error",
            ],
            "no-useless-backreference": [
                "error",
            ],
            "require-atomic-updates": [
                "error", {
                    "allowProperties": true,
                },
            ],
        },
    },
];
