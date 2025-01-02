import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../../api/postApi";
import { Loader } from "./Loader";
import { CountryCard } from "./CountryCard";
import { SearchFilter } from "./SearchFilter";
export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");



  useEffect(() => {
    startTransition(async () => {

      const res = await getCountryData();
      setCountries(res.data);

    });
  }, []);

  if (isPending) return <h1><Loader /></h1>

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // main logic about filter
  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));


  return (
    <section className="country-section">
      <SearchFilter search={search} setSearch={setSearch} filter={filter}
        setFilter={setFilter} countries={countries} setCountries={setCountries} />

      <ul className="grid grid-four-cols">{
        filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })
      }
      </ul>
    </section>
  );

};