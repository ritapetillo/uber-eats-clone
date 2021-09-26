export const menuItems: Array<MenuItem> = [
  {
    id: 1,
    name: "Margherita",
    price: 16,
    description: "Tomato, mozzarella, basil",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/520px-Pizza_Margherita_stu_spivack.jpg",
    variations: [
      {
        id: 1,
        name: "12 inches",
        cost: 0,
      },
      {
        id: 2,
        name: "14 inches",
        cost: 4,
      },
      {
        id: 3,
        name: "16 inches",
        cost: 6,
      },
    ],
  },
  {
    id: 2,
    name: "Spinach Ravioli",
    price: 18,
    description: "Spinach ravioli, ricotta, butter, sage",
    image_url:
      "https://www.schaer.com/sites/default/files/styles/header_large/public/2016-08/1119_Ravioli%20mit%20Ricotta%20und%20Spinat.webp?itok=6gMgEc7I",
    variations: [
      {
        id: 1,
        name: "Regular",
        cost: 0,
      },
      {
        id: 2,
        name: "Whole Wheat",
        cost: 2,
      },
      {
        id: 3,
        name: "Gluten Free",
        cost: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Rigatoni alla Bolognese",
    price: 21,
    description: "Meat sauce",
    image_url:
      "https://fortheloveofcooking.net/wp-content/uploads/2018/09/Rigatoni-with-Slow-Simmered-Bolognese-Sauce-9678.jpg",
    variations: [
      {
        id: 1,
        name: "Regular",
        cost: 0,
      },
      {
        id: 2,
        name: "Whole Wheat",
        cost: 2,
      },
      {
        id: 3,
        name: "Gluten Free",
        cost: 2,
      },
    ],
  },
  {
    id: 4,
    name: "Chicken Milanese",
    price: 27,
    description: "Breaded, lemon arugula, tomato, basil",
    image_url:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2019_07/1409295/anthony-scottos-chicken-milanese-today-main-190211-04.jpg",
    variations: [
      {
        id: 1,
        name: "Regular",
        cost: 0,
      },
      {
        id: 2,
        name: "Gluten Free",
        cost: 2,
      },
      {
        id: 3,
        name: "Vegan (Seitan)",
        cost: 8,
      },
    ],
  },
];

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  variations?: Array<Variation>;
}

export interface Variation {
  id: number;
  name: string;
  cost: number;
}
