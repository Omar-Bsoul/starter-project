// GET https://api.service.com/countries -> CountriesController.Get();

class CountriesClient {
  countries = [
    { id: 1, displayName: "Europe" },
    { id: 2, displayName: "Asia" },
    { id: 3, displayName: "North America" },
    { id: 4, displayName: "South America" },
  ];

  getAll() {
    // in-case of existing server
    // return fetch("https://api.service.com/countries").then((res) => res.json());

    return new Promise((resolve, reject) => {
      resolve(this.countries);
    });
  }
}

export const countriesClient = new CountriesClient();
