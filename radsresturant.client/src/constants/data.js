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
        category: "Salad",
        items: [
            { name: "Green Salad", desc: "A refreshing mix of garden-fresh cucumbers, carrots, onions, and seasonal greens.", price: "Rs130" },
            { name: "Nepali Salad", desc: "A traditional blend of sliced local vegetables tossed with green chilies, lemon, and a touch of Himalayan spices.", price: "Rs170" },
            { name: "Mix Fruit Platter(seasonal)", desc: "A vibrant selection of the season's best hand-picked fruits, sliced and served fresh.", price: "Rs190" }
        ]
    },
    {
        category: "Soup",
        items: [
            { name: "Veg Mushroom Soup", desc: "A creamy and earthy broth loaded with sautéed button mushrooms and delicate herbs.", price: "Rs170" },
            { name: "Chicken Mushroom Soup", desc: "Comfort in a bowl featuring tender chicken bits and mushrooms in a savory, velvety broth.", price: "Rs190" },
            { name: "Thenthuk Soup Veg/Non-Veg", desc: "A hearty Tibetan hand-pulled noodle soup served with fresh vegetables or your choice of meat.", price: "Rs190" },
            { name: "Chicken Hot and Sour", desc: "A spicy and tangy classic packed with shredded chicken, bamboo shoots, and tofu.", price: "Rs190" },
        ]
    },
    {
        category: "Sekuwa",
        items: [
            { name: "Mutton Sekuwa 1Kg", desc: "Succulent cubes of goat meat marinated in traditional spices and charcoal-grilled to smoky perfection.", price: "Rs2125" },
            { name: "Pork Sekuwa 1Kg", desc: "Juicy pork chunks infused with Himalayan herbs and flame-grilled for an authentic rustic flavor.", price: "Rs1090" },
            { name: "Chicken Sekuwa 1Kg", desc: "Tender boneless chicken marinated in a secret spice blend and roasted over an open fire.", price: "Rs970" },
            { name: "Chicken Wings 1kg", desc: "Crispy on the outside, juicy on the inside wings tossed in a savory marinade and grilled.", price: "Rs990" },
            { name: "Chicken Leg Piece 1Kg", desc: "Plump chicken drumsticks marinated overnight and slow-grilled for maximum tenderness.", price: "Rs990" },
            { name: "Whole Fish BBQ", desc: "Fresh whole fish marinated in citrus and local spices, charcoal-grilled until flaky and smoky.", price: "Rs1090" },
        ]
    },
    {
        category: "Mo:Mo",
        items: [
            { name: "Veg Momo Steam", desc : " veg momo with fresh greens", price : "Rs135" },
            { name: "Chicken Momo Steam", desc : "spices chicken and lots of love", price : "Rs170" },
            { name: "Chicken C Momo", desc: "spicy sauce, spices and chichken momo", price : "Rs195" }
        ]
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
