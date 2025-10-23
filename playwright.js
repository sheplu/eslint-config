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
        },
    },
];