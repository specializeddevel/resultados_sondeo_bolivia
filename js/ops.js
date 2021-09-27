
Chart.defaults.color = 'black'                              
new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'primerGrafico2',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { label: 'Sucre', value: 181, mujeres: 91, hombres: 90 },
        { label: 'La Paz', value: 301, mujeres: 152, hombres: 149 },
        { label: 'El Alto', value: 309, mujeres: 155, hombres: 154 },
        { label: 'Cbba.', value: 275, mujeres: 140, hombres: 135 },
        { label: 'Oruro', value: 174, mujeres: 85, hombres: 89 },
        { label: 'Potosi', value: 177, mujeres: 84, hombres: 93 },
        { label: 'Tarija', value: 168, mujeres: 80, hombres: 88 },
        { label: 'Santa Cruz', value: 352, mujeres: 173, hombres: 179 },
        { label: 'Trinidad', value: 143, mujeres: 72, hombres: 71 },
        { label: 'Cobija', value: 106, mujeres: 47, hombres: 59 },
    ],
    resize:true,
    showPercentage: true,
    dataLabels: true,
});

function varonesMujeresChart(ctx){
                const chart = new Chart(ctx, {
                    type: 'bar', 
                    plugins: [ChartDataLabels],
                    data: {                        
                        labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],                        
                        datasets: [
                        {
                            label: 'Hombres',
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor:   'rgb(54, 162, 235)',
                            borderWidth: 1,
                            data: [49.7,49.5,49.8,49.1,51.1,52.5,52.4,50.9,49.7,55.7],
                        },                        
                        {
                            label: 'Mujeres',
                            backgroundColor:  'rgba(255, 99, 132, 0.5)',
                            borderColor: 'rgb(255, 99, 132)',
                            borderWidth: 1,
                            data: [50.3,50.5,50.2,50.9,48.9,47.5,47.6,49.1,50.3,44.3],          
                            
                        },
                    ]
                    },
                     options: {
                        responsive: true,               
                        plugins: {
                            datalabels: {
                                anchor: 'end',
                                align: 'top',
                                formatter: Math.round,
                                font: {
                                    size:11,
                                },
                                formatter: (val) => (`${val}%`),
                                color: 'black',
                            }, 
                            title: {
                                display: true,  
                                text: 'Distribución de la población por Género', 
                                font: {
                                    size: 24,
                                },
                                padding: {
                                    top: 30,
                                    bottom: 20
                                }
                            },
                            legend: {
                                position: "bottom"
                            }
                        },
                        scales:{                                                                             
                            xAxis:{                                                  
                                grid: {
                                    display: true,                                    
                                }                                  
                            },
                            yAxis:{                                
                                display: false,
                                grid: {
                                    display: false,
                                }                            
                            },
                        },
                    }                    
                })
                 
                     
                
};

function enfermoCovidCiudades(ctx){
                const chart = new Chart(ctx, {
                    type: 'bar', 
                    plugins: [ChartDataLabels],
                    data: {                        
                        labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
                        datasets: [
                        {
                            label: 'Si enfermó',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor:   'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            data: [47.0,59.1,38.5,34.5,52.9,35.0,42.3,38.9,90.2,46.2],
                        },                        
                        {
                            label: 'No enfermó',
                            backgroundColor:  'rgba(75, 192, 192, 0.5)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            data: [41.4,29.6,38.5,59.6,33.3,50.8,41.1,50,8.4,50.9],          
                            
                        },
                        {
                            label: 'No sabe',
                            backgroundColor:  'rgba(255, 159, 64, 0.5)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 1,
                            data: [11.6,11.3,23,5.8,13.8,14.1,16.7,11.1,1.4,2.8],          
                            
                        },
                        ]
                    },

                    
                     options: {              
                           
                        responsive: true,
                        plugins: {
                            datalabels: {
                                anchor: 'end',
                                align: 'top',
                                formatter: Math.round,
                                font: {
                                    size:12,
                                },                  
                                formatter: (val) => (`${val}%`),             
                            }, 
                            title: {
                                display: true,
                                //text: 'Datos agrupados por ciudad', 
                                font: {
                                    size: 24,
                                },
                                //padding: 0,
                            },
                            legend: {
                                position: "bottom"
                            }
                        },
                        scales:{                                                                             
                            xAxis:{                                                  
                                grid: {
                                    display: true,                                    
                                }                                  
                            },
                            yAxis:{                                
                                display: false,
                                grid: {
                                    display: false,
                                }                            
                            },
                        },                        
                   
                        /*scales: {
                            x: {
                                stacked: true
                            },
                            y: {
                                stacked: true
                            }
                        }*/
                        elements: {
 
                        color: 'black'
                    }
                    }                    
                })
                $("#enfermoCovidTotales").hide();
            }

