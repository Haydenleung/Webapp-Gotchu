import React from 'react'
import { useState, useEffect } from 'react'
import styles from './PieChart.module.css'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


export default function PieChart({ dir }) {

    const { locales } = useRouter();
    const intl = useIntl();
    const chartLegandOne = intl.formatMessage({ id: "page.introcard.chartLegandOne" })
    const chartLegandTwo = intl.formatMessage({ id: "page.introcard.chartLegandTwo" })


    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: [chartLegandOne, chartLegandTwo],
            datasets: [
                {
                    label: 'Rate %',
                    data: [70, 30],
                    backgroundColor: [
                        '#896686',
                        '#DEDEDE'
                    ],
                    borderColor: [
                        'white',
                        'white'
                    ],
                    borderWidth: 1,
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'right'
                },
                title: {
                    display: true,
                    text: "Aged 15 to 17 reported experiencing some form of bullying in the preceding year"
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