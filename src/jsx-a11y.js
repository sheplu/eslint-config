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
            "jsx-a11y/control-has-associated-label": [
                "error",
            ],
            "jsx-a11y/heading-has-content": [
                "error",
            ],
            "jsx-a11y/html-has-lang": [
                "error",
            ],
            "jsx-a11y/iframe-has-title": [
                "error",
            ],
            "jsx-a11y/img-redundant-alt": [
                "error", {
                    "components": [],
                    "words": [],
                },
            ],
            "jsx-a11y/interactive-supports-focus": [
                "error",
            ],
            "jsx-a11y/label-has-associated-control": [
                "error",
            ],
            "jsx-a11y/lang": [
                "error",
            ],
            "jsx-a11y/media-has-caption": [
                "error",
            ],
            "jsx-a11y/mouse-events-have-key-events": [
                "error",
            ],
            "jsx-a11y/no-access-key": [
                "error",
            ],
        },
    },
];
