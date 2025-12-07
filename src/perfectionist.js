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
			"perfectionist/sort-classes": [
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
					locales: 'en-US',
					partitionByComment: false,
					partitionByNewLine: false,
					newlinesBetween: 0,
					ignoreCallbackDependenciesPatterns: [],
					useConfigurationIf: {
						allNamesMatchPattern: '',
					},
					groups: [],
					customGroups: [],
				},
			],
			"perfectionist/sort-decorators": [
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
					locales: 'en-US',
					sortOnClasses: true,
					sortOnMethods: true,
					sortOnProperties: true,
					sortOnAccessors: true,
					sortOnParameters: true,
					partitionByComment: false,
					groups: [],
					customGroups: [],
				},
			]
		},
	},
];
