import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { Outlet, NavLink, useParams, Link } from "react-router-dom";

import backgroundStars from '../../public/background-stars.svg';
import burger from '../../public/icon-hamburger.svg';
import chevron from '../../public/icon-chevron.svg'

import data from '../../data.json';
import { useState } from "react";

const RootLayout = function() {
    const { planet } = useParams();

    const [opened, setOpened] = useState(false);

    const theme:any = { 
        0: {
            id: 0,
            planet: 'Mercury',
            color: '#419EBB'
        },
        1: {
            id: 1,
            planet: 'Venus',
            color: '#EDA249'
        },
        2: {
            id: 2,
            planet: 'Earth',
            color: '#6f2ed6'
        },
        3: {
            id: 3,
            planet: 'Mars',
            color: '#D14C32'
        },
        4: {
            id: 4,
            planet: 'Jupiter',
            color: '#D83A34'
        },
        5: {
            id: 5,
            planet: 'Saturn',
            color: '#CD5120'
        },
        6: {
            id: 6,
            planet: 'Uranus',
            color: '#1ec2a4'
        },
        7: {
            id: 7,
            planet: 'Neptune',
            color: '#2d68f0'
        },
}

    let number = 0;


    const arr = Object.values(theme)
    arr.forEach((each:any, i:number) => {
        if(planet === each.planet) number = i
    })

    let menu = document.getElementById('menu') as HTMLInputElement;

    const closeHandler = function() {
        menu.checked = false;
        setOpened(false);
    }

    const openHandler = function() {
        setOpened(prev => !prev);
    }

   

    return (
    <ThemeProvider theme={theme[number]}> 
        <MainWrapper>
            <img className="back-image" src={backgroundStars} alt="background stars" />
            <nav className="nav-box">
                <NavLink to='/Mercury' className='title'>The Planets</NavLink>
                <ul className="ul-box">
                    <NavLink to='/Mercury' className='planet first'><h4>Mercury</h4></NavLink>
                    <NavLink to='/Venus' className='planet second'><h4>Venus</h4></NavLink>
                    <NavLink to='/Earth' className='planet third'><h4>Earth</h4></NavLink>
                    <NavLink to='/Mars' className='planet fourth'><h4>Mars</h4></NavLink>
                    <NavLink to='/Jupiter' className='planet fifth'><h4>Jupiter</h4></NavLink>
                    <NavLink to='/Saturn' className='planet sixth'><h4>Saturn</h4></NavLink>
                    <NavLink to='/Uranus' className='planet seventh'><h4>Uranus</h4></NavLink>
                    <NavLink to='/Neptune' className='planet eighth'><h4>Neptune</h4></NavLink>
                </ul>
                <label onClick={openHandler} className="menu-label" htmlFor="menu">
                   <img className="burger" style={{opacity: opened ? 0.6 : 1 }} src={burger} alt="" />
                </label>
                <input className="checkbox" id="menu" type="checkbox" />
                <ul className="background-menu">
                    <li onClick={closeHandler} className="flexy"><div className="helper"><div className="circle first"></div><NavLink to='/Mercury' className='planet'>Mercury</NavLink></div><img src={chevron} alt="" /></li> 
                    <li onClick={closeHandler} className="flexy"><div className="helper"><div className="circle second"></div><NavLink to='/Venus' className='planet'>Venus</NavLink></div><img src={chevron} alt="" /></li>
                    <li onClick={closeHandler} className="flexy"><div className="helper"><div className="circle third"></div><NavLink to='/Earth' className='planet'>Earth</NavLink></div><img src={chevron} alt="" /></li>
                    <li onClick={closeHandler} className="flexy"><div className="helper"><div className="circle fuorth"></div><NavLink to='/Mars' className='planet'>Mars</NavLink></div><img src={chevron} alt="" /></li>
                    <li onClick={closeHandler} className="flexy"><div className="helper"><div className="circle fifth"></div><NavLink to='/Jupiter' className='planet'>Jupiter</NavLink></div><img src={chevron} alt="" /></li>
                    <li onClick={closeHandler} className="flexy"><div className="helper"><div className="circle sixth"></div><NavLink to='/Saturn' className='planet'>Saturn</NavLink></div><img src={chevron} alt="" /></li>
                    <li onClick={closeHandler} className="flexy"><div className="helper"><div className="circle seventh"></div><NavLink to='/Uranus' className='planet'>Uranus</NavLink></div><img src={chevron} alt="" /></li>
                    <li onClick={closeHandler} className="flexy"><div className="helper"><div className="circle eighth"></div><NavLink to='/Neptune' className='planet'>Neptune</NavLink></div><img src={chevron} alt="" /></li>
                </ul>
            </nav>
            <Outlet />
        </MainWrapper>
    </ThemeProvider>
    )

}

export default RootLayout;

