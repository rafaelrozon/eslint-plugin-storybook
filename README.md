# eslint-plugin-storybook

Eslint rules for Storybook Best Practices 

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-storybook`:

```
$ npm install eslint-plugin-storybook --save-dev
```


## Usage

Add `storybook` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "storybook"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "storybook/prefer-csf": "error"
    }
}
```

## Supported Rules

* prefer-csf: Display lint message when storiesOf API is used instead of the Component Story Format





