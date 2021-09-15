
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
                            data: [90,149,154,135,89,93,88,179,71,59],
                        },                        
                        {
                            label: 'Mujeres',
                            backgroundColor:  'rgba(255, 99, 132, 0.5)',
                            borderColor: 'rgb(255, 99, 132)',
                            borderWidth: 1,
                            data: [91,152,155,140,85,84,80,173,72,47],          
                            
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
                                
                                color: 'black',
                            }, 
                            title: {
                                display: true,                                text: 'Distribución de la población por Género', 

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
                            data: [85,178,119,95,92,62,71,137,129,49],
                        },                        
                        {
                            label: 'No enfermó',
                            backgroundColor:  'rgba(75, 192, 192, 0.5)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            data: [75,89,119,164,58,90,69,176,12,54],          
                            
                        },
                        {
                            label: 'No sabe',
                            backgroundColor:  'rgba(255, 159, 64, 0.5)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 1,
                            data: [21,34,71,16,24,25,28,39,2,3],          
                            
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
                            }, 
                            title: {
                                display: true,
                                text: 'Datos agrupados por ciudad', 
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
                                font: {
                                    size:18,
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
                            data: [140,219,158,215,130,141,123,242,95,67],
                        },                        
                        {
                            label: 'No se vacunó',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor:   'rgba(255, 99, 132, 1)',                            
                            borderWidth: 1,
                            data: [41,82,151,60,44,36,45,110,48,39],          
                            
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
                                
                            }, 
                            title: {
                                display: true,
                                text: 'Datos agrupados por ciudad', 
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
                                font: {
                                    size:18,
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
                    text: 'Datos agrupados por factor de motivación', 
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
    
                const palabras = [
                     { key: 'miedo', value: 2085 },
                     { key: 'desconfianza', value: 884 },
                     { key: '"cuidar a mi familia"', value: 775 },
                ];
                const data = {
                    /*labels: palabras.map((d) => d.key),
                    datasets: [
                        {
                            label: '',
                            data: palabras.map((d) => d.value / 10),
                        },
                    ],*/
                    
                };  
                const chart = new Chart(ctx, {
                    type: 'wordCloud', 
                    
                    //plugins: [ChartDataLabels],
                    data: {// text
                        labels: ['Contagio', 'Soy de riesgo', 'Miedo al hospital', 'Familia', 'Dinero', 'Trabajo', 'Tramites', 'Responsabilidad social', 'Otras'],                        
                        datasets: [{
                            
                            color: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)','rgba(75, 192, 192, 1)'],    
                            
                            // size in pixel
                            data: [67, 20, 31, 75, 20, 55, 31, 36, 20],

                        },],
                    },      
                    options: {
                        responsive: false,
                                               title: {
                            display: false,
                            text: 'Chart.js Word Cloud',
                        },
                       
                        }, 
                    plugins: {
                        legend: {

                            display: false,
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
                    text: 'Datos agrupados por razón de abstención', 
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
                    text: 'Datos agrupados por conocimiento', 
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
                    text: 'Datos agrupados por factor de preocupación', 
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
                data: [134,247,226,204,136,150,98,257,113,73],
            },                        
            {   
                label: 'Ni de acuerdo/Ni en desacuerdo',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [36,35,59,52,29,22,44,65,23,21]          
            },
            {
                label: 'En desacuerdo',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [11,19,24,19,9,5,26,30,7,12],          
                
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    font: {
                        size:18,
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
                data: [146,221,180,190,95,134,127,272,90,67],
            },                        
            {   
                label: 'Ni de acuerdo/Ni en desacuerdo',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [27,53,80,59,48,33,23,51,40,16]          
            },
            {
                label: 'En desacuerdo',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [8,27,49,26,31,10,18,29,13,23],          
                
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    font: {
                        size:18,
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
                data: [139,264,185,203,71,144,119,279,77,65],
            },                        
            {   
                label: 'Ni de acuerdo/Ni en desacuerdo',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [33,23,63,47,57,25,33,43,51,16]          
            },
            {
                label: 'En desacuerdo',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [9,14,61,25,46,8,16,30,15,25],          
                
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    font: {
                        size:18,
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
                data: [121,200,134,167,83,102,64,197,50,57],
            },                        
            {   
                label: 'Ni de acuerdo/Ni en desacuerdo',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [16,46,48,33,21,20,23,41,10,7]          
            },
            {
                label: 'En desacuerdo',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [44,55,127,75,70,55,81,114,83,42],          
                
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    font: {
                        size:18,
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
                data: [177,299,303,270,173,177,162,340,143,104],
            },                        
            {   
                label: 'No',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [4,1,5,5,1,0,6,12,0,2]          
            },
            {
                label: 'No responde',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [0,1,1,0,0,0,0,0,0,0],          
                
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    
                    font: {                        
                        size:18,
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
                    text: 'Datos agrupados por medio de información', 
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
                data: [171,279,273,252,150,166,155,295,135,93],
            },                        
            {   
                label: 'No',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [10,21,36,23,22,10,13,50,8,13]          
            },
            {
                label: 'No responde',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [0,1,0,0,2,1,0,7,0,0],          
                
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    
                    font: {                        
                        size:18,
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
                    text: 'Datos agrupados por medio de información', 
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
                    text: 'Datos agrupados por medio de información', 
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
                data: [154,258,198,215,124,151,128,259,128,70],
            },                        
            {   
                label: 'No',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [11,16,62,40,26,20,22,67,12,33]          
            },
            {
                label: 'No sabe',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [15,17,47,20,24,6,18,25,3,3],          
                
            },            
            {
                label: 'No responde',
                backgroundColor:  'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                data: [1,10,2,0,0,0,0,1,0,0],
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    
                    font: {                        
                        size:18,
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
                data: [63,18,58,27,11,9,18,80,36,17],
            },                        
            {   
                label:  'Hospital/centro de salud',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [31,196,136,146,110,84,65,102,90,47]          
            },
            {
                label: 'Campañas casa por casa',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [81,81,97,94,46,79,82,129,16,39],          
                
            },            
            {
                label: 'Otros',
                backgroundColor:  'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                data: [1,0,10,6,4,2,2,32,0,1],
            },            
            {
                label: 'No responde',
                backgroundColor:  'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                data: [5,6,8,2,3,3,1,9,1,2],
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    
                    font: {                        
                        size:18,
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
                data: [30,65,102,31,24,22,23,71,37,18],
            },                        
            {   
                label: 'No',
                backgroundColor:  'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [7,2,22,18,8,9,11,24,7,15]          
            },
            {
                label: 'No sabe',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor:   'rgba(255, 99, 132, 1)',                            
                borderWidth: 1,
                data: [4,13,26,11,12,5,11,15,4,6],          
                
            },            
            {
                label: 'No responde',
                backgroundColor:  'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                data: [0,2,1,0,0,0,0,0,0,0],
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
                    
                }, 
                title: {
                    display: true,
                    text: 'Datos agrupados por ciudad', 
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
                    
                    font: {                        
                        size:18,
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
