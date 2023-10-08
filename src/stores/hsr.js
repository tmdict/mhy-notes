import { readable } from 'svelte/store';

const raw = import.meta.glob('../../data/hsr/game/**/*.json', { eager: true });
const grouped = Object.values(raw).reduce((acc, d) => {
  acc[d.default.type] = acc[d.default.type] || {};
  acc[d.default.type] = { [d.default.id]: d.default, ...acc[d.default.type] };
  return acc;
}, {});

const buildData = import.meta.glob('../../data/hsr/builds/*.yml', { eager: true });
const parsed = Object.values(buildData).map((d) => {
  d.default.attr = {
    released: grouped.character[d.default.character].released
  };
  return d.default;
});
grouped.builds = parsed.sort(
  (a, b) => b.attr.released.localeCompare(a.attr.released) || b.character.localeCompare(a.character)
);

export const hsr = readable(grouped);
