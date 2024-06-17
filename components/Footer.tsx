import Link from "next/link"

// Your data array
const DATA = [
    { 
        label: 'Home', 
        href: '/' 
    },
    { 
        label: 'About', 
        href: '/about' 
    },

    { 
        label: 'Pricing & Policies', 
        href: '/pricing' 
    },

    {
        label: 'Email',
        href: 'mailto:huntingvintageal1@gmail.com'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/huntingvintagealb/'
    },
    {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@huntingvintagealb'
    }
]

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer id="footer">
            <section className="footer-container wrap wrap-px">
                <div className="footer-content-container my-16 md:my-24">
                    <div className="footer-links grid grid-cols-2 gap-8 md:grid-cols-8 lg:grid-cols-12 mb-12 md:mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <ul>
                                {DATA.slice(0, Math.ceil(DATA.length / 2)).map(item => (
                                    <li key={item.label} className="gap-2">
                                        <a className="font-medium block w-auto mb-2 hover:text-primary-500 transition-colors duration-300" href={item.href}>
                                            {item.label}
                                            {
                                                
                                            }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <ul>
                                {DATA.slice(Math.ceil(DATA.length / 2)).map(item => (
                                    <li key={item.label} className="gap-2">
                                        <a className="font-medium block w-auto mb-2 hover:text-primary-500 transition-colors duration-300" href={item.href}>
                                            {item.label}
                                            {
                                            }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-8 flex justify-end items-center">
                            <img src="/images/vin.png" alt="Logo" className="h-12 md:h-20" style={{ borderRadius: '50%' }} />
                        </div>
                    </div>
                    <div className="footer-credits text-black/60">
                        <p>© {year} - Hunting Vintage. All rights reserved. <span className="font-semibold">Powered by <Link className="hover:text-primary-500 transition-colors duration-300" href="https://www.instagram.com/onex.dev/?hl=en" target="_blank">OneX</Link></span></p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
