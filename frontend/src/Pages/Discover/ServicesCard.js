import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import discover from "../Service/Service.module.css";
import discover from './Discover.module.css'

const Service = (props) => {
    const [serviceitem] = useState(props.serviceitem || []);
    const serviceRef = useRef([]);
    const Navigate = useNavigate()

    const CardNavigation = () => {
        Navigate('/contact')
    }

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    const maxLength = 100;

    return (
        <div className={discover.service}>
            <div className={discover.container}>
                <div className={discover.sectionHeader}>
                    {props.para && <p>{props.para}</p>}
                    <h2>{props.head}</h2>
                </div>
                <div className={discover.row}>
                    {serviceitem.map((value, index) => (
                        <div key={value.head} className={discover.colLg3} style={{ flex: '1' }}>
                            <div className={discover.Container} >
                                <div
                                    className={`${discover.card} ${discover.hidden}`}
                                    ref={el => serviceRef.current[index] = el}
                                    onClick={CardNavigation}
                                >
                                    <img src={value.image} alt="Developmentimage" />
                                    <div className={discover.cardBody}>
                                        <h5 className={discover.cardtitle}>{value.head}</h5>
                                        <p className={discover.cardText}>{truncateText(value.para, maxLength)}</p>
                                        <button className={discover.demoButton}>Book A Demo</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default Service;
