import styled from 'styled-components';

import { useParams } from 'react-router-dom';

import data from '../../data.json';
import sourceIcon from '../../public/icon-source.svg';
import { useState } from 'react';

const PlanetPage = function() {

    let number = 0;

    const { planet } = useParams();

    data.forEach((each, i) => {
        if (each.name === planet) number = i;
    })

    const [overview, setOverview] = useState(true);
    const [internal, setInternal] = useState(false);
    const [surface, setSurface] = useState(false);

    const overviewContent = data[number].overview.content;
    const internalContent = data[number].structure.content;
    const surfaceContent = data[number].geology.content;
   
    const overviewHandler = function() {
        setOverview(true);
        setInternal(false);
        setSurface(false);
    }
    const internalHandler = function() {
        setOverview(false);
        setInternal(true);
        setSurface(false);
    }
    const surfaceHandler = function() {
        setOverview(false);
        setInternal(false);
        setSurface(true);
    }

    return(
        <PlanetLayout>

            <div className='mobile-box'>
                <button onClick={overviewHandler} className={overview ? 'btn active' : 'btn'}>Overview</button>
                <button onClick={internalHandler} className={internal ? 'btn active' : 'btn'}>Structure</button>
                <button onClick={surfaceHandler} className={surface ? 'btn active' : 'btn'}>Surface</button>
            </div>

            <div className='top-facts'>
                <div className='image-box'>
                <img src={overview ? data[number].images.planet : internal ? data[number].images.internal : surface ? data[number].images.planet : '' } alt="" />
                {surface ? <img className='geology' src={data[number].images.geology} alt="" /> : null}
                </div>

                <div className='facts-box'>
                    <div className='main-box'>
                        <h1>{data[number].name}</h1>
                        <p className='overview'>
                            {overview ? overviewContent : internal ? internalContent : surface ? surfaceContent : null}
                        </p>
                        <span className='source'>Source: <a className='wikiLink' target='_blank' href={data[number].overview.source}>Wikipedia <img src={sourceIcon} alt="" /></a></span>
                    </div>
                    <div className='btn-box'>
                        <button onClick={overviewHandler} className={overview ? 'btn active' : 'btn'}><span>01</span>Overview</button>
                        <button onClick={internalHandler} className={internal ? 'btn active' : 'btn'}><span>02</span>Internal Structure</button>
                        <button onClick={surfaceHandler} className={surface ? 'btn active' : 'btn'}><span>03</span>Surface Geology</button>
                    </div>
                </div>
            </div>
            <div className='boxy-facts'>
                <div className='boxy'>
                    <span className='title'>Rotation Time</span>
                    <h2 className='info'>{data[number].rotation}</h2>
                </div>
                <div className='boxy'>
                    <span className='title'>Revolution Time</span>
                    <h2 className='info'>{data[number].revolution}</h2>
                </div>
                <div className='boxy'>
                    <span className='title'>Radius</span>
                    <h2 className='info'>{data[number].radius}</h2>
                </div>
                <div className='boxy'>
                    <span className='title'>Average Temp.</span>
                    <h2 className='info'>{data[number].temperature}</h2>
                </div>
            </div>
        </PlanetLayout>
    )
}

export default PlanetPage;

