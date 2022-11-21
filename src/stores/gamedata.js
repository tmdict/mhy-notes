import { readable } from 'svelte/store';

const raw = import.meta.globEager('../../data/game/**/*.json');
const grouped = Object.values(raw).reduce((acc, d) => {
  acc[d.default.type] = acc[d.default.type] || {};
  acc[d.default.type] = { [d.default.id]: d.default, ...acc[d.default.type] };
  return acc;
}, {});

export const artifacts = readable(grouped.artifact);
export const characters = readable(grouped.character);
export const enemies = readable(grouped.enemy);
export const materials = readable(grouped.material);
export const weapons = readable(grouped.weapon);
export const misc = readable(grouped.misc);

const rarityData = {};

Object.values(grouped).forEach((data) => {
  Object.values(data).forEach((item) => {
    rarityData[item.id] = item.rarity;
  });
});
export const rarity = readable(rarityData);

const achievementData = import.meta.globEager('../../data/achievements/*.yml');
export const achievements = readable(Object.values(achievementData).map((d) => d.default));
