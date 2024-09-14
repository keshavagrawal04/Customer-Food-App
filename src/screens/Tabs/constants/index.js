import images from "../../../assets/images";
import icons from "../../../assets/icons";

export const categories1 = [
  {name: "Chinese", image: images.chinese},
  {name: "South In", image: images.southIndian},
  {name: "Italian", image: images.italian},
  {name: "Gujrati", image: images.gujrati},
  {name: "Marathi", image: images.marathi},
  {name: "Bihari", image: images.bihari},
  {name: "Jain Food", image: images.jainFood},
  {name: "Rajasthani", image: images.rajasthani},
  {name: "Punjabi", image: images.punjabi},
  {name: "Bangali", image: images.bangali},
];

export const quickPicOptions = [
  {
    id: "nearBy",
    name: "Near By",
  },
  {
    id: "popular",
    name: "Popular",
  },
  {
    id: "bestSeller",
    name: "Best Seller",
  },
];

export const filterOptions = [
  {
    id: "filter",
    name: "Filter",
    icon: true,
    activeIcon: icons.filterLight,
    deactiveIcon: icons.filterDark,
  },
  {
    id: "sortBy",
    name: "Sort By",
    icon: true,
    activeIcon: icons.bottomArrowLight,
    deactiveIcon: icons.bottomArrowDark,
  },
  {
    id: "cuisines",
    name: "Cuisines",
    icon: true,
    activeIcon: icons.bottomArrowLight,
    deactiveIcon: icons.bottomArrowDark,
  },
  {
    id: "pureVeg",
    name: "Pure Veg",
  },
  {
    id: "nonVeg",
    name: "Non Veg",
  },
];

export const whatsInMind = [
  {id: 1, name: "Coffee", image: images.coffee},
  {id: 2, name: "Salad", image: images.salad},
  {id: 3, name: "Juice", image: images.juice},
  {id: 4, name: "Dosa", image: images.dosa},
  {id: 5, name: "Coffee", image: images.coffee},
  {id: 6, name: "Salad", image: images.salad},
  {id: 7, name: "Juice", image: images.juice},
];

export const dishes = [
  {
    name: "Noodles",
    price: "60",
    image: images.noodles,
    distance: "4.5 Km",
    time: "31 mins",
  },
  {
    name: "Chowmein",
    price: "50",
    image: images.noodles,
    distance: "4.5 Km",
    time: "31 mins",
  },
];

export const restaurant = {
  name: "Sam Food Parlor",
  review: "4.5",
  offer: "Flat ₹125 OFF above ₹249",
};
