import React, { useContext } from 'react'
import discover from './Discover.module.css'
import { bucket } from './ProductData';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductPage() {
    const navigate = useNavigate()
    const readData = useParams().id
    const [data] = useContext(bucket)
    let filterData = data.filter((e) => {
        return e?.cat === readData
    })
    const handleNavigate = () => {
        navigate('/ask-demo')
    }

    return (
        <div className={discover.__mainContainer}>
            <img className={discover.__image} src={filterData[0].img} alt="" />
            <h1 className={discover.__cardTitle}>{filterData[0].title}</h1>
            <p className={discover.__cardDescription}>{filterData[0].intro}</p>
            <br />
            <h5 className={discover.__cardTitle}>Key Benefits of {filterData[0].cat} :</h5>
            {filterData[0].benefits.map((item, index) => {
                return (
                    <div key={index}>
                        <p className={discover.__cardDescription}>{item.key}: {item.desc}</p>
                    </div>
                )
            })}
            <br />
            <h5 className={discover.__cardTitle}>Key Features :</h5>
            {
                filterData[0].features && <>
                    {filterData[0].features.map((item, index) => {
                        return (
                            <ul key={index}>
                                <li className={discover.__cardDescription}>{item.key}: {item.feature}</li>
                            </ul>
                        )
                    })}
                </>
            }
            <br />
            <h5 className={discover.__cardTitle}>{filterData[0].bio[0].head}</h5>
            <p className={discover.__cardDescription}>{filterData[0].bio[0].desc}</p>
            <button className={discover.__askDemoBtn} onClick={handleNavigate}>
                Ask us for a demo
            </button>
        </div>
    )
}
