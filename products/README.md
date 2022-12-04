# Shared Products

Easily add shared products to your mods without compatibility issues and unclear dependencies.

This has the following benefits:
- Player can choose which mod to use to produce
- Player will always see the product icon, even if he misses the production chain
- Docklands import is already defined
- Code is protected against double entries in warehouse and other lists

## Available Products

- Cheese
- Suits
- Tools

More from Jakob's Extra Goods will follow eventually.

## How to use

1. Copy the `products/` folder into your mod, next to `data/`.
2. Delete the products you don't want.
3. Add `<Include File="../../../../../products/cheese/assets.include.xml" />` etc. into your `assets.xml`.
