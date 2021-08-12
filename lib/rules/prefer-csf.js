const errorMessage = `Please use the CSF format. See: https://storybook.js.org/docs/react/api/csf`;

const isStorybookImport = importNode => {
    return /^@storybook\//.test(importNode.source.value)
};

const hasStoriesOfImport = importNode => {
    return importNode.specifiers.some(specifier => {
        return specifier.imported.name === 'storiesOf';
    });
};

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
            ImportDeclaration(node) {
                if (isStorybookImport(node) && hasStoriesOfImport(node)) {
                    context.report({
                        node,
                        message: errorMessage,
                    });
                }
            },
        };
    },
};
