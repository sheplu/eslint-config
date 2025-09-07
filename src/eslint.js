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
                    "ignoreClassWithStaticInitBlock": false,
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
            "use-isnan": [
                "error", {
                    "enforceForSwitchCase": true,
                    "enforceForIndexOf": true,
                },
            ],
            "valid-typeof": [
                "error", {
                    "requireStringLiterals": true,
                },
            ],
            "accessor-pairs": [
                "error", {
                    "setWithoutGet": true,
                    "getWithoutSet": true,
                    "enforceForClassMembers": true,
                    "enforceForTSTypes": true,
                },
            ],
            "arrow-body-style": [
                "error", "as-needed", {
                    "requireReturnForObjectLiteral": true,
                },
            ],
            "block-scoped-var": [
                "error",
            ],
            "camelcase": [
                "error", {
                    "properties": "always",
                    "ignoreDestructuring": false,
                    "ignoreImports": false,
                    "ignoreGlobals": false,
                    "allow": [],
                },
            ],
            "capitalized-comments": [
                "error", "always", {
                    "ignorePattern": "slint",
                    "ignoreInlineComments": false,
                    "ignoreConsecutiveComments": false,
                },
            ],
            "class-methods-use-this": [
                "error", {
                    "exceptMethods": [],
                    "enforceForClassFields": true,
                    "ignoreOverrideMethods": false,
                    "ignoreClassesWithImplements": "public-fields",
                },
            ],
            "complexity": [
                "error", {
                    "max": 15,
                    "variant": "modified",
                }, 
            ],
            "consistent-return": [
                "error", {
                    "treatUndefinedAsUnspecified": true,
                }
            ],
            "consistent-this": [
                "error", "that",
            ],
            "curly": [
                "error", "all",
            ],
            "default-case": [
                "error", {
                    "commentPattern": "",
                },
            ],
            "default-case-last": [
                "error",
            ],
            "default-param-last": [
                "error",
            ],
            "dot-notation": [
                "error", {
                    "allowKeywords": false,
                    "allowPattern": "",
                },
            ],
            "eqeqeq": [
                "error", "always",
            ],
            "func-name-matching": [
                "error", "never",
            ],
            "func-names": [
                "error", "always", {
                    "generators": "always",
                },
            ],
            "func-style": [
                "error", "declaration", {
                    "allowArrowFunctions": false,
                    "allowTypeAnnotation": true,
                    "overrides": {
                        "namedExports": "declaration"
                    },
                },
            ],
            "grouped-accessor-pairs": [
                "error", "getBeforeSet", {
                    "enforceForTSTypes": true,
                },
            ],
            "guard-for-in": [
                "error",
            ],
            "id-denylist": [
                "error", "data", "err", "e", "cb", "callback",
            ],
            "id-length": [
                "error", {
                    "min": 3,
                    "max": 20,
                    "properties": "always",
                    "exceptions": [],
                    "exceptionPatterns": [],
                },
            ],
            "id-match": [
                "off",
            ],
            "init-declarations": [
                "error", "always", {
                    "ignoreForLoopInit": false,
                },
            ],
            "logical-assignment-operators": [
                "error", "always", {
                    "enforceForIfStatements": true,
                },
            ],
            "max-classes-per-file": [
                "error", {
                    "ignoreExpressions": false,
                    "max": 2,
                },
            ],
            "max-depth": [
                "error", {
                    "max": 3,
                },
            ],
            "max-lines": [
                "error", {
                    "max": "400",
                    "skipBlankLines": true,
                    "skipComments": true,
                },
            ],
            "max-lines-per-function": [
                "error", {
                    "max": "40",
                    "skipBlankLines": true,
                    "skipComments": true,
                    "IIFEs": true,
                },
            ],
            "max-nested-callbacks": [
                "error", {
                    "max": 3,
                },
            ],
            "max-params": [
                "error", {
                    "max": 4,
                    "countVoidThis": true,
                }, 
            ],
            "max-statements": [
                "error", {
                    "max": 10,
                    "ignoreTopLevelFunctions": false,
                },
            ],
            "new-cap": [
                "error", {
                    "newIsCap": true,
                    "capIsNew": true,
                    "newIsCapExceptions": [],
                    "newIsCapExceptionPattern": "",
                    "capIsNewExceptions": [],
                    "capIsNewExceptionPattern": "",
                    "properties": true,
                },
            ],
            "no-alert": [
                "error",
            ],
            "no-array-constructor": [
                "error", 
            ],
            "no-bitwise": [
                "error", {
                    "allow": [],
                    "int32Hint": true,
                },
            ],
            "no-caller": [
                "error", 
            ],
            "no-case-declarations": [
                "error", 
            ],
            "no-console": [
                "error", {
                    "allow": [],
                },
            ],
            "no-continue": [
                "error",
            ],
            "no-delete-var": [
                "error",
            ],
            "no-div-regex": [
                "error",
            ],
            "no-else-return": [
                "error", {
                    "allowElseIf": true,
                },
            ],
            "no-empty": [
                "error", {
                    "allowEmptyCatch": false,
                },
            ],
            "no-empty-function": [
                "error", {
                    "allow": [],
                },
            ],
            "no-empty-static-block": [
                "error",
            ],
            "no-eq-null": [
                "error",
            ],
        },
    },
];