function enfermoCovidTotales(ctx){
    
                const chart = new Chart(ctx, {
                    type: 'doughnut', 
                    plugins: [ChartDataLabels],
                    data: {                        
                        labels: ['Si enfermó', 'No enfermó', 'No sabe'],
                        datasets: [
                        {
                            label: '# de casos',
                            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)','rgba(255, 159, 64, 1)'],
                            data: [1017,906,263],
                        },                                                
                        ]
                    },

                    
                     options: {              
                           
                        responsive: false,
                        plugins: {
                            datalabels: {                                
                                color: 'white',
                                font: {                        
                                    size:20,
                                    weight: 'bold',
                                },
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                    sum += data;
                                });
                                let percentage = (value*100 / (sum)).toFixed(2)+"%";
                                return percentage;
                                },
                            }, 
                            title: {
                                display: true,
                                text: 'Totales', 
                                font: {
                                    size: 24,
                                },
                                padding: 30,
                            },
                            legend: {
                                position: "bottom"
                            }
                        },
                        scales:{                                                                             
                            xAxis:{                                                  
                                display: false,
                                grid: {
                                    display: false,                                    
                                }                                  
                            },
                            yAxis:{                                
                                display: false,
                                grid: {
                                    display: false,
                                }                            
                            },
                        },                                       
                    }                    
                })
                
            }

$("#btnEnfermoCovidCiudades").on("click", function(){    
    $("#enfermoCovidTotales").hide();
    $("#enfermoCovidCiudades").show();
});

$("#btnEnfermoCovidTotales").on("click", function(){    
    
    $("#enfermoCovidTotales").show();
    $("#enfermoCovidCiudades").hide();    
    const ctx=document.querySelector('#enfermoCovidTotales').getContext('2d');
    enfermoCovidTotales(ctx)
    
});

function seVacunoCiudades(ctx){
                const chart = new Chart(ctx, {
                    type: 'bar', 
                    plugins: [ChartDataLabels],
                    data: {                        
                        labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
                        datasets: [
                        {
                            label: 'Si se vacunó',
                            backgroundColor:  'rgba(75, 192, 192, 0.5)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            data: [77.3,72.8,51.1,78.2,74.7,79.7,73.2,68.8,66.4,63.2],
                        },                        
                        {
                            label: 'No se vacunó',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor:   'rgba(255, 99, 132, 1)',                            
                            borderWidth: 1,
                            data: [22.7,27.2,48.9,21.8,25.3,20.3,26.8,31.3,33.6,36.8],          
                            
                        },                        
                        ]
                    },

                    
                     options: {              
                           
                        responsive: true,
                        plugins: {
                            deferred: {
                                xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                                delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
                            },
                            datalabels: {
                                anchor: 'end',
                                align: 'top',
                                formatter: Math.round,
                                font: {
                                    size:13,
                                },
                                formatter: (val) => (`${val}%`),             
                            }, 
                            title: {
                                display: true,
                                //text: 'Datos agrupados por ciudad', 
                                font: {
                                    size: 24,
                                },
                                //padding: 30,
                            },
                            legend: {
                                position: "bottom"
                            }
                        },
                        scales:{                                                                             
                            xAxis:{                                                  
                                grid: {
                                    display: true,                                    
                                }                                  
                            },
                            yAxis:{                                
                                display: false,
                                grid: {
                                    display: false,
                                }                            
                            },
                        },            
                    }                    
                })
                $("#seVacunoTotales").hide();
            }

