const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

//using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch(
    "https://candaan-api.vercel.app/api/text/random",
    config
  );

  const data = await res.json();

  jokeEl.innerHTML = data.data;
}

//Using .then() method

// function generateJoke() {
//    const config = {
//      headers: {
//        Accept: "application/json",
//      },
//    };

//   fetch("https://candaan-api.vercel.app/api/text/random", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.data;
//     });
//  }
