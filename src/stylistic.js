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
			"@stylistic/generator-star-spacing": [
				"error", {
					"before": true,
					"after": false,
					"anonymous": {
						"before": true,
						"after": false,
					},
					"method": {
						"before": true,
						"after": false,
					},
				},
			],
			"@stylistic/implicit-arrow-linebreak": [
				"error", "beside",
			],
			"@stylistic/indent": [
				"error", "tab",
			],
			"@stylistic/indent-binary-ops": [
				"error", "tab",
			],
			"@stylistic/key-spacing": [
				"error", {
					"singleLine": {
						"beforeColon": false,
						"afterColon": true,
						"mode": "strict",
					},
					"multiLine": {
						"beforeColon": false,
						"afterColon": true,
						"mode": "strict",
					},
				}
			],
			"@stylistic/keyword-spacing": [
				"error", {
					"before": true,
					"after": true,
					"overrides": {
						"accessor": { "after": true, },
						"as": { "after": true, },
						"async": { "after": true, },
						"await": { "after": true, },
						"break": { "after": true, },
						"case": { "after": true, },
						"catch": { "after": true, },
						"class": { "after": true, },
						"const": { "after": true, },
						"debugger": { "after": true, },
						"delete": { "after": true, },
						"do": { "after": true, },
						"else": { "after": true, },
						"export": { "after": true, },
						"extends": { "after": true, },
						"finally": { "after": true, },
						"for": { "after": true, },
						"from": { "after": true, },
						"function": { "after": true, },
						"get": { "after": true, },
						"if": { "after": true, },
						"import": { "after": true, },
						"in": { "after": true, },
						"let": { "after": true, },
						"new": { "after": true, },
						"of": { "after": true, },
						"return": { "after": true, },
						"set": { "after": true, },
						"static": { "after": true, },
						"super": { "after": true, },
						"switch": { "after": true, },
						"this": { "after": true, },
						"throw": { "after": true, },
						"try": { "after": true, },
						"typeof": { "after": true, },
						"using": { "after": true, },
						"var": { "after": true, },
						"void": { "after": true, },
						"while": { "after": true, },
						"with": { "after": true, },
						"yield": { "after": true, },
					},
				},
			],
			"@stylistic/line-comment-position": [
				"error", {
					"position": "above",
					"ignorePattern": "slint",
					"applyDefaultIgnorePatterns": true,
				},
			],
			"@stylistic/linebreak-style": [
				"error", "unix",
			],
			"@stylistic/lines-around-comment": [
				"error", {
					"beforeBlockComment": true,
					"afterBlockComment": false,
					"beforeLineComment": true,
					"afterLineComment": false,
					"allowBlockStart": true,
					"allowBlockEnd": false,
					"allowObjectStart": true,
					"allowObjectEnd": false,
					"allowArrayStart": true,
					"allowArrayEnd": false,
					"allowClassStart": true,
					"allowClassEnd": false,
					"allowEnumStart": true,
					"allowEnumEnd": false,
					"allowInterfaceStart": true,
					"allowInterfaceEnd": false,
					"allowModuleStart": true,
					"allowModuleEnd": false,
					"allowTypeStart": true,
					"allowTypeEnd": false,
					"applyDefaultIgnorePatterns": true,
					"ignorePattern": "slint",
					"afterHashbangComment": true,
				},
			],
			"@stylistic/lines-between-class-members": [
				"error", {
					"enforce": [
						{ blankLine: "always", prev: "*", next: "*" },
						{ blankLine: "always", prev: "method", next: "method" },
						{ blankLine: "always", prev: "field", next: "method" },
						{ blankLine: "never", prev: "field", next: "field" },
					],
				}, {
					"exceptAfterSingleLine": false,
					"exceptAfterOverload": false,
				},
			],
			"@stylistic/max-len": [
				"error", {
					"code": 100,
					"tabWidth": 4,
					"comments": 140,
					"ignoreComments": false,
					"ignoreTrailingComments": false,
					"ignoreUrls": true,
					"ignoreStrings": false,
					"ignoreTemplateLiterals": false,
					"ignoreRegExpLiterals": true,
				},
			],
			"@stylistic/max-statements-per-line": [
				"error", {
					"max": 1,
				},
			],
			"@stylistic/member-delimiter-style": [
				"error", {
					"multiline": {
						"delimiter": "semi",
						"requireLast": true,
					},
					"singleline": {
						"delimiter": "semi",
						"requireLast": true,
					},
					"multilineDetection": "brackets",
				},
			],
			"@stylistic/multiline-comment-style": [
				"error", "starred-block",
			],
			"@stylistic/multiline-ternary": [
				"error", "always", {
					"ignoreJSX": false,
				},
			],
			"@stylistic/new-parens": [
				"error", "always",
			],
			"@stylistic/newline-per-chained-call": [
				"error", {
					"ignoreChainWithDepth": 3,
				},
			],
			"@stylistic/no-confusing-arrow": [
				"error", {
					"allowParens": true,
					"onlyOneSimpleParam": false,
				},
			],
			"@stylistic/no-extra-parens": [
				"error", "all", {
					"conditionalAssign": false,
					"returnAssign": false,
					"nestedBinaryExpressions": false,
					"ternaryOperandBinaryExpressions": false,
					"enforceForArrowConditionals": false,
					"enforceForSequenceExpressions": false,
					"enforceForNewInMemberExpressions": false,
					"enforceForFunctionPrototypeMethods": false,
					"allowParensAfterCommentPattern": "@type",
					"nestedConditionalExpressions": false,
					"allowNodesInSpreadElement": {
						"ConditionalExpression": false,
						"LogicalExpression": false,
						"AwaitExpression": false,
					},
					"ignoreJSX": "none",
				},
			],
			"@stylistic/no-extra-semi": [
				"off",
			],
			"@stylistic/no-floating-decimal": [
				"error",
			],
			"@stylistic/no-mixed-operators": [
				"error", {
					"allowSamePrecedence": true,
					"groups": [
						["+", "-", "*", "/", "%", "**"],
						["&", "|", "^", "~", "<<", ">>", ">>>"],
						["==", "!=", "===", "!==", ">", ">=", "<", "<="],
						["&&", "||"],
						["in", "instanceof"],
					],
				},
			],
			"@stylistic/no-mixed-spaces-and-tabs": [
				"error",
			],
			"@stylistic/no-multi-spaces": [
				"error", {
					"ignoreEOLComments": false,
					"includeTabs": true,
				},
			],
			"@stylistic/no-multiple-empty-lines": [
				"error", {
					"max": 1,
					"maxBOF": 0,
					"maxEOF": 0,
				},
			],
			"@stylistic/no-tabs": [
				"error", {
					allowIndentationTabs: true,
				},
			],
			"@stylistic/no-trailing-spaces": [
				"error", {
					"skipBlankLines": false,
					"ignoreComments": false,
				},
			],
			"@stylistic/no-whitespace-before-property": [
				"error",
			],
			"@stylistic/nonblock-statement-body-position": [
				"error", "beside",
			],
			"@stylistic/object-curly-newline": [
				"error", {
					"ObjectExpression": {
						"multiline": true,
						"minProperties": 3,
						"consistent": true,
					},
					"ObjectPattern": {
						"multiline": true,
						"minProperties": 3,
						"consistent": true,
					},
					"ImportDeclaration": {
						"multiline": true,
						"minProperties": 3,
						"consistent": true,
					},
					"ExportDeclaration": {
						"multiline": true,
						"minProperties": 3,
						"consistent": true,
					},
					"TSTypeLiteral": {
						"multiline": true,
						"minProperties": 3,
						"consistent": true,
					},
					"TSInterfaceBody": {
						"multiline": true,
						"minProperties": 3,
						"consistent": true,
					},
					"TSEnumBody": {
						"multiline": true,
						"minProperties": 3,
						"consistent": true,
					},
				},
			],
			"@stylistic/object-curly-spacing": [
				"error", "always", {
					"arraysInObjects": true,
					"objectsInObjects": true,
				},
			],
			"@stylistic/object-property-newline": [
				"error", {
					"allowAllPropertiesOnSameLine": true,

				}
			],
			"@stylistic/one-var-declaration-per-line": [
				"error", "initializations",
			],
			"@stylistic/operator-linebreak": [
				"error", "after",
			],
			"@stylistic/padded-blocks": [
				"error", {
					"blocks": "never",
					"classes": "never",
					"switches": "never",
				},
			],
			"@stylistic/padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "directive", next: "*" },
				{ blankLine: "any", prev: "directive", next: "directive" },
				{ blankLine: "always", prev: ["const", "let", "var"], next: "*" },
				{ blankLine: "any", prev: [ "const", "let", "var" ], next: [ "const", "let", "var" ] },
				{ blankLine: "always", prev: "*", next: "return" },
				{ blankLine: "always", prev: "*", next: "cjs-export" },
				{ blankLine: "always", prev: "cjs-import", next: "*" },
				{ blankLine: "never", prev: "cjs-import", next: "cjs-import" },
				{ blankLine: "always", prev: "*", next: "function" },
				{ blankLine: "always", prev: "import", next: "*" },
				{ blankLine: "never", prev: "*", next: "import" },
			],
			"@stylistic/quote-props": [
				"error", "consistent-as-needed", {
					"keywords": true,
					"unnecessary": true,
					"numbers": true,
				},
			],
			"@stylistic/quotes": [
				"error", "single", {
					"avoidEscape": true,
					"allowTemplateLiterals": "avoidEscape",
					"ignoreStringLiterals": false,
				},
			],
			"@stylistic/rest-spread-spacing": [
				"error", "never",
			],
			"@stylistic/semi": [
				"error", "always", {
					"omitLastInOneLineBlock": false,
					"omitLastInOneLineClassBody": false,
				},
			],
			"@stylistic/semi-spacing": [
				"error", {
					"before": false,
					"after": true,
				},
			],
			"@stylistic/semi-style": [
				"error",
				"last",
			],
			"@stylistic/space-before-blocks": [
				"error", { 
					"functions": "always",
					"keywords": "always",
					"classes": "always",
					"modules": "always",
				},
			],
			"@stylistic/space-before-function-paren": [
				"error", {
					"anonymous": "always",
					"named": "never",
					"asyncArrow": "always",
					"catch": "always",
				},
			],
			"@stylistic/space-in-parens": [
				"error", "never", {
					"exceptions": [],
				},
			],
			"@stylistic/space-infix-ops": [
				"error", {
					"int32Hint": false,
					"ignoreTypes": false,
				},
			],
			"@stylistic/space-unary-ops": [
				"error", {
					"words": true,
					"nonwords": false,
					"overrides": {
						"new": true,
						"delete": true,
						"typeof": true,
						"void": true,
						"yield": true,
						"-": true,
						"+": true,
						"--": false,
						"++": false,
						"|": true,
						"||": true,
					},
				},
			],
			"@stylistic/spaced-comment": [
				"error", "always", {
					"line": {
						"exceptions": [],
						"markers": [],
					},
					"block": {
						"exceptions": [],
						"markers": [],
						"balanced": true,
					},
				},
			],
			"@stylistic/switch-colon-spacing": [
				"error", {
					"after": true,
					"before": false,
				},
			],
			"@stylistic/template-curly-spacing": [
				"error", "never",
			],
			"@stylistic/template-tag-spacing": [
				"error", "never",
			],
			"@stylistic/type-annotation-spacing": [
				"error", { 
					"before": false,
					"after": true,
					"overrides": {
						"colon": { "before": false, "after": true },
						"arrow": { "before": true, "after": true },
					},
				},
			],
			"@stylistic/type-generic-spacing": [
				"error",
			],
			"@stylistic/type-named-tuple-spacing": [
				"error",
			],
			"@stylistic/wrap-iife": [
				"error", "outside",
			],
			"@stylistic/wrap-regex": [
				"error",
			],
			"@stylistic/yield-star-spacing": [
				"error", {
					"before": false,
					"after": true,
				},
			],
		},
	},
];
