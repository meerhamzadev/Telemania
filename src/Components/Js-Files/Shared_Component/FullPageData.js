import React from 'react';
import DataFetchingAndRendering from '../Shared_Component/DataFetchingAndRendering';
import { Link } from 'react-router-dom';

const FullPageData = (props) => {

    return (
        <section className="filmSection">
            {
                window.location.href.slice(window.location.href.indexOf('_'), window.location.href.length) !== `_${props.sectionTitle}` ?
                    <h1 className="sectionTitle" >{props.sectionTitle.replace(/_/g, ' ')}</h1>
                    :
                    <> </>
            }

            <div className="SectionCards">

                <DataFetchingAndRendering
                    filmData={props.filmData}
                    Title={`_${props.sectionTitle}`}
                    rate={props.rate}
                />

            </div>

            {
                window.location.href.slice(window.location.href.indexOf('_'), window.location.href.length) !== `_${props.sectionTitle}` ?
                    <Link className="fullPageLinks" to={`_${props.sectionTitle}`}>view more.....</Link>
                    : <Link to="/" className="backButton" >Back to main Page</Link>
            }

        </section>
    )
}

export default FullPageData;
