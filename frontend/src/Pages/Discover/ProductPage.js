import React, { useContext } from 'react'
import discover from './Discover.module.css'
import { bucket } from './ProductData';
import { Link, useNavigate, useParams } from 'react-router-dom';
import hrconnectpro from '../../Assets/hrconnectpro.jpg'

export default function ProductPage() {
    const navigateTo = useNavigate()
    const readData = useParams().id
    const [data] = useContext(bucket)
    let filterData = data.filter((e) => {
        return e?.cat === readData
    })
    // console.log(readData);
    // console.log(readData);
    // console.log(filterData);

    return (
        <div className={discover.__mainContainer}>
            <img className={discover.__image} src={hrconnectpro} alt="" />
            <h1 className={discover.__cardTitle}>{filterData[0].title}</h1>
            <p className={discover.__cardDescription}>{filterData[0].intro}</p>
            <h5 className={discover.__cardTitle}>Key Benefits of HRConnect Pro :</h5>
            {filterData[0].benefits.map((item, index) => {
                return (
                    <div>
                        <p className={discover.__cardDescription}>{item.key}: {item.desc}</p>
                    </div>
                )
            })}
            <h5 className={discover.__cardTitle}>Key Features :</h5>
            {filterData[0].features.map((item, index) => {
                return (
                    <div>
                        <li className={discover.__cardDescription}>{item.key}: {item.feature}</li>
                    </div>
                )
            })}
            <h5 className={discover.__cardTitle}>{filterData[0].bio[0].head}</h5>
            <p className={discover.__cardDescription}>{filterData[0].bio[0].desc}</p>

        </div>
    )
}