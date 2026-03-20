import axios from 'axios'

export const getWeather = async () => {
  try {
    const response = await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=-12.97&longitude=-38.50&daily=precipitation_probability_max&timezone=America%2FBahia'
    )

    const chance = response.data.daily.precipitation_probability_max[0]

    if (chance > 50) {
      return 'Previsão de chuva para este dia'
    } else {
      return 'Sem previsão de chuva para este dia'
    }
  } catch {
    return 'Clima indisponível'
  }
}