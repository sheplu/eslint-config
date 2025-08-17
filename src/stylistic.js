export default [
	{
		rules: {
			"@stylistic/array-bracket-newline": [
				"error", {
					"multiline": true,
					"minItems": 3,
				},
			],
			"@stylistic/array-bracket-spacing": [
				"error", "always", {
					"singleValue": true,
					"objectsInArrays": true,
					"arraysInArrays": true,
				},
			],
			"@stylistic/array-element-newline": [
				"error", {
					"consistent": true,
					"multiline": true,
					"minItems": 3,
				},
			],
			"@stylistic/arrow-parens": [
				"error", "always", {
					"requireForBlockBody": true,
				},
			],
			"@stylistic/arrow-spacing": [
				"error", {
					"before": true,
					"after": true,
				},
			],
			"@stylistic/block-spacing": [
				"error", "always",
			],
			"@stylistic/brace-style": [
				"error", "stroustrup", {
					"allowSingleLine": false
				},
			],
		},
	},
];
