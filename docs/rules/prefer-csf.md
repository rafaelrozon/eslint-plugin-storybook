# Prefer Component Story Format (prefer-csf)

Display lint message when storiesOf API is used instead of the Component Story Format.

## Rule Details

Examples of **incorrect** code for this rule:

```js

storiesOf("MyComponentStories", module).add(...)

```

Examples of **correct** code for this rule:

```js

export const MyComponentStories = () => { /*... */ }

```

See [Component Story Format documentation](https://storybook.js.org/docs/react/api/csf) for the new API for writing stories.


## When Not To Use It

When Storybook versions equals or lower than 5 are used.
