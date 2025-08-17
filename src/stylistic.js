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
		},
	},
];
