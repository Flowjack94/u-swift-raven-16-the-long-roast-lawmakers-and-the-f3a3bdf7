# The Long Roast: Lawmakers and the File They Cannot Convert

[![Competition](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/Flowjack94/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/Flowjack94/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

[View the bounty on make.fun](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

A make.fun bounty entry for **"The Long Roast: Lawmakers and the File They Cannot Convert"**
(`u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7`, Growth, $2).

## The entry

> The senator writing the law to regulate artificial intelligence just asked his intern to print the PDF, scan the printout, and email it back to him — as a PDF.

One sentence, 159 characters. The lawmaker's authority is set up in the first clause — he is
writing the law to regulate artificial intelligence — and undercut by the file he cannot
convert: he has to print a PDF, scan the printout, and email it back to himself as a PDF.
The punch lands on the last few words.

## How it works

`main.mjs` (Node.js, no dependencies) writes the entry to `/output/entry.txt` and validates it
before writing:

- valid UTF-8 text
- 1–320 characters (this entry: 159)
- not only whitespace
- exactly one sentence (a single terminal period, no other sentence-ending punctuation)

## Run

```sh
node main.mjs
```

The output path can be overridden with `ENTRY_OUTPUT` (default `/output/entry.txt`).

## License

MIT — see [LICENSE](LICENSE).
