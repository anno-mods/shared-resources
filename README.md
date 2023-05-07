# Shared Mod Resources

⚠ Important: Only include as is, do not modify shared resources in your mod.
You risk breaking other mods otherwise.

Please open issues or create PRs in their respective repositories instead.

## Mods

### Pools and Definitions

- `[Shared] Pools and Definitions`, ModID: `shared-pools-and-definitions`
  - Shared pools like "All Sand Mines" to allow multiple mods using the same new pools.
  - Hotel needs for compatibility with New World Tourism
- Mod Ornaments Tab: [muggenstuermer/MU_Anno1800_Mod_Collection](https://github.com/muggenstuermer/MU_Anno1800_Mod_Collection)

### Products and Productions

- Extra Goods: [jakobharder/anno1800-shared-mods](https://github.com/jakobharder/anno1800-shared-mods)
  - Vegetables, Cheese, Tools, Hemp, Suits, Canned Fish, ...
- Paper Mill OW: [lion053/AnnoMods](https://github.com/lion053/AnnoMods)

- Additional Products: [Qurila/anno1800-shared-products](https://github.com/Qurila/anno1800-shared-products)
  - Apples, Smoked Fish, Liqueur, Sandwiches, Wooden Jewelry, ...
- Additional Intermediate Products: [Qurila/anno1800-shared-products](https://github.com/Qurila/anno1800-shared-extended-products)
  - Cattle, Cherries, Barrels, Wool Fabric, Sewing Thread, ...  

### Textures and Assets

- Shared Objects: [muggenstuermer/Shared_Objects_MU](https://github.com/muggenstuermer/Shared_Objects_MU)
  - Ground decals, fonts
- Ground Textures/Decals: [jakobharder/anno1800-shared-mods](https://github.com/jakobharder/anno1800-shared-mods)


## How to use

### Manual

Download a release, extract the mod you want into your own mod and add a the following dependency infos to your `modinfo.json`.

```json
"ModDependencies": [
  "shared-pools-and-definitions"
],
"LoadAfterIds": [
  "shared-pools-and-definitions"
]
```

### Automatic

Add a the following dependency infos to your `modinfo.json` and use the `F1`/right-click action `Build and Deploy Mod` of the [Anno Modding Tools](https://marketplace.visualstudio.com/items?itemName=JakobHarder.anno-modding-tools) extension in [VS Code](https://code.visualstudio.com/).

```json
"ModDependencies": [
  "https://github.com/anno-mods/shared-resources/releases/download/v5/shared-pools-and-definitions.zip"
],
"LoadAfterIds": [
  "shared-pools-and-definitions"
]
```

## Contribution Guide

Shared mods in this repository may be by many others. Strict rules are needed to not harm them:

- No modifications that change vanilla gameplay.
- Modifications that will be seen by all players (e.g. pools) have to include all translations.
- Size should be kept as small as possible. Shared mods will be repeated in every Mod that is using it.
- No modloader warnings.

If your shared mod follows different rules, is very big or only useful for a few then simply linking it in the above mods section may be the better choice.
