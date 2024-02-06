const foods = [
  {
    code: 1,
    name: "Bara",

    rating: 5,
    count: 90
    ,
    kind: "Vegetarian",
    serving: "10 pieces",
    price: 300,
    freeDelivery: false,
    enoughFor: 2,
    description: "Bara is a deep-fried lentil cake made from black lentil batter and spices. It has a soft interior with a crispy exterior.",
    img: "https://i.ytimg.com/vi/jKpqZxgTGBk/maxresdefault.jpg",
    category: "Breakfast"
  },
  {
    code: 2,
    name: "Sekuwa",
//ghjjg
    rating: 5,
    count: 80
    ,
    kind: "Non-Vegetarian",
    serving: "4 skewers",
    price: 500,
    freeDelivery: false,
    enoughFor: 1,
    description: "Sekuwa features marinated meat grilled over charcoal fire. Common options are chicken, lamb, pork and buffalo.",
    img: "https://th.bing.com/th/id/OIP.1ClEbTLKC4c5QlH-AlOF6gHaFj?rs=1&pid=ImgDetMain",
    category: "Breakfast"
  },
  {
    code: 3,
    name: "Chhurpi",

    rating: 4,
    count: 70
    ,
    kind: "Vegetarian",
    serving: "100 grams",
    price: 100,
    freeDelivery: true,
    enoughFor: 1,
    description: "Hard cheese made from leftover curd from butter and paneer production. It is creamy white or light brown in color.",
    img: "https://th.bing.com/th/id/OIP.WmTvTAfzw0PDCdNVWSqxbwHaHa?rs=1&pid=ImgDetMain",
    category: "Breakfast"
  },
  {
    code: 4,
    name: "Sel Roti",

    rating: 4,
    count: 110
    ,
    kind: "Vegetarian",
    serving: "10 pieces",
    price: 400,
    freeDelivery: false,
    enoughFor: 3,
    description: "A sweet ring-shaped rice flour bread fried in ghee until crispy golden brown. It is made specially for festivals.",
    img: "https://th.bing.com/th/id/OIP.j98MkQe30UgJxr_Ximv8QQHaEJ?rs=1&pid=ImgDetMain",
    category: "Breakfast"
  },
  {
    code: 5,
    name: "Chataamari",

    rating: 4,
    count: 100
    ,
    kind: "Vegetarian",
    serving: "1 plate",
    price: 200,
    freeDelivery: true,
    enoughFor: 1,
    description: "Rice flour crepe with meat/veggie topping. The crepe is cooked on a hot pan and topped as per choice.",
    img: "https://th.bing.com/th/id/R.bb633acc09cad3a875e7679813d80da5?rik=OD2%2byJSH%2fNzrfw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-WXWcg4bmqPA%2fVaVWkGFHQOI%2fAAAAAAAAAyc%2fDziuYXRiW_E%2fs1600%2fIMG_3562_E.jpg&ehk=cINTd8h943%2bA6otBy6yxpNAU4Ec0vkY2oESS%2f8JBQCk%3d&risl=&pid=ImgRaw&r=0",
    category: "Breakfast"
  },
  {
    code: 6,
    name: "Kwati",

    rating: 4,
    count: 80
    ,
    kind: "Vegetarian",
    serving: "1 bowl",
    price: 300,
    freeDelivery: false,
    enoughFor: 1,
    description: "A thick soup made by mixing 9 types of beans sprouted wheat & rice. It has a unique flavor and aroma.",
    img: "https://pulses.org/images/com_yoorecipe/cropped-Sikkim_kwati-1243.jpg",
    category: "Breakfast"
  },
  {
    code: 7,
    name: "Yomari",

    rating: 4,
    count: 70
    ,
    kind: "Vegetarian",
    serving: "2 pieces",
    price: 200,
    freeDelivery: false,
    enoughFor: 1,
    description: "Sweet dumpling made of rice flour filled with molasses/chaku. Shape resembles shrine and eaten during Yomari Punhi.",
    img: "https://th.bing.com/th/id/OIP.Q3My3Lyic20V7vGNYz_aSwHaEK?pid=ImgDet&w=474&h=266&rs=1",
    category: "Breakfast"
  },
  {
    code: 8,
    name: "Tama Bodi",

    rating: 4,
    count: 60
    ,
    kind: "Vegetarian",
    serving: "1 plate",
    price: 200,
    freeDelivery: true,
    enoughFor: 1,
    description: "Bamboo shoot curry cooked with potatoes and spices served with bodi rice. A traditional Newari cuisine.",
    img: "https://i.pinimg.com/originals/13/f3/f9/13f3f99a74ce897681776c934ac67899.jpg",
    category: "Breakfast"
  },
  {
    code: 9,
    name: "Choila",

    rating: 4,
    count: 100
    ,
    kind: "Non-Vegetarian",
    serving: "250 grams",
    price: 500,
    freeDelivery: false,
    enoughFor: 2,
    description: "Spicy smoked & grilled meat salad served with beaten rice. Popular options are buff (buffalo) & pork choila.",
    img: "https://www.century-foods.com/wp-content/uploads/2021/05/Buff-chhoila-recipe.jpg",
    category: "Breakfast"
  },
  {
    code: 10,
    name: "Dhido",

    rating: 4,
    count: 90
    ,
    kind: "Vegetarian",
    serving: "1 bowl",
    price: 200,
    freeDelivery: true,
    enoughFor: 1,
    description: "Thick porridge made by cooking rice flour or beaten rice in water. Can have meat/veg sides.",
    img: "https://3.bp.blogspot.com/-Wj7DD8tPu4Q/W_ELZeMqevI/AAAAAAAARK8/U1RK-leY5K4DFoBvrPvNzNS4G8MiIRZEgCLcBGAs/w1600/dhido%2Bmeal.jpg",
    category: "Breakfast", 
    popular: true,
  },
  {
    code: 11,
    name: "Dal Bhat",

    rating: 4,
    count: 150
    ,
    kind: "Vegetarian",
    serving: "1 plate",
    price: 400,
    freeDelivery: true,
    enoughFor: 1,
    description: "Mainstay meal of Nepal - steaming rice served with dal (lentils), curried vegetables, pickle, papad. Can have meat side dishes.",
    img: "https://images.mapsofworld.com/travel-blog/Dal-Bhat-603x402.jpg",
    category: "Lunch"
  },
  {
    code: 12,
    name: "Chicken Momo",

    rating: 4,
    count: 180
    ,
    kind: "Non-veg",
    serving: "10 pieces",
    price: 500,
    freeDelivery: false,
    enoughFor: 1,
    description: "Bite-size dumplings filled with vegetables or meat. Steamed or fried. Served with spicy tomato chutney.",
    img: "https://th.bing.com/th/id/OIP.FHmX3vLEDmFes0t9ZRGPnwHaE8?rs=1&pid=ImgDetMain",
    category: "Lunch",
    popular: true,
    special: true, 
  },
  {
    code: 13,
    name: "Chow Mein",

    rating: 5,
    count: 130
    ,
    kind: "Vegetarian/Non-veg",
    serving: "1 plate",
    price: 400,
    freeDelivery: false,
    enoughFor: 1,
    description: "Stir fried noodles with vegetables and choice of chicken/buff/pork. Garnished with lettuce, onion and lemon.",
    img: "https://th.bing.com/th/id/R.ca14b2fdafa40c8740174f83e7a5cea7?rik=0825Sjhol9oNSA&pid=ImgRaw&r=0",
    category: "Lunch",
    popular: true,
    special: true, 
  },
  {
    code: 14,
    name: "Thukpa",

    rating: 4,
    count: 100
    ,
    kind: "Vegetarian/Non-veg",
    serving: "1 bowl",
    price: 300,
    freeDelivery: false,
    enoughFor: 1,
    description: "Noodle soup garnished with veggies/meat along with chillies, spring onion and coriander leaves.",
    img: "https://th.bing.com/th/id/OIP.9BLlR6U0MSdYQNk5-63aLgHaE8?rs=1&pid=ImgDetMain",
    category: "Lunch"
  },
  {
    code: 15,
    name: "Thali Set",

    rating: 4,
    count: 110
    ,
    kind: "Vegetarian/Non-veg",
    serving: "1 plate",
    price: 600,
    freeDelivery: true,
    enoughFor: 1,
    description: "Full course Nepali meal served in sections on a metal plate. Comes with rice, dal, veggies, curry, salad, pickle, papad.",
    img: "https://kellysiew.files.wordpress.com/2014/02/thakali-thali-set.jpg?w=1000",
    category: "Lunch"
  },
  {
    code: 16,
    name: "Khasi ko Masu",

    rating: 4,
    count: 90
    ,
    kind: "Non-Vegetarian",
    serving: "1 plate",
    price: 500,
    freeDelivery: false,
    enoughFor: 1,
    description: "Goat meat curry slow cooked with garlic, ginger, onions and aromatic spices. Medium spicy gravy.",
    img: "https://th.bing.com/th/id/OIP.CoeVcj6bOagpa8EboLpHhwHaLH?rs=1&pid=ImgDetMain",
    category: "Lunch",
    popular: true,
  },
  {
    code: 17,
    name: "Alu Tama",

    rating: 4,
    count: 70
    ,
    kind: "Vegetarian",
    serving: "1 plate",
    price: 300,
    freeDelivery: true,
    enoughFor: 1,
    description: "Simple yet delicious bamboo shoot curry made with potatoes, spices and herbs. Goes well with rice.",
    img: "https://www.crazymasalafood.com/wp-content/images/alu-tama-1.png",
    category: "Lunch",
    popular: true,
  },
  {
    code: 18,
    name: "Sukuti",

    rating: 4,
    count: 80
    ,
    kind: "Non-Vegetarian",
    serving: "150 grams",
    price: 400,
    freeDelivery: false,
    enoughFor: 2,
    description: "Dried shredded meat cooked with spices and herbs. Common options are sukuti ko tarkari (buff sukuti) and pork sukuti.",
    img: "https://www.muncha.com/img/l86291.jpg",
    category: "Lunch",
    popular: true,
    bestSeller: true,
  },
  {
    code: 19,
    name: "Kachila",

    rating: 4,
    count: 100
    ,
    kind: "Non-Vegetarian",
    serving: "250 grams",
    price: 500,
    freeDelivery: false,
    enoughFor: 2,
    description: "Fresh raw meat served with spices, herbs and lemon juice. Common options are fish, goat, pork & buff sadeko.",
    img: "https://2.bp.blogspot.com/-_78oiHaXM5M/VatlzefrmXI/AAAAAAAAAUI/wyyHbJ5TyuY/s1600/FR-NUMTOK.jpg_.jpg",
    category: "Lunch", 
    popular: true
  },
  {
    code: 20,
    name: "Mix Tarkari",

    rating: 4,
    count: 120
    ,
    kind: "Vegetarian",
    serving: "1 plate",
    price: 300,
    freeDelivery: true,
    enoughFor: 1,
    description: "Mix veg curry cooked with garlic, ginger, onions and Nepali homemade spices. Medium spicy gravy goes well with rice.",
    img: "https://1.bp.blogspot.com/-O3PXMem6wHk/XejNunl0VhI/AAAAAAAAAbw/ei7Xs0z3ClMC9n6VSsqBAbrjQUAmNC4OwCLcBGAsYHQ/s1600/One_Pot_Mixed_Vegetable_Curry_Recipe_in_Electric_Pressure_Cooker_Insta_Pot-4_1600.jpg",
    category: "Lunch", 
    popular: true, 
    bestSeller: true,
  },
  {
    code: 21,
    name: "Chiura",

    rating: 4,
    count: 90
    ,
    kind: "Vegetarian",
    serving: "100 grams",
    price: 100,
    freeDelivery: true,
    enoughFor: 1,
    description: "Beaten rice crispy flakes that can be eaten as a snack by itself or as an accompaniment. Often eaten with curd or tea.",
    img: "https://img3.exportersindia.com/product_images/bc-full/2020/9/7631927/beaten-rice-1601295551-5596066.jpeg",
    category: "Snacks"
  },
  {
    code: 22,
    name: "Bhutwa",

    rating: 4,
    count: 70
    ,
    kind: "Vegetarian",
    serving: "100 grams",
    price: 200,
    freeDelivery: false,
    enoughFor: 2,
    description: "Snack made from soybean. Soybeans are soaked, sliced, seasoned and stir-fried to perfection.",
    img: "https://th.bing.com/th/id/R.af29ef8abd5e1d2ccb99e2d7690909b7?rik=ozl0V7tEKpE%2bWQ&riu=http%3a%2f%2fcookeryshow.com%2fwp-content%2fuploads%2f2018%2f08%2fsoya-chunks-fry-healthy-easy-soy.jpg&ehk=hHpbQ5wU4K39bHCRWFgcquKZ2B0u1S5FZv8j8QfFmzE%3d&risl=&pid=ImgRaw&r=0",
    category: "Snacks"
  },
  {
    code: 23,
    name: "Somosa",

    rating: 4,
    count: 80
    ,
    kind: "Vegetarian",
    serving: "5 pieces",
    price: 300,
    freeDelivery: false,
    enoughFor: 2,
    description: "Triangular deep-fried pastry with spiced potato filling. Originated from India but very popular snack in Nepal.",
    img: "https://th.bing.com/th/id/R.5e9d914158f20abde43751bc56170aff?rik=IVjPf86fA0ExdQ&riu=http%3a%2f%2fwww.zedamagazine.com%2fwp-content%2fuploads%2f2018%2f06%2fIndian-Food-Samosa-Dish-HD-Wallpapers.jpg&ehk=CIZsxVe5CLA%2fpZXkiCdJuoTdrhucm2fgYqo%2fkXVfHls%3d&risl=&pid=ImgRaw&r=0",
    category: "Snacks", 
    bestSeller: true,
  },
  {
    code: 24,
    name: "Chatpate",

    rating: 4,
    count: 60
    ,
    kind: "Vegetarian",
    serving: "100 grams",
    price: 100,
    freeDelivery: true,
    enoughFor: 1,
    description: "Spicy chickpea flour noodles tossed with onions, spices & herbs. Tangy & spicy taste.",
    img: "https://1.bp.blogspot.com/-DfS75pl_vvk/YQ1kGol8RqI/AAAAAAAAACg/MAqyLZll0KUcFqx2nUNT16ogiCTCZei0QCLcBGAsYHQ/w1200-h630-p-k-no-nu/IMG_20210806_113004.jpg",
    category: "Snacks", 
    bestSeller: true,
  },
  {
    code: 25,
    name: "Mixed Nuts",

    rating: 4,
    count: 70
    ,
    kind: "Vegetarian",
    serving: "100 grams",
    price: 200,
    freeDelivery: false,
    enoughFor: 2,
    description: "Roasted and spiced nuts make a great snack. Often consists of cashews, peanuts, almonds coated in herbs & spices.",
    img: "https://th.bing.com/th/id/OIP.s2vpIzxpYw1Nzel7eJE7xQHaHa?rs=1&pid=ImgDetMain",
    category: "Snacks"
  },
  {
    code: 26,
    name: "Biryani",

    rating: 5,
    count: 70
    ,
    kind: "Vegeterian/Non-Vegetarian",
    serving: "1 plate",
    price: 350,
    freeDelivery: false,
    enoughFor: 2,
    description: "Roasted and spiced nuts make a great snack. Often consists of cashews, peanuts, almonds coated in herbs & spices.",
    img: "https://as1.ftcdn.net/v2/jpg/04/41/20/18/1000_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg",
    category: "Dinner",
    topRated: 'true'
  },
  {
    code: 27,
    name: "Spicy Fried Chicken",

    rating: 5,
    count: 70
    ,
    kind: "Vegetarian",
    serving: "100 grams",
    price: 200,
    freeDelivery: false,
    enoughFor: 2,
    description: "Roasted and spiced nuts make a great snack. Often consists of cashews, peanuts, almonds coated in herbs & spices.",
    img: "https://divascancook.com/wp-content/uploads/2015/01/IMG_0213.jpg",
    category: "Dinner",
    topRated: 'true'
  },
  {
    code: 28,
    name: "Newari Khaja Set",

    rating: 5,
    count: 70
    ,
    kind: "Vegetarian",
    serving: "100 grams",
    price: 200,
    freeDelivery: false,
    enoughFor: 2,
    description: "Roasted and spiced nuts make a great snack. Often consists of cashews, peanuts, almonds coated in herbs & spices.",
    img: "https://english.onlinekhabar.com/wp-content/uploads/2019/05/Paalcha-Samay-Baji.jpg",
    category: "Dinner",
    topRated: 'true'
  }
]
export default foods;