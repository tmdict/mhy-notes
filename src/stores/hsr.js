import { readable } from 'svelte/store';

const raw = import.meta.glob('../../data/hsr/game/**/*.json', { eager: true });
const grouped = Object.values(raw).reduce((acc, d) => {
  acc[d.default.type] = acc[d.default.type] || {};
  acc[d.default.type] = { [d.default.id]: d.default, ...acc[d.default.type] };
  return acc;
}, {});

const buildData = import.meta.glob('../../data/hsr/builds/*.yml', { eager: true });
const parsed = Object.values(buildData).map((d) => {
  d.default.tags = new Set();
  // Extract build type
  d.default.type.forEach(t => d.default.tags.add(t));
  // Extract element and path
  d.default.tags.add(grouped.character[d.default.character].element);
  d.default.tags.add(grouped.character[d.default.character].path);
  // Extract stats
  d.default.mainstat.body.forEach(b => d.default.tags.add(b));
  d.default.mainstat.feet.forEach(f => d.default.tags.add(f));
  d.default.mainstat.sphere.forEach(s => d.default.tags.add(s));
  d.default.mainstat.rope.forEach(r => d.default.tags.add(r));
  d.default.stats.priority.forEach(s => d.default.tags.add(Object.keys(s)[0]));
  if (d.default.stats.common) d.default.stats.common.forEach(s => d.default.tags.add(Object.keys(s)[0]));
  // Extract relics
  d.default.relic.forEach(r => r.set.forEach(s => d.default.tags.add(s)));
  d.default.ornament.forEach(o => o.set.forEach(s => d.default.tags.add(s)));
  return d.default;
});
grouped.builds = parsed.sort(
  // Sort by character release date and then name
  (a, b) => 
    grouped.character[b.character].released.localeCompare(grouped.character[a.character].released) || grouped.character[b.character].rarity - grouped.character[a.character].rarity || a.character.localeCompare(b.character)
);

export const hsr = readable(grouped);
