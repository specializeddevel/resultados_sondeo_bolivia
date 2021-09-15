
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
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                    sum += data;
                                });
                                    let sum2 = 0;
                                    let dataArr2 = ctx.chart.data.datasets[1].data;
                                    dataArr2.map(data => {
                                    sum2 += data;
                                });
                                let percentage = (value*100 / (sum+sum2)).toFixed(1)+"%";
                                return percentage;
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
                                formatter: (value, ctx) => {

                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                    sum += data;
                                });
                                    let sum2 = 0;
                                    let dataArr2 = ctx.chart.data.datasets[1].data;
                                    dataArr2.map(data => {
                                    sum2 += data;
                                });
                                let sum3 = 0;
                                    let dataArr3 = ctx.chart.data.datasets[2].data;
                                    dataArr3.map(data => {
                                    sum3 += data;
                                });
                                let percentage = (value*100 / (sum+sum2+sum3)).toFixed(1)+"%";
                                return percentage;
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
                                formatter: (value, ctx) => {

                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                    sum += data;
                                });
                                    let sum2 = 0;
                                    let dataArr2 = ctx.chart.data.datasets[1].data;
                                    dataArr2.map(data => {
                                    sum2 += data;
                                });                                
                                let percentage = (value*100 / (sum+sum2)).toFixed(2)+"%";
                                return percentage;
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
                    text: 'Datos Totales por Factor de Motivación', 
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