function seVacunoTotales(ctx){
    
                const chart = new Chart(ctx, {
                    type: 'doughnut', 
                    plugins: [ChartDataLabels],
                    data: {                        
                        labels: ['Si', 'No'],
                        datasets: [
                        {
                            label: '# de casos',
                            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
                            hoverOffset: 4,
                            data: [1530,656],
                        },                                                
                        ]
                    },

                    
                     options: {              
                           
                        responsive: false,
                        plugins: {
                            datalabels: {

                                formatter: Math.round,
                                color: 'white',
                                font: {                        
                                    size:20,
                                    weight: 'bold',
                                },
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                    sum += data;
                                });
                                let percentage = (value*100 / (sum)).toFixed(2)+"%";
                                return percentage;
                                },
                            }, 
                            title: {
                                display: true,
                                text: 'Totales', 
                                font: {
                                    size: 24,
                                },
                                padding: 30,
                            },
                            legend: {
                                position: "bottom"
                            }
                        },
                        scales:{                                                                             
                            xAxis:{                                                  
                                display: false,
                                grid: {
                                    display: false,                                    
                                }                                  
                            },
                            yAxis:{                                
                                display: false,
                                grid: {
                                    display: false,
                                }                            
                            },
                        },                           
                    }                    
                })
                
            }

$("#btnSeVacunoCiudades").on("click", function(){    
    $("#seVacunoTotales").hide();
    $("#seVacunoCiudades").show();
});

$("#btnSeVacunoTotales").on("click", function(){    
    
    $("#seVacunoTotales").show();
    $("#seVacunoCiudades").hide();    
    seVacunoTotales(document.querySelector('#seVacunoTotales').getContext('2d'));
   
    
});

function animoVacunaTotales(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                 
            font: {
                size:14,
            },       
            labels: ['Tengo miedo a contagiarme', 'Tengo enfermedad “de base” (crónica)', 'Tengo miedo llegar al hospital y morir', 'No quiero poner en riesgo a mi familia', 'No tengo dinero para pagar médicos, medicamentos y otros', 'Es requisito/obligación para mi trabajo/estudio', 'Es requisito para tramites, viajes, eventos', 'Pienso que si todos estamos vacunados, vamos a frenar la pandemia', 'Otras'],
            datasets: [                       
            {   
                label: 'Casos',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [677,53,216,756,51,307,75,156,54]          
                
            },            
            ]
        },
         options: {             
            indexAxis: 'y',
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'center',
                    align: 'center',
                    formatter: Math.round,
                    font: {
                        size:14,
                    },
                    formatter: (value, ctx) => {                   
                    let percentage = (value*100 / (1530)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por factor de motivación', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                
                    display: false,                                  
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: true,
                    grid: {
                        display: true,
                    }                            
                },
            },          
        }                    
    })
    $("#animoVacunaPalabras").hide();
}


function animoVacunaPalabras(ctx){
    
                const chart = new Chart(ctx, {
                    type: 'wordCloud', 
                     
                   
                    //plugins: [ChartDataLabels],
                    data: {// text
                        labels: ['RIESGO FAMILIA', 'MIEDO CONTAGIARME', 'REQUISITO TRABAJO...', 'MIEDO HOSPITAL', 'TODOS VACUNADOS', 'REQUISITO TRAMITES...', 'ENFERMEDAD BASE',  'SIN DINERO'],                        
                        datasets: [{
                            
                            color: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)'],    
                            
                            // size in pixel
                            data: [60, 45, 35, 30, 25, 20, 15, 10],

                        },],
                    },      
                    options: {
                        responsive: false,
                       
                        title: {
                            display: false,
                            text: 'Chart.js Word Cloud',
                        },
                        plugins: {
                        legend: {
                            display: false,
                        },
                         tooltips: false,
                    },
                        }, 
                });
                
            }

$("#btnAnimoVacunaTotales").on("click", function(){    
    $("#animoVacunaPalabras").hide();
    $("#animoVacunaTotales").show();
});

$("#btnAnimoVacunaPalabras").on("click", function(){    
    
    $("#animoVacunaPalabras").show();
    $("#animoVacunaTotales").hide();       
    animoVacunaPalabras(document.querySelector('#animoVacunaPalabras').getContext('2d'));
    
});

