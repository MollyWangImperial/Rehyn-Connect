// The pictures a person can show in My community (Community settings, "Change picture"): their own photo, a
// monogram (their initial on a colour), a portrait or an illustrated face they make themselves, an emblem of
// something they love, or the drawn face the preview starts with. Each drawing is a small SVG built here from these
// choices only, never from anything typed, in a 120 by 120 box; nothing in it says anything about health.

export type PictureChoice = "drawn" | "photo" | "initial" | "portrait" | "emblem" | "illustrated";
export const PICTURE_CHOICES: PictureChoice[] = ["drawn", "photo", "initial", "portrait", "emblem", "illustrated"];

type Option<T extends string = string> = { id: T; label: string };
const option = <T extends { id: string }>(list: readonly T[], id: string): T => list.find(item => item.id === id) ?? list[0];
const ids = <T extends { id: string }>(list: readonly T[]) => list.map(item => item.id) as T["id"][];

/* --------------------------------------------------------------- monogram */

export type MonogramTone = "peach" | "sage" | "slate" | "green" | "sand" | "lavender" | "rose" | "terracotta";
export const MONOGRAM_TONES: readonly (Option<MonogramTone> & { bg: string; ink: string; ring: string | null })[] = [
  { id: "peach", label: "Peach", bg: "#F2D3C7", ink: "#6E3524", ring: "#E0B3A1" },
  { id: "sage", label: "Sage", bg: "#CFDCCB", ink: "#1F4A38", ring: "#AFC4AA" },
  { id: "slate", label: "Slate blue", bg: "#D3DEE6", ink: "#2A3F4D", ring: "#B4C3CE" },
  { id: "green", label: "Dark green", bg: "#15372C", ink: "#F6F1E7", ring: null },
  { id: "sand", label: "Sand", bg: "#EFE3C4", ink: "#5E4A1C", ring: "#D8C79A" },
  { id: "lavender", label: "Lavender", bg: "#E3DCEF", ink: "#45357A", ring: "#C8BEDD" },
  { id: "rose", label: "Rose", bg: "#F6D6DC", ink: "#7A2E40", ring: "#E6B5BF" },
  { id: "terracotta", label: "Terracotta", bg: "#C8553D", ink: "#FBFAF6", ring: null },
];
/** The first four show straight away; "More colours" shows the rest. */
export const MONOGRAM_SHOWN = 4;
export const monogramTone = (id: string) => option(MONOGRAM_TONES, id);

/* --------------------------------------------------------------- portrait */

export const PORTRAIT = {
  hair: [
    { id: "silver", label: "Silver", color: "#E4E0D9", dark: "#C9C5BD" },
    { id: "white", label: "White", color: "#FBFAF6", dark: "#E6E2D8" },
    { id: "grey", label: "Grey", color: "#8F8D88", dark: "#6F6D68" },
    { id: "brown", label: "Brown", color: "#5B3A26", dark: "#3A2A20" },
    { id: "black", label: "Black", color: "#2B1E16", dark: "#1A120D" },
  ],
  hairStyle: [{ id: "bun", label: "Bun" }, { id: "short", label: "Short" }, { id: "long", label: "Long" }, { id: "cropped", label: "Cropped" }],
  skin: [
    { id: "light", label: "Light", color: "#E8C0A4", neck: "#D9A98C" },
    { id: "medium", label: "Medium", color: "#CC9A7B", neck: "#B98667" },
    { id: "tan", label: "Tan", color: "#B5744F", neck: "#A5683F" },
    { id: "deep", label: "Deep", color: "#8D5A3C", neck: "#7A4B30" },
  ],
  top: [
    { id: "plum", label: "Plum", color: "#5E4B6B", line: "#4A3A56" },
    { id: "navy", label: "Navy", color: "#2F4858", line: "#223644" },
    { id: "teal", label: "Teal", color: "#2F6B6B", line: "#235252" },
    { id: "mustard", label: "Mustard", color: "#B8893B", line: "#96702F" },
  ],
  bg: [
    { id: "sage", label: "Sage", color: "#D5E0D2" },
    { id: "sand", label: "Sand", color: "#E6D9BE" },
    { id: "peach", label: "Peach", color: "#F2D3C7" },
    { id: "slate", label: "Slate blue", color: "#D3DEE6" },
  ],
} as const;

