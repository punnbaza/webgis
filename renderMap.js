import React ,{useRef,useEffect} from 'react'
import {loadModules} from 'esri-loader'





function Map(props) {
    const myId = props.myId;
    const MapEl = useRef(null);
    console.log('choose: '+ myId);

    /*const template_point = {
        title: "Attribute",
        content: "ค่าแรงดัน: {RASTERVALU}",
        
     
          
      
    };*/

    const color_point = {
      "type": "simple",
      "symbol": {
        "type": "picture-marker",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Circle-icons-water.svg/1024px-Circle-icons-water.svg.png",
        "width": "18px",
        "height": "18px"
      }
    }
    
      

    
   

    /*const color_point = {
        type: "simple",
        symbol: {
          type: "simple-marker",
          color: "red",
          size: "8px",
          outline: {
            color: "white"
          }
        },
        visualVariables: [{
          type: "size",
          

        }]
    };*/

   
    

    useEffect(
        ()=>{
            let view;

        loadModules(["esri/views/MapView", "esri/WebMap", "esri/layers/GeoJSONLayer","esri/layers/MapImageLayer","esri/layers/FeatureLayer","esri/widgets/Search","esri/widgets/LayerList","esri/widgets/CoordinateConversion","esri/widgets/Locate","esri/widgets/ElevationProfile","esri/layers/ImageryLayer","esri/WebScene", "esri/views/SceneView"],{
            css:true
        }).then(([MapView,WebMap,GeoJSONLayer,MapImageLayer,FeatureLayer,Search,LayerList,CoordinateConversion,Locate,ElevationProfile,ImageryLayer,WebScene,SceneView])=>{
            
            
            /*const layer = new ImageryLayer({
                url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
                format: "jpgpng" // server exports in either jpg or png format
              });*/

            
            
            
            const webmap = new WebMap({
                basemap: "streets-navigation-vector",
                //layers:layer 
                
            })
            view = new MapView({
                map: webmap,
                center: [100.31,13.74],
                zoom: 12,
                container : MapEl.current,
                   
            }) 
            
            
      
            const trailheadsLabels = {
              symbol: {
                type: "text",
                color: "#FFFFFF",
                haloColor: "#5E8D74",
                haloSize: "2px",
                font: {
                  size: "12px",
                  family: "Noto Sans",
                  style: "italic",
                  weight: "normal"
                }
              },
      
              labelPlacement: "above-center",
              labelExpressionInfo: {
                expression: "$feature.RASTERVALU"
              }
            };
      
            // Create the layer and set the renderer
            
      
            

           



            if(myId === "June2020"){

                const trailheads = new GeoJSONLayer({
                  url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202006_lalong.geojson",
                  renderer: color_point,
                  labelingInfo: [trailheadsLabels]
                });
                webmap.add(trailheads)


            }
            else if(myId === "July2020"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202007_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  
            }    
            else if(myId === "August2020"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202008_latlong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "September2020"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202009_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "October2020"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202010_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "November2020"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202011_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  


            }
            else if(myId === "December2020"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202012_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "January2021"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202101_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "February2021"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202102_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "March2021"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202103_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]
                            });
                webmap.add(geojsonLayer)  
            } 
            else if(myId === "April2021"){

                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202104_lalong.geojson",
                    //popupTemplate: template_point,
                    renderer: color_point,
                    labelingInfo: [trailheadsLabels]

                            });
                webmap.add(geojsonLayer)  
            }

            else{
            }
            /*const addra =  new MapImageLayer({
                url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
                sublayers: { title: "Slope",
                    source: {
                        type: "data-layer",
                        dataSource: {
                            type: "raster",
                            workspaceId: "MyDatabaseWorkspaceIDSSR2",
                        dataSourceName: "slope"
                        }
                  }
                }
            });*/
            const addpipe = new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/pipe_line.geojson",
                renderer: {
                    type: "simple",
                    symbol: {
                      type: "simple-fill",
                      color: [0, 0, 0, 0],
                      outline: {
                        color: [47, 84, 129, 1],
                        width: 0.8,
                      }
                    }
                  }

            });
            /*map.layer = new FeatureLayer({
                labelinginfo : labelclass
            })*/

            //layer.labelingInfo = [labelclass]
            

            /*const layerList = new LayerList({
        
                listItemCreatedFunction: function(event) {
                  const item = event.item;
                  if (item.layer.type !== "simple") {
                    // don't show legend twice
                    item.panel = {
                      content: "legend",
                      open: true
                    };
                  }
                }
              });
            view.ui.add(layerList, "bottom-right"); */
            
            
            webmap.add(addpipe);
            view.ui.add(
                new Search({
                  view: view
                }),
                "top-right"
              );
            var ccWidget = new CoordinateConversion({
                view: view
              });
      
            view.ui.add(ccWidget, "bottom-left");

            var locateBtn = new Locate({
                view: view
              });
      
              // Add the locate widget to the top left corner of the view
            view.ui.add(locateBtn, {
                position: "top-left"
              });
            
            
            //add elv view

            /*const elevationProfile = new ElevationProfile({
              view: view,
              profiles: [{
                type: "ground",          // autocasts as new ElevationProfileLineGround(),
                color: "red",            // display this profile in red
                title: "World elevation" // with a custom label
              }]
            });
      
              // add the widget to the view
              view.ui.add(elevationProfile, "top-right"); */

            
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