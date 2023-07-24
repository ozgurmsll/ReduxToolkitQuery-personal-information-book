import React from 'react'
import { BsChevronLeft, BsChevronDown } from 'react-icons/bs'
import style from './module.Panel.css';
export const ExpandablePanel = ({ header, children }) => {
    const [isExpanded, setIsExpanded] = React.useState(true)
    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className='PanelDiv'>
            <div className='headerUsers'>
                <div className=''> 
                {header}

                </div>
                <div onClick={handleClick} > 
                    {isExpanded ? <BsChevronDown /> : <BsChevronLeft />}
        
                </div>
            </div>
            {isExpanded && <div className='usersMenü'>{children}</div>}
        
        </div>
    )
}
