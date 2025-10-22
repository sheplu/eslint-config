export default [
    {
        rules: {
            "storybook/await-interactions": [
                "error",
            ],
            "storybook/context-in-play-function": [
                "error",
            ],
            "storybook/csf-component": [
                "error",
            ],
            "storybook/default-exports": [
                "error",
            ],
            "storybook/hierarchy-separator": [
                "error",
            ],
            "storybook/meta-inline-properties": [
                "error",
            ],
            "storybook/meta-satisfies-type": [
                "error",
            ],
            "storybook/no-redundant-story-name": [
                "error",
            ],
            "storybook/no-stories-of": [
                "error",
            ],
            "storybook/no-title-property-in-meta": [
                "error",
            ],
            "storybook/no-uninstalled-addons": [
                "error", {
                    "packageJsonLocation": "./package.json",
                    "ignore": [],
                },
            ],
            "storybook/prefer-pascal-case": [
                "error",
            ],
        },
    },
];