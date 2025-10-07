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
            "@typescript-eslint/await-thenable": [
                "error",
            ],
            "@typescript-eslint/ban-ts-comment": [
                "error",
            ],
            "@typescript-eslint/ban-tslint-comment": [
                "error",
            ],
        },
    },
];
