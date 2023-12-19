import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Pagina de precio de servicios',
 keywords: ['Pricing Page','Alain','informacion','...'],

};


export default function PricingPage(){
    return (
        <>
            <span className="text-7xl"> Pricing Page </span>
        </>
    )
}