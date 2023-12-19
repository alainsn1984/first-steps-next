import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Acerca de Nosotros',
 description: 'Quienes somos',
 keywords: ['About Page','Alain','informacion','...'],

};


export default function AboutPage(){
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}