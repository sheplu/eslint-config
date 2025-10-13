export default [
	{
		rules: {
			"@typescript-eslint/adjacent-overload-signatures": [
				"error",
			],
			"@typescript-eslint/array-type": [
				"error", {
					"default": "generic",
					"readOnly": "generic",
				},
			],
			"@typescript-eslint/await-thenable": [
				"error",
			],
			"@typescript-eslint/ban-ts-comment": [
				"error",
			],
			"@typescript-eslint/ban-tslint-comment": [
				"error",
			],
			"@typescript-eslint/class-literal-property-style": [
				"error",
			],
			"@typescript-eslint/class-methods-use-this": [
				"error",
			],
			"@typescript-eslint/consistent-generic-constructors": [
				"error",
			],
			"@typescript-eslint/consistent-indexed-object-style": [
				"error",
			],
			"@typescript-eslint/consistent-return": [
				"error",
			],
			"@typescript-eslint/consistent-type-assertions": [
				"error", {
					"assertionStyle": "as",
					"objectLiteralTypeAssertions": "allow",
					"arrayLiteralTypeAssertions": "allow",
				},
			],
			"@typescript-eslint/consistent-type-definitions": [
				"error", "interface",
			],
			"@typescript-eslint/consistent-type-exports": [
				"error", {
					"fixMixedExportsWithInlineTypeSpecifier": false,
				},
			],
			"@typescript-eslint/consistent-type-imports": [
				"error", {
					"prefer": "type-imports",
					"fixStyle": "separate-type-imports",
					"disallowTypeAnnotations": true,
				},
			],
			"@typescript-eslint/default-param-last": [
				"error",
			],
			"@typescript-eslint/dot-notation": [
				"error", {
					"allowPrivateClassPropertyAccess": false,
					"allowProtectedClassPropertyAccess": false,
					"allowIndexSignaturePropertyAccess": false,
				},
			],
			"@typescript-eslint/explicit-function-return-type": [
				"error", {
					"allowConciseArrowFunctionExpressionsStartingWithVoid": false,
					"allowDirectConstAssertionInArrowFunctions": true,
					"allowedNames": [],
					"allowExpressions": false,
					"allowFunctionsWithoutTypeParameters": false,
					"allowHigherOrderFunctions": true,
					"allowIIFEs": false,
					"allowTypedFunctionExpressions": true,
				},
			],
			"@typescript-eslint/explicit-member-accessibility": [
				"error", {
					"accessibility": "explicit",
					"overrides": {
						"accessors": "explicit",
						"constructors": "no-public",
						"methods": "explicit",
						"properties": "off",
						"parameterProperties": "explicit",
					},
				},
			],
			"@typescript-eslint/explicit-module-boundary-types": [
				"error", {
					"allowArgumentsExplicitlyTypedAsAny": false,
					"allowDirectConstAssertionInArrowFunctions": true,
					"allowedNames": [],
					"allowHigherOrderFunctions": true,
					"allowOverloadFunctions": false,
					"allowTypedFunctionExpressions": true,
				},
			],
			"@typescript-eslint/init-declarations": [
				"error", "always",
			],
			"@typescript-eslint/max-params": [
				"error", {
					"max": 4,
					"countVoidThis": true,
				},
			],
			"@typescript-eslint/member-ordering": [
				"error",
			],
			"@typescript-eslint/naming-convention": [
				"error",
			],
			"@typescript-eslint/no-array-constructor": [
				"error",
			],
			"@typescript-eslint/no-array-delete": [
				"error",
			],
			"@typescript-eslint/no-base-to-string": [
				"error", {
					"checkUnknown": true,
					"ignoredTypeNames": ['Error',],
				},
			],
			"@typescript-eslint/no-confusing-non-null-assertion": [
				"error",
			],
			"@typescript-eslint/no-confusing-void-expression": [
				"error", {
					"ignoreArrowShorthand": false,
					"ignoreVoidOperator": false,
					"ignoreVoidReturningFunctions": false,
				},
			],
			"@typescript-eslint/no-deprecated": [
				"error", {
					"allow": [],
				},
			],
			"@typescript-eslint/no-dupe-class-members": [
				"error",
			],
			"@typescript-eslint/no-duplicate-enum-values": [
				"error",
			],
			"@typescript-eslint/no-duplicate-type-constituents": [
				"error", {
					"ignoreIntersections": false,
					"ignoreUnions": false,
				},
			],
			"@typescript-eslint/no-dynamic-delete": [
				"error",
			],
			"@typescript-eslint/no-empty-function": [
				"error", {
					"allow": [],
				},
			],
			"@typescript-eslint/no-empty-object-type": [
				"error", { 
					"allowInterfaces": 'never',
					"allowObjectTypes": 'never',
				},
			],
			"@typescript-eslint/no-explicit-any": [
				"error", {
					"fixToUnknown": false,
					"ignoreRestArgs": false,
				},
			],
			"@typescript-eslint/no-extra-non-null-assertion": [
				"error",
			],
			"@typescript-eslint/no-extraneous-class": [
				"error", {
					"allowConstructorOnly": false,
					"allowEmpty": false,
					"allowStaticOnly": false,
					"allowWithDecorator": false,
				},
			],
			"@typescript-eslint/no-floating-promises": [
				"error", {
					"allowForKnownSafeCalls": [],
					"allowForKnownSafePromises": [],
					"checkThenables": true,
					"ignoreIIFE": false,
					"ignoreVoid": false,
				},
			],
			"@typescript-eslint/no-for-in-array": [
				"error",
			],
			"@typescript-eslint/no-implied-eval": [
				"error",
			],
			"@typescript-eslint/no-import-type-side-effects": [
				"error",
			],
			"@typescript-eslint/no-inferrable-types": [
				"error", {
					"ignoreParameters": false,
					"ignoreProperties": false,
				},
			],
			"@typescript-eslint/no-invalid-this": [
				"error", {
					"capIsConstructor": true,
				},
			],
			"@typescript-eslint/no-invalid-void-type": [
				"error", {
					"allowAsThisParameter": false,
					"allowInGenericTypeArguments": false,
				},
			],
			"@typescript-eslint/no-loop-func": [
				"error",
			],
			"@typescript-eslint/no-magic-numbers": [
				"error", {
					"ignore": [],
					"ignoreArrayIndexes": false,
					"ignoreDefaultValues": false,
					"ignoreClassFieldInitialValues": false,
					"enforceConst": true,
					"detectObjects": true,
					"ignoreEnums": false,
					"ignoreNumericLiteralTypes": false,
					"ignoreReadonlyClassProperties": false,
					"ignoreTypeIndexes": false,
					"ignoreEnums": false,
					"ignoreNumericLiteralTypes": false,
					"ignoreReadonlyClassProperties": false,
					"ignoreTypeIndexes": false,
				},
			],
			"@typescript-eslint/no-meaningless-void-operator": [
				"error", {
					"checkNever": false,
				},
			],
			"@typescript-eslint/no-misused-new": [
				"error",
			],
			"@typescript-eslint/no-misused-promises": [
				"error", {
					"checksConditionals": true,
					"checksSpreads": true,
					"checksVoidReturn": {
						"arguments": true,
						"attributes": true,
						"inheritedMethods": true,
						"properties": true,
						"returns": true,
						"variables": true,
					},
				},
			],
			"@typescript-eslint/no-misused-spread": [
				"error", {
					"allow": [],
				},
			],
			"@typescript-eslint/no-mixed-enums": [
				"error",
			],
			"@typescript-eslint/no-namespace": [
				"error", {
					"allowDeclarations": false,
					"allowDefinitionFiles": true,
				},
			],
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": [
				"error",
			],
			"@typescript-eslint/no-non-null-asserted-optional-chain": [
				"error",
			],
			"@typescript-eslint/no-non-null-assertion": [
				"error",
			],
			"@typescript-eslint/no-redeclare": [
				"error", {
					"builtinGlobals": true,
					"ignoreDeclarationMerge": false,
				},
			],
			"@typescript-eslint/no-redundant-type-constituents": [
				"error",
			],
			"@typescript-eslint/no-require-imports": [
				"error", {
					"allow": [],
					"allowAsImport": [],
				},
			],
			"@typescript-eslint/no-restricted-imports": [
				"error",
			],
			"@typescript-eslint/no-restricted-types": [
				"error", {
					"types": [],
				},
			],
			"@typescript-eslint/no-shadow": [
				"error", {
					"builtinGlobals": true,
					"hoist": "all",
					"allow": [],
					"ignoreOnInitialization": false,
					"ignoreTypeValueShadow": false,
					"ignoreFunctionTypeParameterNameValueShadow": false,
				},
			],
		},
	},
];
