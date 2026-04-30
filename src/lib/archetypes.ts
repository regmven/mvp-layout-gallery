import { activeVerticalPreset } from "@/config/presets/active-preset";
import { ARCHETYPES, archetypeEntries, type ArchetypeDefinition, type ArchetypeKey } from "@/data/archetypes";

export function getArchetype(key?: string): ArchetypeDefinition {
  const fallbackKey = activeVerticalPreset.archetype as ArchetypeKey;
  const safeKey = (key && key in ARCHETYPES ? key : fallbackKey) as ArchetypeKey;
  return ARCHETYPES[safeKey];
}

export function getArchetypeEntries() {
  return archetypeEntries;
}
