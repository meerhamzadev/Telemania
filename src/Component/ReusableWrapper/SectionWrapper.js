import React from 'react'

function SectionWrapper({ children, extraStyles }) {
    return (
        <section className={`flex flex-col text-white ${extraStyles}`} >
            {children}
        </section>
    )
}

export default SectionWrapper