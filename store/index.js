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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
