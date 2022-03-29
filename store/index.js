export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Lens',
      description: 'The fast f/1.8D aperture of this 50 mm lens creates a beautiful bokeh or background blur to let you capture the beauty of the indoor and outdoor without flash, even in the low-light settings.',
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/one.jpg')
    },
    {
      id: 2,
      title: 'Personal Computer',
      description: '11.6 inch HD LED Backlit Anti Glare Display (250 nits Brightness, 45% NTSC Color Gamut, 73% Screen-to-body Ratio, IPS-level Panel). Light Laptop without Optical Disk Drive. 7 Days Replacement Policy',
      price: 35,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/two.jpg')
    },
    {
      id: 3,
      title: 'Drone',
      description: 'Dual-vision and ToF sensors appear on all six sides of the aircraft, keeping it and your mission safe. The built-in ADS-B receiver provides timely warnings of any incoming crewed aircraft nearby.',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/three.jpg')
    },
    {
      id: 4,
      title: 'Brownie',
      description: 'Four built-in antennas support OcuSync 3 Enterprise, which enables triple-channel 1080p video transmission, and seamless swapping between input feeds, even in complex environments.',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/four.jpg')
    },
    {
      id: 5,
      title: 'Tripod',
      description: 'Adjustable Aluminium Alloy Tripod Stand Holder for Mobile Phones & Camera, 360 mm -1020 mm, 1/4 inch Screw + Mobile Holder Bracket. This tripod equiped with level tester for good balance',
      price: 35,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/five.jpg')
    },
    {
      id: 6,
      title: 'External Port',
      description: 'USB C Hub Multiport Adapter- 6 in 1 Portable Aluminum Type C Hub with 4K HDMI Output, USB 2.0/3.0 Ports, SD/Micro SD Card Reader Compatible for MacBook Pro, MacBook Air, Type-C Devices',
      price: 110,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/six.jpg')
    },
    {
      id: 7,
      title: 'Mouse',
      description: 'A-10 Wired Gaming Mouse with RGB LED, Lightweight and Durable Design, DPI Upto 2400, Compatible with Windows and MAC. Extra Durable switches and build quality to increase the durability of the mouse',
      price: 50,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/seven.jpg')
    },
    {
      id: 8,
      title: 'Mini Robot',
      description: 'AI-Powered Smart Robot for Kids | STEM Learning & Educational Robot | Interactive Robot with Coding apps + Unlimited Games + programmable. A trustable little robot, with data encryption and strict privacy norms',
      price: 35,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/eight.jpg')
    },
    {
      id: 9,
      title: 'Weight Measure',
      description: 'Multipurpose Portable Electronic Digital Weighing Scale Weight Machine (10 Kg - with Back Light). Wide LCD screen display, easy to read, Automatically locks the reading when data is stable',
      price: 110,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/nine.jpg')
    },
    {
      id: 10,
      title: 'Scope',
      description: 'Monocular Telescope 40x60 High Powered Monocular Scopes Dual Focus Optics Waterproof, Magnification Lens Telescope for Outdoor Hiking, Bird Watching Hunting, Camping',
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/ten.jpg')
    },
    {
      id: 11,
      title: 'External HD',
      description: 'Expansion 1TB External HDD - 6.35 cm (2.5 Inch) USB 3.0 for Windows and Mac with 3 yr Data Recovery Services, Portable Hard Drive (STKHYBDWM1000400) with automatic backup',
      price: 35,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/eleven.jpg')
    },
    {
      id: 12,
      title: 'Use & Throw Camera',
      description: 'Day Light Single Use Camera with 39 Exp Poses. Comes preloaded with 39 exposures per camera. Disposable camera without flash. Range of 1 m to infinity, 32. 8 mm, F10, 1 lens element',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twelve.jpg')
    },
    {
      id: 13,
      title: 'Ipad Mini',
      description: '8MP Wide back camera, 12MP Ultra Wide front camera with Centre Stage. Up to 256GB storage. Stereo speakers. Touch ID for secure authentication. 802.11ac Wi-Fi. Up to 10 hours of battery life',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/thirteen.jpg')
    },
    {
      id: 14,
      title: 'Xbox Controller',
      description: 'Experience the modernized design of the Xbox wireless controller, featuring sculpted surfaces and refined Geometry for enhanced comfort during gameplay. Series X/S Wireless Controller + USB-C Cable',
      price: 35,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/fourteen.jpg')
    },
    {
      id: 15,
      title: 'Drone',
      description: ' The first filmmaking drone in the world to integrate an HD video transmission system, 360° rotating gimbal and a 4K camera, as well as the simplicity of app control and other features.',
      price: 110,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/fifteen.jpg')
    },
    {
      id: 16,
      title: 'iPhone 6',
      description: 'Rose Gold Compatible with iPhone with 12 Mega Pixel Camera (32GB Internal Memory). 1 year manufacturer warranty for device and manufacturer warranty for in-box accessories including batteries from the date of purchase',
      price: 50,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/sixteen.jpg')
    },
    {
      id: 17,
      title: 'Gamebox',
      description: 'With motion-control technology, the gamer can truly interact with the game on a personal level, rather than participating as a passive player. Up to four Wii Remote Plus controllers can be connected at once.',
      price: 35,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/seventeen.jpg')
    },
    {
      id: 18,
      title: 'Xbox Static',
      description: 'Experience the modernized design of the Xbox wireless controller, featuring sculpted surfaces and refined Geometry for enhanced comfort during gameplay. Series X/S Wireless Controller + USB-C Cable',
      price: 110,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/eighteen.jpg')
    },
    {
      id: 19,
      title: 'Aesthetic Chair',
      description: "Nisse Stainless Steel Multipurpose Epoxy Powder Coating Folding Chair for Office Use, Kids, Home. You can fold the chair, so it takes less space when you're not using it. You can hang the chair on a hook on the wall.",
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/nineteen.jpg')
    },
    {
      id: 20,
      title: 'Flash Drive',
      description: 'The 2-in-1 Pendrive for Mobile with a reversible USB Type-C and a traditional Type-A connector. Seamlessly move content between your USB Type-C smartphone, tablets and Macs and USB Type-A computers.',
      price: 35,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty.jpg')
    },
    {
      id: 21,
      title: 'Coffee',
      description: 'Start your day right with the first sip of this classic that awakens your senses to new opportunities. Premium frothy instant coffee right at home; a must try for all coffee-lovers. Flavor: Plain',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-one.jpg')
    },
    {
      id: 22,
      title: 'Airpods Pro',
      description: 'Active noise cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you. Sweat and water resistant. Adaptive EQ automatically tunes music to the shape of your ear',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-two.jpg')
    },
    {
      id: 23,
      title: 'Bulb',
      description: 'WiFi Smart LED Bulb with Music Sync Compatible with Amazon Alexa and Google Assistant ( Warm White/Neutral White/White, Standard ). 16 Million Colour - Explore endless lighting possibilities with 16mn Colour Options',
      price: 7,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-three.jpg')
    },
    {
      id: 24,
      title: 'Old Book',
      description: 'The 200+ activities book is ideal to introduce math, language and logic to preschoolers. The colourfully illustrated pages have been designed in a creative manner to teach a variety of skills',
      price: 10,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-four.jpg')
    },
    {
      id: 25,
      title: 'Soap Dispenser',
      description: 'Dispenser with Pump for Bathroom, Kitchen and Wash-Basin, 380ml (Black). SMOOTH FINISH: The modern ceramic soap dispenser has an elegant matte finish. Its vibrant and fashionable look will add a touch of luxury',
      price: 13,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-five.jpg')
    },
    {
      id: 26,
      title: 'Bottle',
      description: 'Frosty Plastic Food Grade Fridge Square Water Bottle Set(6 Pieces, 1L,Assorted). Hygienic bottle: the bottle is made of 100% food grade polypropylene (pp) material from source ensuring safe drinkable water.',
      price: 5,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-six.jpg')
    },
    {
      id: 27,
      title: 'Gift Bag',
      description: 'Handmade Party Favour Paper Carry Bag (Multicolour) -Set of 5. Product Dimension : H-10 x L-8 x W-3. Paper shopping bag with twisted paper carrying handles for disposable transport of retail purchase items.',
      price: 15,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-seven.jpg')
    },
    {
      id: 28,
      title: 'Solid State Drive',
      description: '240 GB, SSD write cache is enabled,Low power consumption, Laptop and Desktop. 2.5Inch,/SATA 6 Gb/s interface, ATA modes supported. Sequential 128KB Read and Write speeds up to 540MB/s and 500MB/s',
      price: 80,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-eight.jpg')
    },
    {
      id: 29,
      title: 'Pillows',
      description: '1 Piece Microfibre Pillow. Pillow is the perfect gift to use in sofa, couch, chair, bed, school, for travel and naps. The rich sheen gives your space a sense of splendor and opulence within you',
      price: 10,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/twenty-nine.jpg')
    },
    {
      id: 30,
      title: 'Lightning Port',
      description: 'This cable comes with charging & Data sync function. TPE + Nylon Material to make sure that the life of the cable is enhanced significantly. 1.2M POR-1080 Fast Charging 3A 8 Pin USB Cable with Charge & Sync Function',
      price: 20,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/thirty.jpg')
    },
    {
      id: 31,
      title: 'Nike Shoe',
      description: 'The Nike Quest 3 delivers functional versatility for the committed runner. Its streamlined design features layers of material to help you stay cool and secure. Increased foam heights give you more responsiveness.',
      price: 90,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/thirty-one.jpg')
    },
    {
      id: 32,
      title: 'Over Ear Headphone',
      description: 'Wireless Bluetooth Over The Ear Headphones with Mic. Tap into instant wireless connectivity with the latest Bluetooth V5.0. Its 50mm dynamic drivers help pump out immersive audio all day long',
      price: 100,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/thirty-two.jpg')
    },
    {
      id: 33,
      title: 'Bike',
      description: 'Bolt Series , Steel MTB 27.5 Mountain Cycle - Disc Brake with PAN India Installation and OneFitPlus App Tracking. The High-quality double disc brakes on both front and rear wheels ensure stable and quick braking',
      price: 410,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/thirty-three.jpg')
    },
    {
      id: 34,
      title: 'Pencil Bundle',
      description: 'Art Bundle Multicolor Cartoon Printed Pencil Drawing Item (Pack of-24 Mixed Pencil). Package includes combo packs assorted designs. A perfect birthday return gift for every kid.',
      price: 10,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/thirty-four.jpg')
    },
    {
      id: 35,
      title: 'Ipod Classic',
      description: 'Your favourite music, gaming and AR apps in your pocket. A10 Fusion chip for up to 2x faster performance, up to 3x faster graphics. Group FaceTime with family and friends. Connect using Wi-Fi and Bluetooth',
      price: 240,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/thirty-five.jpg')
    },
    {
      id: 36,
      title: 'iPhone 4',
      description: '8MP primary camera with true tone flash, auto focus, geo tagging, face detection burst mode and 1.2MP front facing camer. 10.16 centimeters (4-inch) multi-touch retina capacitive touchscreen with 640 x 1136 pixels.',
      price: 510,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: require('../static/thirty-six.jpg')
    },
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}
/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
