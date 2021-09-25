import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './flight-cards.module.scss';
import FlightCard from './flight-card';
export default function FlightCards (props) {
    const {flightCards, pageName} = props;
    const t = useTranslations('content');
    const [selection, setSelection] = useState(-1);
    const selectionHandler = (id)=> {
        setSelection(id);
    }
    return (
        <>
        <div className="page_title">
            <h1>{t(`${pageName}.resultsTitle`)} (<span>{flightCards?.length}</span>)</h1>
        </div>
        <div className={styles.search_results}>
            {flightCards && (
                flightCards.map((flightCard, index) =>{
                    return <FlightCard  pageName={pageName} flightCard={flightCard} key={index} index={index} onSelection={selectionHandler} selectionState={selection === index}/>
                })
            )}
        </div>    
        </>
    );
};