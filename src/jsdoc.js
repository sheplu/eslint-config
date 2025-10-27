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
		},
	},
];
