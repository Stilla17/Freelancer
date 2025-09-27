import React from 'react'

const UPTechProps = ({ title, desc, img, className }) => {
    return (
        <div className="flex flex-col items-center max-w-[350px]">
            <img className={`${className}`} src={img} alt="" />
            <p className='mb-[10px] text-[28px] font-medium'>
                {title}
            </p>
            <p className='text-gray-400 text-center'>
                {desc}
            </p>
        </div >
    )
}

export default UPTechProps