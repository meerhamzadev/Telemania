import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const RatingsStars = ({ Rating, size }) => {

    if (Rating >= 8.5) {
        return (
            <div className="flex gap-1.5 pl-1.5"   >
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStarHalf size={size} color="yellow" />
            </div>
        );
    }

    else if (Rating >= 7.5 && Rating < 8.5) {
        return (
            <div className="flex gap-1.5 pl-1.5" >
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStar size={size} color="yellow" />
            </div>

        );
    }

    else if (Rating >= 6.5 && Rating < 7.5) {
        return (
            <div className="flex gap-1.5 pl-1.5" >
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStarHalf size={size} color="yellow" />
                <BsStar size={size} color="yellow" />
            </div>
        )
    }
    else if (Rating >= 5 && Rating < 6.5) {
        return (
            <div className="flex gap-1.5 pl-1.5" >
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStar size={size} color="yellow" />
                <BsStar size={size} color="yellow" />
            </div>

        )
    }

    else if (Rating < 5) {
        return (
            <div className="flex gap-1.5 pl-1.5" >
                <BsStarFill size={size} color="yellow" />
                <BsStarFill size={size} color="yellow" />
                <BsStar size={size} color="yellow" />
                <BsStar size={size} color="yellow" />
                <BsStar size={size} color="yellow" />
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

