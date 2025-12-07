export default [
	{
		rules: {
			"perfectionist/sort-array-includes": [
				"error", {
					type: 'natural',
					order: 'asc',
					fallbackSort: {
						type: 'unsorted',
						order: 'asc',
					},
					alphabet: '',
					ignoreCase: false,
					specialCharacters: 'keep',
					local: 'en-US',
					partitionByComment: false,
					partitionByNewLine: false,
					newlinesBetween: 0,
					useConfigurationIf: {
						allNamesMatchPattern: '',
					},
					groups: [],
					customGroups: [],
				},
			],
		},
	},
];
