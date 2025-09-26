export default [
    {
        rules: {
            "react/boolean-prop-naming": [
                "error", {
                    "propTypeNames": ["bool"],
                    "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
                    "message": "It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})",
                    "validateNested": true,
                },
            ],
            "react/button-has-type": [
                "error", {
                    "button": true,
                    "submit": true,
                    "reset": true,
                },
            ],
        },
    },
];
