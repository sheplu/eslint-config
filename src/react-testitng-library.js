export default [
	{
		rules: {
			"testing-library/await-async-events": [
				"error", {
					"eventModule": ["fireEvent", "userEvent"],
				},
			],
            "testing-library/await-async-queries": [
                "error",
            ],
            "testing-library/await-async-utils": [
                "error",
            ],
            "testing-library/consistent-data-testid": [
                "error", {
                    "testIdPattern": "^TestId(__[A-Z]*)?$",
                    "testIdAttribute": ["data-testid"],
                    "customMessage": "testIdPattern does not match ^TestId(__[A-Z]*)?$ or attribute is not data-testid",
                },
            ],
		},
	},
];
