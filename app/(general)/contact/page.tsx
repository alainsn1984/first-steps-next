import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Pagina de la empresa',
 keywords: ['Contact Page','Alain','informacion','...'],

};


export default function ContactPage(){
    return (
        <>
            <span className="text-7xl"> Contact Page </span>
        </>
    )
}