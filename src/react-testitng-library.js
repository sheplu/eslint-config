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
            "testing-library/no-await-sync-events": [
                "error", {
                    "eventModules": ["fire-event", "user-event"],
                },
            ],
            "testing-library/no-await-sync-queries": [
                "error",
            ],
            "testing-library/no-container": [
                "error",
            ],
            "testing-library/no-debugging-utils": [
                "error",
            ],
            "testing-library/no-dom-import": [
                "error", "react",
            ],
            "testing-library/no-global-regexp-flag-in-query": [
                "error",
            ],
            "testing-library/no-manual-cleanup": [
                "error",
            ],
            "testing-library/no-node-access": [
                "error", {
                    "allowContainerFirstChild": false,
                },
            ],
            "testing-library/no-promise-in-fire-event": [
                "error",
            ],
            "testing-library/no-render-in-lifecycle": [
                "error",
            ],
            "testing-library/no-test-id-queries": [
                "error",
            ],
		},
	},
];