function razonNoVacunaTotales(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                 
            font: {
                size:14,
            },       
            labels: ['No tengo mucho conocimiento/información sobre las vacunas', 'Prefiero esperar/corroborar la efectividad “Prefiero que hagan más estudios”', 'No creo en que haya esa enfermedad', 'No confío en la vacuna (pienso que No funciona)', 'Estoy en contra de las vacunas en general', 'Tengo miedo a la aguja/jeringa', 'Me aconsejaron No vacunarme', 'En las Redes Sociales aconsejan no vacunarse', 'Estoy tomando medicinas naturales','Estoy tomando dióxido de cloro','No veo la necesidad de vacunarme','Me puede causar otras enfermedades','He visto efectos negativos (en familiares/ amigos vacunados) que pienso es debido a las vacunas','Sociales/Culturales','Mi religión no me permite','No tengo tiempo','No sé cuándo ni dónde vacunarme','Estoy embarazada','Tengo una enfermedad de base (crónica)','Otras'],
            datasets: [                       
            {   
                label: 'Casos',
                backgroundColor:  'rgba(54, 162, 235,.8)',
                borderColor: 'rgba(54, 162, 235,1)',
                borderWidth: 1,
                data: [166,130,9,89,8,29,28,8,31,5,17,14,43,6,4,238,15,20,19,82]          
                
            },            
            ]
        },
         options: {             
            indexAxis: 'y',
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: Math.round,
                    font: {
                        size:14,
                    },
                    formatter: (value, ctx) => {                   
                    let percentage = (value*100 / (656)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por razón de abstención', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                
                    display: false,                                  
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: true,
                    grid: {
                        display: true,
                    }                            
                },
            },          
        }                    
    })
    $("#razonNoVacunaPalabras").hide();
}

function razonNoVacunaPalabras(ctx){
    
                const chart = new Chart(ctx, {
                    type: 'wordCloud', 
                     
                   
                    //plugins: [ChartDataLabels],
                    data: {// text
                        labels: ['NO TIEMPO', 'NOinfo VACUNAS”', 'PREFIERO ESPERAR', 'NO CONFIO', 'EFECTOS NEGATIVOS', 'MEDICINAS NATURALES', 'MIEDO AGUJA', 'CONSEJOS', 'EMBARAZADA','ENFERMEDAD BASE','NO NECESITO','CAUSAR ENFERMEDADES','NO SE DONDE','RELIGION','CULTURALES','DIOXIDO DE CLORO','ESTOY CONTRA','NO EXITE'],                        
                        datasets: [{
                            
                            color: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)'],    
                            
                            // size in pixel
                            data: [90, 80, 70, 60, 55, 45, 45, 40, 35,30,25,20,15,10,10,10,10,10],

                        },],
                    },      
                    options: {
                        responsive: false,
                       
                        title: {
                            display: false,
                            text: 'Chart.js Word Cloud',
                        },
                        plugins: {
                        legend: {
                            display: false,
                        },
                         tooltips: false,
                    },
                        }, 
                });
                
            }


$("#btnRazonNoVacunaTotales").on("click", function(){    
    $("#razonNoVacunaPalabras").hide();
    $("#razonNoVacunaTotales").show();
});

$("#btnRazonNoVacunaPalabras").on("click", function(){    
    
    $("#razonNoVacunaPalabras").show();
    $("#razonNoVacunaTotales").hide();       
    razonNoVacunaPalabras(document.querySelector('#razonNoVacunaPalabras').getContext('2d'));
    
});


function conocimientosVacunaTotales(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                 
            font: {
                size:14,
            },       
            labels: ['Es algo que me ayuda a evitar el contagio del COVID', 'Te introducen virus al cuerpo (son virus muertos)', 'Son anticuerpos/defensas', 'Es un negocio', 'Sirve para curar la enfermedad del COVID-19', 'Es peor porque enfermas con más gravedad el COVID-19', 'Te colocan un chip', 'Otras', 'No se nada','No responde'],
            datasets: [                       
            {   
                label: 'Casos',
                backgroundColor:  'rgba(255, 99, 132,.5)',                
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                data: [625,274,882,35,25,67,25,110,135,8]          
                
            },            
            ]
        },
         options: {             
            indexAxis: 'y',
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: Math.round,
                    font: {
                        size:14,
                    },
                    formatter: (value, ctx) => {                   
                    let percentage = (value*100 / (2186)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por conocimiento', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                
                    display: false,                                  
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: true,
                    grid: {
                        display: true,
                    }                            
                },
            },          
        }                    
    })
    //$("#animoVacunaPalabras").hide();
}



