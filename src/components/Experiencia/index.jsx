import { useState, useEffect, useRef } from 'react';
import './style.css';
import experiencia from '../../json/experiencia.json';
import { openDropdown, closeDropdown } from '../../utils/dropdown';

function Experiencia() {
    const [expandedItems, setExpandedItems] = useState([]);
    const descriptionRefs = useRef({});

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

    const calcularPeriodo = (dataInicio, dataFim = '') => {
        const inicio = new Date(dataInicio);
        const fim = dataFim ? new Date(dataFim) : new Date();
        const total = fim.getTime() - inicio.getTime();
        const anosTotal = total / (1000 * 60 * 60 * 24 * 365.25);
        const anosInteiros = Math.floor(anosTotal);
        const mesesRestantes = Math.floor((anosTotal - anosInteiros) * 12);
        

        return {
            anos: anosInteiros,
            meses: mesesRestantes,
            textoAnos: anosInteiros <= 1 ? 'ano' : 'anos',
            textoMeses: mesesRestantes <= 1 ? 'mês' : 'meses'
        };  
    };

    return (
        <div id='experiencias' className="section-experiencia">
            <div className="experiencia-container">
                <div className='experiencia-header'>
                    <h2>Experiência</h2>
                </div>

                {experiencia.map(exp => {
                    const periodo = calcularPeriodo(
                        exp.header_empresa.periodo_inicio,
                        exp.header_empresa.periodo_fim
                    );

                    return (
                        <div key={exp.id} className='experiencia-content'>
                            <div className='experiencia-images'>
                                {exp.experiencia_images.map((image, index) => (
                                    <div key={`${exp.id}-image-${index}`} className='logo-empresa'>
                                        <img src={`assets/img/Experiencia/shakers/${image.src}`} alt={image.alt} />
                                    </div>
                                ))}
                            </div>

                            <div className='experiencia-group-items'>                     
                                <div className='header-empresa'>
                                    <h2 className='title'>{exp.header_empresa.empresa}</h2>
                                    <p className='period-total'>{periodo.anos} {periodo.textoAnos} {periodo.meses} {periodo.textoMeses}</p>
                                </div>
                                
                                {exp.experiencia_item.map(item => {
                                    const isExpanded = expandedItems.find(expItem => expItem.id === item.id)?.isExpanded;
                                    const itemPeriodo = calcularPeriodo(item.periodo_inicio, item.periodo_fim);

                                    return (
                                        <div key={item.id} className={`experiencia-item ${item.id === 1 ? 'active' : ''}`}>
                                            <span className='circle'></span>
                                            <h3 className='title'>{item.cargo}</h3>
                                            <p className='working-time'>{item.tempo_trabalho}</p>
                                            <p className='period'>{itemPeriodo.anos} {itemPeriodo.textoAnos} {itemPeriodo.meses} {itemPeriodo.textoMeses}</p>
                                            <p className='location'>{item.localizacao}</p>
                                            <div className='item-description-wrapper'>
                                                <div 
                                                    className='item-description'
                                                    ref={el => descriptionRefs.current[item.id] = el}
                                                    data-closed={!isExpanded || undefined}
                                                    data-min-height='5rem'
                                                >
                                                    {item.descricao.includes('<br>') ? (
                                                        <ul>
                                                            {item.descricao.split('<br>').map((item, index) => (
                                                                <li key={index}>{item.trim()}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>{item.descricao}</p>
                                                    )}
                                                </div>
                                                {item.descricao.length > 210 && (
                                                    <button 
                                                        className='btn_more' 
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

export default Experiencia;