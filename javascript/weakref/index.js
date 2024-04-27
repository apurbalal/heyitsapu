const generateFetchURL = (country) => country === "all" ? `https://countriesnow.space/api/v0.1/countries` : `https://countriesnow.space/api/v0.1/countries/cities/q?country=${country}`; 
const getCities = (country) => fetch(generateFetchURL(country))
    .then(response => response.json())
  .catch(error => console.log('error', error));
    

const weakrefCache = (fetch) => {
  const map = new Map();
  return async (country) => {
    let ref = map.get(country);
    if (ref?.deref()) {
      console.log("Cache hit");
      return ref.deref();
    } else {
      const data = await fetch(country);
      map.set(country, new WeakRef(data));
      return data;
    }
  }
}

const cachedFetchCities = weakrefCache(getCities);
const fetchCities = () => cachedFetchCities("all");