export type PortraitLook = {
  hair: (typeof PORTRAIT.hair)[number]["id"];
  hairStyle: (typeof PORTRAIT.hairStyle)[number]["id"];
  skin: (typeof PORTRAIT.skin)[number]["id"];
  top: (typeof PORTRAIT.top)[number]["id"];
  bg: (typeof PORTRAIT.bg)[number]["id"];
  glasses: boolean;
};

export const PORTRAIT_PRESETS: readonly { label: string; look: PortraitLook }[] = [
  { label: "Portrait, silver hair in a bun", look: { hair: "silver", hairStyle: "bun", skin: "light", top: "plum", bg: "sage", glasses: false } },
  { label: "Portrait, short grey hair with glasses", look: { hair: "grey", hairStyle: "short", skin: "medium", top: "navy", bg: "sand", glasses: true } },
  { label: "Portrait, shoulder-length dark hair", look: { hair: "brown", hairStyle: "long", skin: "tan", top: "teal", bg: "peach", glasses: false } },
  { label: "Portrait, cropped hair", look: { hair: "black", hairStyle: "cropped", skin: "deep", top: "mustard", bg: "slate", glasses: false } },
];

/** The hair over the head, by hairstyle (a bun adds a knot on top; long hair falls behind the shoulders too). */
const PORTRAIT_HAIR: Record<PortraitLook["hairStyle"], string> = {
  bun: "M40 56 C37 38 47 29 60 29 C73 29 83 38 80 56 C77 47 71 41 60 41 C49 41 43 47 40 56 Z",
  long: "M40 56 C37 38 47 29 60 29 C73 29 83 38 80 56 C77 47 71 41 60 41 C49 41 43 47 40 56 Z",
  short: "M40 50 C39 35 48 28 60 28 C72 28 81 35 80 50 C78 43 73 38 60 38 C47 38 42 43 40 50 Z",
  cropped: "M42 50 C41 36 49 30 60 30 C71 30 79 36 78 50 C76 44 72 40 60 40 C48 40 44 44 42 50 Z",
};

export function portraitSvg(look: PortraitLook): string {
  const hair = option(PORTRAIT.hair, look.hair), skin = option(PORTRAIT.skin, look.skin), top = option(PORTRAIT.top, look.top), bg = option(PORTRAIT.bg, look.bg);
  const parts = [`<rect width="120" height="120" fill="${bg.color}"/>`];
  if (look.hairStyle === "long") parts.push(`<path d="M36 96 L36 56 C36 36 46 28 60 28 C74 28 84 36 84 56 L84 96 Z" fill="${hair.dark}"/>`);
  parts.push(`<path d="M14 120 C14 97 36 88 60 88 C84 88 106 97 106 120 Z" fill="${top.color}"/>`);
  parts.push(`<path d="M60 94 V120" stroke="${top.line}" stroke-width="2" fill="none"/>`);
  parts.push(`<path d="M51 66 H69 V88 C69 95 51 95 51 88 Z" fill="${skin.neck}"/>`);
  parts.push(`<ellipse cx="60" cy="54" rx="19" ry="22" fill="${skin.color}"/>`);
  if (look.hairStyle === "bun") parts.push(`<circle cx="60" cy="24" r="9" fill="${hair.dark}"/>`);
  parts.push(`<path d="${PORTRAIT_HAIR[look.hairStyle]}" fill="${hair.color}"/>`);
  if (look.glasses) parts.push(`<circle cx="52" cy="57" r="6.5" fill="none" stroke="#2B2A28" stroke-width="1.8"/><circle cx="68" cy="57" r="6.5" fill="none" stroke="#2B2A28" stroke-width="1.8"/><path d="M58.5 57 H61.5" stroke="#2B2A28" stroke-width="1.8"/>`);
  return parts.join("");
}

/* ------------------------------------------------------------ illustrated */

