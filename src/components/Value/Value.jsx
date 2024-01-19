import React, { useState } from 'react'
import './Value.css'
import value from '../../assets/value.png'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import data from '../../utils/accordin'
import { MdOutlineArrowDropDown } from 'react-icons/md'
function Value() {
    const [className, setClassName] = useState(null)

    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src={value} alt="" />

                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className='orangeText'>
                        Our Value
                    </span >
                    <span className='primaryText'>Our Value We Give To You</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you.
                        <br />We beleive a good blace to live can make your life better</span>
                    <Accordion
                        className='accordian'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item, i) => {
                                return (
                                    <AccordionItem className={`accordianItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordianButton'>

                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                                                </AccordionItemState>
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>

    )
}

export default Value