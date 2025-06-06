# Shared Mod Resources

⚠ Important: Only include as is, do not modify shared resources in your mod.
You risk breaking other mods otherwise.

Please open issues or create PRs in their respective repositories instead.

## Shared Mods

### **Pools and Definitions** `shared-pools-and-definitions`

- Shared pools like "All Sand Mines" to allow multiple mods using the same new pools.
- Construction menu helper
- Hotel needs for compatibility with New World Tourism
- [Full documentation](./[Shared]%20Pools%20and%20Definitions/README.md)

### **One Step Influence** `shared-one-step-influence`

- Changes guildhouse type influence into 20 times 1-base point instead of 1 time 20-based so that you can create e.g. 5 point buildings

### **Influence Other Tier Houses** `ToolTip_OtherResidences`

- Changes Engineer Category for influence to "Other Tier Houses"

### **Merge Tabs** `merge-tabs-jakob`

- Automatically merge progression tier tabs when you run out of space.

- See [Merge Tabs README](./[UI]%20Merge%20Tabs/README.md) for details and how to use.
<br/>&nbsp;<br/>
![](./doc/merge-menus.jpg)

## Shared Mods in other Repositories

### General

- **Mod Ornaments Tab:** [muggenstuermer/MU_Anno1800_Mod_Collection](https://github.com/muggenstuermer/MU_Anno1800_Mod_Collection)
- **General Modules:** [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Adaptation of UI elements of the modules  
- **General Permits:** [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Adaptation of UI elements of the permits
- **Info Description Parts:** [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Building blocks for extended InfoDescrptions
- **Serps Helper-mods:** [Serpens66/Anno-1800-SharedMods-for-Modders-](https://github.com/Serpens66/Anno-1800-SharedMods-for-Modders-)
  - Helpful utility like shared mods, eg. Triggers to know who is Human/AI and which one.

 
### UI and Infotips
- **Infotip Fix Tourist Buildings** [lion053/shared-mods](https://github.com/lion053/shared-mods)
  - Applies vanilla tourism building infotips for all modded hotels and visitor piers.
- **Serps Infotip-mods:** [Serpens66/Anno-1800-SharedMods-for-Modders-](https://github.com/Serpens66/Anno-1800-SharedMods-for-Modders-)
  - Fixes for the Hacienda Policies when you use a Hacienda Clone, Input/Output Amount in the Building Tooltip, support for multiple InputAmountUpgrades etc.
- **Neutral Hacienda:** [Taludas/neutral_Hacienda](https://github.com/Taludas/neutral_Hacienda)
  - You are now able to create a Hacienda clone with a clean and neutral Interface.
- **Neutral Airship Plattform:** [Taludas/SharedMods](https://github.com/Taludas/SharedMods)
  - You are now able to create an Airship Platform clone with a clean and neutral Interface.
- **Neutral Irontower Workforce Slider:** [Taludas/SharedMods](https://github.com/Taludas/SharedMods)
  - You are now able to use the workforce slider to increase a buff's range with other workforce than Tourists.
- **Neutral After Monument Event Festival Reward Infotip:** [Taludas/SharedMods](https://github.com/Taludas/SharedMods)
  - You are now able to reuse the Stadium mechanic to start a festival after a monument event with a neutral buff infotip
 
### Products and Productions

- Extra Goods: [jakobharder/anno1800-shared-mods](https://github.com/jakobharder/anno1800-shared-mods)
  - Vegetables, Cheese, Tools, Hemp, Suits, Canned Fish, ...
- Milk from Cattle Farms: [lion053/shared-mods](https://github.com/lion053/shared-mods)
  - Vanilla cattle farm pastures produce milk (Old and New World; if DLC12 is active New World is untouched)
- Small Elevator Factory: [lion053/shared-mods](https://github.com/lion053/shared-mods)
  - To be able to use elevators as construction material even if Highlife-DLC is not owned / active.
- Additional Products: [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Products: Apples, Smoked Fish, Liqueur, Sandwiches, Wooden Jewelry, ...
  - Intermediate products: Cattle, Cherries, Barrels, Wool Fabric, Sewing Thread, ...  
- Vegetables Integration: [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Replaces peppers with vegetables
- Recipe Buildings: [Qurila/shared-mods](https://github.com/Qurila/shared-mods)
  - Vanilla buildings converted into recipe buildings 
- Products and Productions: [Drakkam/shared-mods](https://github.com/Drakkam/Shared-Anno-Mods)
  - Products: Eggs, Bottles, Lenses, Fedora, Cameras, Ink, Marble Slabs, Marble Stones ...
- Products and Productions: [Hier0nimus/shared-mods](https://github.com/Hier0nimus/anno-mods-hier0nimus/releases/tag/SHARED)
  - Products: Clean Water, Galena, Gunpowder, Horses, Lead, Strings, Flutes, Djembe, Sawdust
  - Mechanic: Ship Flags
- Products and Productions: [Taludas/SharedMods](https://github.com/Taludas/SharedMods)
  - Products: Almonds, Apple Cider, Avocados, Diamonds, Ebony, Fish Stew, Guacamole, Honey, Lacquerware, Limestone (renamed cement), Lobster Dinner, Luxury Furniture, Marzipan, Paintings, Potash, Saffron, Silk Fabric, Soda, Sweets, Tortillas, Wine (renamed champagne)
  - Productions: Avocado Farm and Hacienda version, Guacamole Kitchen, Tortilla Mill, Potash Works

### Textures and Assets

- Shared Objects: [muggenstuermer/Shared_Objects_MU](https://github.com/muggenstuermer/Shared_Objects_MU)
  - Ground decals, fonts
- Ground Textures/Decals: [jakobharder/anno1800-shared-mods](https://github.com/jakobharder/anno1800-shared-mods)


## How to use

### Manual

Download a release, extract the mod you want into your own mod and add a the following dependency infos to your `modinfo.json`:

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
- Naming scheme: ModID should match ModName to allow automatic dependency in VSCode Build & Deploy.

If your shared mod follows different rules, is very big or only useful for a few then simply linking it in the above mods section may be the better choice.

### Create a release

Make sure to update the version in `modinfo.json`!

All you need to do is to create a tag with the version and a `v` in front (e.g. `v8.3`). A draft release will be created for you.

#### Version scheme

`vMAJOR.minor.path`
- `MAJOR`: increase when there's a new mod, or a **new feature** in pools-and-definition.
- `minor`: increase when there are new pools, or other additions to **existing features**.
- `patch`: increase when fixing **bugs**, translations

#### You can do that via browser

- Go to `Releases` and click `Draft a new release`.
- Enter the new version (e.g. `v8.3` under `Choose a tag`).
- Check `Set as a pre-release` to avoid the release being immediately public
- Publish and wait until GitHub creates the assets and adds them
- Publish the draft release created by GitHub

#### Or via console

```
git tag v8.3
git push --tags
```
And then publish the draft release created by GitHub.
