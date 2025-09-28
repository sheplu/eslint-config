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
            "react/checked-requires-onchange-or-readonly": [
                "error", {
                    "ignoreMissingProperties": false,
                    "ignoreExclusiveCheckedAttribute": false,
                },
            ],
            "react/default-props-match-prop-types": [
                "error", {
                    "allowRequiredDefaults": false,
                },
            ],
            "react/destructuring-assignment": [
                "error", {
                    "ignoreClassFields": false,
                    "destructureInSignature": true,
                },
            ],
            "react/display-name": [
                "error", {
                    "ignoreTranspilerName": true,
                    "checkContextObjects": true,
                },
            ],
            "react/forbid-component-props": [
                "error", {
                    "forbid": ['className', 'style'],
                },
            ],
            "react/forbid-dom-props": [
                "error", {
                    "forbid": [],
                },
            ],
            "react/forbid-elements": [
                "error", {
                    "forbid": [],
                },
            ],
            "react/forbid-foreign-prop-types": [
                "error", {
                    "allowInPropTypes": [false],
                },
            ],
            "react/forbid-prop-types": [
                "error", {
                    "forbid": ['any', 'array', 'object'],
                    "checkContextTypes": true,
                    "checkChildContextTypes": true,
                },
            ],
            "react/forward-ref-uses-ref": [
                "error",
            ],
            "react/function-component-definition": [
                "error", {
                    "namedComponents": "function-declaration",
                    "unnamedComponents": "function-expression",
                },
            ],
            "react/hook-use-state": [
                "error", {
                    "allowDestructuredState": false,
                },
            ],
            "react/iframe-missing-sandbox": [
                "error",
            ],
            "react/jsx-boolean-value": [
                "error", "always", {
                    "never": [],
                },
            ],
        },
    },
];
