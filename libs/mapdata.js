var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "400", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#C3D6DE",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "yes",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    BOL1291: {
      name: "Cochabamba",
      color: "#A9D0E0",
      description: "275 encuestas (12,6%)"
    },
    BOL1292: {
      name: "Chuquisaca",
      description: "181 encuestas (8,3%)"
    },
    BOL1293: {
      name: "El Beni",
      description: "143 encuestas (6,5%)"
    },
    BOL1936: {
      name: "La Paz y El Alto",
      description: "301 encuestas (13,8%)  La Paz <br> 309 encuestas (14,1%) El Alto <br> 610 encuestas (27,9%) TOTAL",
      color: "#41B6E6"
    },
    BOL1937: {
      name: "Oruro",
      description: "174 encuestas (8%)"
    },
    BOL1938: {
      name: "Pando",
      description: "106 encuestas (4,8%)"
    },
    BOL1939: {
      name: "Potosí",
      description: "177 encuestas (8,1%)"
    },
    BOL1940: {
      name: "Santa Cruz de la Sierra",
      description: "352 encuestas (16,1%)",
      color: "#8FC9E1"
    },
    BOL1941: {
      name: "Tarija",
      description: "168 encuestas (7,7%)"
    }
  },
  locations: {
    "0": {
      lat: "-19.047646",
      lng: "-65.259058",
      name: "Ciudad de Sucre",
      description: "90 hombres <br> 91 mujeres"
    },
    "1": {
      lat: "-15",
      lng: "-68.333333",
      description: "152 hombres <br> 149 mujeres",
      name: "Ciudad de La Paz"
    },
    "2": {
      lat: "-15",
      lng: "-68.4444",
      name: "Ciudad de El Alto",
      description: "154 hombres <br> 155 mujeres"
    },
    "3": {
      lat: "-17.383333",
      lng: "-66.16667",
      name: "Ciudad de Cochabamba",
      description: "135 hombres <br> 140 mujeres"
    },
    "4": {
      lat: "-17.966667",
      lng: "-67.116667",
      name: "Ciudad de Oruro",
      description: "89 hombres <br> 85 mujeres"
    },
    "5": {
      lat: "-19.583333",
      lng: "-65.75",
      name: "Ciudad de Potosi",
      description: "93 hombres <br> 84 mujeres"
    },
    "6": {
      lat: "-21.533333",
      lng: "-64.733333",
      name: "Ciudad de Tarija",
      description: "88 hombres <br> 80 mujeres"
    },
    "7": {
      lat: "-17.8",
      lng: "-63.183333",
      name: "Ciudad de Santa Cruz",
      description: "179 hombres <br> 173 mujeres"
    },
    "8": {
      lat: "-14.829167",
      lng: "-64.901389",
      name: "Ciudad de Trinidad",
      description: "71 hombres <br> 72 mujeres"
    },
    "9": {
      lat: "-11.030556",
      lng: "-68.766667",
      name: "Ciudad de Cobija",
      description: "59 hombres <br> 47 mujeres"
    }
  },
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};