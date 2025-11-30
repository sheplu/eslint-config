export default [
    {
        rules: {
            "json/no-duplicate-keys": [
                "error",
            ],
            "json/no-empty-keys": [
                "error",
            ],
            "json/no-unnormalized-keys": [
                "error", {
                    "form": "NFC",
                },
            ],
            "json/no-unsafe-values": [
                "error",
            ],
        },
    },
];