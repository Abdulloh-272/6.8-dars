document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  const input = document.querySelector("#input");
  const userInput = document.querySelector("#inputuser");

  const minValue = parseInt(input.value) || 30;
  // const userIdval = userInput.value;
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    const users = data.users;
    console.log(users);

    const usersFilter = users.filter((value) => {
      return value.age > minValue;
    });

    // const usersID = users.filter((value) => {
    //   // return value.id >= userIdval;

    // });

    myFunc(usersFilter);
  });

  function myFunc(user, userId) {
    const cardList1 = document.querySelector(".users1");

    const cardList = document.querySelector(".users");

    // cardList1.textContent = "";
    cardList.textContent = "";

    // userId.forEach((item) => {
    //   const userCard = document.createElement("div");
    //   const h2 = document.createElement("h2");
    //   const h3 = document.createElement("h2");
    //   const h4 = document.createElement("h2");
    //   const h5 = document.createElement("h2");
    //   const h6 = document.createElement("h3");

    //   h2.textContent = `${item.firstName} ${item.lastName} `;
    //   h3.textContent = item.phone;
    //   h4.textContent = item.university;
    //   h5.textContent = item.age;
    //   h6.textContent = "ID:" + " " + item.id;

    //   userCard.classList.add(
    //     "border-2",
    //     "border-black",
    //     "rounded-lg",
    //     "w-[300px]",
    //     "h-[200px]",
    //     "text-xl",
    //     "font-semibold",
    //     "flex",
    //     "flex-col",
    //     "justify-center",
    //     "gap-2",
    //     "px-5"
    //   );

    //   userCard.append(h2, h3, h4, h5, h6);
    //   cardList1.append(userCard);
    // });
    user.forEach((item) => {
      const card = document.createElement("div");
      // const userh2 = document.createElement("h2");
      // const cardh2 = document.createElement("h2");

      const h2 = document.createElement("h2");
      const h3 = document.createElement("h2");
      const h4 = document.createElement("h2");
      const h5 = document.createElement("h2");
      const h6 = document.createElement("h3");

      // userh2.textContent = "User Limiti:" + " " + userInput.value;

      // cardh2.textContent = input.value + " " + "Yoshdan kattalr";

      // userh2.classList.add("font-bold", "text-2xl");
      h2.textContent = `${item.firstName} ${item.lastName} `;
      h3.textContent = item.phone;
      h4.textContent = item.university;
      h5.textContent = item.age;
      h6.textContent = "ID:" + " " + item.id;

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
  }
});

// async function usresFilter() {
//   let response = await fetch("https://dummyjson.com/users");
//   let data = await response.json();
//   const usersData = data.users;
//   console.log(usersData);

//   // usersLoop(data);
// }

// function usersLoop(users) {
//   users.forEach((element) => {
//     const h2 = document.createElement("h2");
//     const h3 = document.createElement("h2");
//     const h4 = document.createElement("h2");
//     const h5 = document.createElement("h2");
//   });
// }
