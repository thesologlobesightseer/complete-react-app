import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import "./Ratings.scss";

const Ratings = ({type, actualRating, onChange, values}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        setRating(actualRating);
    }, [actualRating]);

    const updateRating = (index) => {
        setRating(index);
        onChange(type, index);
    }

    return (
        <div className="rating">
            {values?.length ? [...values] : [...Array(5)].map((star, index) => {
                index += 1;

                return (
                    <>
                        <button
                            type="button"
                            key={index}
                            className={`star-button ${star}-rate ${index <= (hover || rating)? "on" : "off"}`}
                            onClick={() => updateRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                        {/* {values?.length ? star : null} */}
                    </>
                )
            })}
        </div>
    );
};

Ratings.propTypes = {
    type: PropTypes.string.isRequired,
    actualRating: PropTypes.number,
    onChange: PropTypes.func,
}
Ratings.defaultProps = {
    actualRating: 0,
    onChange: () => {}
}

export default Ratings;