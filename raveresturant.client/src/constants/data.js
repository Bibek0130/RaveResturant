//constants data
export const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "Our Story", path: "/our-story" },
    { label: "Menu", path: "/menu" },
    { label: "Gallery", path: "/gallery" },
    { label: "Location", path: "/location" },
    { label: "Contact", path: "/contact" },
];

export const MENU_ITEMS = [
    {
        category: "Starters",
        items: [
            { name: "Truffle Arancini", desc: "Crispy risotto balls, parmesan foam, black truffle oil", price: "$14" },
            { name: "Tuna Tartare", desc: "Sesame, avocado crème, wonton crisp, citrus ponzu", price: "$18" },
            { name: "Burrata & Heritage Tomato", desc: "Aged balsamic, basil oil, fleur de sel", price: "$16" },
        ],
    },
    {
        category: "Mains",
        items: [
            { name: "Smoked Duck Breast", desc: "Cherry jus, roasted celeriac, pickled red cabbage", price: "$38" },
            { name: "Pan-Seared Sea Bass", desc: "Saffron velouté, fennel confit, caperberry gremolata", price: "$42" },
            { name: "Wagyu Striploin 200g", desc: "Bone marrow butter, truffle fries, shallot purée", price: "$68" },
            { name: "Wild Mushroom Risotto", desc: "Porcini broth, mascarpone, crispy shallots, aged pecorino", price: "$28" },
        ],
    },
    {
        category: "Desserts",
        items: [
            { name: "Dark Chocolate Délice", desc: "Salted caramel, praline crumble, cocoa tuile", price: "$14" },
            { name: "Crème Brûlée", desc: "Tahitian vanilla, shortbread, fresh berries", price: "$12" },
            { name: "Mango Panna Cotta", desc: "Coconut sorbet, passion fruit coulis, lime zest", price: "$13" },
        ],
    },
];

export const GALLERY_ITEMS = [
    { label: "Truffle Arancini", bg: "#1a1208", accent: "#c9a84c", emoji: "🍱" },
    { label: "The Dining Room", bg: "#0d1a1a", accent: "#4cb8c9", emoji: "🕯" },
    { label: "Wagyu Striploin", bg: "#1a0d0d", accent: "#c94c4c", emoji: "🥩" },
    { label: "Bar & Cocktails", bg: "#0d0d1a", accent: "#8b4cc9", emoji: "🍹" },
    { label: "Sea Bass Plate", bg: "#0a1a10", accent: "#4cc97a", emoji: "🐟" },
    { label: "Dessert Tasting", bg: "#1a1208", accent: "#c97a4c", emoji: "🍮" },
];
