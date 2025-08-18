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
				"error", "1tbs", {
					"allowSingleLine": false
				},
			],
			"@stylistic/comma-dangle": [
				"error", {
					"arrays": "always-multiline",
					"objects": "always-multiline",
					"imports": "always-multiline",
					"exports": "always-multiline",
					"functions": "always-multiline",
					"importAttributes": "always-multiline",
					"dynamicImports": "always-multiline",
					"enums": "always-multiline",
					"generics": "always-multiline",
					"tuples": "always-multiline",
				},
			],
			"@stylistic/comma-spacing": [
				"error", {
					"before": false,
					"after": true,
				},
			],
			"@stylistic/comma-style": [
				"error", "last", {
					"exceptions": {
						"ArrayExpression": false,
						"ArrayPattern": false,
						"ArrowFunctionExpression": false,
						"CallExpression": false,
						"FunctionDeclaration": false,
						"FunctionExpression": false,
						"ImportDeclaration": false,
						"ObjectExpression": false,
						"ObjectPattern": false,
						"VariableDeclaration": false,
						"NewExpression": false,
						"ExportAllDeclaration": false,
						"ExportNamedDeclaration": false,
						"ImportExpression": false,
						"SequenceExpression": false,
						"ClassDeclaration": false,
						"ClassExpression": false,
						"TSDeclareFunction": false,
						"TSFunctionType": false,
						"TSConstructorType": false,
						"TSEmptyBodyFunctionExpression": false,
						"TSMethodSignature": false,
						"TSCallSignatureDeclaration": false,
						"TSConstructSignatureDeclaration": false,
						"TSEnumBody": false,
						"TSTypeLiteral": false,
						"TSInterfaceBody": false,
						"TSIndexSignature": false,
						"TSInterfaceDeclaration": false,
						"TSTypeParameterDeclaration": false,
						"ArrayExpression": false,
						"TSTypeParameterInstantiation": false,
					},
				},
			],
			"@stylistic/computed-property-spacing": [
				"error", "never", {
					"enforceForClassMembers": true,
				},
			],
			"@stylistic/curly-newline": [
				"error", {
					"IfStatementConsequent": "always",
					"IfStatementAlternative": "always",
					"ForStatement": "always",
					"ForInStatement": "always",
					"ForOfStatement": "always",
					"WhileStatement": "always",
					"DoWhileStatement": "always",
					"SwitchStatement": "always",
					"SwitchCase": "always",
					"TryStatementBlock": "always",
					"TryStatementHandler": "always",
					"TryStatementFinalizer": "always",
					"BlockStatement": "always",
					"FunctionDeclaration": "always",
					"FunctionExpression": "always",
					"Property": "always",
					"ClassBody": "always",
					"StaticBlock": "always",
					"WithStatement": "always",
					"TSModuleBlock": "always",
				},
			],
			"@stylistic/dot-location": [
				"error", "property",
			],
			"@stylistic/eol-last": [
				"error", "always",
			],
			"@stylistic/function-call-argument-newline": [
				"error", "consistent",
			],
			"@stylistic/function-call-spacing": [
				"error", "never",
			],
			"@stylistic/function-paren-newline": [
				"error", "multiline",
			],
		},
	},
];
