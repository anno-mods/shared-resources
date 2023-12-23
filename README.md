# Shared Mod Resources

⚠ Important: Only include as is, do not modify shared resources in your mod.
You risk breaking other mods otherwise.

Please open issues or create PRs in their respective repositories instead.

## Mods

### General

- `[Shared] Pools and Definitions`, ModID: `shared-pools-and-definitions`
  - Shared pools like "All Sand Mines" to allow multiple mods using the same new pools.
  - Hotel needs for compatibility with New World Tourism
- **Mod Ornaments Tab:** [muggenstuermer/MU_Anno1800_Mod_Collection](https://github.com/muggenstuermer/MU_Anno1800_Mod_Collection)
- **General Modules:** [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Adaptation of UI elements of the modules  
- **General Permits:** [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Adaptation of UI elements of the permits
- **Info Description Parts:** [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Building blocks for extended InfoDescrptions
- **Neutral Hacienda:** [Taludas/neutral_Hacienda](https://github.com/Taludas/neutral_Hacienda)
  - You are now able to create a Hacienda clone with a clean and neutral Interface.
- **Serps Helper-mods:** [Serpens66/Anno-1800-SharedMods-for-Modders-](https://github.com/Serpens66/Anno-1800-SharedMods-for-Modders-)
  - Helpful utility like shared mods, eg. Triggers to know who is Human/AI and which one.
  
### Products and Productions

- Extra Goods: [jakobharder/anno1800-shared-mods](https://github.com/jakobharder/anno1800-shared-mods)
  - Vegetables, Cheese, Tools, Hemp, Suits, Canned Fish, ...
- Paper Mill OW: [lion053/AnnoMods](https://github.com/lion053/AnnoMods)
- Additional Products: [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Products: Apples, Smoked Fish, Liqueur, Sandwiches, Wooden Jewelry, ...
  - Intermediate products: Cattle, Cherries, Barrels, Wool Fabric, Sewing Thread, ...  
- Vegetables Integration: [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Replaces peppers with vegetables
- Recipe Buildings: [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Vanilla buildings converted into recipe buildings 
  
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
  "https://github.com/anno-mods/shared-resources/releases/download/v7.1/shared-pools-and-definitions.zip"
],
"LoadAfterIds": [
  "shared-pools-and-definitions"
]
```

## Contribution Guide

Shared mods in this repository may be used by many others. Strict rules are needed to not harm them:

- No modifications that change vanilla gameplay.
- Modifications that will be seen by all players (e.g. pools) have to include all translations.
- Size should be kept as small as possible. Shared mods will be repeated in every Mod that is using it.
- No modloader warnings.

If your shared mod follows different rules, is very big or only useful for a few then simply linking it in the above mods section may be the better choice.

### Create a release

Make sure to update the version in `modinfo.json`!

All you need to do is to create a tag with the version and a `v` in front (e.g. `v8.3`). A draft release will be created for you.

You can do that via browser:

- Go to `Releases` and click `Draft a new release`.
- Enter the new version (e.g. `v8.3` under `Choose a tag`).
- Check `Set as a pre-release` to avoid the release being immediately public
- Wait until GitHub creates the assets and adds them
- Publish the draft release created by GitHub

Or via console:

```
git tag v8.3
git push --tags
```

