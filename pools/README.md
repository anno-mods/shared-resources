# Shared Effect Target Pools

## How to Use

1. Copy the `pools` folder into your mod (e.g. into the `assets.xml` folder).
2. Include `pools/assets-pools.include.xml`.
3. Add your target to ALL relevant pools in a generic way.

DO NOT add your targets in that file directly. Do it in your own assets.xml after including this file.

Example implementation from `New World Cities`:

```xml
<!-- # Effect Target Pools -->
<Include File="./pools/assets-pools.include.xml" />

<ModOp Type="add" Path="//ItemEffectTargetPool/EffectTargetGUIDs[Item/GUID='1010560']">
  <Item>
    <GUID>1500010708</GUID>
  </Item>
</ModOp>
```