export const ILLUSTRATED = {
  face: [{ id: "smile", label: "Smile" }, { id: "grin", label: "Big laugh" }, { id: "calm", label: "Calm" }, { id: "wink", label: "Wink" }],
  hair: [{ id: "bun", label: "Bun" }, { id: "short", label: "Short" }, { id: "bob", label: "Bob" }, { id: "curly", label: "Curly" }, { id: "none", label: "None" }],
  hairColor: [
    { id: "silver", label: "Silver", color: "#DAD6CF", dark: "#C9C5BD" },
    { id: "white", label: "White", color: "#FBFAF6", dark: "#E6E2D8" },
    { id: "brown", label: "Brown", color: "#5B3A26", dark: "#3A2A20" },
    { id: "black", label: "Black", color: "#1F1A17", dark: "#0E0B0A" },
    { id: "auburn", label: "Auburn", color: "#C7733F", dark: "#9E5A30" },
  ],
  skin: [
    { id: "light", label: "Light", color: "#F1C9A9", neck: "#E6B899" },
    { id: "medium", label: "Medium", color: "#DDA77E", neck: "#C9956F" },
    { id: "tan", label: "Tan", color: "#B5744F", neck: "#A5683F" },
    { id: "deep", label: "Deep", color: "#8D5A3C", neck: "#7A4B30" },
  ],
  clothes: [{ id: "jumper", label: "Jumper" }, { id: "cardigan", label: "Cardigan" }, { id: "shirt", label: "Shirt" }, { id: "scarf", label: "Scarf" }],
  clothesColor: [
    { id: "plum", label: "Plum", color: "#7B63B5", dark: "#5E4B8E" },
    { id: "coral", label: "Coral", color: "#E08A6A", dark: "#B86A4E" },
    { id: "yellow", label: "Yellow", color: "#E9C46A", dark: "#C19B45" },
    { id: "green", label: "Green", color: "#4C8A69", dark: "#35694E" },
    { id: "blue", label: "Blue", color: "#4F7FB5", dark: "#3A6290" },
  ],
  scene: [{ id: "plain", label: "Plain" }, { id: "garden", label: "Garden" }, { id: "hills", label: "Hills" }, { id: "sea", label: "Seaside" }],
  bg: [
    { id: "peach", label: "Peach", color: "#F2D3C7" },
    { id: "sky", label: "Sky", color: "#DCE6EE" },
    { id: "mint", label: "Mint", color: "#CFE6D6" },
    { id: "lavender", label: "Lavender", color: "#E3DCEF" },
    { id: "sand", label: "Sand", color: "#EFE3C4" },
  ],
} as const;

export type IllustratedLook = { [K in keyof typeof ILLUSTRATED]: (typeof ILLUSTRATED)[K][number]["id"] };
export const ILLUSTRATED_KEYS = Object.keys(ILLUSTRATED) as (keyof IllustratedLook)[];

/** Where "Make your own" starts when nothing illustrated has been chosen yet. */
export const ILLUSTRATED_START: IllustratedLook = { face: "smile", hair: "bun", hairColor: "silver", skin: "light", clothes: "cardigan", clothesColor: "plum", scene: "garden", bg: "peach" };
/** Close to the drawn face the preview starts with, for "Make your own" from there. */
export const ILLUSTRATED_LIKE_DRAWN: IllustratedLook = { face: "smile", hair: "short", hairColor: "brown", skin: "light", clothes: "jumper", clothesColor: "green", scene: "plain", bg: "sand" };

export const ILLUSTRATED_PRESETS: readonly { label: string; look: IllustratedLook }[] = [
  { label: "Illustrated, grey bun and purple top", look: { face: "smile", hair: "bun", hairColor: "silver", skin: "light", clothes: "jumper", clothesColor: "plum", scene: "plain", bg: "peach" } },
  { label: "Illustrated, short brown hair and coral top", look: { face: "smile", hair: "short", hairColor: "brown", skin: "medium", clothes: "jumper", clothesColor: "coral", scene: "plain", bg: "sky" } },
  { label: "Illustrated, black bob and yellow top", look: { face: "smile", hair: "bob", hairColor: "black", skin: "medium", clothes: "jumper", clothesColor: "yellow", scene: "plain", bg: "mint" } },
  { label: "Illustrated, auburn hair and green top", look: { face: "smile", hair: "short", hairColor: "auburn", skin: "light", clothes: "jumper", clothesColor: "green", scene: "plain", bg: "lavender" } },
];