function preocupacionVacunaTotales(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                 
            font: {
                size:14,
            },       
            labels: ['Que la vacuna no sea segura para mi salud','No hay suficiente información sobre efectos secundarios y consecuencias a la larga','Tengo confusión sobre que vacuna es mejor','No hay vacunas suficientes', 'Hay mucho tiempo de espera para vacunarse', 'Desorganización en los puntos de vacunación', 'No lo veo necesario para prevención', 'Que las vacunas no estén bien conservadas', 'Que me provoque dolor después de vacunarme', 'Que el vacunador no tenga experiencia', 'Otras'],
            datasets: [                       
            {   
                label: 'Casos',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [622,819,204,157,98,78,27,46,95,23,92]          
                
            },            
            ]
        },
         options: {             
            indexAxis: 'y',
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: Math.round,
                    font: {
                        size:14,
                    },
                    formatter: (value, ctx) => {                   
                    let percentage = (value*100 / (1681)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por factor de preocupación', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                
                    display: false,                                  
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: true,
                    grid: {
                        display: true,
                    }                            
                },
            },          
        }                    
    })
    //$("#animoVacunaPalabras").hide();
}


function vacunaProtegeCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'De acuerdo',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [74,82.1,73.1,74.2,78.2,84.7,58.3,73,79,68.9],
            },                        
            {   
                label: 'Ni de acuerdo/Ni en desacuerdo',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [19.9,11.6,19.1,18.9,16.7,12.4,26.2,18.5,16.1,19.8]          
            },
            {
                label: 'En desacuerdo',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [6.1,6.3,7.8,6.9,5.2,2.8,15.5,8.5,4.9,11.3],          
                
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    
}

function vacunaProtegeTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['De acuerdo', 'Ni de acuerdo/Ni en desacuerdo', 'En desacuerdo'],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)'],
                data: [1638,386,162],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / (sum)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    $("#vacunaProtegeCiudades").hide();
}

$("#btnVacunaProtegeCiudades").on("click", function(){    
$("#vacunaProtegeTotales").hide();
$("#vacunaProtegeCiudades").show();
const ctx=document.querySelector('#vacunaProtegeCiudades').getContext('2d');
vacunaProtegeCiudades(ctx)
});

$("#btnVacunaProtegeTotales").on("click", function(){    

$("#vacunaProtegeTotales").show();
$("#vacunaProtegeCiudades").hide();    

});




function vacunaEvitaEnfermarCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'De acuerdo',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [80.7,73.4,58.3,69.1,54.6,75.7,75.6,77.3,62.9,63.2],
            },                        
            {   
                label: 'Ni de acuerdo/Ni en desacuerdo',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [14.9,17.6,25.9,21.5,27.6,18.6,13.7,14.5,28,15.1]          
            },
            {
                label: 'En desacuerdo',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [4.4,9,15.9,9.5,17.8,5.6,10.7,8.2,9.1,21.7],          
                
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: false,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    
}

function vacunaEvitaEnfermarTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['De acuerdo', 'Ni de acuerdo/Ni en desacuerdo', 'En desacuerdo'],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)'],
                data: [1522,430,234],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / (sum)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    $("#vacunaEvitaEnfermarCiudades").hide();
}

$("#btnVacunaEvitaEnfermarCiudades").on("click", function(){    
$("#vacunaEvitaEnfermarTotales").hide();
$("#vacunaEvitaEnfermarCiudades").show();
const ctx=document.querySelector('#vacunaEvitaEnfermarCiudades').getContext('2d');
vacunaEvitaEnfermarCiudades(ctx)
});

$("#btnVacunaEvitaEnfermarTotales").on("click", function(){    

$("#vacunaEvitaEnfermarTotales").show();
$("#vacunaEvitaEnfermarCiudades").hide();    

});



function vacunaImportanteCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'De acuerdo',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [76.8,87.7,59.9,73.8,40.8,81.4,70.8,79.3,53.8,61.3],
            },                        
            {   
                label: 'Ni de acuerdo/Ni en desacuerdo',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [18.2,7.6,20.4,17.1,32.8,14.1,19.6,12.2,35.7,15.1]          
            },
            {
                label: 'En desacuerdo',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [5,4.7,19.7,9.1,26.4,4.5,9.5,8.5,10.5,23.6],          
                
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    
}

function vacunaImportanteTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['De acuerdo', 'Ni de acuerdo/Ni en desacuerdo', 'En desacuerdo'],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)'],
                data: [1546,391,249],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / (sum)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    $("#vacunaImportanteCiudades").hide();
}