const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--Mysterious-Depths);
    position: relative;
    overflow-x: hidden;

    .back-image { 
        pointer-events: none;
        position: absolute;
        width: 100%;
        object-fit: cover;
        height: 100%;
    }

    .nav-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem 0 2rem;
        border-bottom: 1px solid rgba(255,255,255, 0.2);

        .menu-label{ 
            position: fixed;
            top: -10%;
            opacity: 0;
        }

        .burger {
            position: fixed;
            top: -10%;
            opacity: 0;
            pointer-events: none;
        }

        .checkbox {
            display: none;
        }

        .background-menu {
            position: fixed;
            right: 0%;
            top: 3.5rem;
            height: 100vh;
            z-index: 5;
            width: 0%;
            transition: all 0.3s;
            opacity: 1;
            opacity: 0;
            pointer-events: none;
        }

        .title {
            font-size: 1.75rem;
            letter-spacing: -1.05px;
            font-family: 'Antonio';
            color: #FFF;
            text-decoration: none;
        }

        .ul-box {
            display: flex;
            gap: 2rem;
            align-items: end;

            .test {
                background: red;
                height: 100%;
            }

            .planet {
                text-transform: uppercase;
                opacity: 0.7;
                padding: 29px 0 20px 0;
                color: var(--White);
                text-decoration: none;

                &:hover {
                    opacity: 1;
                }
            }

            .test {
            }

            .first {
                border-top: 4px solid transparent;

                &:hover {
                    border-top: 4px solid var(--Mercury);
                }
            }
            .second {
                border-top: 4px solid transparent;

                &:hover {
                    border-top: 4px solid var(--Venus);
                }
            }
            .third {
                border-top: 4px solid transparent;

                &:hover {
                    border-top: 4px solid var(--Earth);
                }
            }
            .fourth {
                border-top: 4px solid transparent;

                &:hover {
                    border-top: 4px solid var(--Mars);
                }
            }
            .fifth {
                border-top: 4px solid transparent;

                &:hover {
                    border-top: 4px solid var(--Jupiter);
                }
            }
            .sixth {
                border-top: 4px solid transparent;

                &:hover {
                    border-top: 4px solid var(--Saturn);
                }
            }
            .seventh {
                border-top: 4px solid transparent;

                &:hover {
                    border-top: 4px solid var(--Uranus);
                }
            }
            .eighth {
                border-top: 4px solid transparent;

                &:hover {
                    border-top: 4px solid var(--Neptune);
                }
            }
        }
    }

    // Below 1050px
    @media(max-width: 65.625em) {
        .nav-box {
            flex-direction: column;
            padding: 0 3rem 0 3rem;

            .title { 
                padding-top: 2rem;
            }

            .ul-box {
                width: 100%;
                justify-content: space-between;

                .first {
                    border-top: none;
    
                    &:hover {
                        border-top: none;
                    }
                }
                .second {
                    border-top: none;
    
                    &:hover {
                        border-top: none;
                    }
                }
                .third {
                    border-top: none;
    
                    &:hover {
                        border-top: none;
                    }
                }
                .fourth {
                    border-top: none;
    
                    &:hover {
                        border-top: none;
                    }
                }
                .fifth {
                    border-top: none;
    
                    &:hover {
                        border-top: none;
                    }
                }
                .sixth {
                    border-top: none;
    
                    &:hover {
                        border-top: none;
                    }
                }
                .seventh {
                    border-top: none;
    
                    &:hover {
                        border-top: none;
                    }
                }
                .eighth {
                    border-top: none;
    
                    &:hover {
                        border-top: none;
                    }
                }
            }
        }
    }

        // Below 700px
        @media(max-width: 43.75em) {
            .nav-box {
                padding: 0rem 1rem 0rem 1rem;

                .ul-box {
                    gap: 0.5rem;
                }
            }
        }

                // Below 425px
                @media(max-width: 26.5625em) {
                    .nav-box {
                        flex-direction: row;
                        height: 4rem;

                        .menu-label {
                            display: flex;
                            align-items: center;
                            position: static;
                            opacity: 1;
                            pointer-events: auto;

                            .burger {
                                pointer-events: auto;
                                opacity: 1;
                                position: static;
                            }

                        }

                        .background-menu {
                            padding-top: 3rem;
                            padding-right: 1.5rem;
                            display: flex;
                            flex-direction: column;
                            gap: 2.5rem;

                            .flexy {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;

                                .helper {
                                    display: flex;
                                    align-items: center;
                                }

                                .circle {
                                    height: 20px;
                                    width: 20px;
                                    background: white;
                                    border-radius: 50%;
                                    margin: 0rem 1rem 0rem 1rem;
                                }

                                .first {
                                    background: var(--Mercury);
                                }
                                .second {
                                    background: var(--Venus);
                                }
                                .third {
                                    background: var(--Earth);
                                }
                                .fourth {
                                    background: var(--Mars);
                                }
                                .fifth {
                                    background: var(--Jupiter);
                                }
                                .sixth {
                                    background: var(--Saturn);
                                }
                                .seventh {
                                    background: var(--Uranus);
                                }
                                .eighth {
                                    background: var(--Neptune);
                                }

                                .planet {
                                    color: #FFF;
                                    text-decoration: none;
                                    font-size: 15px;
                                    line-height: 25px;
                                    letter-spacing: 1.3px;
                                    font-weight: 700;
                                    text-transform: uppercase;
                                }
                            }
                        }

                        .checkbox:checked ~ .background-menu {
                            width: 100vw;
                            background: var(--Mysterious-Depths);
                            opacity: 1;
                            pointer-events: auto;
                        }

                        .title {
                            padding: 0rem;
                        }

                        .ul-box {
                            display: none;
                        }
                    }
                }
`
