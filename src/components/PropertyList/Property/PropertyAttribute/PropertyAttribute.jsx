import './PropertyAttribute.css'

const PropertyAtrribute = ({text, color = '#444', bold}) => {
    const style = {
        color,
        fontWeight: bold ? 'bold' : 'normal'
    }

    return (
        <p style={style} className="property-attribute">
            {text}
        </p>
    )
}

export default PropertyAtrribute