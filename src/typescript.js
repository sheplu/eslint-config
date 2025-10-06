export default [
    {
        rules: {
            "typescript-eslint/adjacent-overload-signatures": [
                "error",
            ],
            "@typescript-eslint/array-type": [
                "error", {
                    "default": "generic",
                    "readOnly": "generic",
                },
            ],
        },
    },
];
