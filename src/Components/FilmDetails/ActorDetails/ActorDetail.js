import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';

const ActorDetail = ({ match }) => {
    const [details, updateDetails] = useState(null);
    const [dataFetchingState, updateDataFetchingState] = useState(false)

    useEffect(() => {
        // axios.get(`https://imdb-api.com/en/API/Name/k_9nJw18H8/${match.params.actorId}`)
        axios.get(`https://imdb-api.com/en/API/Name/k_49fw72k3/${match.params.actorId}`)
        // axios.get(`https://imdb-api.com/en/API/Name/k_tlpidvno/${match.params.actorId}`)
            .then(response => {

                updateDetails(response.data)
                updateDataFetchingState(true)
            })
    }, [match.params.actorId]);

    return (
        <>
            {dataFetchingState ?
                <>
                    <section className="actorInformation">
                        <div className="actorImage">
                            <img src={details.image} alt="Avatar Not Found" />
                        </div>
                        <div className="actorAllDetails">
                            <h1>{details.name}</h1>
                            <h3 >Date of Birth:
                                    <span>{details.birthDate ? details.birthDate : "Not Provided"}</span>
                            </h3>

                            <h3 >Height:
                                    <span>{details.height ? details.height : "Not Provided"}</span>
                            </h3>

                            <h3 className="summary" >{details.summary ?
                                details.summary :
                                "Summary:  Not Provided"
                            }</h3>

                            <h3>{details.role ? details.role : "Role:  Not Provided"}</h3>

                            <h3 >Awards: <span>{details.awards ?
                                details.awards :
                                "Not Provided"}</span></h3>
                        </div>
                    </section>
                    <button className="backToPreviousPageButton" onClick={() => window.history.back()}  >
                        Back
                </button>
                </>
                :
                <section className='Loading'>
                    <BeatLoader
                        size={70}
                        color={"#ce2222"}
                        loading={!dataFetchingState}
                    />
                </section>
            }
        </>
    );

}

export default ActorDetail