$("#btnVacunaImportanteCiudades").on("click", function(){    
$("#vacunaImportanteTotales").hide();
$("#vacunaImportanteCiudades").show();
const ctx=document.querySelector('#vacunaImportanteCiudades').getContext('2d');
vacunaImportanteCiudades(ctx)
});

$("#btnVacunaImportanteTotales").on("click", function(){    

$("#vacunaImportanteTotales").show();
$("#vacunaImportanteCiudades").hide();    

});




function medidasControlCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'De acuerdo',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [66.9,66.4,43.4,60.7,47.7,57.6,38.1,56,35,53.8],
            },                        
            {   
                label: 'Ni de acuerdo/Ni en desacuerdo',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [8.8,15.3,15.5,12,12.1,11.3,13.7,11.6,7,6.6]          
            },
            {
                label: 'En desacuerdo',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [24.3,18.3,41.1,27.3,40.2,31.1,48.2,32.4,58,39.6],          
                
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    
}

function medidasControlTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['De acuerdo', 'Ni de acuerdo/Ni en desacuerdo', 'En desacuerdo'],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)'],
                data: [1175,265,746],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / (sum)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    $("#medidasControlCiudades").hide();
}

$("#btnMedidasControlCiudades").on("click", function(){    
$("#medidasControlTotales").hide();
$("#medidasControlCiudades").show();
const ctx=document.querySelector('#medidasControlCiudades').getContext('2d');
medidasControlCiudades(ctx)
});

$("#btnMedidasControlTotales").on("click", function(){    
$("#medidasControlTotales").show();
$("#medidasControlCiudades").hide();    

});




function recibioInfoCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'Si',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [97.8,99.3,98.1,98.2,99.4,100,96.4,96.6,100,98.1],
            },                        
            {   
                label: 'No',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [2.2,0.3,1.6,1.8,0.6,0,3.6,3.4,0,1.9]          
            },
            {
                label: 'No responde',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [0,0.3,0.3,0,0,0,0,0,0,0],          
                
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    
}

function recibioInfoTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Si', 'No', ],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)'],
                data: [2148,36],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    anchor: 'center',
                    align: 'chartArea',
                    formatter: Math.round,
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / (sum)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    $("#recibioInfoCiudades").hide();
}

$("#btnRecibioInfoCiudades").on("click", function(){    
$("#recibioInfoTotales").hide();
$("#recibioInfoCiudades").show();
const ctx=document.querySelector('#recibioInfoCiudades').getContext('2d');
recibioInfoCiudades(ctx)
});

$("#btnRecibioInfoTotales").on("click", function(){    
$("#recibioInfoTotales").show();
$("#recibioInfoCiudades").hide();    

});


function origenInfoVacunaTotales(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                 
            font: {
                size:14,
            },       
            labels: ['Televisión','Radio emisora','Periódico','Redes Sociales/Facebook','Redes sociales/Tik Tok','Redes Sociales/YouTube','Redes Sociales/WhatsApp','Del Centro de Salud/Hospital','De su casa (algún familiar)','Amigos/compañeros de trabajo','De la universidad','Otras'],
            datasets: [                       
            {   
                label: 'Casos',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [1440,412,81,1189,118,170,429,284,295,376,32,131]          
                
            },            
            ]
        },
         options: {             
            indexAxis: 'y',
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',                    
                    position: 'chartArea',
                    formatter: Math.round,
                    font: {
                        size:14,
                    },
                    formatter: (value, ctx) => {                   
                    let percentage = (value*100 / (2148)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por medio de información', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                
                    display: false,                                  
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: true,
                    grid: {
                        display: true,
                    }                            
                },
            },          
        }                    
    })
    $("#origenInfoVacunaPalabras").hide();
}



function mensajeDesanimoCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'Si',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [94.5,92.7,88.3,91.6,86.2,93.8,92.3,83.8,94.4,87.7],
            },                        
            {   
                label: 'No',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [5.5,7,11.7,8.4,12.6,5.6,7.7,14.2,5.6,12.3]          
            },
            {
                label: 'No responde',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [0,0.3,0,0,1.1,0.6,0,2,0,0],          
                
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    
}

function mensajeDesanimoTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Si', 'No', 'No responde'],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)'],
                data: [1969,206,11],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    anchor: 'center',
                    align: 'chartArea',
                    formatter: Math.round,
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / (sum)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    $("#mensajeDesanimoCiudades").hide();
}

