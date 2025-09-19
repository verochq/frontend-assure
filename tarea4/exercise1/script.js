const data = async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=La%20Paz&appid=b6907d289e10d714a6e88b30761fae22"
  );
  const data = await response.json();
  return data;
};

console.log(data());
