/* ==========================================================================
   STYLE_CONFIG — all the "rebrand it in 30 seconds" knobs live here.
   Edit this file only. Don't need to touch index.html when you re-skin.
   ========================================================================== */
const STYLE_CONFIG = {

  /* ---------- Branding text ---------- */
  // Full gang/crew name, used in the browser tab title and in copy-to-clipboard text.
  gangName: "SHADOW",

  // How many leading characters of gangName get the accent color in the big logo
  // wordmark (e.g. 1 = just the "S" in "SHADOW" is colored, rest is plain white).
  gangNameHighlightChars: 1,

  // Small line under the logo, split around the "✕" symbol.
  tagline: "Crafting Ledger",
  taglineAccent: "XP & Material Optimizer",

  // Browser tab title = "<gangName> · <pageTitleSuffix>"
  pageTitleSuffix: "Crafting Ledger",

  // Circular emblem image in the header. Point this at any image file you upload
  // alongside index.html (png/jpg/svg all work).
  emblemSrc: "shadow.png",
  emblemAlt: "Gang emblem",

  /* ---------- Colors ----------
     Only the "brand" accent colors live here — the blacks/greys/whites (backgrounds,
     borders, body text) stay fixed in index.html since those rarely change between
     rebrands. These four/two are what actually carry your color identity. */
  colors: {
    accent:       "#480087",  // primary accent — buttons, active toggle pills, top-row highlight bar
    accentBright: "#a03cd6",  // brighter accent — borders on focus, the logo's highlighted letter, chart line, dot markers
    accentDim:    "#58147c",  // darker accent — reserved for future use / deeper shading
    highlight:    "#d76aff",  // secondary highlight — XP numbers, level input text, "XP/mat" column
    glow:         "rgba(31, 177, 210, .15)",  // soft focus-ring glow behind inputs
    emblemGlow:   "rgba(132, 31, 210, .4)"    // glow behind the circular emblem image
  }
};