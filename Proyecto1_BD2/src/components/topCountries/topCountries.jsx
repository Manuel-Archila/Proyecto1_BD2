import { useState, useEffect, useRef} from 'react'
import './topCountries.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Número de por país',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#10A19D',
        '#540375',
        '#FF0D37',
        '#FF7000',
        '#FFBF00',
      ],
      borderColor: [
        '#10A19D',
        '#540375',
        '#FF0D37',
        '#FF7000',
        '#FFBF00',
      ],
      borderWidth: 1,
    },
  ],
};

const parseData = (dataCountries, dataVisual, setDataVisual) => {
  const labels = []
  const values = []
  dataCountries.current.map((element) => {labels.push(element._id); values.push(element.count)})
  const dataNew = data
  dataNew.datasets[0].data = values
  dataNew.labels = labels
  setDataVisual(dataNew)
}


const TopCountries = ({ clickTweet }) => {

  const dataCountries = useRef([])
  const [dataVisual, setDataVisual] = useState()

  const getData = async () => {
    const url = 'http://localhost:5000/countries/'
    const user = "August Goodwin"
    const response = await fetch(url, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json', 
        'username': user
      }
    })
    const responseJson = await response.json()
    dataCountries.current = responseJson
    parseData(dataCountries, dataVisual, setDataVisual)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
      <div className="container-hashtags">
        <div className="header-doughnut">
          Los 5 países que más interactúan contigo
        </div>
        <div className="doughnut-container">
          {dataVisual && <Doughnut data={dataVisual} />}
        </div>
      </div>
  )
}

export default TopCountries