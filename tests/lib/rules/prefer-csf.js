const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/prefer-csf");

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
});

ruleTester.run("prefer-csf", rule, {
    valid: [
        // give me some code that won't trigger a warning
        {
            code: `export const Comp = () => (<div>my component</div>);`,
        },
    ],

    invalid: [
        {
            code: `storiesOf("someStory", module)`,
            errors: [
                {
                    message: rule.meta.docs.description,
                },
            ],
        },
    ],
});
