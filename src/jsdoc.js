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
		},
	},
];
