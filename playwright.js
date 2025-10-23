export default [
    {
        rules: {
            "playwright/expect-expect": [
                "error", {
                    "assertFunctionNames": [],
                },
            ],
            "playwright/max-expects": [
                "error", {
                    "max": 5,
                },
            ],
            "playwright/max-nested-describe": [
                "error", {
                    "max": 3,
                },
            ],
            "playwright/no-commented-out-tests": [
                "error",
            ],
            "playwright/no-conditional-expect": [
                "error",
            ],
            "playwright/no-conditional-in-test": [
                "error",
            ],
            "playwright/no-duplicate-hooks": [
                "error",
            ],
            "playwright/no-element-handle": [
                "error",
            ],
            "platwright/no-eval": [
                "error",
            ],
            "playwright/no-focused-test": [
                "error",
            ],
        },
    },
];