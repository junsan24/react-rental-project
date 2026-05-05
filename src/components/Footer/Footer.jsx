import './Footer.css'
import { Clock } from 'lucide-react'

const startHour = 9
const lastHour = 17
const now = new Date()

const currentHour = now.getHours()
const currentDay = now.getDay()
const openDay = currentDay >= 1 && currentDay <= 5
const isOpen = openDay && (currentHour >= startHour && currentHour <= lastHour)

const openHour = (
    <>
        <div className="message">
            <Clock className="icon" />
            <span className="status open">We are open now!</span>
        </div>
        <div style={{marginTop: '0.5rem'}}>
            <span>Call us at: <strong>(555) 123-4567</strong></span>
        </div>
    </>
)

const closeHour = (
    <>
        <div className="message">
            <Clock className="icon" />
            <span className="status closed">We are closed now!</span>
        </div>
        <div style={{marginTop: '0.5rem'}}>
            <span>Opening hours. Monday-Friday, {startHour}pm to {lastHour}pm</span>
        </div>
    </>
)

const Footer = () => {
    return (
        <footer className="footer">
            {isOpen ? openHour : closeHour}
        </footer>
    )
}

export default Footer