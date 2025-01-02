export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value)
    };

    const sortContries = (value) => {
        const sortContries = [...countries].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        });

        setCountries(sortContries);
    };



    return <section className="section-searchFilter container">

        <input type="text" placeholder="search" value={search} onChange={handleInputChange} />

        {/* Asc des filter */}
        <button onClick={() => sortContries("asc")}>Asc</button>


        <button onClick={() => sortContries("des")}>Desc</button>





        {/* filter region   */}
        <div>
            <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
        </div>
    </section>
};