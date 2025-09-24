export default [
    {
        rules: {
            "markdown/fenced-code-language": [
                "error", {
                    "required": [],
                },
            ],
            "markdown/heading-increment": [
                "error", {
                    "frontmatterTitle": "",
                },
            ],
            "markdown/no-bare-urls": [
                "error",
            ],
            "markdown/no-duplicate-definitions": [
                "error", {
                    "allowDefinitions": ["//"],
                    "allowFootnoteDefinitions": [],
                },
            ],
            "markdown/no-duplicate-headings": [
                "error", {
                    "checkSiblingsOnly": false,
                },
            ],
            "markdown/no-empty-definitions": [
                "error", {
                    "allowDefinitions": ["//"],
                    "allowFootnoteDefinitions": ["note"],
                    "checkFootnoteDefinitions": true,
                },
            ],
        },
    },
];
