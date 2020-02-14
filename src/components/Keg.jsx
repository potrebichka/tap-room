import React from 'react'
import PropTypes from 'prop-types'

const Keg = (props) => {
    return (
        <div className='keg'>
            <style jsx>{`

            `}</style>
            <h3>{props.name}</h3>
            <p>{props.brand}</p>
            <p>${props.price}</p>
            <p>{props.alcoholContent}% ABV</p>
            <p>{props.ibu ? `ibu: ${props.ibu}`: null}</p>
        </div>
    )
}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    alcoholContent: PropTypes.number.isRequired,
    ibu: PropTypes.number
}

export default Keg