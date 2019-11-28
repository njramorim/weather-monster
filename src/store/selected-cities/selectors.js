export const selectAddedCitiesId = ({ selectedCities }) => {
  const { cities, loading } = selectedCities;
  const citiesId = cities.map(({ cityId }) => cityId);

  return { citiesId, loading };
};

export const selectAddedCities = ({
  selectedCities: { cities, loading, error }
}) => ({ cities, loading, error });
