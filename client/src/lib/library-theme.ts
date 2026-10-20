// Groups whose card on the Brain page is pale keep that pale colour on their pages and features: a light
// header with dark words, and tiles, cards and picture bands in the same family. Other groups use the
// dark header. The colours themselves live in library-condition-v2.css and library-news.css.

export type LightTheme = "memory" | "movement";

const THEMES: Record<string, LightTheme> = { dementia: "memory", parkinsons: "movement" };

export const themeOf = (groupId: string): LightTheme | undefined => THEMES[groupId];