const PlanetLayout = styled.div`
    display: flex;
    flex-direction: column;
    ${props => `width: calc(100vw - 330px);`}
    margin: 3rem auto 0rem auto;
    gap: 5.4rem;

    .mobile-box {
        position: fixed;
        z-index: -1;
        pointer-events: none;
        opacity: 0;
    }

    .top-facts {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .image-box {
            width: 70%;
            max-height: 30rem;
            display: flex;
            justify-content: center;
            position: relative;

            img { 
                object-fit: contain;
                position: relative;
            }

            .geology {
                position: absolute;
                width: 10rem;
                height: 12.5rem;
                bottom: -10%;
            }
        }
        
        .facts-box {
            width: 21.87rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            .main-box {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                .overview {
                    font-family: 'League Spartan';
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 1px;
                    opacity: 0.8;
                }
    
                .source {
                    opacity: 0.6;
                    font-weight: 200;
                    padding-bottom: 1rem;
                }
    
                .wikiLink {
                    opacity: 0.8;
                    font-weight: 700;
                    font-size: 15px;
                    color: #FFF;
                }
            }

            .btn-box {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .btn {
                    height: 3rem;
                    width: 100%;
                    border: 1px solid rgba(255,255,255,0.2);
                    background: transparent;
                    color: #FFF;
                    font-weight: 800;
                    letter-spacing: 2.5px;
                    font-size: 12px;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
    
                    &:hover {
                        background: #D8D8D8;
                    }
    
                    span {
                        opacity: 0.7;
                        padding: 0 1.75rem;
                    }
                }
                .active {
                    background: ${props => props.theme.color};
                    
                    &:hover {
                        background: ${props => props.theme.color};
                    }
                }
            }
        }
    }

    .boxy-facts {
        display: flex;
        justify-content: space-between;

        .boxy {
            width: 15.9rem;
            height: 8rem;
            border: 1px solid rgba(255,255,255,0.2);
            padding-top: 20px;
            padding-left: 23px;
            display: flex;
            flex-direction: column;

            .title {
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                opacity: 0.8;
            }
        }
    }

    // Below 1050px
    @media(max-width: 65.625em) {
        ${props => `width: calc(100vw - 80px);`}
    }

        @media(max-width: 800px) {

            .top-facts {
                flex-direction: column;

                .image-box {
                    height: 15rem;
                    max-height: none;
                    margin: 4rem 0 4rem 0;

                    .geology {
                        height: 8rem;
                    }
                }

                .facts-box {
                    flex-direction: row;
                    align-items: center;
                    gap: 2.3rem;
                    width: auto;

                    .main-box {
                        width: 25rem;

                        h1 {
                            font-size: 3rem;
                        }

                        .overview {
                            font-size: 12px;
                        }
                    }

                    .btn-box {
                        .btn {
                            font-size: 10px;
                            white-space: nowrap;
                            span {
                                padding: 0rem 0.5rem 0rem 0.5rem;
                            }
                        }
                    }
                }
            }

            .boxy-facts {
                .boxy {
                    width: 10rem;
                    height: 5.5rem;
                    padding-top: 0.5rem;
                    padding-left: 1rem;

                    .title {
                        font-size: 8px;
                    }

                    .info {
                        font-size: 1.5rem;
                        line-height: 31px;
                    }
                }
            }
        }

                // Below 650px
                @media(max-width: 40.625em) {

                    .top-facts {

                        .facts-box{
                            gap: 0.5rem;
                        }
                    }
                }


                // Below 620px
                @media(max-width: 38.75em) {
                    padding-bottom: 3rem;
                    margin: 0 auto;
                    gap: 1rem;

                    .mobile-box {
                        position: static;
                        z-index: 0;
                        pointer-events: auto;
                        opacity: 1;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        width: 100%;

                        .btn {
                            height: 2rem;
                            background: transparent;
                            border: none;
                            opacity: 0.8;
                            color: #FFF;
                            font-weight: 700;
                            font-size: 9px;
                            text-transform: uppercase;
                            cursor: pointer;
                        }
                        .active {
                            border-bottom: 4px solid ${props => props.theme.color};
                            
                            &:hover {
                                border-bottom: 4px solid ${props => props.theme.color};
                            }
                        }
                    }

                    .top-facts {
                        .image-box {
                        }

                        .facts-box {

                            .main-box {
                                text-align: center;
                                gap: 0.3rem;
                                width: auto;

                                .source {
                                    margin-top: 1rem;
                                }
                            }

                            .btn-box {
                                display: none;
                            }
                        }
                    }

                    .boxy-facts {
                        flex-direction: column;
                        gap: 8px;

                        .boxy {
                            width: 100%;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;
                            padding-right: 1rem;

                            .title {
                                font-size: 8px;
                            }

                            .info {
                                font-size: 1.3rem;
                            }
                        }
                    }
                }
`