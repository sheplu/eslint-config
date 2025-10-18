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
		},
	},
];
