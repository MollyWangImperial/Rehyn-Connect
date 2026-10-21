// One piece's feature page: the kicker over the headline, the headline and standfirst, the picture drawn for it
// (an id from the section's own pieces file) and a pull quote copied exactly from its checked answer. The
// sections from Cancer & recovery onwards keep these in content/<section>-features.ts, and
// content/ischaemic-news.ts turns them into NEWS_EXTRAS entries keyed "<condition>/<piece>".
export type FeatureSpec<Picture extends string> = { kicker: string; headline: string; standfirst: string; piece: Picture; pullQuote: string };
