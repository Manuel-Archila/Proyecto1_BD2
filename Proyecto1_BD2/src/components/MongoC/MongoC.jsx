import { useEffect , useRef, useState} from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { color } from "@mui/system";



const Mongo1 = ({chartID,title}) => {

  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-project-0-cmdyi",
    showAttribution: false
  });
  
  const salesChart = sdk.createChart({
    chartId: chartID
  });

  const chartDiv = useRef(null);
  const [rendered, setRendered] = useState(false);
  const [chart] = useState(sdk.createChart({chartId: chartID}));

  useEffect(() => {
    chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
    // .catch(() => window.alert("Chart failed to initialise"));
  }, []);
  return (
    <div style={{height: "95%", width:"95%"}}>
      <h2 style={{ color:"black" }}>{title}</h2>
      <div ref = {chartDiv} style={{ height: 350,  backgroundColor:"black"}}></div>
    </div>
  );
}

export default Mongo1;