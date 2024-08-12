import React, { useState, useEffect } from 'react';
import './style.css';
import experiencia from '../../json/experiencia.json';

function Experiencia() {
    const [expandedItems, setExpandedItems] = useState([]);

    useEffect(() => {
        const initialExpandedState = experiencia.flatMap(exp =>
            exp.experiencia_item.map(item => ({
                id: item.id,
                isExpanded: item.descricao.length <= 210
            }))
        );
        setExpandedItems(initialExpandedState);
    }, []);

    const toggleExpand = (id) => {
        setExpandedItems(prevState =>
            prevState.map(item =>
                item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
            )
        );
    };

    return (
        <div className="section-experiencia">
            <div className="experiencia-container">
                <div className='experiencia-header'>
                    <h2>Experiência</h2>
                </div>
                
                {experiencia.map(exp => (
                    <div key={exp.id} className='experiencia-content'>
                        <div className='experiencia-images'>
                            {exp.experiencia_images.map((image, index) => (
                                <div key={index} className='logo-empresa'>
                                    <img src={`assets/img/Experiencia/shakers/${image.src}`} alt={image.alt} />
                                </div>
                            ))}
                        </div>

                        <div className='experiencia-group-items'>                     
                            <div className='header-empresa'>
                                <h2 className='title'>{exp.header_empresa.empresa}</h2>
                                <p className='period-total'>{exp.header_empresa.periodo_total}</p>
                            </div>
                            {exp.experiencia_item.map(item => {
                                const isExpanded = expandedItems.find(expItem => expItem.id === item.id)?.isExpanded;
                                return (
                                    <div key={item.id} className={`experiencia-item ${item.id === 1 ? 'active' : '' }`}>
                                        <span className='circle'></span>
                                        <h3 className='title'>{item.cargo}</h3>
                                        <p className='working-time'>{item.tempo_trabalho}</p>
                                        <p className='period'>{item.periodo}</p>
                                        <p className='location'>{item.localizacao}</p>
                                        <div className='item-description'>
                                            <p className={isExpanded ? 'expanded' : 'collapsed'}>{item.descricao}</p>
                                            {item.descricao.length > 210 && (
                                                <span className='btn_more' onClick={() => toggleExpand(item.id)}>
                                                    {isExpanded ? 'Ler menos' : 'Ler mais'}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiencia;