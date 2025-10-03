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
			"react/jsx-max-props-per-line": [
				"error", {
					"maximum": {
						"single": 1,
						"multi": 1,
					},
				},
			],
			"react/jsx-newline": [
				"error", {
					"prevent": false,
					"allowMultilines": false,
				},
			],
			"react/jsx-no-bind": [
				"error", {
					"ignoreDOMComponents": false,
					"ignoreRefs": false,
					"allowArrowFunctions": false,
					"allowFunctions": false,
					"allowBind": false,
				},
			],
			"react/jsx-no-comment-textnodes": [
				"error",
			],
			"react/jsx-no-constructed-context-values": [
				"error",
			],
			"react/jsx-no-duplicate-props": [
				"error", {
					"ignoreCase": true,
				},
			],
			"react/jsx-no-leaked-render": [
				"error", {
					"validStrategies": ["ternary"],
				},
			],
			"react/jsx-no-literals": [
				"error", 
			],
			"react/jsx-no-script-url": [
				"error", [], {
					"includeFromSettings": true,
				},
			],
			"react/jsx-no-target-blank": [
				"error", {
					"allowReferrer": false,
					"enforceDynamicLinks": true,
					"warnOnSpreadAttributes": true,
					"links": true,
					"forms": true,
				},
			],
			"react/jsx-no-undef": [
				"error", {
					"allowGlobals": true,
				},
			],
			"react/jsx-no-useless-fragment": [
				"error", {
					"allowExpressions": false,
				},
			],
			"react/jsx-one-expression-per-line": [
				"error", {
					"allow": "none",
				},
			],
			"react/jsx-pascal-case": [
				"error", {
					"allowAllCaps": false,
					"allowLeadingUnderscore": false,
					"allowNamespace": false,
					"ignore": [],
				},
			],
			"react/jsx-props-no-multi-spaces": [
				"error", 
			],
			"react/jsx-props-no-spread-multi": [
				"error",
			],
			"react/jsx-props-no-spreading": [
				"error", {
					"html": "enforce",
					"custom": "enforce",
					"explicitSpread": "enforce",
					"exceptions": [],
				},
			],
			"react/jsx-sort-props": [
				"error", {
					"ignoreCase": false,
					"callbacksLast": true,
					"shorthandFirst": false,
					"shorthandLast": true,
					"multiline": "last",
					"noSortAlphabetically": false,
					"reservedFirst": true,
					"locale": "auto",
				},
			],
			"react/jsx-tag-spacing": [
				"error", {
					"closingSlash": "never",
					"beforeSelfClosing": "always",
					"afterOpening": "never",
					"beforeClosing": "never",
				},
			],
			"react/jsx-uses-react": [
				"error",
			],
			"react/react/jsx-uses-vars": [
				"error",
			],
			"react/jsx-wrap-multilines": [
				"error", {
					"declaration": "parens",
					"assignment": "parens",
					"return": "parens",
					"arrow": "parens",
					"condition": "ignore",
					"logical": "ignore",
					"prop": "ignore",
				},
			],
			"react/no-access-state-in-setstate": [
				"error",
			],
			"react/no-adjacent-inline-elements": [
				"error",
			],
			"react/no-array-index-key": [
				"error",
			],
			"react/no-arrow-function-lifecycle": [
				"error",
			],
			"react/no-children-prop": [
				"error",
			],
			"react/no-danger-with-children": [
				"error",
			],
			"react/no-danger": [
				"error", {
					"customComponentNames": [],
				},
			],
			"react/no-deprecated": [
				"error",
			],
			"react/no-did-mount-set-state": [
				"error", "disallow-in-func",
			],
			"react/no-did-update-set-state": [
				"error", "disallow-in-func",
			],
			"react/no-direct-mutation-state": [
				"error",
			],
			"react/no-find-dom-node": [
				"error",
			],
			"react/no-invalid-html-attribute": [
				"error",
			],
			"react/no-is-mounted": [
				"error",
			],
			"react/no-multi-comp": [
				"error", {
					"ignoreStateless": false,
				},
			],
			"react/no-namespace": [
				"error",
			],
		},
	},
];
