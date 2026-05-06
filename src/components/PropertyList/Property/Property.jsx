import PropertyImage from "./PropertyImage/PropertyImage"
import PropertyTypeLabel from "./PropertyImage/PropertyTypeLabel/PropertyTypeLabel"
import PropertyBanner from "./PropertyImage/PropertyBanner/PropertyBanner"
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
                <PropertyTypeLabel type={type} />
                {!available && <PropertyBanner />}
            </PropertyImage>
        </div>
    )
}

export default Property