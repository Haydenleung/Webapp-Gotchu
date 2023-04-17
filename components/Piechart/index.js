import React from 'react'
import { useState, useEffect } from 'react'
import styles from './PieChart.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: ['Seeking help from a trusted adult', 'Reporting the bullying', 'Ignoring the bully', 'Developing resilience ','Seeking professional help'],
            datasets: [
                {
                    label: 'Rate %',
                    data: [ 32,28,21,11,8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',

                    ],
                    borderWidth: 1,
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Strategies that victims use to cope with and recover from bullying',
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])
    return (
        <div className={styles.container}>
            <Pie data={chartData} options={chartOptions} />
        </div>
    )
}