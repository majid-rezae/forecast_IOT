function Fore   ()  {
    const styleObj = {
      fontSize: 14,
      color: "#4a54f1",
      textAlign: "center",
      paddingTop: "100px",
  }  
      const   selectedDevice = useSelector((state) => state.devicesState.selectedDevice); // Rule 1: call hooks in top-level
  
  //  const selectedDevice = useSelector((state) => state.devicesState.selectedDevice)
   // const   fser  =  "8cf9574000000012"
    const [error, setError] = useState(null);
    const  [isLoaded, setIsLoaded] = useState(false);
    const   [homes, setHomes] = useState([]);

    useEffect(() => {
      setTimeout(() => {
       fetch(`https://iotibti.ddns.net:7999/forecast?dev_eui=${selectedDevice}`)
        .then (res => {
          return res.json();
        })
        .then(result => {
         setIsLoaded( true) ;
         setHomes( result);
        })
        .catch(err => {
           console.log(err.message);
           
           setIsLoaded( true) 
           setError()
        })
       },1000);
     },[]);
   
     return (
         
      <div style={styleObj}  >
       {homes.map(home => <div><h>
       <p>Para data " {home.index.Row_1 } ", a previsão de temperatura esta "{home.forecasting.Row_1 }"C</p>
       <p>Para data " {home.index.Row_2 } ", a previsão de temperatura esta "{home.forecasting.Row_2 }"C</p>
       <p>Para data " {home.index.Row_3 } ", a previsão de temperatura esta "{home.forecasting.Row_3 }"C</p>
       <p>Para data " {home.index.Row_4 } ", a previsão de temperatura esta "{home.forecasting.Row_4 }"C</p>
       <p>Para data " {home.index.Row_5 } ", a previsão de temperatura esta "{home.forecasting.Row_5 }"C</p>
       <p>Para data " {home.index.Row_6 } ", a previsão de temperatura esta "{home.forecasting.Row_6 }"C</p>
       <p>Para data " {home.index.Row_7 } ", a previsão de temperatura esta "{home.forecasting.Row_7 }"C</p>
          </h>  </div>)}

 
   
          
             
           {/*  <p  style={{marginLeft:'40%', marginTop: '60px'}} >
            <p>Choose a device</p>
          <SearchDevice/>   
           </p>
              <p style={styleObj} ><Fore/></p>
                 <p style={styleObj} ><Fore2/></p>    
             */}
                 </div>)   
      
        }
  