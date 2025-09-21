export default [
    {
        rules: {
            "jsx-a11y/alt-text": [
                "error",
            ],
            "jsx-a11y/anchor-ambiguous-text": [
                "error", {
                    "words": ['click here', 'here', 'link', 'a link', 'learn more'],
                },
            ],
            "jsx-a11y/anchor-has-content": [
                "error", {
                    "components": ["Anchor"],
                },
            ],
            "jsx-a11y/anchor-is-valid": [
                "error", {
                    "components": ["Link"],
                    "specialLink": ["hrefLeft", "hrefRight"],
                    "aspects": ["noHref", "invalidHref", "preferButton"],
                },
            ],
            "jsx-a11y/aria-activedescendant-has-tabindex": [
                "error",
            ],
            "jsx-a11y/aria-props": [
                "error",
            ],
            "jsx-a11y/aria-proptypes": [
                "error",
            ],
            "jsx-a11y/aria-role": [
                "error",
            ],
            "jsx-a11y/aria-unsupported-elements": [
                "error",
            ],
            "jsx-a11y/autocomplete-valid": [
                "error", {
                    "inputComponents": ["Input", "FormField"],
                },
            ],
            "jsx-a11y/click-events-have-key-events": [
                "error",
            ],
        },
    },
];
