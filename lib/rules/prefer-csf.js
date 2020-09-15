const errorMessage = `Prefer the CSF format. See: https://storybook.js.org/docs/react/api/csf`;

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: errorMessage,
            category: "Best Practices",
            recommended: false,
        },
        fixable: null,
        schema: [],
    },

    create: function (context) {
        return {
            ExpressionStatement(node) {
                if (node.expression.callee.name === "storiesOf") {
                    context.report({
                        node,
                        message: errorMessage,
                    });
                }
            },
        };
    },
};
