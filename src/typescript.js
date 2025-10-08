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
            "@typescript-eslint/class-literal-property-style": [
                "error",
            ],
            "@typescript-eslint/class-methods-use-this": [
                "error",
            ],
            "@typescript-eslint/consistent-generic-constructors": [
                "error", 
            ],
            "@typescript-eslint/consistent-indexed-object-style": [
                "error",
            ],
            "@typescript-eslint/consistent-return": [
                "error",
            ],
            "@typescript-eslint/consistent-type-assertions": [
                "error", {
                    "assertionStyle": "as",
                    "objectLiteralTypeAssertions": "allow",
                    "arrayLiteralTypeAssertions": "allow",
                },
            ],
            "@typescript-eslint/consistent-type-definitions": [
                "error", "interface",
            ],
            "@typescript-eslint/consistent-type-exports": [
                "error", {
                    "fixMixedExportsWithInlineTypeSpecifier": false,
                },
            ],
            "@typescript-eslint/consistent-type-imports": [
                "error", {
                    "prefer": "type-imports",
                    "fixStyle": "separate-type-imports",
                    "disallowTypeAnnotations": true,
                },
            ],
            "@typescript-eslint/default-param-last": [
                "error",
            ],
            "@typescript-eslint/dot-notation": [
                "error", {
                    "allowPrivateClassPropertyAccess": false,
                    "allowProtectedClassPropertyAccess": false,
                    "allowIndexSignaturePropertyAccess": false,
                },
            ],
        },
    },
];
