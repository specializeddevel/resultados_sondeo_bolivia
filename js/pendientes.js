
function generoCiudadesChart(ctx){
    $("#generoCiudadesChart").hide();
                const chart = new Chart(ctx, {
                    type: 'bar', 
                    plugins: [ChartDataLabels],
                    data: {                        
                        labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
                                

                        datasets: [
                        {
                            label: 'Soltero',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor:   'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            data: [85,111,162,155,64,99,65,169,52,46],
                        },                                                
                        {
                            label: 'Divorciado',
                            backgroundColor:  'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            data: [8,14,4,19,1,4,14,6,3,0],          
                            
                        },
                        {
                            label: 'Viudo',
                            backgroundColor:  'rgba(255, 206, 86, 0.5)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                            borderWidth: 1,
                            data: [3,3,3,0,2,2,2,2,5,3],                                      
                        },
                        {
                            label: 'Casado',
                            backgroundColor:  'rgba(75, 192, 192, 0.5)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            data: [72,127,93,88,79,59,60,117,25,27],          
                            
                        },
                        {
                            label: 'Union estable',
                            backgroundColor:  'rgba(153, 102, 255, 0.5)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1,
                            data: [13,46,13,12,28,13,27,58,58,30],          
                            
                        },
                        {
                            label: 'No responde',
                            backgroundColor:  'rgba(255, 159, 64, 0.5)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 1,
                            data: [0,0,4,1,0,0,0,0,0,0],          
                            
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
                                    
                                }
                                
                            }, 
                            title: {
                                display: true,
                                text: 'Estado Civil distribuido por ciudad',
                                font: {
                                    size: 24,
                                },
                                padding: {
                                    top: 30,
                                    bottom: 10
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    color: 'black',
                                    font: {                                        
                                        family: 'system-ui',
                                        
                                }
                                }
                            }
                        },
                    elements: {
 
                        color: 'black'
                    }

                    }                    
                })
                 
                     
                
};

function generoCiudadesChartApilado(ctx){
    $("#generoCiudadesChartApilado").hide();    
                const chart = new Chart(ctx, {
                    type: 'bar', 
                    
                    data: {                        
                        labels: ['Sucre', 'La Paz', 'El Alto', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija', 'Santa Cruz', 'Trinidad', 'Cobija'],
                                

                        datasets: [
                        {
                            label: 'Soltero',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor:   'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            data: [85,111,162,155,64,99,65,169,52,46],
                        },                                                
                        {
                            label: 'Divorciado',
                            backgroundColor:  'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            data: [8,14,4,19,1,4,14,6,3,0],          
                            
                        },
                        {
                            label: 'Viudo',
                            backgroundColor:  'rgba(255, 206, 86, 0.5)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                            borderWidth: 1,
                            data: [3,3,3,0,2,2,2,2,5,3],                                      
                        },
                        {
                            label: 'Casado',
                            backgroundColor:  'rgba(75, 192, 192, 0.5)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            data: [72,127,93,88,79,59,60,117,25,27],          
                            
                        },
                        {
                            label: 'Union estable',
                            backgroundColor:  'rgba(153, 102, 255, 0.5)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1,
                            data: [13,46,13,12,28,13,27,58,58,30],          
                            
                        },
                        {
                            label: 'No responde',
                            backgroundColor:  'rgba(255, 159, 64, 0.5)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 1,
                            data: [0,0,4,1,0,0,0,0,0,0],          
                            
                        },
                    ]
                    },
                     options: {              
                           
                        responsive: true,
                        plugins: {
                      
                            title: {
                                display: true,
                                text: 'Estado Civil distribuido por ciudad',
                                font: {
                                    size: 24,
                                },
                                padding: {
                                    top: 30,
                                    bottom: 10
                                }
                            },
                            legend: {
                                position: "bottom",
                                labels: {
                                    color: 'black',
                                    font: {                                        
                                        family: 'system-ui',
                                        
                                }
                                }
                            }
                        },
                    scales: {
                            x: {
                                stacked: true
                            },
                            y: {
                                stacked: true
                            }
                        }

                    }                    
                })
                 
                     
                
};

function totalPorEstadoChart(ctx){
    
    $("#totalPorEstadoChart").hide();
                const chart = new Chart(ctx, {
                    type: 'bar', 
                    plugins: [ChartDataLabels],
                    data: {                        
                        labels: ['Soltero(a)', 'Divordiado(a)', 'Viudo(a)', 'Casado(a)', 'Union estable', 'No responde'],
                        datasets: [
                        {
                            label: 'Casos',
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor:   'rgb(54, 162, 235)',
                            borderWidth: 1,
                            data: [1008,73,25,747,328,5],
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
                                    weight: 'bold'
                                },
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                        sum += data;
                                    });
                                    let percentage = (value*100 / sum).toFixed(1)+"%";
                                    return percentage;
                                },
                            }, 
                            title: {
                                display: true,
                                text: 'Distribucion por genero',
                                font: {
                                    size: 24,
                                },
                                padding: {
                                    top: 30,
                                    bottom: 10
                                }
                            },
                            legend: {
                                position: "bottom"
                            }
                        },
                    scales: {
                    yAxes: [{
                        ticks: {
                        beginAtZero: true,
                        }
                    }]
                    },                        
                   
                        /*scales: {
                            x: {
                                stacked: true
                            },
                            y: {
                                stacked: true
                            }
                        }*/
                    }                    
                })
                 
                     
                
};


function renderCharts(ctx) {           
     
    varonesMujeresChart(ctx)
}



$("#dataCivilGeneral").on("click", function(){    
    $("#generoCiudadesDiv").hide();
    $("#generoCiudadesChartApilado").hide();
});

$("#dataCivilCiudad").on("click", function(){    
    $("#totalPorEstadoChart").show();
    $("#generoCiudadesChartApilado").show();
});