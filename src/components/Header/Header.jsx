import { House, Phone, Mail } from 'lucide-react'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className='item brand'>
                <House className='icon' />
                <span>Campbridge Rentals</span>
            </div>
            <div className='item contact'>
                <Phone className='icon' /> 
                <span>(555) 123-4567</span>
            </div>
            <div className='item contact'>
                <Mail className='icon' />
                <span>learn@developmentisland.com</span>
            </div>
        </header>
    )
}

export default Header