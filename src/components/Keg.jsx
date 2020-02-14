import React from 'react'
import PropTypes from 'prop-types'

const Keg = (props) => {
    return (
        <div className='keg'>
            <style jsx>{`

            `}</style>
            <h3>{props.name}</h3>
            <p>{props.brand}</p>
            <p>{props.price}</p>
            <p>{props.alcoholContent}</p>
        </div>
    )
}

Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    alcoholContent: PropTypes.string.isRequired
}

export default Keg