import React from 'react';
import FetchedDataDisplayComponent from '../FetchedDataDisplayComponent';
import ScrollOnTop from '../../../ScrollOnTop';

const DataFetchingAndRendering = (props) => {

    return (
        <>
            {
                window.location.href.slice(window.location.href.indexOf('_'), window.location.href.length) === props.Title
                    ?
                    <>
                        <ScrollOnTop />
                        <FetchedDataDisplayComponent
                            End={props.filmData.length}
                            filmData={props.filmData}
                            rate={props.rate}
                        />
                    </>

                    :
                    window.innerWidth >= 1010 && window.innerWidth <= 1024 ?
                        <FetchedDataDisplayComponent
                            End={4}
                            filmData={props.filmData}
                            rate={props.rate}
                        />
                        :
                        <FetchedDataDisplayComponent
                            End={3}
                            filmData={props.filmData}
                            rate={props.rate}
                        />

            }
        </>
    )
}

export default DataFetchingAndRendering;
