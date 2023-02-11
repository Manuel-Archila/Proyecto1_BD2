import { useState, useEffect, useRef } from 'react'
import './tweetsPerYear.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const labels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Tweets por año',
        data: labels1.map(() => Math.random(200)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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

const TweetsPerYear = ({ clickTweet }) => {

    const dataCountries = useRef([])
    const [dataVisual, setDataVisual] = useState()

    const getData = async () => {
        const url = 'http://localhost:5000/tweets-per-year/'
        const userid = localStorage.getItem("userId")
        const response = await fetch(url, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json', 
                'userId': userid
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
          <div className="hashtag-header">
            Un vistazo a los tweets que has subido por año
          </div>
          <div className="graph-tweets">
            {dataVisual && <Line data={dataVisual} />}
          </div>
        </div>
    )
}

export default TweetsPerYear