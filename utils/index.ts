// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "efb4a16b20mshc7b185c91c8261bp1ede1cjsn0ec15909e7af",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "efb4a16b20mshc7b185c91c8261bp1ede1cjsn0ec15909e7af",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
