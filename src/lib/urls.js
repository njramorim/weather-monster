export const MAPS_HOST = 'https://www.google.com/maps/place';
export const MAPS_URL = (lat, long) => `${MAPS_HOST}/${lat}+${long}`;
export const WEATHER_ICON = icon =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;
