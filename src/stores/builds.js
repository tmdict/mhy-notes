import { derived } from 'svelte/store';
import { characters } from '@store/gamedata';
import { parser } from '$lib/util/parser';

export const buildtypes = [
  'burst',
  'dps',
  'healer',
  'reaction',
  'shield',
  'sub-dps',
  'support'
];

function parseBuilds(buildsData, charactersData) {
  const parsed = Object.values(buildsData).map((d) => {
    d.default.tags = parser.tags(d.default, charactersData);
    d.default.attr = {
      vision: charactersData[d.default.character].vision,
      weapon: charactersData[d.default.character].weapon,
      released: charactersData[d.default.character].released
    };
    return d.default;
  });
  return parsed.sort(
    (a, b) => b.attr.released.localeCompare(a.attr.released) || b.character.localeCompare(a.character)
  );
}

export const builds = derived([characters], ([$characters]) => {
  const buildData = import.meta.glob('../../data/builds/*.yml', { eager: true });
  return parseBuilds(buildData, $characters);
});

export const buildfilters = derived([builds], ([$builds]) => {
  const filters = {
    type: { type: 'text', filter: new Set() },
    vision: { type: 'icon', filter: new Set() },
    'weapon-type': { type: 'icon', filter: new Set() },
    artifact: { type: 'icon', filter: new Set() }
  };

  Object.values($builds).forEach((b) => {
    b.type.forEach((t) => filters.type.filter.add(t)); // Build type
    filters.vision.filter.add(b.attr.vision); // Vision
    filters['weapon-type'].filter.add(b.attr.weapon); // Weapon type
    b.artifact.forEach((sets) => sets.set.forEach((s) => filters.artifact.filter.add(s))); // Artifacts
  });

  return filters;
});
