// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.querySelector("#btn");
//   const input = document.querySelector("#input");

//   const minValue = input.value;
//   btn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();

//     const users = data.users;
//     console.log(users);

//     const usersFilter = users.filter((value) => {
//       return value.age > minValue;
//     });

//     myFunc(usersFilter);
//   });

//   function myFunc(user, userId) {
//     const cardList1 = document.querySelector(".users1");

//     const cardList = document.querySelector(".users");

//     cardList.textContent = "";

//     user.forEach((item) => {
//       const card = document.createElement("div");

//       const h2 = document.createElement("h2");
//       const h3 = document.createElement("h2");
//       const h4 = document.createElement("h2");
//       const h5 = document.createElement("h2");
//       const h6 = document.createElement("h3");
//       h2.textContent = `${item.firstName} ${item.lastName} `;
//       h3.textContent = item.phone;
//       h4.textContent = item.university;
//       h5.textContent = item.age;
//       h6.textContent = "ID:" + " " + item.id;

//       card.classList.add(
//         "border-2",
//         "border-black",
//         "rounded-lg",
//         "w-[300px]",
//         "h-[200px]",
//         "text-xl",
//         "font-semibold",
//         "flex",
//         "flex-col",
//         "justify-center",
//         "gap-2",
//         "px-5"
//       );
//       card.append(h2, h3, h4, h5, h6);

//       cardList.append(card);
//     });
//   }
// });

//

// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.querySelector("#btn");
//   const input = document.querySelector("#input");
//   const inputUser = document.querySelector("#inputuser");

//   btn.addEventListener("click", async (e) => {
//     e.preventDefault();

//     // Foydalanuvchi kiritgan qiymatlarni raqamga aylantir
//     const inputVal = parseInt(inputUser.value, 10); // Radix 10 bo'lishi kerak
//     const minValue = parseInt(input.value, 10);

//     try {
//       // API dan ma'lumotlarni olish
//       const response = await fetch("https://dummyjson.com/users");
//       const data = await response.json();
//       const users = data.users;

//       console.log(users);

//       // Yoshi va ID bo'yicha filtrlashtirish
//       const filteredUsers = users.filter((user) => {
//         return user.age > minValue && user.id > inputVal;
//       });

//       // Filtrlangan foydalanuvchilarni ko'rsatish
//       myFunc(filteredUsers);
//     } catch (error) {
//       console.error("Xato yuz berdi:", error);
//     }
//   });

//   function myFunc(users) {
//     const cardList = document.querySelector(".users");

//     // Oldingi kartalarni tozalash
//     cardList.textContent = "";

//     users.forEach((user) => {
//       const card = document.createElement("div");

//       const h2 = document.createElement("h2");
//       const h3 = document.createElement("h2");
//       const h4 = document.createElement("h2");
//       const h5 = document.createElement("h2");
//       const h6 = document.createElement("h3");

//       // Kartalar uchun matnlarni sozlash
//       h2.textContent = `${user.firstName} ${user.lastName}`;
//       h3.textContent = user.phone;
//       h4.textContent = user.university;
//       h5.textContent = user.age;
//       h6.textContent = "ID: " + user.id;

//       card.classList.add(
//         "border-2",
//         "border-black",
//         "rounded-lg",
//         "w-[300px]",
//         "h-[200px]",
//         "text-xl",
//         "font-semibold",
//         "flex",
//         "flex-col",
//         "justify-center",
//         "gap-2",
//         "px-5"
//       );

//       card.append(h2, h3, h4, h5, h6);
//       cardList.append(card);
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  const input = document.querySelector("#input");
  const inputUser = document.querySelector("#inputuser");

  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const inputVal = parseInt(inputUser.value, 10); // Radix 10 bo'lishi kerak
    const minValue = parseInt(input.value, 10);

    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      const users = data.users;

      console.log(users);

      // Yosh va ID bo'yicha filtrlash
      const usersFilter = users.filter((user) => {
        return user.age > minValue;
      });

      const userIdfilter = users.filter((user) => {
        return user.id <= inputVal;
      });

      myFunc(usersFilter, userIdfilter);
    } catch (error) {
      console.error("Xato yuz berdi:", error);
    }
  });

  function myFunc(users, userId) {
    const cardList = document.querySelector(".users");
    const cardList1 = document.querySelector(".users1");

    // Har ikki ro'yxatni tozalash
    cardList.textContent = "";
    cardList1.textContent = "";

    // ID bo'yicha filtrlangan foydalanuvchilarni qo'shish
    userId.forEach((user) => {
      const userCard = document.createElement("div");

      const h2 = document.createElement("h2");
      const h3 = document.createElement("h2");
      const h4 = document.createElement("h2");
      const h5 = document.createElement("h2");
      const h6 = document.createElement("h3");

      h2.textContent = `${user.firstName} ${user.lastName}`;
      h3.textContent = user.phone;
      h4.textContent = user.university;
      h5.textContent = user.age;
      h6.textContent = "ID: " + user.id;

      userCard.classList.add(
        "border-2",
        "border-black",
        "rounded-lg",
        "w-[300px]",
        "h-[200px]",
        "text-xl",
        "font-semibold",
        "flex",
        "flex-col",
        "justify-center",
        "gap-2",
        "px-5"
      );
      userCard.append(h2, h3, h4, h5, h6);

      cardList1.append(userCard);
      cardList1.classList.add("border");
    });

    // Yosh bo'yicha filtrlangan foydalanuvchilarni qo'shish
    users.forEach((user) => {
      const card = document.createElement("div");

      const h2 = document.createElement("h2");
      const h3 = document.createElement("h2");
      const h4 = document.createElement("h2");
      const h5 = document.createElement("h2");
      const h6 = document.createElement("h3");
      h2.textContent = `${user.firstName} ${user.lastName}`;
      h3.textContent = user.phone;
      h4.textContent = user.university;
      h5.textContent = user.age;
      h6.textContent = "ID: " + user.id;

      card.classList.add(
        "border-2",
        "border-black",
        "rounded-lg",
        "w-[300px]",
        "h-[200px]",
        "text-xl",
        "font-semibold",
        "flex",
        "flex-col",
        "justify-center",
        "gap-2",
        "px-5"
      );
      card.append(h2, h3, h4, h5, h6);

      cardList.append(card);
    });
    input.value = "";
    inputUser.value = "";
  }
});
