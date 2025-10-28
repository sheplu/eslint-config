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
		},
	},
];
