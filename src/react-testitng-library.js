export default [
	{
		rules: {
			"testing-library/await-async-events": [
				"error", {
					"eventModule": ["fireEvent", "userEvent"],
				},
			],
		},
	},
];