$("#btnMensajeDesanimoCiudades").on("click", function(){    
$("#mensajeDesanimoTotales").hide();
$("#mensajeDesanimoCiudades").show();
const ctx=document.querySelector('#mensajeDesanimoCiudades').getContext('2d');
mensajeDesanimoCiudades(ctx)
});

$("#btnMensajeDesanimoTotales").on("click", function(){    
$("#mensajeDesanimoTotales").show();
$("#mensajeDesanimoCiudades").hide();    

});




function origenDesanimoVacunaTotales(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                 
            font: {
                size:14,
            },       
            labels: ['Televisión','Radio emisora','Periódico','Redes Sociales/Facebook','Redes sociales/Tik Tok','Redes Sociales/YouTube','Redes Sociales/WhatsApp','Del Centro de Salud/Hospital','De su casa (algún familiar)','Amigos/compañeros de trabajo','De la universidad','Otras','No responde'],
            datasets: [                       
            {   
                label: 'Casos',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [414,112,6,1111,132,110,468,16,312,886,11,252,1]          
                
            },            
            ]
        },
         options: {             
            indexAxis: 'y',
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',                    
                    position: 'chartArea',
                    formatter: Math.round,
                    font: {
                        size:14,
                    },
                    formatter: (value, ctx) => {                   
                    let percentage = (value*100 / (1969)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por medio de información', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                
                    display: false,                                  
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: true,
                    grid: {
                        display: true,
                    }                            
                },
            },          
        }                    
    })
    $("#origenDesanimoVacunaPalabras").hide();
}




function deseoOrigenInfoTotales(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                 
            font: {
                size:14,
            },       
            labels: ['Televisión','Radio emisora','Periódico','Redes Sociales/Facebook','Redes sociales/Tik Tok','Redes Sociales/YouTube','Redes Sociales/WhatsApp','Del Centro de Salud/Hospital','De su casa (algún familiar)','Amigos/compañeros de trabajo','De la universidad','No responde'],
            datasets: [                       
            {   
                label: 'Casos',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',   
                borderWidth: 1,
                data: [1328,515,156,1052,153,188,538,814,67,73,24,39]          
                
            },            
            ]
        },
         options: {             
            indexAxis: 'y',
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',                    
                    position: 'chartArea',
                    formatter: Math.round,
                    
                    font: {                        
                        size:14,
                        
                    },
                    formatter: (value, ctx) => {                   
                    let percentage = (value*100 / (2186)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por medio de información', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                
                    display: false,                                  
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: true,
                    grid: {
                        display: true,
                    }                            
                },
            },          
        }                    
    })
    $("#deseoOrigenInfoPalabras").hide();
}


function recomedaraVacunaCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'Si',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [85.1,85.7,64.1,78.2,71.3,85.3,76.2,73.6,89.5,66],
            },                        
            {   
                label: 'No',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [6.1,5.3,20.1,14.5,14.9,11.3,13.1,19,8.4,31.1]          
            },
            {
                label: 'No sabe',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [8.3,5.6,15.2,7.3,13.8,3.4,10.7,7.1,2.1,2.8],          
                
            },            
            {
                label: 'No responde',
                backgroundColor:  'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                data: [0.6,3.3,0.6,0,0,0,0,0.3,0,0],
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    
}

function recomedaraVacunaTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Si', 'No','No sabe', 'No responde'],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)','rgba(255, 206, 86, 1)'],
                data: [1685,309,178,14],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    anchor: 'center',
                    align: 'chartArea',
                    formatter: Math.round,
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / (sum)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    $("#recomedaraVacunaCiudades").hide();
}

$("#btnRecomedaraVacunaCiudades").on("click", function(){    
$("#recomedaraVacunaTotales").hide();
$("#recomedaraVacunaCiudades").show();
const ctx=document.querySelector('#recomedaraVacunaCiudades').getContext('2d');
recomedaraVacunaCiudades(ctx)
});

$("#btnRecomedaraVacunaTotales").on("click", function(){    
$("#recomedaraVacunaTotales").show();
$("#recomedaraVacunaCiudades").hide();    

});



function lugarVacunaCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'Puntos de vacunación masiva',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [34.8,6,18.8,9.8,6.3,5.1,10.7,22.7,25.2,16],
            },                        
            {   
                label:  'Hospital/centro de salud',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [17.1,65.1,44,53.1,63.2,47.5,38.7,29,62.9,44.3]          
            },
            {
                label: 'Campañas casa por casa',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [44.8,26.9,31.4,34.2,26.4,44.6,48.8,36.6,11.2,36.8],          
                
            },            
            {
                label: 'Otros',
                backgroundColor:  'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                data: [0.6,0,3.2,2.2,2.3,1.1,1.2,9.1,0,0.9],
            },            
            {
                label: 'No responde',
                backgroundColor:  'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                data: [2.8,2,2.6,0.7,1.7,1.7,0.6,2.6,0.7,1.9],
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    $("#lugarVacunaTotales").hide();
}

function lugarVacunaTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Puntos de vacunación masiva', 'Hospital/centro de salud','Campañas casa por casa', 'Otros', 'No responde'],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)','rgba(255, 206, 86, 1)','rgba(153, 102, 255, 1)'],
                data: [337,1007,744,58,40],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    anchor: 'center',
                    align: 'chartArea',
                    formatter: Math.round,
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / (sum)).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    
}

$("#btnLugarVacunaCiudades").on("click", function(){    
$("#lugarVacunaTotales").hide();
$("#lugarVacunaCiudades").show();

});

$("#btnLugarVacunaTotales").on("click", function(){    
$("#lugarVacunaTotales").show();
$("#lugarVacunaCiudades").hide();    
const ctx=document.querySelector('#lugarVacunaTotales').getContext('2d');
lugarVacunaTotales(ctx)
});




function seVacunaraCiudades(ctx){
    const chart = new Chart(ctx, {
        type: 'bar', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
            datasets: [
            {
                label: 'Si',
                backgroundColor:  'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [73.2,79.3,67.5,51.7,54.5,61.1,51.1,64.5,77.1,46.2],
            },                        
            {   
                label: 'No',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [17.1,2.4,14.6,30,18.2,25,24.4,21.8,14.6,38.5]          
            },
            {
                label: 'No sabe',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [9.8,15.9,17.2,18.3,27.3,13.9,24.4,13.6,8.3,15.4],          
                
            },            
            {
                label: 'No responde',
                backgroundColor:  'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                data: [0,2.4,0.7,0,0,0,0,0,0,0],
            },            
            ]
        },

        
         options: {              
               
            responsive: true,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        size:13,
                    },
                    formatter: (val) => (`${val}%`),             
                }, 
                title: {
                    display: true,
                    //text: 'Datos agrupados por ciudad', 
                    font: {
                        size: 24,
                    },
                    //padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    grid: {
                        display: true,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },            
        }                    
    })
    
}

function seVacunaraTotales(ctx){
    
    const chart = new Chart(ctx, {
        type: 'doughnut', 
        plugins: [ChartDataLabels],
        data: {                        
            labels: ['Si', 'No','No sabe', 'No responde'],
            datasets: [
            {
                label: '# de casos',
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)','rgb(255, 99, 132)','rgba(255, 206, 86, 1)'],
                data: [423,123,107,3],
            },                                                
            ]
        },

        
         options: {              
               
            responsive: false,
            plugins: {
                datalabels: {                                
                    anchor: 'center',
                    align: 'chartArea',
                    formatter: Math.round,
                    color: 'white',
                    font: {                        
                        size:20,
                        weight: 'bold',
                    },
                    formatter: (value, ctx) => {                        
                    let percentage = (value*100 / 656).toFixed(2)+"%";
                    return percentage;
                    },
                }, 
                title: {
                    display: true,
                    text: 'Totales', 
                    font: {
                        size: 24,
                    },
                    padding: 30,
                },
                legend: {
                    position: "bottom"
                }
            },
            scales:{                                                                             
                xAxis:{                                                  
                    display: false,
                    grid: {
                        display: false,                                    
                    }                                  
                },
                yAxis:{                                
                    display: false,
                    grid: {
                        display: false,
                    }                            
                },
            },                                       
        }                    
    })
    $("#seVacunaraCiudades").hide();
    
}

$("#btnSeVacunaraCiudades").on("click", function(){    
$("#seVacunaraTotales").hide();
$("#seVacunaraCiudades").show();
const ctx=document.querySelector('#seVacunaraCiudades').getContext('2d');
seVacunaraCiudades(ctx)
});

$("#btnSeVacunaraTotales").on("click", function(){    
$("#seVacunaraTotales").show();
$("#seVacunaraCiudades").hide();    

});
