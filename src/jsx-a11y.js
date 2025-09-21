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
        },
    },
];
