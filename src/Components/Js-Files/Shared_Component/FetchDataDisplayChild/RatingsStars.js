import React from 'react';

const RatingsStars = ({ Rating }) => {

    if (Rating >= 8.5) {
        return (
            <div>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star-half-alt starColor"></i>
            </div>


        );
    }

    else if (Rating >= 7.5 && Rating < 8.5) {
        return (
            <div>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="far fa-star starColor"></i>
            </div>


        );
    }

    else if (Rating >= 6.5 && Rating < 7.5) {
        return (
            <div>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star-half-alt starColor "></i>
                <i className="far fa-star starColor"></i>
            </div>



        )
    }
    else if (Rating >= 5 && Rating < 6.5) {
        return (
            <div>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="far fa-star starColor"></i>
                <i className="far fa-star starColor"></i>
            </div>

        )
    }

    else if (Rating < 5) {
        return (
            <div>
                <i className="fas fa-star starColor"></i>
                <i className="fas fa-star starColor"></i>
                <i className="far fa-star starColor"></i>
                <i className="far fa-star starColor"></i>
                <i className="far fa-star starColor"></i>
            </div>



        )
    }
    else {
        return (
            <>

            </>
        )
    }

}

export default RatingsStars;
