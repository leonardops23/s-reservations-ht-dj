import countries from "world-countries";

const fomattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}));

const useCountries = () => {
  const getAll = () => fomattedCountries;

  const getByValue = (value: string) => {
    return fomattedCountries.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
}

export default useCountries
