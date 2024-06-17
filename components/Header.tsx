import Button, { ButtonVariant } from '@components/Button/Button';
import Nav from '@components/Nav';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header id="header" className="wrap wrap-px">
            <div className="header-container relative py-4 justify-between md:justify-start flex items-center">
                <div className="flex items-center mr-8">
                    <h1>
                        <Link href="/" className="logo">
                            <Image 
                                src="/images/vin.png" 
                                
                                alt="logo"
                                className="h-15 w-15 rounded-logo"  // Added rounded-logo class
                                height="100"
                                width="100" 
                                style={{ borderRadius: '50%' }} // Adjusted the width to make it square
                                priority
                            />
                        </Link>
                        <span className="hidden">Pathway Logo</span>
                    </h1>
                </div>
                <Nav />
            </div>
        </header>
    );
}

export default Header;
