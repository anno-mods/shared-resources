# Shared Pools and Definitions

Shared effect target pools and other definitions to use as sub-mod.

The modloader will always load the latest version.
You do not need to update your sub-mod if you don't need the new features yourself.

## Do not modify contents of this mod

Making changes may break mods and cause compatibility issues.

Go to [github.com/anno-mods/shared-resources](https://github.com/anno-mods/shared-resources) and create an issue to make change suggestions.

## How to Use

1. Copy the `[Shared] Pools and Definitions` into your mod.
3. Add your target to all relevant pools.

Generic approach:

```xml
<!-- add to pools having sand mine -->
<ModOp Type="add"
  Path="//ItemEffectTargetPool/EffectTargetGUIDs[Item/GUID='1010560']">
  <Item>
    <GUID>1500010708</GUID> <!-- NW Sand Pit -->
  </Item>
</ModOp>
```

Fast approach:
```xml
<!-- add to sand pool -->
<ModOp Type="add" GUID="1500010714"
  Path="/Values/ItemEffectTargetPool/EffectTargetGUIDs">
  <Item>
    <GUID>1500010708</GUID> <!-- NW Sand Pit -->
  </Item>
</ModOp>
```