# textlint-rule-english-paper

This textlint rule found representations not suitable for English papers.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-english-paper

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "english-paper": true
    }
}
```

Via CLI

```
textlint --rule english-paper README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT License © SATO Yusuke
