export default [
	{
		rules: {
			"react/boolean-prop-naming": [
				"error", {
					"propTypeNames": ["bool"],
					"rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
					"message": "It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})",
					"validateNested": true,
				},
			],
			"react/button-has-type": [
				"error", {
					"button": true,
					"submit": true,
					"reset": true,
				},
			],
			"react/checked-requires-onchange-or-readonly": [
				"error", {
					"ignoreMissingProperties": false,
					"ignoreExclusiveCheckedAttribute": false,
				},
			],
			"react/default-props-match-prop-types": [
				"error", {
					"allowRequiredDefaults": false,
				},
			],
			"react/destructuring-assignment": [
				"error", {
					"ignoreClassFields": false,
					"destructureInSignature": true,
				},
			],
			"react/display-name": [
				"error", {
					"ignoreTranspilerName": true,
					"checkContextObjects": true,
				},
			],
			"react/forbid-component-props": [
				"error", {
					"forbid": ['className', 'style'],
				},
			],
			"react/forbid-dom-props": [
				"error", {
					"forbid": [],
				},
			],
			"react/forbid-elements": [
				"error", {
					"forbid": [],
				},
			],
			"react/forbid-foreign-prop-types": [
				"error", {
					"allowInPropTypes": [false],
				},
			],
			"react/forbid-prop-types": [
				"error", {
					"forbid": ['any', 'array', 'object'],
					"checkContextTypes": true,
					"checkChildContextTypes": true,
				},
			],
			"react/forward-ref-uses-ref": [
				"error",
			],
			"react/function-component-definition": [
				"error", {
					"namedComponents": "function-declaration",
					"unnamedComponents": "function-expression",
				},
			],
			"react/hook-use-state": [
				"error", {
					"allowDestructuredState": false,
				},
			],
			"react/iframe-missing-sandbox": [
				"error",
			],
			"react/jsx-boolean-value": [
				"error", "always", {
					"never": [],
				},
			],
			"react/jsx-child-element-spacing": [
				"error",
			],
			"react/jsx-closing-bracket-location": [
				"error", {
					"nonEmpty": "line-aligned",
					"selfClosing": "line-aligned",
				},
			],
			"react/jsx-closing-tag-location": [
				"error", "line-aligned",
			],
			"react/jsx-curly-brace-presence": [
				"error", {
					"props": "always",
					"children": "always",
					"propElementValues": "always",
				},
			],
			"react/jsx-curly-newline": [
				"error", {
					"multiline": "consistent",
					"singleline": "consistent",
				},
			],
			"react/jsx-curly-spacing": [
				"error", {
					"when": "always",
				},
			],
			"react/jsx-equals-spacing": [
				"error", "never",
			],
			"react/jsx-filename-extension": [
				"error", {
					"allow": "always",
					"extensions": [".jsx", ".tsx"],
					"ignoreFilesWithoutCode": false,
				},
			],
			"react/jsx-first-prop-new-line": [
				"error", "multiline-multiprop",
			],
			"react/jsx-fragments": [
				"error", "element",
			],
			"react/jsx-handler-names": [
				"error", {
					"eventHandlerPrefix": "handle",
					"eventHandlerPropPrefix": "on",
					"checkLocalVariables": true,
					"checkInlineFunction": true,
					"ignoreComponentNames": [],
				},
			],
			"react/jsx-indent-props": [
				"error", {
					"indentMode": "tab",
					"ignoreTernaryOperator": false,
				},
			],
			"react/jsx-indent": [
				"error", "tab", {
					"checkAttributes": true,
					"indentLogicalExpressions": true,
				},
			],
			"react/jsx-key": [
				"error", {
					"checkFragmentShorthand": true,
					"checkKeyMustBeforeSpread": true,
					"warnOnDuplicates": true,
				},
			],
			"react/jsx-max-depth": [
				"error", {
					"max": 5,
				},
			],
		},
	},
];
