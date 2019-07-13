---
title: Utility classes
category: Elements
order: 6
scss: utility.scss
usage: Utility classes for hiding, showing, etc.

---

## Utilities

Utilities are low-level. They have a very narrow scope and may end up being used frequently, due to their separation from the semantics of the document and the theming of a component. As a result, once a class is in significant use great care should be taken when introducing any modifications to it.

Utilities make use of ```!important``` to ensure that their styles always apply ahead of those defined in a component's dedicated CSS.

```is-block``` - Display block.

```is-hidden``` - Display none.

```is-hiddenVisually``` - Visually hidden but available to screen readers.

```is-inline``` - Display inline.

```is-inlineBlock``` - Display inline-block.

```is-table```- Display table.

```is-tableCell``` - Display table-cell.

```is-tableRow``` - Display table-row.