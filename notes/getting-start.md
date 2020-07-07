---
title: Getting Start
tags:
  - Emoji
  - Markdown
  - Getting Start
emoji: ❤️
link: ""
---

# Most Popular Emojis

- 🥺 Pleading Face
- ❤ Red Heart
- 🇺🇸 Flag: United States
- 😂 Face with Tears of Joy
- 🥰 Smiling Face with Hearts
- 🔥 Fire
- 🎆 Fireworks
- ✨ Sparkles
- 😊 Smiling Face with Smiling Eyes

<details>
  <summary>More...</summary>
<a href="https://emojipedia.org/">Emojipedia.Org</a>
</details>

# [More Markdown Feature](https://code-notes-example.netlify.app/markdown-features/)

## Highlighting lines in code blocks

To highlight lines, wrap line with this comment before:
`// highlight-start` and this after `// highlight-end`.
Ensure that these comments are not indented.

````md
```css
.grid {
  // highlight-start
  display: grid;
  grid-gap: 30px;
  // highlight-end
  grid-template-columns: repeat(auto-fill, 112px);
  /* or this */
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
}
```
````

```css
.grid {
  // highlight-start
  display: grid;
  grid-gap: 30px;
  // highlight-end
  grid-template-columns: repeat(auto-fill, 112px);
  /* or this */
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
}
```

## Table

Tables are responsive by default. If you need to limit line length for a cell, add a `<br/>` tag to break the lines.

| Tables              | Are          | Cool                                                      |
| ------------------- | ------------ | --------------------------------------------------------- |
| This is a row       | with some    | content                                                   |
| This is another row | with another | Velit ut mauris penatibus <br/>turpis commodo consectetur |

```md
| Tables              | Are          | Cool                                                      |
| ------------------- | ------------ | --------------------------------------------------------- |
| This is a row       | with some    | content                                                   |
| This is another row | with another | Velit ut mauris penatibus <br/>turpis commodo consectetur |
```