const INK = "#2B2A28";
const SCENES: Record<IllustratedLook["scene"], string> = {
  plain: "",
  garden: `<path d="M0 120 V96 C30 86 60 100 120 90 V120 Z" fill="#6FA37E"/><path d="M22 100 V92 M34 104 V97 M98 98 V88 M106 104 V96" stroke="#2F6B4F" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="22" cy="90" r="3.5" fill="#E08A6A"/><circle cx="34" cy="95" r="3" fill="#F1C96B"/><circle cx="98" cy="86" r="3.5" fill="#E08A6A"/><circle cx="106" cy="94" r="3" fill="#F6F1E7"/>`,
  hills: `<circle cx="88" cy="34" r="10" fill="#EFC98B"/><path d="M0 120 V92 C30 74 60 88 120 78 V120 Z" fill="#9DB5A4"/><path d="M0 120 V104 C40 92 80 104 120 96 V120 Z" fill="#4C8A69"/>`,
  sea: `<circle cx="84" cy="36" r="10" fill="#EFC98B"/><rect x="0" y="84" width="120" height="36" fill="#7FB0C9"/><path d="M0 96 C10 92 20 100 30 96 C40 92 50 100 60 96 C70 92 80 100 90 96 C100 92 110 100 120 96" stroke="#FBFAF6" stroke-width="2" fill="none"/><path d="M0 108 C10 104 20 112 30 108 C40 104 50 112 60 108 C70 104 80 112 90 108 C100 104 110 112 120 108" stroke="#FBFAF6" stroke-width="2" fill="none"/>`,
};

export function illustratedSvg(look: IllustratedLook): string {
  const hc = option(ILLUSTRATED.hairColor, look.hairColor), sk = option(ILLUSTRATED.skin, look.skin), cc = option(ILLUSTRATED.clothesColor, look.clothesColor), bg = option(ILLUSTRATED.bg, look.bg);
  const parts = [`<rect width="120" height="120" fill="${bg.color}"/>`, SCENES[look.scene] ?? ""];
  // Hair that falls behind the head (a bob), then the body and clothes, the neck and the head.
  if (look.hair === "bob") parts.push(`<path d="M35 84 L35 54 C35 36 46 27 60 27 C74 27 85 36 85 54 L85 84 Z" fill="${hc.dark}"/>`);
  parts.push(`<path d="M14 120 C14 97 36 88 60 88 C84 88 106 97 106 120 Z" fill="${cc.color}"/>`);
  if (look.clothes === "cardigan") parts.push(`<path d="M60 94 V120" stroke="${cc.dark}" stroke-width="2.5" fill="none"/><path d="M49 88 L60 103 L71 88" stroke="${cc.dark}" stroke-width="3" stroke-linejoin="round" fill="none"/>`);
  if (look.clothes === "shirt") parts.push(`<path d="M51 88 L60 100 L69 88 Z" fill="${sk.neck}"/><path d="M51 88 L60 100 L69 88 L73 93 L60 108 L47 93 Z" fill="#FBFAF6" stroke="${cc.dark}" stroke-width="1.5" stroke-linejoin="round"/>`);
  parts.push(`<path d="M51 66 H69 V88 C69 95 51 95 51 88 Z" fill="${sk.neck}"/>`);
  if (look.clothes === "scarf") parts.push(`<path d="M60 96 L69 120 L55 120 Z" fill="#A8432F"/><path d="M42 90 C50 85 70 85 78 90 L78 101 C70 96 50 96 42 101 Z" fill="#C8553D"/>`);
  parts.push(`<circle cx="60" cy="54" r="23" fill="${sk.color}"/>`);
  // Hair on top.
  const cap = `<path d="M38 54 C36 36 47 28 60 28 C73 28 84 36 82 54 C78 46 71 41 60 41 C49 41 42 46 38 54 Z" fill="${hc.color}"/>`;
  if (look.hair === "bun") parts.push(`<circle cx="60" cy="24" r="9" fill="${hc.dark}"/>${cap}`);
  if (look.hair === "short") parts.push(`<path d="M38 52 C37 34 48 27 60 27 C72 27 83 34 82 52 C79 44 72 39 60 39 C48 39 41 44 38 52 Z" fill="${hc.color}"/>`);
  if (look.hair === "bob") parts.push(cap);
  if (look.hair === "curly") parts.push(`<circle cx="39" cy="46" r="8" fill="${hc.color}"/><circle cx="47" cy="34" r="8" fill="${hc.color}"/><circle cx="60" cy="29" r="8" fill="${hc.color}"/><circle cx="73" cy="34" r="8" fill="${hc.color}"/><circle cx="81" cy="46" r="8" fill="${hc.color}"/>${cap}`);
  // The face.
  const eyes = `<circle cx="52" cy="55" r="2.6" fill="${INK}"/><circle cx="68" cy="55" r="2.6" fill="${INK}"/>`;
  const line = `stroke="${INK}" stroke-width="2.5" stroke-linecap="round" fill="none"`;
  if (look.face === "smile") parts.push(`${eyes}<path d="M52 64 Q60 70 68 64" ${line}/>`);
  if (look.face === "calm") parts.push(`${eyes}<path d="M54 65 Q60 67 66 65" ${line}/>`);
  if (look.face === "wink") parts.push(`<path d="M48 55 Q52 58 56 55" ${line}/><circle cx="68" cy="55" r="2.6" fill="${INK}"/><path d="M52 64 Q60 71 68 63" ${line}/>`);
  if (look.face === "grin") parts.push(`<path d="M48 56 Q52 51 56 56" ${line}/><path d="M64 56 Q68 51 72 56" ${line}/><path d="M50 63 Q60 76 70 63 Z" fill="#6B2E2E"/><path d="M53 63.5 H67 V66 H53 Z" fill="#FBFAF6"/>`);
  if (look.face !== "calm") parts.push(`<circle cx="45" cy="62" r="4" fill="#F1A8A0" opacity="0.7"/><circle cx="75" cy="62" r="4" fill="#F1A8A0" opacity="0.7"/>`);
  return parts.join("");
}

