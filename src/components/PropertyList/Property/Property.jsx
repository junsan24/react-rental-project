import PropertyImage from "./PropertyImage/PropertyImage"
import './Property.css'

const Property = (
    {
        type,
        image,
        bedroom,
        bathroom,
        surface,
        address,
        rent,
        date,
        available
    }
) => {
    return (
        <div className="property-card">
            <PropertyImage image={image} >
                <span>This is a text.</span>
            </PropertyImage>
        </div>
    )
}

export default Property