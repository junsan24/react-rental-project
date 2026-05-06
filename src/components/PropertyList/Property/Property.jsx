import PropertyImage from "./PropertyImage/PropertyImage"
import PropertyTypeLabel from "./PropertyImage/PropertyTypeLabel/PropertyTypeLabel"
import PropertyBanner from "./PropertyImage/PropertyBanner/PropertyBanner"
import IconWithText from "./PropertyImage/IconWithText/IconWithText"
import { Bed, Bath, Maximize } from 'lucide-react'
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
                <div className="property-info">
                    <IconWithText Icon={Bed} text={bedroom} />
                    <span>|</span>
                    <IconWithText Icon={Bath} text={bathroom} />
                    <span>|</span>
                    <IconWithText Icon={Maximize} text={`${surface} m²`} />
                </div>
            </PropertyImage>
        </div>
    )
}

export default Property