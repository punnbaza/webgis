import React ,{useRef,useEffect} from 'react'
import {loadModules} from 'esri-loader'
function Map() {
    const MapEl = useRef(null)
    useEffect(
        ()=>{
            let view;

        loadModules(["esri/views/MapView", "esri/WebMap", "esri/layers/GeoJSONLayer"],{
            css:true
        }).then(([MapView,WebMap,GeoJSONLayer])=>{
            const webmap = new WebMap({
                basemap: 'topo-vector'
            })
            view = new MapView({
                map: webmap,
                center: [102 ,7],
                zoom: 5,
                container : MapEl.current
            })
            const geojsonLayer = new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/data.geojson"
                        });
            webmap.add(geojsonLayer)
        })
        return()=>{
            if(!!view){
                view.destroy()
                view = null
            }
        }
        })
    return (
        <div style = {{height:800}} ref = {MapEl}>
        </div>
    )
}

export default Map;