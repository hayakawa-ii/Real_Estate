import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '71ca163cadmsh58528c0d5ba26cdp109b92jsnd92fb5f17795'
          }
    })
    return data
}
