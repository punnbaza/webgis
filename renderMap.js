import React ,{useRef,useEffect} from 'react'
import {loadModules} from 'esri-loader'



function Map(props) {
    const myId = props.myId;
    const MapEl = useRef(null);
    console.log('choose: '+myId);

    useEffect(
        ()=>{
            let view;

        loadModules(["esri/views/MapView", "esri/WebMap", "esri/layers/GeoJSONLayer","esri/symbols/WebStyleSymbol"],{
            css:true
        }).then(([MapView,WebMap,GeoJSONLayer,WebStyleSymbol])=>{
            const webmap = new WebMap({
                basemap: 'satellite'
            })
            view = new MapView({
                map: webmap,
                center: [100.31,13.74],
                zoom: 12,
                container : MapEl.current
            })
            
            
            

            if(myId === "June2020"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202006_lalong.geojson"
                            });
                webmap.add(geojsonLayer)
                
                
            }
            else if(myId === "July2020"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202007_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }    
            else if(myId === "August2020"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202008_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "September2020"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202009_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "October2020"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202010_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "November2020"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202011_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "December2020"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202012_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "January2021"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202101_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "February2021"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202102_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "March2021"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202103_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            } 
            else if(myId === "April2021"){
                
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202104_lalong.geojson"
                    
                            });
                webmap.add(geojsonLayer)  
            }
                                 
            else{
                
            
            }
            
            
            const addpipe = new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/pipe_line.geojson",
                
                        });
            webmap.add(addpipe)

            

            

        })
        return()=>{
            if(!!view){
                view.destroy()
                view = null
            }
        }
        })
    return (
        <div style = {{height:550}} ref = {MapEl}>
                     
        </div>
    )
}

export default Map;