# Shared Mod Resources

Important: Do not include modified versions of shared resources in your mod.
You will break other mods by that.

Propose changes here instead.

## How to use

### Manual

Download a release, extract the mod you want into your own mod.

### Automatic

Add a `bundle` to you `modinfo.json` and use the `F1`/right-click action `Build and Deploy Mod` of the [Anno Modding Tools](https://marketplace.visualstudio.com/items?itemName=JakobHarder.anno-modding-tools) extension in [VS Code](https://code.visualstudio.com/).

```json
"bundle": [
  "https://github.com/anno-mods/shared-resources/releases/download/v3/shared-pools-and-definitions.zip"
],
```

## Pools and Definitions

`[Shared] Pools and Definitions`, ModID: `shared-pools-and-definitions`

- Shared pools like "All Sand Mines" to allow multiple mods using the same new pools.
- Hotel needs for compatibility with New World Tourism

## Ground Textures

`[Shared] Ground Textures City (Jakob)`, ModID: `shared-ground-textures-city-jakob`
- City: Engineer/Investor like pavements.

`[Shared] Ground Textures Industry (Jakob)`, ModID: `shared-ground-textures-industry-jakob`

- Industry: Concrete/stone pavement for industries.

## Shared Products

`[Shared] Products (Jakob)`, ModID: `shared-products-jakob`

Contains products with definition, icon and Docklands information:
- Canned Fish
- Cheese
- Hemp
- Olives
- Suits
- Tea
- Tools
- Vegetables

## Shared Textures - textures/

Contains shared textures.

To be reworked.

## How to build yourself

The mods are made with the [Anno Modding Tools](https://marketplace.visualstudio.com/items?itemName=JakobHarder.anno-modding-tools) extension for [VS Code](https://code.visualstudio.com/).

Install the plugin, open the mod folder and press `F1` and choose `Build and Deploy Mod`.