/* ---------------------------------------------------------------- emblems */

export type EmblemId = "tomato" | "book" | "sunrise" | "tea" | "flower" | "music" | "football" | "paw" | "bird" | "wool" | "palette" | "mountain" | "boat" | "camera" | "cake" | "crossword";

const S = `stroke="#15372C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"`;
const S3 = `stroke="#15372C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;
const back = (color: string) => `<rect width="120" height="120" fill="${color}"/>`;
const petals = [0, 60, 120, 180, 240, 300].map(turn => `<ellipse cx="60" cy="36" rx="8" ry="12" fill="#FBFAF6" ${S} transform="rotate(${turn} 60 54)"/>`).join("");

/** Something the person loves, drawn simply: `words` is how it is said ("Your emblem: a cup of tea"). */
export const EMBLEMS: readonly { id: EmblemId; label: string; words: string; svg: string }[] = [
  { id: "tomato", label: "Tomato", words: "a tomato", svg: `${back("#F6E1D3")}<circle cx="60" cy="70" r="25" fill="#C8553D" ${S}/><path d="M60 47 L47 41 M60 47 L73 41 M60 47 L49 55 M60 47 L71 55" ${S} fill="none"/><path d="M60 47 V36 C60 29 65 25 72 24" ${S} fill="none"/>` },
  { id: "book", label: "Book", words: "a book", svg: `${back("#D6E0E7")}<path d="M60 46 C50 39 38 38 28 42 V84 C38 80 50 81 60 88 C70 81 82 80 92 84 V42 C82 38 70 39 60 46 Z" fill="#FBFAF6" ${S}/><path d="M60 46 V88" ${S}/><path d="M38 54 C43 53 48 54 52 56 M38 65 C43 64 48 65 52 67 M68 56 C72 54 77 53 82 54 M68 67 C72 65 77 64 82 65" ${S3} fill="none"/>` },
  { id: "sunrise", label: "Sunrise", words: "a sunrise", svg: `${back("#EFE3C4")}<path d="M36 78 A24 24 0 0 1 84 78 Z" fill="#E9B872" ${S}/><path d="M22 78 H98 M42 92 H78" ${S}/><path d="M60 42 V32 M36 52 L29 45 M84 52 L91 45" ${S}/>` },
  { id: "tea", label: "Cup of tea", words: "a cup of tea", svg: `${back("#CFDCCB")}<path d="M34 56 H78 V74 C78 86 68 94 56 94 C44 94 34 86 34 74 Z" fill="#FBFAF6" ${S}/><path d="M78 62 C92 62 92 82 78 82" ${S} fill="none"/><path d="M26 102 H86" ${S}/><path d="M48 44 C48 38 54 38 54 32 M62 44 C62 38 68 38 68 32" stroke="#15372C" stroke-width="3.5" stroke-linecap="round" fill="none"/>` },
  { id: "flower", label: "Flower", words: "a flower", svg: `${back("#EADFF0")}<path d="M60 84 V104" ${S} fill="none"/><path d="M60 98 C52 98 45 93 44 86 C52 85 58 90 60 98 Z" fill="#4C8A69" ${S}/>${petals}<circle cx="60" cy="54" r="9" fill="#E9B872" ${S}/>` },
  { id: "music", label: "Music", words: "music notes", svg: `${back("#F6DCC9")}<path d="M50 84 V38 L86 30 V76" ${S} fill="none"/><path d="M50 38 L86 30" stroke="#15372C" stroke-width="8" stroke-linecap="round"/><ellipse cx="41" cy="85" rx="10" ry="7.5" transform="rotate(-18 41 85)" fill="#15372C"/><ellipse cx="77" cy="77" rx="10" ry="7.5" transform="rotate(-18 77 77)" fill="#15372C"/>` },
  { id: "football", label: "Football", words: "a football", svg: `${back("#CFE6D6")}<circle cx="60" cy="60" r="31" fill="#FBFAF6" ${S}/><path d="M60 47 L72 56 L67.5 70 H52.5 L48 56 Z" fill="#15372C"/><path d="M60 47 V30 M72 56 L88 50 M67.5 70 L78 85 M52.5 70 L42 85 M48 56 L32 50" stroke="#15372C" stroke-width="3.5" stroke-linecap="round" fill="none"/>` },
  { id: "paw", label: "Paw print", words: "a paw print", svg: `${back("#E8DCCB")}<path d="M60 62 C71 62 82 73 82 84 C82 92 75 95 69 93 C66 92 63 91 60 91 C57 91 54 92 51 93 C45 95 38 92 38 84 C38 73 49 62 60 62 Z" fill="#B5744F" ${S}/><ellipse cx="40" cy="55" rx="7.5" ry="9.5" transform="rotate(-20 40 55)" fill="#B5744F" ${S}/><ellipse cx="53" cy="41" rx="7.5" ry="9.5" transform="rotate(-6 53 41)" fill="#B5744F" ${S}/><ellipse cx="67" cy="41" rx="7.5" ry="9.5" transform="rotate(6 67 41)" fill="#B5744F" ${S}/><ellipse cx="80" cy="55" rx="7.5" ry="9.5" transform="rotate(20 80 55)" fill="#B5744F" ${S}/>` },
  { id: "bird", label: "Robin", words: "a robin", svg: `${back("#DCE9F2")}<path d="M33 62 L17 54 L21 72 Z" fill="#8D6E5A" ${S}/><circle cx="56" cy="64" r="26" fill="#8D6E5A" ${S}/><ellipse cx="66" cy="72" rx="13" ry="14" fill="#E08A6A"/><path d="M38 64 C42 74 50 78 57 76" ${S3} fill="none"/><path d="M80 58 L93 62 L80 66 Z" fill="#E9B872" ${S3}/><circle cx="66" cy="54" r="3" fill="#15372C"/><path d="M50 90 V99 M62 90 V99 M46 99 H54 M58 99 H66" ${S3} fill="none"/>` },
  { id: "wool", label: "Ball of wool", words: "a ball of wool", svg: `${back("#F3DDE4")}<path d="M66 24 L86 86 M96 30 L72 88" ${S} fill="none"/><circle cx="66" cy="24" r="5" fill="#E9B872" ${S3}/><circle cx="96" cy="30" r="5" fill="#E9B872" ${S3}/><circle cx="54" cy="68" r="26" fill="#E08A6A" ${S}/><path d="M31 58 C44 52 62 54 77 64 M29 71 C44 64 62 66 79 76 M36 85 C48 79 62 81 71 89" ${S3} fill="none"/><path d="M78 84 C88 90 96 86 100 95" ${S3} fill="none"/>` },
  { id: "palette", label: "Paint palette", words: "a paint palette", svg: `${back("#E6EFD9")}<path d="M60 30 C84 30 98 46 98 62 C98 74 90 78 82 76 C74 74 70 80 74 88 C78 96 70 100 60 100 C38 100 22 84 22 64 C22 44 38 30 60 30 Z" fill="#FBFAF6" ${S}/><circle cx="44" cy="52" r="6" fill="#C8553D" ${S3}/><circle cx="62" cy="44" r="6" fill="#E9B872" ${S3}/><circle cx="80" cy="54" r="6" fill="#4C8A69" ${S3}/><circle cx="40" cy="73" r="6" fill="#4F7FB5" ${S3}/>` },
  { id: "mountain", label: "Mountain", words: "a mountain", svg: `${back("#D3DEE6")}<circle cx="86" cy="34" r="9" fill="#E9B872" ${S}/><path d="M14 94 L46 46 L62 70 L74 54 L106 94 Z" fill="#9DB5A4" ${S}/><path d="M38 58 L46 46 L54 58 L50 55 L46 59 L42 55 Z" fill="#FBFAF6" ${S3}/>` },
  { id: "boat", label: "Sailing boat", words: "a sailing boat", svg: `${back("#D7EAF0")}<path d="M60 26 V80" ${S}/><path d="M64 30 L88 76 H64 Z" fill="#FBFAF6" ${S}/><path d="M56 40 L36 76 H56 Z" fill="#E9B872" ${S}/><path d="M28 82 H92 L84 94 H36 Z" fill="#C8553D" ${S}/><path d="M18 104 C26 100 34 108 42 104 C50 100 58 108 66 104 C74 100 82 108 90 104 C96 101 100 104 102 104" ${S3} fill="none"/>` },
  { id: "camera", label: "Camera", words: "a camera", svg: `${back("#E9E4DA")}<path d="M46 44 L52 34 H68 L74 44" fill="#FBFAF6" ${S}/><rect x="24" y="44" width="72" height="48" rx="9" fill="#FBFAF6" ${S}/><circle cx="60" cy="68" r="15" fill="#4F7FB5" ${S}/><circle cx="60" cy="68" r="6" fill="#FBFAF6"/><path d="M32 54 H40" ${S}/><circle cx="84" cy="54" r="3" fill="#C8553D"/>` },
  { id: "cake", label: "Cupcake", words: "a cupcake", svg: `${back("#F7E4D8")}<path d="M60 36 C60 32 62 29 66 28" ${S3} fill="none"/><path d="M34 70 C28 60 38 50 46 54 C48 44 72 44 74 54 C82 50 92 60 86 70 Z" fill="#FBFAF6" ${S}/><circle cx="60" cy="42" r="6" fill="#C8553D" ${S3}/><path d="M38 70 H82 L76 98 H44 Z" fill="#E08A6A" ${S}/><path d="M52 72 L54 96 M60 72 V96 M68 72 L66 96" ${S3} fill="none"/>` },
  { id: "crossword", label: "Crossword", words: "a crossword", svg: `${back("#F1EBD3")}<rect x="30" y="30" width="60" height="60" rx="3" fill="#FBFAF6" ${S}/><path d="M45 30 V90 M60 30 V90 M75 30 V90 M30 45 H90 M30 60 H90 M30 75 H90" stroke="#15372C" stroke-width="2.5" fill="none"/><rect x="45" y="30" width="15" height="15" fill="#15372C"/><rect x="75" y="45" width="15" height="15" fill="#15372C"/><rect x="30" y="60" width="15" height="15" fill="#15372C"/><rect x="60" y="75" width="15" height="15" fill="#15372C"/>` },
];
/** The first four show straight away; "See all" shows the rest. */
export const EMBLEMS_SHOWN = 4;
export const emblemOf = (id: string) => option(EMBLEMS, id);

/* --------------------------------------------------------- the look chosen */

/** What the person has chosen for each kind of picture, so changing kind and back keeps their choices. */
export type PictureLook = { monogram: MonogramTone; portrait: PortraitLook; emblem: EmblemId; illustrated: IllustratedLook };
export const DEFAULT_PICTURE_LOOK: PictureLook = { monogram: "peach", portrait: PORTRAIT_PRESETS[0].look, emblem: "tomato", illustrated: ILLUSTRATED_START };

const isObject = (value: unknown): value is Record<string, unknown> => !!value && typeof value === "object" && !Array.isArray(value);
const oneOf = <T extends string>(allowed: readonly T[], value: unknown, fallback: T): T => (typeof value === "string" && (allowed as readonly string[]).includes(value) ? (value as T) : fallback);

/** A saved look, field by field: anything missing or not allowed keeps its value in `base`. Keys stay in one order. */
export function readPictureLook(value: unknown, base: PictureLook = DEFAULT_PICTURE_LOOK): PictureLook {
  if (!isObject(value)) return base;
  const portrait = isObject(value.portrait) ? value.portrait : {};
  const illustrated = isObject(value.illustrated) ? value.illustrated : {};
  return {
    monogram: oneOf(ids(MONOGRAM_TONES), value.monogram, base.monogram),
    portrait: {
      hair: oneOf(ids(PORTRAIT.hair), portrait.hair, base.portrait.hair),
      hairStyle: oneOf(ids(PORTRAIT.hairStyle), portrait.hairStyle, base.portrait.hairStyle),
      skin: oneOf(ids(PORTRAIT.skin), portrait.skin, base.portrait.skin),
      top: oneOf(ids(PORTRAIT.top), portrait.top, base.portrait.top),
      bg: oneOf(ids(PORTRAIT.bg), portrait.bg, base.portrait.bg),
      glasses: typeof portrait.glasses === "boolean" ? portrait.glasses : base.portrait.glasses,
    },
    emblem: oneOf(ids(EMBLEMS), value.emblem, base.emblem),
    illustrated: Object.fromEntries(ILLUSTRATED_KEYS.map(key => {
      const allowed = (ILLUSTRATED[key] as readonly { id: string }[]).map(item => item.id);
      return [key, oneOf(allowed, illustrated[key], base.illustrated[key])];
    })) as IllustratedLook,
  };
}

export const samePortrait = (a: PortraitLook, b: PortraitLook) => (Object.keys(a) as (keyof PortraitLook)[]).every(key => a[key] === b[key]);
export const sameIllustrated = (a: IllustratedLook, b: IllustratedLook) => ILLUSTRATED_KEYS.every(key => a[key] === b[key]);

/** The drawing for a kind of picture (the inside of a 120 by 120 SVG), or null for a photo, an initial or the drawn face. */
export function pictureArt(kind: PictureChoice, look: PictureLook): string | null {
  if (kind === "portrait") return portraitSvg(look.portrait);
  if (kind === "illustrated") return illustratedSvg(look.illustrated);
  if (kind === "emblem") return emblemOf(look.emblem).svg;
  return null;
}

const urls = new Map<string, string>();
/** A drawing as an image address, for a background (the same drawing is made once). */
export function artUrl(art: string): string {
  let url = urls.get(art);
  if (!url) {
    url = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">${art}</svg>`)}`;
    if (urls.size > 200) urls.clear();
    urls.set(art, url);
  }
  return url;
}

/** How the picture is said: "Your portrait", "Your initial, Z, on peach", "Your emblem: a cup of tea". */
export function pictureWords(kind: PictureChoice, look: PictureLook, initial: string, hasPhoto: boolean): string {
  if (kind === "drawn") return "Your drawn face";
  if (kind === "photo") return hasPhoto ? "Your photo" : `Your initial, ${initial}`;
  if (kind === "portrait") return "Your portrait";
  if (kind === "illustrated") return "Your illustrated picture";
  if (kind === "emblem") return `Your emblem: ${emblemOf(look.emblem).words}`;
  return `Your initial, ${initial}, on ${monogramTone(look.monogram).label.toLowerCase()}`;
}
