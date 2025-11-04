export default [
	{
		rules: {
			"jsdoc/check-access": [
				"error",
			],
            "jsdoc/check-alignment": [
                "error", {
                    "innerIndent": 1,
                },
            ],
            "jsdoc/check-examples": [
                "error", {
                    "captionRequired": true,
                    "exampleCodeRegex": "",
                    "rejectExampleCodeRegex": "",
                    "paddedIndent": 4,
                    "reportUnusedDisableDirectives": true,
                },
            ],
            "jsdoc/check-indentation": [
                "error", {
                    "excludeTags": ["example"],
                },
            ],
            "jsdoc/check-line-alignment": [
                "error", "always", {
                    "customSpacings": {
                        "postDelimiter": 1,
                        "postHyphen": 1,
                        "postName": 1,
                        "postTag": 1,
                        "postType": 1,
                    },
                    "disableWrapIndent": false,
                    "preserveMainDescriptionPostDelimiter": true,
                    "tags": ['param', 'arg', 'argument', 'property', 'prop', 'returns', 'return', 'template'],
                    "wrapIndent": "",
                },
            ],
            "jsdoc/check-param-names": [
                "error", {
                    "allowExtraTrailingParamDocs": false,
                    "checkDestructured": true,
                    "checkRestProperty": true,
                    "checkTypesPattern": "/^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$/v",
                    "disableExtraPropertyReporting": false,
                    "disableMissingParamChecks": false,
                    "enableFixer": true,
                    "useDefaultObjectProperties": true,
                },
            ],
            "jsdoc/check-property-names": [
                "error", {
                    "enableFixer": true,
                },
            ],
            "jsdonc/check-syntax": [
                "error",
            ],
            "jsdoc/check-tag-names": [
                "error", {
                    "definedTags": ["note", "record"],
                    "enableFixer": true,
                    "inlineTags": ["link", "linkcode", "linkplain", "tutorial"],
                    "jsxTags": true,
                    "typed": true,
                },
            ],
            "jsdoc/check-template-names": [
                "error",
            ],
            "jsdoc/check-types": [
                "error", {
                    "exemptTagContexts": [],
                    "noDefaults": false,
                },
            ],
            "jsdoc/check-values": [
                "error", {
                    "allowedAuthors": [],
                    "allowedLicenses": [],
                    "licensePattern": "",
                    "numericOnlyVariation": false,
                },
            ],
            "jsdoc/convert-to-jsdoc-comments": [
                "error", {
                    "allowedPrefixes": ["@ts-", "istanbul ", "c8 ", "v8 ", "eslint", "prettier-"],
                    "contexts": {
                        "context": [
                            "ArrowFunctionExpression",
                            "FunctionDeclaration",
                            "FunctionExpression",
                            "TSDeclareFunction"
                        ],
                        "contextsAfter": [],
                        "contextsBeforeAndAfter": [
                            "VariableDeclarator",
                            "TSPropertySignature",
                            "PropertyDefinition"
                        ],
                    },
                    "enableFixer": true,
                    "enforceJsdocLineStyle": "multi",
                    "lineOrBlockStyle": "block",
                }
            ],
            "jsdoc/empty-tags": [
                "error", {
                    "tags": [],
                },
            ],
            "jsdoc/escape-inline-tags": [
                "error", {
                    "allowedInlineTags": [],
                    "enableFixer": true,
                    "fixType": "backslash"
                },
            ],
            "jsdoc/implements-on-classes": [
                "error", {
                    "contexts":["any"],
                },
            ],
            "jsdoc/imports-as-dependencies": [
                "error",
            ],
            "jsdoc/informative-docs": [
                "error", {
                    "aliases": {
                        "a": ["an", "our"]
                    },
                    "excludedTags": [],
                    "uselessWords": ["a", "an", "i", "in", "of", "s", "the"],
                },
            ],
            "jsdoc/lines-before-block": [
                "error", {
                    "checkBlockStarts": true,
                    "excludedTags": ["type"],
                    "ignoreSameLine": false,
                    "lines": 2,
                },
            ],
            "jsdoc/match-description": [
                "error",
            ],
            "jsdoc/match-name": [
                "error", {
                    "match": [],
                },
            ],
            "jsdoc/multiline-blocks": [
                "error", {
                    "allowMultipleTags": true,
                    "minimumLengthForMultiline": 30,
                    "multilineTags": ["*"],
                    "noFinalLineText": true,
                    "noSingleLineBlocks": false,
                    "noZeroLineText": true,
                    "requireSingleLineUnderCount": 40,
                    "singleLineTags": ["lends", "type"],
                },
            ],
            "jsdoc/no-bad-blocks": [
                "error", {
                    "ignore": ["ts-check", "ts-expect-error", "ts-ignore", "ts-nocheck"],
                    "preventAllMultiAsteriskBlocks": true,
                },
            ],
            "jsdoc/no-blank-block-descriptions": [
                "error",
            ],
            "jsdoc/no-blank-blocks": [
                "error", {
                    "enableFixer": true,
                },
            ],
            "jsdoc/no-defaults": [
                "error", {
                    "contexts":["any"],
                    "noOptionalParamNames": true,
                },
            ],
            "jsdoc/no-missing-syntax": [
                "error", {
                    "contexts": ["any"],
                },
            ],
            "jsdoc/no-multi-asterisks": [
                "error", {
                    "allowWhitespace": true,
                    "preventAtEnd": true,
                    "preventAtMiddleLines": true,
                },
            ],
            "jsdoc/no-restricted-syntax": [
                "error", {
                    "contexts": ["any"],
                },
            ],
            "jsdoc/no-types": [
                "error", {
                    "contexts": ["any"],
                },
            ],
            "jsdoc/no-undefined-types": [
                "error", {
                    "checkUsedTypedefs": true,
                    "definedTypes": [],
                    "disableReporting": false,
                    "markVariablesAsUsed": false,
                },
            ],
            "jsdoc/prefer-import-tag": [
                "error", {
                    "enableFixer": true,
                    "exemptTypedefs": true,
                    "outputType": "named-import",
                },
            ],
            "jsdoc/reject-any-type": [
                "error",
            ],
            "jsdoc/reject-function-type": [
                "error",
            ],
            "jsdoc/require-asterisk-prefix": [
                "error", "always",
            ],
            "jsdoc/require-description-complete-sentence": [
                "error", {
                    "abbreviations": [],
                    "newlineBeforeCapsAssumesBadSentenceEnd": false,
                    "tags": [],
                },
            ],
            "jsdoc/require-description": [
                "error", {
                    "checkConstructors": true,
                    "checkGetters": true,
                    "checkSetters": true,
                    "descriptionStyle": "body",
                    "exemptedBy": [],
                    "contexts":["any"],
                },
            ],
            "jsdoc/require-example": [
                "error", {
                    "checkConstructors": true,
                    "checkGetters": true,
                    "checkSetters": true,
                    "enableFixer": true,
                    "exemptedBy": [],
                    "exemptNoArguments": false,
                    "contexts":["any"],
                },
            ],
            "jsdoc/require-file-overview": [
                "error", {
                    "tags": {
                        "file": {
                            "initialCommentsOnly": true,
                            "mustExist": true,
                            "preventDuplicates": true,
                        },
                    },
                },
            ],
            "jsdoc/require-hyphen-before-param-description": [
                "error", "always", {
                    "tags": {
                        "*": "always",
                    },
                },
            ],
            "jsdoc/require-jsdoc": [
                "error", {
                    "checkConstructors": true,
                    "checkGetters": true,
                    "checkSetters": true,
                    "contexts":["any"],
                    "enableFixer": true,
                    "exemptEmptyConstructors": true,
                    "exemptEmptyFunctions": false,
                    "exemptOverloadedImplementations": false,
                    "fixerMessage": "Automatic JSdoc",
                    "minLineCount": undefined,
                    "publicOnly": {
                        "ancestorsOnly": false,
                        "esm": true,
                        "cjs": true,
                        "window": true,
                    },
                    "require": {
                        "ArrowFunctionExpression": true,
                        "ClassDeclaration": true,
                        "ClassExpression": true,
                        "FunctionDeclaration": true,
                        "FunctionExpression": true,
                        "MethodDefinition": true,
                        "skipInterveningOverloadedDeclarations": false,
                    },
                },
            ],
            "jsdoc/require-next-description": [
                "error",
            ],
            "jsdoc/require-next-type": [
                "error",
            ],
            "jsdoc/require-param-description": [
                "error", {
                    "contexts":["any"],
                    "defaultDestructuredRootDescription": "The root object",
                    "setDefaultDestructuredRootDescription": false,
                },
            ],
		},
	},
];
