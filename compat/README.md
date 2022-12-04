# Hotel Needs Compatibility

Include `assets-hotel-needs.include.xml` in your `assets.xml` to make your hotels compatible with other hotel mods.

Example implementation from `Small Hotels`:

```xml
<!-- # Hotel Needs -->
<Include File="./assets-hotel-needs.include.xml" />

<!-- copy needs from vanilla/NW Tourism hotel -->
<ModOp Type="add" GUID="601379" Path="/Values/PopulationLevel7/PopulationInputs/Item/RequiredBuildings[Item/Region='Moderate']">
  <Item>
    <RequiredBuilding>1500010500</RequiredBuilding>
    <Region>Moderate</Region>
  </Item>
</ModOp>
<ModOp Type="add" GUID="601379" Path="/Values/PopulationLevel7/PopulationInputs/Item/RequiredBuildings[Item/Region='Colony01']">
  <Item>
    <RequiredBuilding>1500010529</RequiredBuilding>
    <Region>Colony01</Region>
  </Item>
</ModOp>
```

## Some Explanations

The asset with the template `fallback` is just temporary for the modloader.
It is used to avoid node not found warnings.
There's always a remove at the end to remove that asset again.
