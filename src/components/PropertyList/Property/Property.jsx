import PropertyImage from "./PropertyImage/PropertyImage"
import './Property.css'
import PropertyTypeLabel from "./PropertyImage/PropertyTypeLabel/PropertyTypeLabel"

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
                <PropertyTypeLabel type={type} />
            </PropertyImage>
        </div>
    )
}

export default Property