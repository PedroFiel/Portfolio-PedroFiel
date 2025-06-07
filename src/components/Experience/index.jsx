import { useState, useEffect, useRef } from 'react';
import './style.css';
import experience from '../../json/experience.json';
import { openDropdown, closeDropdown } from '../../utils/dropdown';

function Experience() {
    const [expandedItems, setExpandedItems] = useState([]);
    const descriptionRefs = useRef({});

    useEffect(() => {
        const initialExpandedState = experience.flatMap(exp =>
            exp.experience_item.map(item => ({
                id: item.id,
                isExpanded: item.description.length <= 210
            }))
        );
        setExpandedItems(initialExpandedState);
    }, []);

    const toggleExpand = (id) => {
        const descriptionElement = descriptionRefs.current[id];
        const isCurrentlyExpanded = expandedItems.find(item => item.id === id)?.isExpanded;

        if (!descriptionElement) return;

        if (isCurrentlyExpanded) {
            closeDropdown(descriptionElement);
        } else {
            openDropdown(descriptionElement);
        }

        setExpandedItems(prevState =>
            prevState.map(item =>
                item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
            )
        );
    };

    const calcularPeriod = (startDate, endDate = '') => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();
        const total = end.getTime() - start.getTime();
        const yearsTotal = total / (1000 * 60 * 60 * 24 * 365.25);
        const yearsInt = Math.floor(yearsTotal);
        const monthsRest = Math.floor((yearsTotal - yearsInt) * 12);
        

        return {
            years: yearsInt,
            months: monthsRest,
            textYears: yearsInt <= 1 ? 'ano' : 'anos',
            textMonths: monthsRest <= 1 ? 'mês' : 'meses'
        };  
    };

    return (
        <div id='experience' className="section-experience">
            <div className="section-experience__container">
                <div className='section-experience__header'>
                    <h2>Experiência</h2>
                </div>

                {experience.map(exp => {
                    const period = calcularPeriod(
                        exp.header_company.period_start,
                        exp.header_company.period_end
                    );

                    return (
                        <div key={exp.id} className='section-experience__content'>
                            <div className='section-experience__images'>
                                {exp.experience_images.map((image, index) => (
                                    <div key={`${exp.id}-image-${index}`} className='section-experience__logo-company'>
                                        <img src={`assets/img/Experience/shakers/${image.src}`} alt={image.alt} />
                                    </div>
                                ))}
                            </div>

                            <div className='section-experience__group-items'>                     
                                <div className='section-experience__header-company'>
                                    <h2 className='title'>{exp.header_company.company}</h2>
                                    <p className='period-total'>{period.years} {period.textYears} {period.months} {period.textMonths}</p>
                                </div>
                                
                                {exp.experience_item.map(item => {
                                    const isExpanded = expandedItems.find(expItem => expItem.id === item.id)?.isExpanded;
                                    const itemPeriod = calcularPeriod(item.periodo_inicio, item.periodo_fim);

                                    return (
                                        <div key={item.id} className={`section-experience__item ${item.id === 1 ? 'active' : ''}`}>
                                            <span className='circle'></span>
                                            <h3 className='title'>{item.position}</h3>
                                            <p className='working-time'>{item.work_time}</p>
                                            <p className='period'>{itemPeriod.years} {itemPeriod.textYears} {itemPeriod.months} {itemPeriod.textMonths}</p>
                                            <p className='location'>{item.location}</p>
                                            <div className='section-experience__item-description-wrapper'>
                                                <div 
                                                    className='section-experience__item-description'
                                                    ref={el => descriptionRefs.current[item.id] = el}
                                                    data-closed={!isExpanded || undefined}
                                                    data-min-height='5rem'
                                                >
                                                    {item.description.includes('<br>') ? (
                                                        <ul>
                                                            {item.description.split('<br>').map((item, index) => (
                                                                <li key={index}>{item.trim()}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>{item.description}</p>
                                                    )}
                                                </div>
                                                {item.description.length > 210 && (
                                                    <button 
                                                        className='section-experience__btn-more' 
                                                        onClick={() => toggleExpand(item.id)}
                                                        type="button"
                                                    >
                                                        {isExpanded ? 'Ler menos' : 'Ler mais'}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;