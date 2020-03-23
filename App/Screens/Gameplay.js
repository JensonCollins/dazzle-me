App.Gameplay = new Screen({

    Name: "Gameplay",

    Containers: [
        {   name: 'RootContainer', alpha:0,
            saleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {   name: 'BackgroundContainer',
                    childs: [
                        {
                            name: 'background container wrapper',
                            childs: [
                                {
                                    name: 'game background',
                                    type: 'sprite',
                                    image: 'game_background',
                                    scale: [1920 / 1280, 1080 / 720]
                                },
                                {   name: 'LogoContainer', visible:true,
                                    childs: [
                                        {
                                            name: 'logo',
                                            type: 'sprite',
                                            position: [-550, -435],
                                            image: 'logo',
                                            scale: [1.5, 1.5],//[1.31, 1.44],
                                            visible: false,
                                            event: 'screen'
                                        },
                                        {   name: 'logo 3',
                                            type: 'sprite',
                                            position: [-570, -445],
                                            //image: 'logo_3',
                                            scale: [1.3, 1.3],
                                            rotation: -0.1,
                                            visible: true,
                                            childs: [
                                                {   name: 'logo 2',
                                                    type: 'sprite',
                                                    position: [0, 0],
                                                    image: 'logo_2',
                                                    childs: [
                                                        {   name: 'dazzlime',
                                                            type: 'sprite',
                                                            position: [50, 0],
                                                            image: 'dazzlingAni-00.png',
                                                            childs: [
                                                                {   name: 'logo 1',
                                                                    type: 'sprite',
                                                                    position: [-180, 0],
                                                                    image: 'logo_1',
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: 'logo text',
                                            type: 'text',
                                            text: '125',
                                            position: [-550, -400],
                                            visible: false,
                                            styles: {
                                                fill: 0x000000,//0xffffff,
                                                fontFamily: "PFDinDisplayPro-Black",
                                                fontSize: '45px',
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x875f3a,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 25,
                                                padding: 20
                                            }
                                        },
                                        // {
                                        //     name: "win points",
                                        //     type: 'bitmap-text',
                                        //     text: '123',
                                        //     position: [-550, -425],
                                        //     styles: {
                                        //         font: {
                                        //             name: 'game_font',
                                        //             size: '60px'
                                        //         },
                                        //     }
                                        // }
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {   name: 'MainContainer',
                    childs: [
                        {
                            name: 'main container wrapper',
                            position: [0, 0],
                            scale: [1, 1],
                            childs: [
                                {   name: 'linebet container',
                                    childs: []
                                },
                                {   name: 'line container',
                                    childs: []
                                },
                                {   name: 'game board container',
                                    scale: [1.0, 1.0],//[1519 / 1522, 726 / 732],
                                    visible: true,
                                    position: [0, -75],
                                    childs: [
                                        {
                                            name: 'game board symbols wildcard container',
                                            childs: []
                                        } ,
                                        {
                                            name: 'game board symbols container',
                                            childs: []
                                        },
                                        {   name: 'win bar overlay',
                                            type: 'graphics',
                                            draw: [['beginFill', 0x000000], ['drawRect', [-1920, -1920, 3840, 3840]]],
                                            alpha: 0.7,
                                            visible: false
                                        },
                                        {   name: 'passive overlay',
                                            alpha: 0,
                                            childs: [
                                                {   name:'reel 1 passive overlay',
                                                    type: 'graphics',
                                                    position: [-282 * 2 - 47, 3],
                                                    draw: [['beginFill', 0x000000], ['drawRect', [-282/2 - 5, -524/2 - 5, 282, 524]]]
                                                },
                                                {   name:'reel 2 passive overlay',
                                                    type: 'graphics',
                                                    position: [-282 * 1 - 23, 3],
                                                    draw: [['beginFill', 0x000000], ['drawRect', [-282/2 - 5, -524/2 - 5, 282, 524]]]
                                                },
                                                {   name:'reel 3 passive overlay',
                                                    type: 'graphics',
                                                    position: [-282 * 0, 5],
                                                    draw: [['beginFill', 0x000000], ['drawRect', [-282/2 - 5, -700/2 - 5, 282, 700]]]
                                                },
                                                {   name:'reel 4 passive overlay',
                                                    type: 'graphics',
                                                    position: [282 * 1 + 23, 5],
                                                    draw: [['beginFill', 0x000000], ['drawRect', [-282/2 - 5, -700/2 - 5, 282, 700]]]
                                                },
                                                {   name:'reel 5 passive overlay',
                                                    type: 'graphics',
                                                    position: [282 * 2 + 48, 5],
                                                    draw: [['beginFill', 0x000000], ['drawRect', [-282/2 - 5, -876/2 - 5, 282, 876]]]
                                                }
                                            ]
                                        },
                                        {
                                            name: 'game board symbols flash container',
                                            childs: []
                                        },
                                        {
                                            name: 'game board symbols highlighted container',
                                            childs: []
                                        },
                                        {
                                            name: 'game board winLines',
                                            childs: []
                                        }
                                    ]
                                },
                                {   name: 'test animation',
                                    position: [0, -45],
                                    childs: []
                                },
                                {   name: 'close button',
                                    type: 'graphics',
                                    button: 'button', visible:false,
                                    position: [870, -480],
                                    draw: [['beginFill', 0x5555dd], ['drawRoundedRect', [-90 / 2, -35 / 2, 90, 35, 15]]],
                                    childs: [
                                        {
                                            name: 'close button glow',
                                            type: 'graphics'
                                        },
                                        {
                                            name: 'close button border',
                                            type: 'graphics',
                                            position: [0, 0],
                                            draw: [['lineStyle', 2, 0x000000, 0.5], ['beginFill', 0x1e50be], ['drawRoundedRect', [-85 / 2, -30 / 2, 85, 30, 15]]]
                                        },
                                        {
                                            name: 'close button text',
                                            type: 'text',
                                            text: 'More games',
                                            position: [0, 0],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '12px',
                                                fill: 0xffffff
                                            }
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {   name: 'StatusBarContainer',
                    type: 'sprite',
                    image: 'status_panel',
                    mask:  'bar mask',
                    position: [-510, 275],
                    scale: [1920 / 1280, 1080/ 720],
                    childs: [
                        {   name: 'bar mask',
                            type: 'graphics',
                            position: [0, -2],
                            draw: [['beginFill', 0x000000], ['drawRect', [-410 / 2, -50 / 2, 410, 50]]],
                            alpha:0.5
                        },
                        {   name: 'status text',
                            type: 'text',
                            position: [0, 0],
                            scale: [1, 1.1],
                            text: 'win on up to 76 bet lines',
                            styles: {
                                align: 'left',
                                fill: 0xffffff,
                                fontSize: '25px',
                                fontWeight: 800,
                                fontFamily: 'Arial'
                            },
                            update: null
                        },
                        {   name: 'status win box', alpha:0,
                            childs: [
                                {   name: 'status win label',
                                    type: 'text',
                                    position: [-140, 0],
                                    scale: [1, 1.1],
                                    text: 'WIN:',
                                    styles: {
                                        align: 'left',
                                        fill: 0xffffff,
                                        fontSize: '35px',
                                        fontWeight: 800,
                                        fontFamily: 'Arial'
                                    }
                                },
                                {   name: 'status win amount text',
                                    type: 'text',
                                    position: [160, 0],
                                    scale: [1, 1.1],
                                    text: '0',
                                    styles: {
                                        align: 'right',
                                        fill: 0xffff00,
                                        fontSize: '40px',
                                        fontWeight: 800,
                                        fontFamily: 'Arial'
                                    }
                                },
                            ]
                        }
                    ]
                },
                {   name: 'InfoContainer',
                    visible: false,
                    childs: [
                        {
                            name: 'infocontainer overlay rect',
                            event: 'infocontainer overlay',
                            type: 'graphics',
                            preventDefault: false,
                            // draw: [['beginFill', 0x000000], ['drawRect', [-1920 / 2, -1080 / 2, 1920, 1080]]],
                            // alpha: 0.5,
                        },
                        {   name: 'info background',
                            type: 'sprite',
                            image: 'help_background',
                            event: 'infobackground',
                            position: [0, -30],
                            scale: [1920/1280, 1080/720],
                        },
                        {   name: 'info container wrapper',
                            childs: [
                                {   name: 'info control container',
                                    childs: [
                                        {   name: 'info close button',
                                            type: 'sprite',
                                            image: 'close_btn_up.png',
                                            position: [900, -450],
                                            scale: [1.4, 1.4],
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'info close button glow',
                                                    type: 'sprite',
                                                    image: 'close_btn_over.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {   name: 'info prev button',
                                            type: 'sprite',
                                            image: 'arrow_previev_up.png',
                                            position: [-900, -100],
                                            scale: [1.5, 1.5],
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'info prev button glow',
                                                    type: 'sprite',
                                                    image: 'arrow_previev_over.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {   name: 'info next button',
                                            type: 'sprite',
                                            image: 'arrow_previev_up.png',
                                            position: [900, -100],
                                            scale: [-1.5, 1.5],
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'info next button glow',
                                                    type: 'sprite',
                                                    image: 'arrow_previev_over.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {   name: 'info indicator container',
                                            scale: [1.5, 1.5],
                                            position: [0, 200],
                                            childs: []
                                        },
                                        {
                                            name: 'info content 2',
                                            type: 'text',
                                            text: 'Only the highest win per bet line is paid. Bet line wins pay if in succession from the leftmost reel to the rightmost reel. \n Malfunction voids all pays and plays. For more information, see the Game Rules.',
                                            position: [0, 280],
                                            styles: {
                                                align: 'center',
                                                fill: 0x005daa,
                                                fontSize: '20px'
                                            }
                                        },
                                    ]
                                },
                                {   name: 'info container 1',
                                    visible: true,
                                    childs: [
                                        {
                                            name: 'container1 background',
                                            position: [0, 0],
                                            scale: [1.5, 1.5],
                                            childs: [
                                                {
                                                    name: 'info container1 mark',
                                                    type: 'sprite',
                                                    scale: 0.8,
                                                    image: 'intro_mark_2',
                                                    position: [-300, -70],
                                                },
                                                {
                                                    name: 'info container1 dazzling',
                                                    type: 'sprite',
                                                    scale: 0.8,
                                                    image: 'dazzlingAni-00.png',
                                                    position: [-150, 0],
                                                },
                                            ]
                                        },
                                        {
                                            name: 'info content 11',
                                            type: 'text',
                                            position: [200, -320],
                                            scale: [1, 1],
                                            text: 'DAZZLING WILD REELS',
                                            styles: {
                                                align: 'center',
                                                fill: 0x005daa,
                                                fontSize: '50px',
                                                fontWeight: 600
                                            }
                                        },
                                        {
                                            name: 'info content 12',
                                            type: 'text',
                                            position: [260, -80],
                                            scale: [1, 1.1],
                                            text: 'Dazzling Wild Reels randomly appear during the main game as \nan overlay reel with only Wild symbols. \n\n1-5 reels can turn into Dazzling Wild Reels. \n\n Wild Symbols substitute for all symbols except for Free Spin \nsymbols.',
                                            styles: {
                                                align: 'left',
                                                fill: 0x005daa,
                                                fontSize: '25px',
                                                fontWeight: 500,
                                                fontFamily: 'Arial'
                                            }
                                        },
                                    ]
                                },
                                {   name: 'info container 2',
                                    visible: false,
                                    childs: [
                                        {
                                            name: 'container2 background',
                                            position: [0, 0],
                                            scale: [1.5, 1.5],
                                            childs: [
                                                {
                                                    type: 'sprite',
                                                    image: 'SYM6.png',
                                                    scale: 2.0,
                                                    position: [-300, -50]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'info content 21',
                                            type: 'text',
                                            position: [200, -320],
                                            scale: [1, 1],
                                            text: 'FREE SPINS',
                                            styles: {
                                                align: 'left',
                                                fill: 0x005daa,
                                                fontSize: '50px',
                                                fontWeight: 600
                                            }
                                        },
                                        {
                                            name: 'info content 22',
                                            type: 'text',
                                            position: [230, -180],
                                            scale: [1, 1.1],
                                            text: '3 or more Free Spin symbols appearing anywhere on the \nreels in the main game activates Free Spins.',
                                            styles: {
                                                align: 'left',
                                                fill: 0x005daa,
                                                fontSize: '25px',
                                                fontWeight: 500
                                            }
                                        },
                                        {
                                            name: 'info content 99',
                                            type: 'text',
                                            position: [200, 0],
                                            scale: [1, 1.1],
                                            text: '3 Free Spin symbols = 8 Free Spins \n\n4 Free Spin symbols = 12 Free Spins \n\n5 Free Spin symbols = 16 Free Spins',
                                            styles: {
                                                align: 'left',
                                                fill: 0x005daa,
                                                fontSize: '35px',
                                                fontWeight: 500
                                            }
                                        },
                                    ]
                                },
                                {   name: 'info container 3',
                                    visible: true,
                                    childs: [
                                        {
                                            name: 'container3 background',
                                            position: [0, 0],
                                            scale: [1.5, 1.5],
                                            childs: [
                                                {
                                                    name: 'info container3 mark',
                                                    type: 'sprite',
                                                    scale: 0.8,
                                                    image: 'intro_mark_1',
                                                    position: [-300, -70],
                                                }
                                            ]
                                        },
                                        {
                                            name: 'info content 31',
                                            type: 'text',
                                            position: [200, -320],
                                            scale: [1, 1],
                                            text: 'LINKED REELS',
                                            styles: {
                                                align: 'center',
                                                fill: 0x005daa,
                                                fontSize: '50px',
                                                fontWeight: 600
                                            }
                                        },
                                        {
                                            name: 'info content 32',
                                            type: 'text',
                                            position: [260, -80],
                                            scale: [1, 1.1],
                                            text: 'The Linked Reels feature appears during Free Spins only. \n\nAt the beginning of each spin, identifical linked reels appear adjacently \non any of reels 1-4\n\nThe right reel is a copy of the left reel, with reel 1 linked to reel 2 \nand/or reel3 linked to reel4.',
                                            styles: {
                                                align: 'left',
                                                fill: 0x005daa,
                                                fontSize: '25px',
                                                fontWeight: 500,
                                                fontFamily: 'Arial'
                                            }
                                        },
                                    ]
                                },
                                {   name: 'info container 4',
                                    visible: false,
                                    childs: [
                                        {
                                            name: 'info content 51',
                                            type: 'text',
                                            position: [0, -350],
                                            scale: [1.0, 1],
                                            text: 'SYMBOL PAYOUT VALUES',
                                            styles: {
                                                align: 'center',
                                                fill: 0x005daa,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            }
                                        },
                                        {   name: 'symbols background',
                                            type: 'sprite',
                                            image: 'info_symbol_bg.png',
                                            scale : [1.3, 1.5],
                                            position: [0, 0]
                                        },
                                        {   name: 'symbol_bar3',
                                            type: 'sprite',
                                            image: 'SYM0.png',
                                            position: [-580-145, -220],
                                            scale: [1.4, 1.4],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: [-30, 140],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '400',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: [-30, 190],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '80',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: [-30, 240],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '40',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '2',
                                                    position: [-30, 290],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '3',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {   name: 'symbol_bar3',
                                            type: 'sprite',
                                            image: 'SYM1.png',
                                            position: [-290-145, -220],
                                            scale: [1.4, 1.4],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: [-30, 140],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '250',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: [-30, 190],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '65',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: [-30, 240],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '20',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {   name: 'symbol_bar3',
                                            type: 'sprite',
                                            image: 'SYM2.png',
                                            position: [0-145, -220],
                                            scale: [1.4, 1.4],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: [-30, 140],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '200',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: [-30, 190],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '60',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: [-30, 240],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '15',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {   name: 'symbol_bar3',
                                            type: 'sprite',
                                            image: 'SYM3.png',
                                            position: [0+145, -220],
                                            scale: [1.4, 1.4],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: [-30, 140],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '150',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: [-30, 190],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '50',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: [-30, 240],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '15',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {   name: 'symbol_bar3',
                                            type: 'sprite',
                                            image: 'SYM4.png',
                                            position: [290+145, -220],
                                            scale: [1.4, 1.4],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: [-30, 140],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '100',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: [-30, 190],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '45',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: [-30, 240],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '15',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {   name: 'symbol_bar3',
                                            type: 'sprite',
                                            image: 'SYM5.png',
                                            position: [290*2+145, -220],
                                            scale: [1.4, 1.4],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: '5',
                                                    position: [-30, 140],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '100',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '4',
                                                    position: [-30, 190],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '45',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'text',
                                                    text: '3',
                                                    position: [-30, 240],
                                                    styles: {
                                                        fill: 0x005daa,
                                                        fontSize: '40px',
                                                        fontWeight: 600
                                                    },
                                                    childs: [
                                                        {
                                                            type: 'text',
                                                            text: '15',
                                                            position: [70, 0],
                                                            styles: {
                                                                fill: 0x752154,
                                                                fontSize: '40px',
                                                                fontWeight: 600
                                                            },
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {   name: 'info container 5',
                                    visible: false,
                                    childs: [
                                        {
                                            name: 'info content 51',
                                            type: 'text',
                                            position: [0, -350],
                                            scale: [1.0, 1.0],
                                            text: 'WINNING BET LINES',
                                            styles: {
                                                align: 'center',
                                                fill: 0x005daa,
                                                fontSize: '40px',
                                                fontWeight: 600
                                            }
                                        },
                                        {
                                            name: 'betlines',
                                            type: 'sprite',
                                            image: 'paylines',
                                            position: [0, -100],
                                            scale: [1.5, 1.5],
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {   name: 'ControlPanelContainer', visible: true,
                    childs: [
                        /*{
                            name: "spine1",
                            type: "spine",
                            spineData: "char4-data",
                            spineAtlas: "texture",
                            spineAtlasFolder: "char4/",
                            anchor: [.5, 1],
                            position: [0, 50],
                            visible: true
                        },*/
                        {
                            name: 'control panel container wrapper',
                            scale: [1, 1],
                            position: [0, 404],
                            childs: [
                                {   name: 'control panel bg',
                                    type: 'sprite',
                                    position: [0, 0],
                                    childs: [
                                        {   name: 'panel background',
                                            type: 'sprite',
                                            image: 'controlPanel_background',
                                            scale: [1920/1280, 1920/1280],
                                            position: [0, 15],
                                            alpha: 0.7
                                        },
                                        {   name: 'start button bar',
                                            position: [0, 10],
                                            scale: [1.5, 1.5],
                                            childs: [
                                                {
                                                    name: 'start button',
                                                    type: 'sprite',
                                                    image: 'spinButtonIdle.png',
                                                    button: 'button',
                                                    position: [0, 0],
                                                },
                                                {
                                                    name: 'start button glow',
                                                    type: 'sprite',
                                                    image: 'spinButtonOver.png',
                                                    alpha: 0,
                                                    visible: false,
                                                },
                                                {
                                                    name: 'start button disabled',
                                                    type: 'sprite',
                                                    button: 'disabled button',
                                                    image: 'spinButtonDisabled.png',
                                                    alpha: 0,
                                                    visible: false,
                                                }
                                            ]
                                        },
                                        {   name: 'maxbet button bar',
                                            position: [165, 10],
                                            scale: [1.3, 1.3],
                                            childs: [
                                                {
                                                    name: 'maxbet button',
                                                    type: 'sprite',
                                                    button: 'button',
                                                    image: 'autoPlayButtonUp.png',
                                                    scale: [-1, 1],
                                                    position: [0, 0]
                                                },
                                                {
                                                    name: 'maxbet button glow',
                                                    type: 'sprite',
                                                    image: 'autoPlayButtonOver.png',
                                                    scale: [-1, 1],
                                                    alpha: 0,
                                                    visible: false,
                                                },
                                                {
                                                    name: 'maxbet button text',
                                                    position: [0, 0],
                                                    type: 'text',
                                                    text: "MAX\nBET",
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '18px',
                                                        fontWeight: '700',
                                                    }
                                                },
                                                {
                                                    name: 'maxbet button disabled',
                                                    type: 'sprite',
                                                    button: 'disabled button',
                                                    image: 'autoPlayButtonDisabled.png',
                                                    scale: [-1, 1],
                                                    alpha: 0,
                                                    visible: false,
                                                },
                                            ]
                                        },
                                        {   name: 'auto start button bar',
                                            position: [-165, 10],
                                            scale: [1.3, 1.3],
                                            childs: [
                                                {
                                                    name: 'auto start button',
                                                    type: 'sprite',
                                                    button: 'button',
                                                    image: 'autoPlayButtonUp.png',
                                                    position: [0, 0]
                                                },
                                                {
                                                    name: 'auto start button glow',
                                                    type: 'sprite',
                                                    image: 'autoPlayButtonOver.png',
                                                    alpha: 0,
                                                    visible: false,
                                                },
                                                {
                                                    name: 'auto start button text',
                                                    position: [0, 0],
                                                    type: 'text',
                                                    text: "AUTO\nPLAY",
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '18px',
                                                        fontWeight: '700'
                                                    }
                                                },
                                                {
                                                    name: 'auto start button disabled',
                                                    type: 'sprite',
                                                    button: 'disabled button',
                                                    image: 'autoPlayButtonDisabled.png',
                                                    alpha: 0,
                                                    visible: false,
                                                }
                                            ]
                                        },
                                        {   name: 'button paytable',
                                            position: [-910, -10],
                                            scale: [1.5, 1.5],
                                            type: 'sprite',
                                            image: 'paytableButtonUp.png',
                                            button: 'button',
                                            childs: [
                                                {
                                                    name: 'button paytable glow',
                                                    type: 'sprite',
                                                    image: 'paytableButtonOver.png',
                                                    alpha: 0
                                                }
                                            ]
                                        },
                                        {   name: 'coin bar',
                                            position: [420, 40],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'coin bar background',
                                                    type: 'sprite',
                                                    scale: [1.45, 1.4],
                                                    image: 'element_background.png',
                                                    position: [0, 10]
                                                },
                                                {
                                                    name: 'coin bar text',
                                                    type: 'text',
                                                    text: '1',
                                                    position: [0, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '23px',
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x875f3a,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        padding: 20
                                                    }
                                                },
                                                {
                                                    name: 'coin bar label',
                                                    type: 'text',
                                                    text: 'COIN VALUE',
                                                    position: [0, -40],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '23px',
                                                        fontWeight: 700
                                                    }
                                                },
                                                {
                                                    name: 'coin bar up container',
                                                    scale: [1.3, 1.3],
                                                    position: [100, 10],
                                                    childs: [
                                                        {
                                                            name: 'coin bar up',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'coin bar up glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        },
                                                        {
                                                            name: 'coin bar up disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            scale: [-1, 1],
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 0,
                                                            visible: false,
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'coin bar down container',
                                                    scale: [-1.3, 1.3],
                                                    position: [-100, 10],
                                                    childs: [
                                                        {
                                                            name: 'coin bar down',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'coin bar down glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'coin bar down disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            scale: [-1, 1],
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 0.5,
                                                            visible: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'coin bar progress',
                                                    position: [23, 60],
                                                    scale: [1, 1],
                                                    childs: [
                                                        {
                                                            name: 'coin progress fill',
                                                            type: 'sprite',
                                                            position: [-23, -31],
                                                            scale: [1.45, 1],
                                                            image: 'selectorBarFill.png',
                                                        },
                                                        {
                                                            name: 'coin progress back',
                                                            type: 'graphics',
                                                            position: [-140, -37],
                                                            mask: 'coin progress mask',
                                                            alpha: 1,
                                                            draw: [
                                                                ['beginFill', [0x82be00]],
                                                                ['drawRect', [-140 / 2, 5 / 2, 140, 5]]
                                                            ],
                                                        },
                                                        {
                                                            name: 'coin progress mask',
                                                            type: 'graphics',
                                                            position: [-23, -37],
                                                            alpha: 0.8,
                                                            draw: [
                                                                ['beginFill', [0x000000]],
                                                                ['drawRect', [-140 / 2, 5 / 2, 140, 5]]
                                                            ],
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {   name: 'level bar',
                                            position: [-420, 40],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'level bar background',
                                                    type: 'sprite',
                                                    scale: [1.45, 1.4],
                                                    image: 'element_background.png',
                                                    position: [0, 10]
                                                },
                                                {
                                                    name: 'level bar text',
                                                    type: 'text',
                                                    text: '35',
                                                    position: [0, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '23px',
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x875f3a,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        padding: 20
                                                    }
                                                },
                                                {
                                                    name: 'level bar label',
                                                    type: 'text',
                                                    text: 'LEVEL',
                                                    position: [0, -40],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '25px',
                                                        fontWeight: 700
                                                    }
                                                },
                                                {
                                                    name: 'level bar up container',
                                                    scale: [1.3, 1.3],
                                                    position: [100, 10],
                                                    childs: [
                                                        {
                                                            name: 'level bar up',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'level bar up glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'level bar up disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            scale: [-1,1],
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 0,
                                                            visible: false
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'level bar down container',
                                                    scale: [-1.3, 1.3],
                                                    position: [-100, 10],
                                                    childs: [
                                                        {
                                                            name: 'level bar down',
                                                            type: 'sprite',
                                                            button: 'button',
                                                            image: 'selectorPlusUp.png',
                                                        },
                                                        {
                                                            name: 'level bar down glow',
                                                            type: 'sprite',
                                                            image: 'selectorPlusOver.png',
                                                            alpha: 0
                                                        },
                                                        {
                                                            name: 'level bar down disabled',
                                                            type: 'sprite',
                                                            button: 'disabled button',
                                                            scale: [-1,1],
                                                            image: 'selectorPlusDisabled.png',
                                                            alpha: 0.5,
                                                            visible: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'level bar progress',
                                                    position: [23, 60],
                                                    scale: [1, 1],
                                                    childs: [
                                                        {
                                                            name: 'level progress fill',
                                                            type: 'sprite',
                                                            position: [-23, -31],
                                                            scale: [1.45, 1],
                                                            image: 'selectorBarFill.png',
                                                        },
                                                        {
                                                            name: 'level progress back',
                                                            type: 'graphics',
                                                            position: [-140, -37],
                                                            mask: 'progress mask',
                                                            alpha: 1,
                                                            draw: [
                                                                ['beginFill', [0x82be00]],
                                                                ['drawRect', [-140 / 2, 5 / 2, 140, 5]]
                                                            ],
                                                        },
                                                        {
                                                            name: 'progress mask',
                                                            type: 'graphics',
                                                            position: [-23, -37],
                                                            alpha: 0.8,
                                                            draw: [
                                                                ['beginFill', [0x000000]],
                                                                ['drawRect', [-140 / 2, 5 / 2, 140, 5]]
                                                            ],
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {   name: 'betamount',
                                            position: [-700, 40],
                                            scale: [1.5, 1.0],
                                            type: 'sprite',
                                            image: 'element_background.png',
                                            childs: [
                                                {
                                                    name: 'betamount text',
                                                    type: 'text',
                                                    text: '125',
                                                    position: [0, 0],
                                                    scale: [1 / 1.3, 1],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '23px',
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x875f3a,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        padding: 20
                                                    }
                                                },
                                                {
                                                    name: 'betamount label',
                                                    type: 'text',
                                                    text: 'BET',
                                                    scale: [1 / 1.3, 1],
                                                    position: [0, -40],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '25px',
                                                        fontWeight: 700
                                                    }
                                                }
                                            ]
                                        },
                                        {   name: 'total_bet bar',
                                            position: [700, 40],
                                            scale: [1.5, 1.0],
                                            type: 'sprite',
                                            image: 'element_background.png',
                                            childs: [
                                                {
                                                    name: 'total_bet bar text',
                                                    type: 'text',
                                                    text: '0.1',
                                                    position: [0, 0],
                                                    scale: [1 / 1.5, 1],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '23px',
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x875f3a,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        padding: 20
                                                    }
                                                },
                                                {
                                                    name: 'total_bet label',
                                                    type: 'text',
                                                    text: 'COINS',
                                                    scale: [1 / 1.5, 1],
                                                    position: [0, -40],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontSize: '23px',
                                                        fontWeight: 700
                                                    }
                                                }
                                            ]
                                        },
                                        {   name: 'control bottom background', // width 1650
                                            type: 'graphics',
                                            position: [0, 114],
                                            draw: [['beginFill', 0x131313], ['drawRect', [-1920 / 2, -44 / 2, 1920, 44]]],
                                            childs: [
                                                {
                                                    name: 'bottom background top',
                                                    type: 'graphics',
                                                    position: [0, -21],
                                                    draw: [['beginFill', 0x322c33], ['drawRect', [-1920 / 2, -2 / 2, 1920, 2]]],
                                                },
                                                {
                                                    name: 'btn_setting',
                                                    type: 'sprite',
                                                    scale: [1.5, 1.6],
                                                    position: [-1650 / 2 + 20, 0],
                                                    image: 'btn_setting'
                                                },
                                                {
                                                    name: 'btn_speaker',
                                                    type: 'sprite',
                                                    scale: [1.5, 1.6],
                                                    position: [-1650 / 2 + 20 + 50, 0],
                                                    image: 'btn_speaker'
                                                },
                                                {
                                                    name: 'audio_set button',
                                                    type: 'sprite',
                                                    image: 'btn_speaker_on',
                                                    button: 'button',
                                                    scale: [1.5, 1.6],
                                                    position: [-1650 / 2 + 20 + 50, 0],
                                                    childs: [
                                                        {
                                                            name: 'audio_set button glow',
                                                            type: 'graphics'
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'btn_auto',
                                                    type: 'sprite',
                                                    scale: [1.5, 1.6],
                                                    position: [-1650 / 2 + 20 + 50 + 70, 0],
                                                    image: 'btn_auto',
                                                    button: 'button',
                                                    childs: [
                                                        {
                                                            name: 'btn_auto glow',
                                                            type: 'sprite',
                                                            image: 'btn_autoGlow.png',
                                                            alpha: 0
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'autoamount text',
                                                    type: 'text',
                                                    text: '100',
                                                    visible: false,
                                                    position: [-1650 / 2 + 20 + 50 + 70 + 60, 0],
                                                    styles: {
                                                        fill: 0xffffff,
                                                        fontFamily: 'Arial',
                                                        fontSize: '20px'
                                                    }
                                                },
                                                {
                                                    name: 'btn_question',
                                                    type: 'sprite',
                                                    scale: [1.5, 1.6],
                                                    position: [-1650 / 2 + 20 + 50 + 70 + 100, 0],
                                                    image: 'btn_question'
                                                },
                                                {
                                                    name: 'timer',
                                                    position: [1650 / 2 - 50 - 100, 0],
                                                    childs: [
                                                        {
                                                            name: 'timer hour',
                                                            position: [-20, 0],
                                                            type: 'text',
                                                            text: '05',
                                                            styles: {
                                                                fontFamily: 'Arial',
                                                                fontSize: '22px',
                                                                fill: 0xffffff,
                                                            },
                                                        },
                                                        {
                                                            name: 'timer symbol',
                                                            position: [0, -2],
                                                            type: 'text',
                                                            text: ':',
                                                            visible: true,
                                                            styles: {
                                                                fontFamily: 'Arial',
                                                                fontSize: '22px',
                                                                fill: 0xffffff,
                                                            },
                                                        },
                                                        {
                                                            name: 'timer minute',
                                                            position: [20, 0],
                                                            type: 'text',
                                                            text: '05',
                                                            styles: {
                                                                fontFamily: 'Arial',
                                                                fontSize: '22px',
                                                                fill: 0xffffff,
                                                            },
                                                        },
                                                    ]
                                                },
                                                {
                                                    name: 'logo',
                                                    type: 'text',
                                                    text: 'NET|ENT',
                                                    position: [1650 / 2 - 50, 0],
                                                    styles: {
                                                        fontFamily: 'AGLettericaDemiCondensedC',
                                                        fontSize: '22px',
                                                        fill: 0x5b5b5b,
                                                    }
                                                },
                                                {
                                                    name: 'credits bar',
                                                    type: 'text',
                                                    position: [-200, 0],
                                                    childs: [
                                                        {
                                                            name: 'credits bar label',
                                                            type: 'text',
                                                            text: 'Cash: ',
                                                            position: [0, 0],
                                                            styles: {
                                                                fontFamily: 'Arial',
                                                                fontSize: '22px',
                                                                fill: 0xffffff,
                                                            },
                                                        },
                                                        {
                                                            name: 'credits bar text',
                                                            type: 'text',
                                                            text: '50000$',
                                                            position: [75, 0],
                                                            styles: {
                                                                align: 'right',
                                                                fontFamily: 'Arial',
                                                                fontSize: '22px',
                                                                fill: 0xffffff,
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'bet bar',
                                                    position: [0, 0],
                                                    childs: [
                                                        {
                                                            name: 'bet bar label',
                                                            type: 'text',
                                                            text: 'Bet: ',
                                                            styles: {
                                                                fontFamily: 'Arial',
                                                                fontSize: '22px',
                                                                fill: 0xffffff,
                                                            },
                                                        },
                                                        {
                                                            name: 'bet bar text',
                                                            type: 'text',
                                                            text: '0.10',
                                                            position: [50, 0],
                                                            styles: {
                                                                align: 'left',
                                                                fontFamily: 'Arial',
                                                                fontSize: '22px',
                                                                fill: 0xffffff,
                                                            },
                                                        }
                                                    ]
                                                },

                                            ]
                                        }
                                    ]
                                },
                                {   name: 'win bar',
                                    drawed: 0,
                                    position: [0, -500],
                                    visible: false,
                                    childs: [
                                        {   name: 'win bar effect',
                                            type: 'sprite',
                                            image: 'win_bar_foreground',
                                            alpha: 0.5,
                                        },

                                        {   name: 'win bar flash',
                                            type: 'sprite',
                                            image: 'win_bar_flash',
                                            scale: 1.5,
                                            alpha: 1.0,
                                        },

                                        {   name: 'win bar text',
                                            type: 'text',
                                            text: '100',
                                            styles: {
                                                align: 'center',
                                                fontStyle: 'italic',
                                                fontWeight: '10',
                                                fontSize: '200px',
                                                padding: 30,
                                                fontFamily: 'BerlinSansFBDemi-Bold', //'Oswald-Bold',
                                                fill: [0xffffff,0xfffdd3, 0xc54700, 0xf9ca00],
                                                fillGradientStops: [0.55, 0.35, 0.25],
                                                stroke: [0xef4e4e],
                                                strokeGradientStops: [0.55],
                                                strokeThickness: 25,
                                                dropShadow: true,
                                                dropShadowBlur: 25,
                                                dropShadowAlpha: 1,
                                                dropShadowColor: 0x581d00,
                                                dropShadowDistance: 20,
                                                letterSpacing: 20,
                                                lineJoin: "bevel",
                                            }
                                        },
                                        {   name: 'win bar glow',
                                            type: 'sprite',
                                            image: 'win_bar_glow',
                                            alpha: 0.3,
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {   name: 'AutoMenuContainer',
                    visible: false,
                    childs: [
                        {
                            name: 'automenu overlay',
                            childs: [
                                {
                                    name: 'automenu overlay rect',
                                    event: 'automenu overlay',
                                    type: 'graphics',
                                    preventDefault: false,
                                    draw: [['beginFill', 0xffffffff], ['drawRect', [-1920, -1920, 3840, 3840]]],
                                    alpha: 0,
                                },
                                {
                                    name: 'automenu items container',
                                    type: 'graphics',
                                    position: [0, 0],
                                    // position: [670 + 45, 661 - (1080 / 2) - 45],
                                    draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                                    alpha: 0.9,
                                    childs: [
                                        {
                                            name: 'automenu items container border',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xffffff], ['drawRoundedRect', [-930 / 2, -310 / 2, 930, 310, 40]]],
                                        },
                                        {
                                            name: 'automenu title',
                                            type: 'text',
                                            text: 'Number of Auto Spins',
                                            position: [0, -120],
                                            styles: {
                                                fontFamily: 'AGLettericaDemiCondensedC',
                                                fontSize: '33px',
                                                padding: 20,
                                                fill: 0x000000
                                            }
                                        },
                                        {
                                            name: 'button automenu_50',
                                            type: 'graphics',
                                            pressed: true,
                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            button: 'button',
                                            step: 50,
                                            position: [160 * 2 + 20 * 2, -50],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_50 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_50 selected',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_50 text',
                                                    type: 'text',
                                                    text: '50',
                                                    scale: [1, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontWeight: 'Bold',
                                                        fontSize: '25px',
                                                        fill: 0x000000
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_40',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            step: 40,
                                            position: [160 + 20, -50],
                                            button: 'button',
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_40 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_40 selected',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_40 text',
                                                    type: 'text',
                                                    text: '40',
                                                    scale: [1, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontWeight: 'Bold',
                                                        fontSize: '25px',
                                                        fill: 0x000000
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_30',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            button: 'button',
                                            step: 30,
                                            position: [0, -50],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_30 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_30 selected',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_30 text',
                                                    type: 'text',
                                                    text: '30',
                                                    scale: [1, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontWeight: 'Bold',
                                                        fontSize: '25px',
                                                        fill: 0x000000
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_20',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            step: 20,
                                            button: 'button',
                                            position: [-160 - 20, -50],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_20 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_20 selected',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_20 text',
                                                    type: 'text',
                                                    text: '20',
                                                    scale: [1, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontWeight: 'Bold',
                                                        fontSize: '25px',
                                                        fill: 0x000000
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'button automenu_10',
                                            type: 'graphics',
                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                            button: 'button',
                                            step: 10,
                                            position: [-(160 * 2 + 20 * 2), -50],
                                            scale: [1, 1],
                                            childs: [
                                                {
                                                    name: 'button automenu_10 glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_10 selected',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -55 / 2, 160, 55, 5]]],
                                                    alpha: 0,
                                                    childs: [
                                                        {
                                                            name: "button border",
                                                            type: 'graphics',
                                                            draw: [['beginFill', 0xeeeeee], ['drawRoundedRect', [-155 / 2, -50 / 2, 155, 50, 5]]],
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'button automenu_10 text',
                                                    type: 'text',
                                                    text: '10',
                                                    scale: [1, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontWeight: 'Bold',
                                                        fontSize: '25px',
                                                        fill: 0x000000
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'center_line',
                                            type: 'graphics',
                                            position: [0, 0],
                                            scale: [1, 1],
                                            draw: [['beginFill', 0xeeeeee], ['drawRect', [-870 / 2, -2 / 2, 870, 2]]]
                                        },
                                        {
                                            name: 'autospin comment',
                                            type: 'text',
                                            position: [0, 50],
                                            scale: [870 / 1020, 1],
                                            text: '\"Auto Spin stops automatically if cash amount is smaller than bet amount\"',
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '25px',
                                                stroke: 'black',
                                                fill: 0x000000
                                            }
                                        },
                                        {
                                            name: 'autospin_dialog close button',
                                            type: "graphics",
                                            button: 'button',
                                            draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                            position: [-100, 115],
                                            childs: [
                                                {
                                                    name: 'autospin_dialog close button glow',
                                                    type: "graphics",
                                                    draw: [['beginFill', 0x1b9ddb], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                                    position: [0, 0]
                                                },
                                                {
                                                    name: 'close button text',
                                                    type: 'text',
                                                    text: 'Close',
                                                    scale: [0.8, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '28px',
                                                        fill: 0xffffff
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            name: 'refresh start button bar',
                                            position: [100, 115],
                                            childs: [
                                                {
                                                    name: 'refresh start button',
                                                    type: "graphics",
                                                    button: 'button',
                                                    draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                                },
                                                {
                                                    name: 'refresh start button glow',
                                                    type: 'graphics',
                                                    draw: [['beginFill', 0xef6c00], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                                    position: [0, 0]
                                                },
                                                {
                                                    name: 'refresh start button disabled',
                                                    type: 'graphics',
                                                    button: 'disabled button',
                                                    draw: [['beginFill', 0x919191], ['drawRoundedRect', [-160 / 2, -65 / 2, 160, 65, 5]]],
                                                },
                                                {
                                                    name: 'refresh button text',
                                                    type: 'text',
                                                    text: 'Start',
                                                    scale: [0.8, 1],
                                                    position: [0, 0],
                                                    styles: {
                                                        fontFamily: 'Arial',
                                                        fontSize: '28px',
                                                        fill: 0xffffff
                                                    }
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {   name: 'BonusWinContainer',
                    visible: false,
                    childs: [
                        {
                            name: 'bonus_win overlay',
                            childs: [
                                {
                                    name: 'bonus_win overlay rect',
                                    event: 'automenu overlay',
                                    type: 'graphics',
                                    preventDefault: false,
                                    draw: [['beginFill', 0x00000000], ['drawRect', [-1920, -1920, 3840, 3840]]],
                                    alpha: 0.7,
                                },
                                {
                                    name: 'bonus_win items container',
                                    type: 'sprite',
                                    image: 'popup_award_back',
                                    position: [0, -50],
                                    scale: [1500 / 1017, 700 / 426],
                                    alpha: 1,
                                    childs: [
                                        {
                                            name: 'bonus_win header',
                                            type: 'text',
                                            text: 'TOTAL BONUS WIN',
                                            position: [0, -80],
                                            scale: [1.4, 1.8],
                                            styles: {
                                                fontFamily: 'AGLettericaDemiCondensedC',
                                                fontSize: '80px',
                                                padding: 20,
                                                fill: [0xffd236, 0xff8e00],
                                                stroke: 0xe3ac16,
                                                strokeThickness: 3
                                            }
                                        },
                                        {
                                            name: 'bonus_win title',
                                            type: 'text',
                                            text: '150',
                                            position: [0, 80],
                                            scale: [1.4, 1.8],
                                            styles: {
                                                fontFamily: 'AGLettericaDemiCondensedC',
                                                fontSize: '80px',
                                                padding: 20,
                                                fill: [0xd0b172, 0xf8e2a3, 0x97783d],
                                                stroke: 0x553e1c,
                                                strokeThickness: 3,
                                                dropShadow: true,
                                                dropShadowAngle: 0.1,
                                                dropShadowColor: "black",
                                                dropShadowDistance: 3
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            name: 'OverlayContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1500, 725],
            scaleStrategyLandscape: ['fit-to-screen', 1500, 725],
            childs: [
                {
                    name: 'overlay', visible: false, childs: [
                        {
                            name: 'overlay rect',
                            event: 'overlay',
                            type: 'graphics',
                            draw: [['beginFill', 0x000000], ['drawRect', [-1500, -1500, 3000, 3000]]]
                        }
                    ]
                }
            ]
        },
        {
            name: 'BonusContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bonus container',
                    visible: false,
                    childs: [
                        {name: 'bonus rect', type: 'sprite', image: 'bonuspane.png'},
                        {name: 'bonus line', type: 'graphics'},
                        {
                            name: 'bonus text 2',
                            type: 'text',
                            text: 'Something went wrong.',
                            position: [0, 0],
                            styles: {
                                align: 'center',
                                fontFamily: 'Oswald-Bold',
                                fontWeight: 700,
                                stroke: 'white',
                                strokeThickness: 5,
                                fontSize: '60px',
                                padding: 15,
                                fill: [0xff0b00, 0xffa61f]
                            }
                        }
                    ]
                }
            ]
        },
        {   name: 'OrientSwitchContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1080, 1920],
            scaleStrategyLandscape: [0, 0],
            visibleLandscape: false,
            visiblePortrait: true,
            childs: [
                {
                    name: 'orient switch background',
                    type: 'graphics',
                    scale: [1, 1],
                    draw: [['beginFill', 0x212121], ['drawRect', [-1920, -1920, 3840, 3840]]],
                    childs: [
                        {
                            name: 'orient switch icon',
                            type: 'sprite',
                            image: 'orient_switch',
                        },
                        {
                            name: 'orient switch text',
                            type: 'text',
                            position: [0, -300],
                            text: 'PLEASE TURN YOUR DEVICE',
                            alpha: 1,
                            styles: {
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '60px',
                                fontWeight: 'Bold',
                                fill: 0xffffff
                            }
                        }
                    ]
                }
            ]
        }
    ],

    Events: {

        'Gameplay before build': function () {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'Gameplay build': function () {
            this.is_local_mode = true;
            //getting init data from server
            if (!this.is_local_mode) {
                var reg1 = new RegExp("(^|&)" + "game_id" + "=([^&]*)(&|$)", "i");
                var reg2 = new RegExp("(^|&)" + "key" + "=([^&]*)(&|$)", "i");
                var r1 = window.location.search.substr(1).match(reg1);
                var r2 = window.location.search.substr(1).match(reg2);
                if (r2 !== null) {
                    // Global.session_id = r1[2];
                    localStorage.api_key = r2[2];
                    // console.log(r2[2])
                }
                if (r1 !== null) {
                    this.session_id = r1[2];
                    // console.log(this.session_id)
                } else {
                    console.log("no");
                    this.userBlockLayer.active = true;
                    return;
                }
            }
            // server end

            this.is_bonus = false;

            this.const = {
                RESULT_TYPE: {
                    NORMAL: 0x000000,
                    BIGMONEY: 0x000001,
                    JACKPOT: 0x000002,
                    BLUEJACKPOT: 0x000003,
                    REDJACKPOT: 0x000004
                },
                STATUS_TYPE: {
                    NORMAL: 0,
                    DISABLED: 1,
                    INVISIBLE: 2,
                    VISIBLE: 3
                }
            };
            this.win_anim_mode = 0x0;

            this.menu_mode = false;
            this.automenu_mode = false;
            this.help_mode = false;

            this.current_auto_amount = 0;

            //getting init data from server

            if (!this.is_local_mode) {
                var cashinfo = this.getCashInfo();
                this.gamesession_id = cashinfo.response.gamesession_id;
                this.credits = {
                    value: parseFloat(cashinfo.response.balance),
                    drawed: parseFloat(cashinfo.response.balance)
                };
                this.gamespec = cashinfo.response.gamespec;
                this.gamesession_id = cashinfo.response.gamesession_id;
            } else {
                this.credits = {
                    value: 111111,
                    drawed: 111111
                };
            }
            //server end

            if (!this.is_local_mode) {
                var array_server = this.getInitData();
                if (array_server.error === "0") {
                    // this.line_value_list = array_server.response.arrLinesValue;
                    // this.betperline_value_list = array_server.response.arrBetValue;
                    // this.denoms_value_list = array_server.response.arrDenomValue;

                    this.line_value_list = array_server.response.arrLinesValue;
                    this.level_value_list = array_server.response.arrBetValue;
                    this.coin_value_list = array_server.response.arrDenomValue;

                    this.bet = {
                        amount: this.coin_value_list[0] * this.level_value_list[0],
                        drawed: this.coin_value_list[0],
                        step: 1
                    };

                    this.lines = {
                        value: this.line_value_list[0],
                        step: 1
                    };

                    this.levels = {
                        value: this.level_value_list[0],
                        step: 1
                    };

                    this.coins = {
                        value: this.coin_value_list[0],
                        step: 1
                    };


                } else {
                    console.warn("Server error(GET SETTING)");
                }
            } else {

                this.line_value_list = [76];
                this.level_value_list = [1, 2, 3, 4, 5, 10, 15, 20];
                this.coin_value_list = [1, 2, 3, 5, 10];

                this.bet = {
                    amount: this.coin_value_list[0] * this.level_value_list[0],
                    drawed: this.coin_value_list[0] * this.level_value_list[0],
                    step: 1
                };

                this.lines = {
                    value: 76,
                    step: 1
                };

                this.levels = {
                    value: this.level_value_list[0],
                    step: 1
                };

                this.coins = {
                    value: this.coin_value_list[0],
                    step: 1
                };

            }

            this.level_progress_step = this.progressbar_size / this.level_value_list.length;
            this['level progress back'].x = this.progressbar_pos + this.level_progress_step;

            this.coin_progress_step = this.progressbar_size / this.coin_value_list.length;

            this['coin progress back'].x = this.progressbar_pos + this.coin_progress_step;

            this.spinCombinations = [];
            this.helpPageVisabilityFlag = false;

            /*-----------------help indicator build start-----------------*/
            let help_indicator_pos_x = [-120, -60, 0, 60, 120];
            for (let i = 0; i < 5; i++) {
                let template = {
                    name: 'info indicator ' + (i + 1) + ' bar',
                    position: [help_indicator_pos_x[i], 0],
                };

                this.buildChild(this['info indicator container'], template);
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1),
                    type: 'sprite',
                    image: 'indicator_active.png',
                    step: i,
                });
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1) + ' disabled',
                    type: 'sprite',
                    event: 'infoindicator',
                    image: 'indicator.png',
                    step: i,
                    alpha: 0
                });
                this.buildChild(this['info indicator ' + (i + 1) + ' bar'], {
                    name: 'info indicator ' + (i + 1) + ' disabled glow',
                    type: 'sprite',
                    image: 'indicator_over.png',
                    alpha: 0
                });
            }
            /*-----------------help indicator build end-----------------*/

            this.helpPageIndex = 0;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);

            this.scoreAnimation = null;
            this.staticTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.hideTweens = [];
                    this.staticTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideQuickTweens = [];
                }
            };

            this.winBarTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.winBarTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.winBarTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.winBarTweens.showTweens = [];
                    this.winBarTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.winBarTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.winBarTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.winBarTweens.showTweens = [];
                    this.winBarTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.winBarTweens.hideTweens = [];
                    this.winBarTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.winBarTweens.hideQuickTweens = [];
                }
            };

            this.flashTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.flashTweens.showTweens.forEach((tween, index) => {
                        tween.play();
                        /*var self = this;
                        var loop = setInterval(function() {
                            if(index < self.flashTweens.showTweens.length - 1) {
                                tween.play();
                            } else {
                                clearInterval(loop);
                            }
                        }, 0);*/
                        /* setTimeout(function run() {
                             if(index === self.flashTweens.showTweens.length - 1)
                                 return;
                             setTimeout(run, 100);
                         }, 100);*/
                    });
                },
                hide: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.hideTweens = [];
                    this.flashTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideQuickTweens = [];
                }
            };

            this.currentTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                                if (container.children.length > 1) {
                                    for (var i = 1; i < container.children.length; i++)
                                        container.children[i].gotoAndPlay(0);
                                }
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.hideTweens = [];
                    this.currentTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideQuickTweens = [];
                }
            };

            this.auto_mode = false;
            this.sound_mode = true;
            this.creditsNotInc = true;

            this.BOARD_SIZE = [1225, 890];

            this.COLUMNS_COUNT = 5;
            this.ROWS_COUNT = 5;

            this.REEL_SYMBOLS_COUNT = this.ROWS_COUNT + this.ROWS_COUNT + 1;


            this.COLUMNS_OFFSET = 307;
            this.ROWS_OFFSET = 175; // symbols offset in the reel
            this.REEL_POSY_OFFSET = this.ROWS_OFFSET/2;

            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 300;

            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 0;

            this.WIN_ANI_REPLAY_DELAY = 500;
            this.WIN_ANI_EACH_LINE_INTERVAL = 2400;

            this.SYMBOLS_SCALE = 1.35;

            this.reels = [];
            let init_card = [
                [1, 2, 3, 6, 5],
                [0, 3, 5, 4, 2],
                [4, 6, 0, 5, 6],
                [0, 5, 1, 4, 3],
                [0, 6, 3, 2, 1]
            ];

            let reel_pos_data = [
                [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 4 - 40, this.BOARD_SIZE[0], this.BOARD_SIZE[1]/5 * 3 - 10, 0],
                [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 4 - 40, this.BOARD_SIZE[0], this.BOARD_SIZE[1]/5 * 3 - 10, 0],
                [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 4 - 40, this.BOARD_SIZE[0], this.BOARD_SIZE[1]/ 5 * 4 - 10, -this.REEL_POSY_OFFSET],
                [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 4 - 40, this.BOARD_SIZE[0], this.BOARD_SIZE[1]/ 5 * 4 - 10, -this.REEL_POSY_OFFSET],
                [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 2 + 10, this.BOARD_SIZE[0], this.BOARD_SIZE[1] - 20, 0]
            ];

            for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                let mostLeft = -1 * (this.COLUMNS_COUNT - 1) / 2 * this.COLUMNS_OFFSET - 2; // the most left element on game board

                this.buildChild(this['game board symbols container'], {
                    name: 'reel mask ' + i,
                    type: 'graphics',
                    draw: [['beginFill', [0xffffff]], ['drawRect', [reel_pos_data[i][0], reel_pos_data[i][1], reel_pos_data[i][2], reel_pos_data[i][3]]]],
                    position: [mostLeft + this.COLUMNS_OFFSET * i, reel_pos_data[i][4]],
                    alpha: 0.1
                });

                let reelSprite = this.buildChild(this['game board symbols container'],
                    {
                        name: 'reel ' + i,
                        mask: 'reel mask ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + reel_pos_data[i][4]]
                    });

                let reelSpriteHighlight = this.buildChild(this['game board symbols highlighted container'],
                    {
                        name: 'reel highlighted ' + i,
                        mask: 'reel mask ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + reel_pos_data[i][4]]
                    });
                let reelSpriteFlash = this.buildChild(this['game board symbols flash container'],
                    {
                        name: 'reel flash ' + i,
                        //mask: 'reel mask ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + reel_pos_data[i][4]]
                    });

                let reelWildHighlight = this.buildChild(this['game board symbols wildcard container'], {
                    name: 'reel wildhighlight ' + i,
                    position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                });

                this.reels.push({
                    sprite: reelSprite,
                    spriteHighlight: reelSpriteHighlight,
                    spriteFlash: reelSpriteFlash,
                    wildHighlight: reelWildHighlight,
                    speed: null,
                    completeSymbol: null,
                    completed: null,
                    animationState: null
                });

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {

                    this.buildChild(this['reel ' + i], {
                        name: 'reel ' + i + ' symbol container ' + j,
                        scale: this.SYMBOLS_SCALE,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel highlighted ' + i], {
                        name: 'reel ' + i + ' symbol highlighted container ' + j,
                        scale: this.SYMBOLS_SCALE,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel flash ' + i], {
                        name: 'reel ' + i + ' symbol flash container ' + j,
                        scale: [this.SYMBOLS_SCALE+0.2, this.SYMBOLS_SCALE + 0.3],
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel wildhighlight ' + i], {
                        name: 'reel ' + i + ' symbol wildhighlight container ' + j,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel ' + i + ' symbol wildhighlight container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' wildhighlight',
                        position: [0, 0],
                        scale: [1.4, 1.25],
                        type: 'sprite',
                        image: 'SYM1.png',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlight',
                        position: [0, 0],
                        type: 'sprite',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol flash container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' flash',
                        type: 'sprite',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' crisp',
                        type: 'sprite'
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' blur',
                        type: 'sprite',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlighttext',
                        type: 'sprite',
                        visible: false
                    });

                    var card_index = 0;
                    if (j >= (this.ROWS_COUNT + 1)) {
                        card_index = init_card[i][j - (this.ROWS_COUNT + 1)];
                    } else {
                        card_index = _.random(0, App.Symbols.length - 1);
                    }
                    this.setSymbolTexture('reel ' + i + ' symbol container ' + j, App.Symbols[card_index].Image);
                }
            }

            this.setStatusControlBar('refresh start button', this.const.STATUS_TYPE.DISABLED);
            this.refreshLevelBar(1);
            this.refreshCoinBar(1);

            this['status text'].text = 'win on up to 76 bet lines';
            // this.updateTickerText();

        },

        'Gameplay resize': function () {
            this['RootContainer'].alpha = 1;

            this.refreshPanelValues();

            if (App.IsLandscape) {
                if (this.helpPageVisabilityFlag) {
                    this['info container ' + this.helpPageIndex].visible = 1;
                    this['info container controlls'].visible = 1;

                    this['MainContainer'].visible = 0;
                    this['ControlPanelContainer'].visible = 0;
                }
            } else {

            }

            if (this.menu_mode === true)
                this['MenuContainer'].visible = true;
            if (this.automenu_mode === true)
                this['AutoMenuContainer'].visible = true;

        },

        'Gameplay showed': function () {

            this.tween({
				set:['alpha', 0],
				to: ['alpha', 1, 200, 0, Power1.easeOut]
			}, 'RootContainer');

            if (Settings["intro"]) {

                this.showIntro(function () {

                    this.startGame();

                });

            } else {

                this.skipIntro(function () {

                    this.startGame();

                });

            }
        },

        'Gameplay update': function () {

            let time = this.updateTimeOffset / (1000 / 60);

            if (time > 2) time = 2;

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol) {

                        if (this.reels[i].animation.state === 0) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + this.ROWS_OFFSET / 3 - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.5;

                            if (this.reels[i].speed <= 1) {

                                this.reels[i].animation.state = 1;

                            }

                        } else if (this.reels[i].animation.state === 1) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.3 - 1;

                        }

                    }

                    this.reels[i].sprite.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    this.reels[i].spriteFlash.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol && this.reels[i].animation.state === 1) {

                        if (this[this.reels[i].completeSymbol].position.y <= (this.ROWS_COUNT + 1) * this.ROWS_OFFSET) {

                            for (let j = 0; j < this.reels[i].sprite.children.length; j++) {

                                let symbol = this.reels[i].sprite.children[j];

                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                                    symbol.parent.addChildAt(symbol, 0);

                                }

                            }

                            for (let j = 0; j < this.reels[i].spriteHighlight.children.length; j++) {

                                let symbol = this.reels[i].spriteHighlight.children[j];

                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                                    symbol.parent.addChildAt(symbol, 0);

                                }

                            }

                            for (let j = 0; j < this.reels[i].spriteFlash.children.length; j++) {

                                let symbol = this.reels[i].spriteFlash.children[j];

                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                                    symbol.parent.addChildAt(symbol, 0);

                                }

                            }

                            this.reels[i].completed = true;

                            if (this.reels.every(item => item.completed)) {
                                this.completeSpin();
                            }
                        }

                    }

                }

            }

        },

        'Gameplay update tick 5': function () {

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    this.reels[i].sprite.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                    this.reels[i].spriteFlash.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                }

            }

        },

        'Gameplay update tick 30': function () {
            this['timer symbol'].visible = this['timer symbol'].visible !== true;
            this.updateTimerpanel();
        },

        'Gameplay menu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.menu_mode = false;
            this['MenuContainer'].visible = this.menu_mode;
        },

        'Gameplay automenu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.automenu_mode = false;
            this['AutoMenuContainer'].visible = this.automenu_mode;
        },

        'Gameplay infocontainer overlay up': function (container, e) {
            this['InfoContainer'].visible = false;
            this['MainContainer'].visible = true;
        },

        'Gameplay infobackground up': function (container, e) {

        },

        'overlay down': function () {
            MRAID.markMeaningfulInteraction();
            this['overlay'].visible = false;
        },

        'Gameplay button over': function (container, e) {
            this.handleButtonOver(container, e);
        },

        'Gameplay button out': function (container, e) {
            this.handleButtonOut(container, e);
        },

        'Gameplay button up': function (container, e) {
            this.handleButtonUp(container, e);
        },

        'Gameplay button down': function (container, e) {
            this.handleButtonDown(container, e);
        },

        'Gameplay infoindicator over': function (container, e) {
            var name = container.name;

            let nameGlow = container.name + ' glow';

            if (this[nameGlow].tween) this[nameGlow].tween.stop();

            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 1, 150, 0, Power1.easeOut],
                    ['visible', true, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);

        },

        'Gameplay infoindicator out': function (container, e) {
            let nameGlow = container.name + ' glow';
            if (this[nameGlow].tween) this[nameGlow].tween.stop();
            this[nameGlow].tween = this.tween({
                to: [
                    ['alpha', 0, 150, 0, Power1.easeOut],
                    ['visible', false, 150, 0, Power1.easeOut],
                ]
            }, nameGlow);
        },

        'Gameplay infoindicator down': function (container, e) {
            this.refreshHelpPage(container.step);
            this.refreshHelpIndicator(container.step);
        },

        'Gameplay bonus close down': function () {
            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'overlay', () => {
                this['overlay'].visible = false;
            });

            this.tween({
                to: ['alpha', 0, 250, 0, Power1.easeIn]
            }, 'bonus container', () => {
                this['bonus container'].visible = false;
            });

        },

        'Gameplay new jackpot': function (data) {

            App.escalibur.Jackpot.value = parseFloat(data.amount);

            this.drawJackpot();

        },
    },

    transferToCTA: function () {

        this.tween(['alpha', 0, 500], ['BackgroundContainer', 'MainContainer']);
        //
        // if (!App.CallToAction.showed) App.CallToAction.show();

    },

    showIntro: function (next) {

        //Show intro animation if needed and call next

        if (next) next.call(this);

    },

    skipIntro: function (next) {

        //Hide intro animation elements if needed and call next

        if (next) next.call(this);

    },

    startGame: function () {

        MRAID.track('Game Starts');

        this.tutorialTimeout(0);

        this.drawAllPayLines();

        this.tween({
            set:['x', 350],
            to: ['x', -500, 7000],
            next: ['update', () => {
                    switch(this['status text'].text) {
                        case 'win on up to 76 bet lines':
                            this['status text'].text = '3 or more Free spin symbols activate Free spins';
                            break;
                        case '3 or more Free spin symbols activate Free spins':
                            this['status text'].text = 'win on up to 76 bet lines';
                            break;
                        default:
                            break;
                    }
                }
            ],
            loop: true
        }, 'status text');

        this.state = 'ready';

        this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true}, sound => {
            this.backSound = sound;
        });

        this['grant jackpot'] = {
            value: App.escalibur.Jackpot.value,
            drawed: App.escalibur.Jackpot.value
        };
    },

    spin: function () {

        this.winAnimationMode = false;
        this.is_bonus = false;
        // this.hideLinecontainer();
        /*if (this.winSound !== null) {
            this.playSound('reelSpin', {}, {
                volume: this.sound_mode ? 0.5 : 0,
                loop: true
            }, sound => {
                this.winSound = sound;
            });
        }*/

        if (this.credits.value - this.bet.amount >= 0) {
            if (this.isfreespin === false) {
                this.credits.value -= this.bet.amount;
                this.credits.drawed = this.credits.value;
                this.server_win_amount.value = 0;
                this.server_win_amount.drawed = 0;
                this['win bar'].drawed = 0;

                this.refreshPanelValues();

                this.creditsNotInc = true;
            }
        } else {
            this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }

        this.first_reel = false;
        this.second_reel = false;
        this.third_reel = false;

        this.setStatusControlBar(['start button', 'maxbet button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up'], this.const.STATUS_TYPE.DISABLED);
        this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
        this['coin bar progress'].alpha = 0.5;
        this['level bar progress'].alpha = 0.5;

        if (this.winSound) {

            this.winSound.stop();
            this.winSound = false;

            // if (this.mainSound) this.mainSound.volume = this.sound_mode ? 1 : 0;

        }

        if (this.state !== 'ready') return;

        this.state = 'spin';

        this.hideWinanimation();

        var self = this;

        this.spinCombination = null;

        if (this.auto_mode === true && this.isfreespin !== true) {
            if (this.current_auto_amount === 0) {
                this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
                this['autoamount text'].visible = false;
                this.auto_mode = false;
                return;
            }

            this.current_auto_amount--;
            if (this.current_auto_amount === 0) {
                this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
                this['autoamount text'].visible = false;
                this.auto_mode = false;
            }

            this.refreshPanelValues();
        }

        if (this.isfreespin === true) {
            this.freespin_count--;
        }

        $.when((this.is_local_mode ? this.getServerData() : this.getServerCardsInfo(this.bet.step, this.isfreespin))).done(function (response) {
            var receivedData = response;
            var serverData = self.formatServerData(receivedData);
            console.log(response);
            if (serverData.error === "0") {

                self.credits.value = serverData.response.balance;
                self.server_initMatrix = serverData.response.initCards;

                self.spinCombination = null;

                self.spinCombination = App.escalibur.mathFromServer(self.bet.amount, self.server_initMatrix);

                var arrRetval = serverData.response.arrRetVal;
                var newArrRetval = [];
                self.win_anim_mode = 0;
                self.server_win_amount.value = serverData.response.winAmount;
                self.credits = {
                    value: serverData.response.balance,
                    drawed: serverData.response.balance
                };
                for (let i = 0; i < arrRetval.length; i++) {
                    if (arrRetval[i].retType === 0) {
                        newArrRetval.push(arrRetval[i]);
                    }

                    if (arrRetval[i].retType === 5) {
                        self.win_anim_mode = self.win_anim_mode | self.const.RESULT_TYPE.JACKPOT;
                        //jackpot
                    }

                    if (arrRetval[i].retType === 6) {
                        //bigmoney
                        self.win_anim_mode = self.win_anim_mode | self.const.RESULT_TYPE.BIGMONEY;
                    }

                    if (arrRetval[i].retType === 7) {
                        self.wildReelArray = arrRetval[i].wildReelAry;
                        self.freespin_count = 1;
                    }

                    //In bonus case
                    if (arrRetval[i].retType === 2) {
                        self.isfreespin = true;
                        self.auto_mode = false;
                        self.freespin_animation = true;
                        self.freespin_count = arrRetval[i].count;
                        self.freespin_first_animation = true;
                    }
                }

                if (self.freespin_first_animation === true)
                    self.freespin_first_animation = false;
                self.server_arrRetVal = newArrRetval;

                if (arrRetval.length !== 0) {
                    if (arrRetval[0].retType === 3) {
                        // In Case Jackpot
                        self.is_bonus = true;
                        self.bonus_amount = parseInt(arrRetval[0].win);
                        self.server_win_amount.value = parseInt(arrRetval[0].win);
                    } else if (arrRetval[0].retType === 0) {
                        // In Case NORMAL
                        self.is_bonus = false;
                        self.spinCombination.winData.winLines = self.generateWinData();
                    } else if (arrRetval[0].retType === 1) {

                    }
                }
            } else {

            }
        });

        if (this.timeouts && this.timeouts.length > 0) {

            this.timeouts.forEach((timeout) => {

                clearTimeout(timeout);

            });

        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            this.timeout(() => {

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                    var card_index = _.random(0, App.Symbols.length - 1);

                    this.setSymbolTexture(this.reels[i].sprite.children[j].name, App.Symbols[card_index].Image);

                    this.setSymbolsBlur(this.reels[i].sprite.children[j].name, true);

                }

                this.reels[i].completed = false;
                this.reels[i].completeSymbol = null;
                this.reels[i].speed = 80;

                let stopReelInterval = setInterval(() => {

                    if (this.spinCombination) {

                        if (stopReelInterval) clearInterval(stopReelInterval);

                        this.timeout(() => {

                            this.stopReel(i);

                        }, this.REELS_STOP_TIMEOUT + i * this.REELS_STOP_DELAY);

                    }

                }, 80);

            }, this.REELS_START_TIMEOUT + i * this.REELS_START_DELAY);

        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    },

    showBounupane: function (message) {
        this['bonus container'].visible = true;
        this['overlay'].visible = true;

        if (message) this['bonus text 2'].text = message;

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 1, 250, 100, Power1.easeOut]
        }, 'bonus container');

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 0.6, 250, 100, Power1.easeOut]
        }, 'overlay');
    },

    stopReel: function (reel, errorStop) {

        if (this.winSound) {
            this.winSound.stop();
            this.winSound = false;
        }
        this.reels[reel].completeSymbol = this.reels[reel].sprite.children[0].name;

        this.reels[reel].animation = {
            state: 0
        };

        for (let i = 0; i < this.ROWS_COUNT; i++) {

            let highlightSprites = [];
            let activeSprites = [];
            let imageName;

            if (errorStop) {

                imageName = App.Symbols[_.random(0, App.Symbols.length - 1)].Image;

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, imageName);

            } else {
                imageName = this.spinCombination.symbols[i][reel];

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, App.SymbolsNames[imageName],this.spinCombination.winData.winLines.length > 1);

                /*if (imageName === "Symbol_Bonus" && i !== 0 && i !== 4) {
                    if (reel === 0) {
                        this.playSound('bonus_one', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.first_reel = true;
                    } else if (reel === 1 && this.first_reel) {
                        this.playSound('bonus_two', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.second_reel = true;
                    } else if (reel === 2 && this.first_reel && this.second_reel) {
                        this.third_reel = true;
                        this.playSound('bonus_three', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
                        this.isfreespin = true;
                        this.bonus_highlights.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                        this.bonus_active.push(this.reels[reel].sprite.children[i]);
                    } else {
                        continue;
                    }

                    this.playSound(imageName, {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                    activeSprites.push(this.reels[reel].sprite.children[i]);
                    highlightSprites.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                    this.bonus_highlights.push(this.reels[reel].spriteHighlight.children[i].children[0].params.name.replace('crisp', 'highlight'));
                    this.bonus_active.push(this.reels[reel].sprite.children[i]);

                    this.staticTweens.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 0],
                            ['visible', false]
                        ]
                    }, activeSprites));

                    this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
                    this.staticTweens.hideTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE],
                            ['alpha', 1, 100, 900]
                        ],
                        next: {
                            set: [
                                ['visible', true],
                                ['alpha', 1]
                            ]
                        }
                    }, activeSprites));

                    this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

                    this.staticTweens.showTweens.push(this.tween({
                        name: 'win-animation',
                        set: [
                            ['alpha', 1],
                            ['visible', true],
                            ['scale', this.SYMBOLS_SCALE]
                        ]
                    }, highlightSprites));

                    this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();

                    this.staticTweens.hideTweens.push(this.tween({
                        name: 'win-animation',
                        to: [
                            ['scale', this.SYMBOLS_SCALE],
                            ['alpha', 0, 100, 900]
                        ],
                        next: {
                            set: [
                                ['visible', false],
                                ['alpha', 0]
                            ]
                        }
                    }, highlightSprites));

                    this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();
                    this.staticTweens.show();

                    let temptimeout = setTimeout(() => {
                        this.staticTweens.hide();
                        this.staticTweens.showTweens = [];
                        this.staticTweens.hideTweens = [];
                    }, 900);
                }*/
            }
        }

        for (let i = 0; i < this.reels[reel].sprite.children.length; i++) {

            let symbol = this.reels[reel].sprite.children[i];

            this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }

        }

        for (let i = 0; i < this.reels[reel].spriteHighlight.children.length; i++) {

            let symbol = this.reels[reel].spriteHighlight.children[i];

            // this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }

        }

        for (let i = 0; i < this.reels[reel].spriteFlash.children.length; i++) {

            let symbol = this.reels[reel].spriteFlash.children[i];

            // this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }

        }

        this.playSound('reelStop' + reel, {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        this.state = 'spinStop';

    },

    completeSpin: function () {

        this.setStatusControlBar(['start button', 'maxbet button', 'auto start button'], this.const.STATUS_TYPE.NORMAL);
        this['coin bar progress'].alpha = 1;
        this['level bar progress'].alpha = 1;


        if (this.wildReelArray && this.isfreespin === false) {
            this.wildAnimation(this.wildReelArray);
        }

        if (this.isfreespin === true && this.freespin_count === 0) {
            this.hideWildanimation();
        }

        if (this.current_auto_amount === 0 || this.state === 'ready') {
            this.refreshLevelBar(this.levels.step);
            this.refreshCoinBar(this.coins.step);
        }

        if (this.spinCombination) {

            if (!this.is_bonus) {
                if (this.spinCombination.winData.winLines.length > 0) {

                    this.spinCombinations.push(this.spinCombination);

                    this.winSpinCombination = this.spinCombination;

                    this.state = 'ready';

                    this['status text'].alpha = 0;
                    this.setStatusText("WINNER!");
                    this.updateTickerText();
                    this['status win box'].alpha = 1;

                    this.win_sound_play = true;

                    this.winAnimationMode = true;

                    if (this.win_anim_mode && this.const.RESULT_TYPE.BIGMONEY) {
                        // this.startBigMoneyAnimation();
                    }
                    if (this.win_anim_mode && this.const.RESULT_TYPE.JACKPOT) {
                        // this.startJackpotAnimation();
                    }

                    for(let i = 0; i < this.spinCombination.winData.winLines.length; i++) {
                        this['PayLineAmount-' + this.spinCombination.winData.winLines[i][4]].text = this.spinCombination.winData.winLines[i][5];
                    }

                   this.winScoreAnimation(this.spinCombination.winData, ()=>{
                    this['win bar overlay'].visible = false;
                    this.winAnimation();
                   });

                    // this.credits.value += this.server_win_amount.value;
                    this.credits.drawed = this.credits.value;

                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                } else {

                    this.spinCombinations.push(0);

                    // this.animFieldPoints('win', 0);

                    this.winAnimationMode = false;

                    this.state = 'ready';
                    this.updateTickerText();
                    this.credits.drawed = this.credits.value;
                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                    // this.drawJackpot();

                    /*if (this.freespin_end && this.isfreespin) {
                        setTimeout(() => {
                            this['bonus_win title'].text = this.total_freespin_amount;
                            this['BonusWinContainer'].visible = true;
                            this.freespin_count = 0;
                            this.freespin_index = 0;
                            this.total_freespin_amount = 0;
                            this.isfreespin = false;
                            this.freespin_end = false;
                            setTimeout(() => {
                                this['BonusWinContainer'].visible = false;
                                this.completeFreespin();
                            }, 3000);
                        }, 3000);
                    }*/
                    setTimeout(() => {
                        if (this.state === 'ready' && this.auto_mode || (this.isfreespin === true && this.freespin_count !== 0)) {
                            this.spin();
                        }
                    }, 500);
                }
            } else {
                // this.credits.value += parseInt(this.bonus_amount);
                // this.credits.drawed = parseInt(this.bonus_amount);
                this.state = 'ready';
                this.refreshPanelValues();

                this.showBounupane("+" + this.bonus_amount);
                this.playSound('bigWinStart', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                setTimeout(() => {
                    this.bonusclose();
                    this.state = 'ready';
                    if(this.auto_mode)
                        this.spin();
                }, 3000);
            }
        } else {
            this.state = 'ready';
        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    },

    drawJackpot: function () {

    },

    updateTimerpanel: function () {
        var date = new Date;
        var h = date.getHours();
        var m = date.getMinutes();
        h = (h < 10 ? "0" : "") + h;
        m = (m < 10 ? "0" : "") + m;

        this['timer hour'].text = h;
        this['timer minute'].text = m;
    },

    setSymbolTexture: function (container, image, isChangeFrame = false) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].texture = this.getTexture(image);
        this[name + ' blur'].texture = this.getTexture(image.replace(".png", "_BLURRED.png"));

        //----- highlight animation texture container
        this[name + ' highlight'].removeChildren();
        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight animation',
            type: 'sprite',
            visible: true,
            alpha: 1,
            image: image.replace(".png", "_glow.png"),
        });

        //---- flash animation texture container
        let frames = [];
        this[name + ' flash'].removeChildren();

        if(isChangeFrame) {
            this[name + ' flash'].removeChildren();
            for (let k = 0; k < 15; k++) {
                frames.push('highlight_2' + ((k < 10) ? '-0' : '-') + k + '.png');
            }

            this.buildChild(this[name + ' flash'], {
                name: name + ' flash animation',
                type: 'movie-clip',
                frames: frames,
                speed: 1.3,
                loop: false,
                alpha: 1
            });
        } else {
            this[name + ' flash'].removeChildren();
            for (let k = 0; k < 13; k++) {
                frames.push('highlight_1' + ((k < 10) ? '-0' : '-') + k + '.png');
            }
            this.buildChild(this[name + ' flash'], {
                name: name + ' flash animation',
                type: 'movie-clip',
                frames: frames,
                speed: 1.2,
                loop: false,
                alpha: 1
            });
        }



        //---- winamount animation texture container
        this[name + ' highlighttext'].removeChildren();
        this.buildChild(this[name + ' highlighttext'], {
            name: name + ' highlight animation1',
            type: 'text',
            text: '35',
            styles: {
                fill: 0xffe6aa,
                fontSize: '80px',
                fontWeight: 700,
                dropShadow: true,
                dropShadowAngle: 0.5,
                dropShadowColor: 0xf6a3aa,
                dropShadowDistance: 2,
                dropShadowBlur: 25,
                lineJoin: "bevel",
                stroke: "#da7b77",
                strokeThickness: 7,
                padding: 20
            }
        });
    },

    setSymbolsBlur: function (container, state) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].visible = false;
        this[name + ' blur'].visible = false;

        if (state) this[name + ' blur'].visible = true;
        else this[name + ' crisp'].visible = true;

    },

    tweensBySprites: function (activeSprites, passiveSprites, highlightSprites, flashSprites, textSprites, lineSprites, indicatorSprites, textValue, lineNum, callback) {

        this.staticTweens.showTweens = [];
        this.staticTweens.hideTweens = [];
        this.staticTweens.hideQuickTweens = [];

        this.currentTweens.showTweens = [];
        this.currentTweens.hideTweens = [];
        this.currentTweens.hideQuickTweens = [];

        if (this.state !== 'ready') {
            callback = null;
            return;
        }

        if(this.state === 'ready'){

            //init highlight sprite tweens
            this.staticTweens.showTweens.push(this.tween({
                set: [
                    ['visible', true],
                    ['alpha', 1],
                ],
                to:  [
                    ['alpha', 1, 10, 0, Elastic.easeOut]
                ],
            }, highlightSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['alpha', 0, 10, Elastic.easeIn],
                    ['visible', false],
                ]
            }, highlightSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    //['scale', this.SYMBOLS_SCALE, 50, 0, Back.easeIn.config(2)],
                    ['alpha', 0, 10, 0]
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, highlightSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();

             //----------- flash sprite tweens  -----------------
             this.currentTweens.showTweens.push(this.tween({
                set: [
                    ['visible', true],
                    ['alpha', 1],
                ],
                to:  [
                    ['alpha', 1, 10, 0, Elastic.easeOut]
                ],
            }, flashSprites));

            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();

            this.currentTweens.hideTweens.push(this.tween({
                to: [
                    ['alpha', 0, 10, Elastic.easeOut]
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, flashSprites));

            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

            this.currentTweens.hideQuickTweens.push(this.tween({
                to: [
                    ['alpha', 0, 10, 0, Power1.easeIn]
                ]
            }, flashSprites));

            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();

            //--------------- init winPayLine sprite tweens --------------
            this.currentTweens.showTweens.push(this.tween({
                set: [
                        ['visible', true],
                        ['alpha', 1],
                ]
            }, 'PayLine-' + lineNum));

            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();

            this.currentTweens.hideTweens.push(this.tween({
                to: [
                    ['alpha', 0, 10, Elastic.easeOut],
                ],
                next: {
                    set: [
                        ['visible', false],
                        ['alpha', 0]
                    ]
                }
            }, 'PayLine-' + lineNum));

            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

            this.currentTweens.hideQuickTweens.push(this.tween({
                to: [
                    ['alpha', 0, 10, 0, Power1.easeIn]
                ]
            }, 'PayLine-' + lineNum));

            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();

            //--------------- init winPayLineNumber sprite tweens --------------
            this.tween({
                set:[
                        ['alpha', 0],
                        ['x', -900]
                    ],
                to: [
                        ['alpha', 1, 300, 0, Power1.easeOut],
                        ['x', -800, 200, 0, Back.easeOut.config(3)]
                ]
            }, 'PayLineNumber-' + lineNum)

            //--------------- init winPayLineAmount sprite tweens --------------
            this.tween({
                set:[
                        ['alpha', 0],
                        ['scale', 0]
                    ],
                to: [
                        ['alpha', 1, 300, 0, Power1.easeOut],
                        ['scale', 1, 200, 0, Back.easeOut.config(3)]
                ]
            }, 'PayLineAmount-' + lineNum)
        }

        if (this.state === 'ready') {
            this.staticTweens.show();
            this.currentTweens.show();
        }
        //console.log('playing');
        let tempTimeout = null;
        if (this.state === 'ready') tempTimeout = setTimeout(() => {

            if (this.state !== 'ready') {
                if (tempTimeout) clearTimeout(tempTimeout);
                return;
            }
            //console.log('timeout: 400');
            if (this.state === 'ready') {
                this.staticTweens.hide();
                this.currentTweens.hide();
            }

            if (callback && (this.state === 'ready')) {

                let tempTimeout2 = null;
                //console.log('timeout:2300');
                if (this.state === 'ready') tempTimeout2 = setTimeout(() => {

                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }
                   // console.log('stopAnimation');
                    if (this.state === 'ready') {
                        callback.call(this);
                    }
                }, 100);
            }
        }, 2100);

    },


    playScoreAnimationAll: function (highlightSprites, flashSprites, passiveSprites, delay) {
        this.tween({
            set: [['visible', true],['alpha', 1]],
            to: ['alpha', 0, delay/4, delay/4]
        }, highlightSprites);
        this.tween({
            set: [['visible', true],['alpha', 1]],
            to: ['alpha', 0, delay/4, delay/4]
        }, flashSprites);

        setTimeout(() => {
            this.tween({
                set: [['visible', true],['alpha', 1]],
                to: ['alpha', 0, delay/4] ,
                next: ['alpha', 0, delay/4],
            }, highlightSprites);
            this.tween({
                set: [['visible', true],['alpha', 1]],
                to: ['alpha', 0, delay/4],
                next: ['alpha', 0, delay/4],
            }, flashSprites);
        }, delay/2);
        this.playSound('mediumWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
    },

    playScoreAnimation: function (highlightSprites, flashSprites, passiveSprites, delay) {
        this.tween({
            set: [['visible', true],['alpha', 1]],
            to: ['alpha', 0, 10, delay]
        }, highlightSprites);
        this.tween({
            set: [['visible', true],['alpha', 1]],
            to: ['alpha', 0, 10, delay]
        }, flashSprites);
        this.playSound('smallWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
    },

    winScoreAnimation: function (winData, callback) {

        this.winBarTweens.showTweens = [];
        this.winBarTweens.hideTweens = [];
        this.winBarTweens.hideQuickTweens = [];

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            return;
        }
        this['win bar overlay'].visible = true;

        this['win bar'].drawed = 0;
        this['win bar text']. text = ' ';
        this['win bar'].visible = true;
        this.animFieldPoints('win bar', this.server_win_amount.value, true, true);

        if (winData.winLines.length === 2 || winData.winLines.length === 1) {
            this.playSound('smallWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        } else if (winData.winLines.length === 3) {
            this.playSound('mediumWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        } else if (winData.winLines.length > 3) {
            this.playSound('largeWin', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        }

        // ---------win bar animation ----------
        this.winBarTweens.showTweens.push(this.tween({
            name: 'win-animation',
            set:[ ['visible', true],
                  ['alpha', 1],
                  ['scale', 0.2]
            ],
            to: ['scale', 1, 200, 0, Elastic.easeIn]
        }, this['win bar']));

        //this.winBarTweens.showTweens[this.winBarTweens.showTweens.length - 1].stop();

        this.winBarTweens.hideTweens.push(this.tween({
            name: 'win-animation',
            to: [
                ['scale', 0, 200, 0, Back.easeIn.config(5)],
                ['alpha', 0, 200]
            ],

        }, this['win bar']));

        this.winBarTweens.hideTweens[this.winBarTweens.hideTweens.length - 1].stop();

        this.winBarTweens.hideQuickTweens.push(this.tween({
            name: 'win-animation',
            to: ['alpha', 0, 10]
        }, this['win bar']));

        this.winBarTweens.hideQuickTweens[this.winBarTweens.hideQuickTweens.length - 1].stop();

        let allHighlightSprites = [];
        let allFlashSprites = [];
        let allPassiveSprites = [];
        var totalTime = 1500;
        var allShowTime = 100;

        var oneDelay = (totalTime - allShowTime)/(winData.winLines.length+1);

        for (let k = 0; k < winData.winLines.length; k++) {
            let lineData = winData.winLines[k];
            let activeSprites = [];
            let passiveSprites = [];
            let highlightSprites = [];
            let flashSprites = [];
            let spritesModel = [];
            for (let i = 0; i < this.COLUMNS_COUNT; i++) {
                if (this.state !== 'ready') break;
                spritesModel[i] = [];

                for (let j = 0; j < this.ROWS_COUNT; j++) {
                    if (this.state !== 'ready') break;

                    spritesModel[i][j] = '';

                    if ((lineData[0][j][i] !== 0) && (spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                        spritesModel[i][j] = 'active';
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        if ((spritesModel[i][j] !== 'highlight')) {
                            spritesModel[i][j] = 'highlight';
                            highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                            allHighlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                            flashSprites.push(this.reels[i].spriteFlash.children[this.ROWS_COUNT + 1 + j].children[0]);
                            allFlashSprites.push(this.reels[i].spriteFlash.children[this.ROWS_COUNT + 1 + j].children[0]);
                        }
                    }
                }
            }
            setTimeout(()=>{
                if (this.state === 'ready') this.playScoreAnimation(highlightSprites, flashSprites, passiveSprites, oneDelay);
            }, oneDelay * k);
        }

        setTimeout(()=>{
            if (this.state === 'ready') this.playScoreAnimationAll(allHighlightSprites, allFlashSprites, allPassiveSprites, allShowTime + 500);
        }, oneDelay * winData.winLines.length);

        let tempTimeout = null;
        if (this.state === 'ready') tempTimeout = setTimeout(() => {
            this.winBarTweens.hide();

            setTimeout(() => {
                this['win bar'].visible = false;
                if ((callback) && (this.state === 'ready'))
                callback.call(this);
            }, 1000);

        }, oneDelay * winData.winLines.length + allShowTime + 500);
    },

    animateLine: function (line, callback) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }
        console.log('Animate one line...');
        let highlightSprites = [];
        let flashSprites = [];
        let activeSprites = [];
        let passiveSprites = [];
        let textSprites = [];
        let linesNum = line[4];

        let spritesModel = [];

        let matched_symbol_cnt = line[3] === 1 ? 3 : line[3];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            if (this.state !== 'ready' || this.winAnimationMode === false)
                break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {

                if (this.state !== 'ready' || this.winAnimationMode === false)
                    break;

                spritesModel[i][j] = '';

                if (line[0][j][i] !== 0) {
                    if (activeSprites.length < matched_symbol_cnt) {
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                        spritesModel[i][j] = 'active';
                    } else
                        passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);

                    if (highlightSprites.length < matched_symbol_cnt) {
                        spritesModel[i][j] = 'highlight';
                        highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        flashSprites.push(this.reels[i].spriteFlash.children[this.ROWS_COUNT + 1 + j].children[0]);
                    }

                    if (i === 2) {
                        let sprite_name = this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[1].params.name.replace('crisp', 'highlighttext');
                        this[sprite_name].text = line[5];
                        textSprites.push(sprite_name);
                    }
                }
            }
        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }
        let lineSprites = [];
        lineSprites.push("line " + linesNum);

        let indicatorSprites = [];
        indicatorSprites.push('line indicator ' + linesNum + ' glow');

        if (this.state !== 'ready' || this.winAnimationMode === false)
            return;
        this.tweensBySprites(activeSprites, passiveSprites, highlightSprites, flashSprites, textSprites, lineSprites, indicatorSprites, line[5], linesNum, callback);

    },

   animateEachLine: function (winLines, callback) {

        if (this.state !== 'ready') {
            callback = null;
            return;
        }
        // this['status panel win status bar'].visible = true;

        this.timeouts = [];

        for (let i = 0; i < winLines.length; i++) {

            let lineData = winLines[i];

            let lineNum = i;

            if (this.state !== 'ready') {
                callback = null;
                return;
            }

            let tempTimeout = null;
            if (this.state === 'ready') tempTimeout = setTimeout(() => {

                if (this.state !== 'ready') {
                    if (tempTimeout) clearTimeout(tempTimeout);
                    callback = null;
                    return;
                }

                if (this.state === 'ready' && this.spinCombination) {
                    this.animateLine(lineData, () => {
                        if (this.spinCombination) {
                            if (this.spinCombination.winData.winLines.length - 1 === lineNum) {

                                if (this.state !== 'ready') {
                                    callback = null;
                                    return;
                                }
                                if ((callback) && (this.state === 'ready'))
                                    callback.call(this);
                            }
                        }
                     });
                }

                // if (this.state === 'ready')
                //     this.playSound('symb'+lineData[4]+'.mp3', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

            }, lineNum * 2200); //animation interval

            this.timeouts.push(tempTimeout);

        }

    },

    winAnimation: function () {
        if (this.spinCombination.winData.winLines.length > 0) {
            if (this.state !== 'ready' || this.winAnimationMode === false) {
                this.refreshPanelValues();
                return;
            }
            for(let reel = 0; reel < this.COLUMNS_COUNT; reel++) {
                for (let i = 0; i < this.ROWS_COUNT; i++) {
                    let imageName = this.spinCombination.symbols[i][reel];
                    this.setSymbolTexture(this.reels[reel].sprite.children[i + this.ROWS_COUNT+1].name, App.SymbolsNames[imageName]);
                }
            }
            console.log("-->winanimation");
            this.tween({
                to: [
                    ['alpha', 0.8, 10, 0, Power1.easeOut],
                    ['visible', true, 10, 0, Power1.easeOut],
                ]
            }, this['passive overlay']);

            this.animateEachLine(this.spinCombination.winData.winLines, () => {
                if (this.state !== 'ready') return;

                let tempTimeout = null;
                if (this.state === 'ready') tempTimeout = setTimeout(() => {

                    if (this.state !== 'ready' || this.winAnimationMode === false) {
                        if (tempTimeout) clearTimeout(tempTimeout);
                        return;
                    }

                    this.state = 'ready';
                    // this.winAnimationMode = false;
                    if (this.auto_mode || (this.isfreespin === true && this.freespin_count !== 0)) {
                        this.spin();
                    } else {
                        if (this.state === 'ready') this.winAnimation();
                    }

                }, this.WIN_ANI_REPLAY_DELAY);
            });
        } else {

            // if (this.creditsNotInc) {
            //     this.credits.value += this.server_win_amount;
            //     this.credits.drawed = this.credits.value;
            // }

            this.refreshPanelValues();
        }

    },

    animFieldPoints: function (fieldName, points, bAnim = false, bEvent = false, speed = 0) {
        if (bAnim === false) {
            if (this[fieldName + ' text'].text === points.toString()) return;
            this[fieldName + ' text'].text = points.toString();
        } else if (this[fieldName].text !== points.toString()) {
            let duration = 1000;
            if(bEvent) {
                duration = 500;
            } else {
                if (points > 10000)
                    duration = 9000;
                else if (points > 5000)
                    duration = 6000;
                else if (points > 1000)
                    duration = 4000;
                else if (points > 500)
                    duration = 2000;
            }
            this.tween({
                set: ['drawed', this[fieldName].drawed],
                to: ['drawed', points, duration, 100, Expo.easeOut],
                update: () => {
                    this[fieldName + ' text'].text = Math.trunc(this[fieldName].drawed).toString();
                    this.roll_sound_play = false;
                }
            }, fieldName);
        }
    },

    tutorialTimeout: function (timeout) {

        if (this.state !== 'intro') {

            clearTimeout(this.TutorialTimeout);
            this.TutorialTimeout = setTimeout(function () {

                if (Settings["tutorial"] && !App.Tutorial.showed && !App.CallToAction.showed) App.Tutorial.show();

            }, typeof timeout === "number" ? timeout : Settings["tutorial-timeout"]);

        }

    },

    hideTutorial: function () {

        clearTimeout(this.TutorialTimeout);

        if (App.Tutorial.showed) App.Tutorial.hide();

    },

    handleButtonOut: function (container, e) {
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: [
                ['alpha', 0, 150, 0, Power1.easeOut],
                ['visible', false, 150, 0, Power1.easeOut],
            ]
        }, nameGlow);
    },

    handleButtonOver: function (container, e) {
        if (this.state !== 'ready')
            return;
        this.playSound('buttonHover', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: [
                ['alpha', 1, 150, 0, Power1.easeOut],
                ['visible', true, 150, 0, Power1.easeOut],
            ]
        }, nameGlow1);
    },

    handleButtonUp: function (container, e) {
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);

        let name = container.name;

        switch (name) {
            case 'auto start button':
                this.buttonHandlerAuto(container, name);
                break;
            case 'btn_auto':
                this.buttonHandlerAuto(container, name);
                break;
            case 'coin bar down':
                this.buttonHandleCoinUpDown(false, container, name);
                break;
            case 'coin bar up':
                this.buttonHandleCoinUpDown(true, container, name);
                break;
            case 'level bar down':
                this.buttonHandleLevelBarUpDown(false, container);
                break;
            case 'level bar up':
                this.buttonHandleLevelBarUpDown(true, container);
                break;
            case 'refresh start button':
                this.buttonHandleStartButton(container, true);
                this.automenu_mode = false;
                this['AutoMenuContainer'].visible = this.automenu_mode;
                break;
            case 'button paytable':
                this.buttonHandlePaytable(container);
                break;
            case 'start button':
                // this['spine'].state.setAnimation(0, "happy1.5s", true);
                // return;
                clearTimeout(this.tickerTimeout);

                if (this.auto_mode) {
                    return;
                } else {
                    if (!this.isfreespin)
                        this.buttonHandleStartButton(container, false);
                    else
                        this.buttonHandleFreeStartButton(container);
                }
                break;
            case 'maxbet button':
                if (this.auto_mode) {
                    return;
                } else {
                    this.buttonHandleMaxbetButton(container);
                }
                break;
            case 'autospin_dialog close button':
                this.buttonHandlerCloseDialog(container);
                break;
            case 'info prev button':
                this.buttonHandlerPrev(container);
                break;
            case 'info next button':
                this.buttonHandlerNext(container);
                break;
            case 'info close button':
                this.buttonHandlePaytable(container);
                break;
            case 'audio_set button':
                this.buttonHandlerAudioSet(container);
                break;
            case 'close button':
                this.buttonHandlerClose(container);
                break;

            default:
                if (name.indexOf('button automenu') === 0) {
                    this.buttonHandleAutoItem(container, name);
                }
                break;
        }
    },

    handleButtonDown: function (container, e) {
        if (this.state !== 'ready')
            return;
        if (container.name === "level bar up" && this.levelup_state === true)
            return;
        if (container.name === "level bar down" && this.leveldown_state === true)
            return;
        if (container.name === "coin bar up" && this.coinup_state === true)
            return;
        if (container.name === "coin bar down" && this.coindown_state === true)
            return;
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);

        this.cur_mouse_capture_container_name = container.name;
    },

    buttonHandlerAuto: function (container, name) {
        if (this.auto_mode === true) {
            this['auto start button text'].text = "AUTOPLAY";
            this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.NORMAL);
            this['autoamount text'].visible = false;
            this.playSound('buttonClick', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
            this.auto_mode = false;
            this.current_auto_amount = 0;
            return;
        }
        if (this.state !== 'ready') return;
        if (this.auto_mode === false) {
            this.winAnimationMode = false;
            if (this.automenu_mode !== true) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                this.automenu_mode = true;
            } else {
                this.automenu_mode = false;
            }
            this['AutoMenuContainer'].visible = this.automenu_mode;
        }
    },

    buttonHandleAutoItem: function (container, name) {
        if (this.state !== 'ready') return;

        this.winAnimationMode = false;
        this.current_auto_amount = container.step;
        let number = name.slice(-2);
        this.refreshPanelValues();

        let nameGlow1 = container.name + ' selected';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
        this.refreshAutoItemBack(number);
    },

    refreshAutoItemBack: function (number) {
        let items = ["10", "20", "30", "40", "50"];
        for (let i = 0; i < items.length; i++) {
            if (number !== items[i]) {
                let tweenname = "button automenu_" + items[i] + " selected";
                this.tween({
                    to: ['alpha', 0, 150, 0, Power1.easeOut]
                }, tweenname);
            } else {
                this.setStatusControlBar(['refresh start button'], this.const.STATUS_TYPE.NORMAL);
            }
        }
    },

    buttonHandleCoinUpDown: function (bUp, container, name) {
        if (this.state !== 'ready' || this.auto_mode === true) return;
        this.winAnimationMode = false;

        var cur_step = this.coins.step;
        if (bUp === true) {
            if (cur_step < this.coin_value_list.length) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.coin_progress_step * (cur_step + 1), 250, 100, Power1.easeOut]
                }, 'coin progress back');
                cur_step++;
            }
            this.refreshCoinBar(cur_step);
        } else {
            if (cur_step > 1) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.coin_progress_step * (cur_step - 1), 250, 100, Power1.easeOut]
                }, 'coin progress back');
                cur_step--;
            }
            this.refreshCoinBar(cur_step);
        }

        if (this.setBetAmountValues(this.lines.step, this.levels.step, cur_step) === false)
            cur_step = this.coins.step;
    },

    buttonHandleLevelBarUpDown: function (bUp, container) {
        if (this.state !== 'ready' || this.auto_mode) return;
        this.winAnimationMode = false;

        var cur_step = this.levels.step;
        if (bUp === true) {
            if (cur_step < this.level_value_list.length) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.level_progress_step * (cur_step + 1), 250, 100, Power1.easeOut]
                }, 'level progress back');
                cur_step++;
            }
            this.refreshLevelBar(cur_step);
        } else {
            if (cur_step > 1) {
                this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
                this.tween({
                    to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step - 1), 250, 100, Power1.easeOut]
                }, 'level progress back');
                cur_step--;
            }
            this.refreshLevelBar(cur_step);
        }

        if (this.setBetAmountValues(this.lines.step, cur_step, this.coins.step) === false)
            cur_step = this.levels.step;
    },

    buttonHandleMaxbetButton: function (container) {

        this.hideWinanimation();
        if (this.timeouts && this.timeouts.length > 0) {
            this.timeouts.forEach((timeout) => {
                clearTimeout(timeout);
            });
        }
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        if (this.levels.step !== this.level_value_list.length || this.coins.step !== this.coin_value_list.length) {
            //if(this.winAnimationMode == true)

            this.showalllines();
            setTimeout(() => {
                this.hidealllines();
            }, 1000);
            this.levels.step = this.level_value_list.length;
            this.coins.step = this.coin_value_list.length;
            this.setBetAmountValues(1, this.levels.step, this.coins.step);
            this.tween({
                to: ['x', this.progressbar_pos + this.coin_progress_step * (this.coins.step), 250, 100, Power1.easeOut]
            }, 'coin progress back');
            this.tween({
                to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step), 250, 100, Power1.easeOut]
            }, 'level progress back');
            this.refreshLevelBar(this.levels.step);
            this.refreshCoinBar(this.coins.step);
            this.coindown_state = false;
            this.leveldown_state = false;
        } else {
            this.spin();
        }
    },

    setMinbet: function () {
        this.levels.step = 1;
        this.coins.step = 1;
        let line_step = 1;
        let level_step = 1;
        let coin_step = 1;
        let line_value = this.line_value_list[line_step - 1];
        let level_value = this.level_value_list[level_step - 1];
        let coin_value = this.coin_value_list[coin_step - 1];
        let betAmount = line_value * level_value * coin_value;
        this.lines.value = line_value;
        this.lines.step = line_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.coins.value = coin_value;
        this.coins.step = coin_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
        this.tween({
            to: ['x', this.progressbar_pos + this.coin_progress_step * (this.coins.step), 250, 100, Power1.easeOut]
        }, 'coin progress back');
        this.tween({
            to: ['x', this.progressbar_pos + this.level_progress_step * (this.levels.step), 250, 100, Power1.easeOut]
        }, 'level progress back');
        this.setStatusControlBar(['level bar down', 'coin bar down'], this.const.STATUS_TYPE.DISABLED);
        this.setStatusControlBar(['level bar up', 'coin bar up'], this.const.STATUS_TYPE.NORMAL);
        this.coinup_state = false;
        this.levelup_state = false;
    },

    buttonHandleStartButton: function (container, isAuto = false) {
        if(this.help_mode) return;
        if (isAuto === false) {
            if (this.credits.value < this.bet.amount)
                return;

            MRAID.markMeaningfulInteraction();

            if (this.state !== 'ready') return;

            // let rand_sound_idx = _.random(1, 16);
            // this.playSound("spinButtonClick" + rand_sound_idx, {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            this.playSound("spinButtonClick", {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

            this.spin();

        } else {
            if (this.state === 'ready') {
                if (this.auto_mode === false) {
                    this.auto_mode = true;
                    this.refreshAutoItemBack();
                    this.setStatusControlBar(['refresh start button'], this.const.STATUS_TYPE.DISABLED);
                    this.setStatusControlBar(['auto start button'], this.const.STATUS_TYPE.DISABLED);
                    this['autoamount text'].visible = true;
                    this['auto start button text'].text = 'STOP';
                    this.spin();
                }
            }
        }
        this.refreshPanelValues();
    },

    buttonHandleFreeStartButton: function (container) {
        this.state = 'ready';
        this['ControlPanelContainer'].visible = false;
        this['back_fire'].visible = false;
        this['background container wrapper'].visible = false;
        this['free_background container wrapper'].visible = true;

        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.staticTweens.hide();
        this.staticTweens.hideQuick();

        this.back_interval = setInterval(() => {
            this['free_background'].play();
        }, 280);

        setTimeout(() => {
            this.auto_mode = true;
            this.current_auto_amount = this.freespin_count;
            this.spin();
        }, 500);
    },

    buttonHandlerCloseDialog: function (container) {
        MRAID.markMeaningfulInteraction();
        this.playSound('btn_auto_close', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        this.automenu_mode = false;
        this['AutoMenuContainer'].visible = this.automenu_mode;
    },

    buttonHandlerNext: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        if (this.helpPageIndex === 4) {
            this.helpPageIndex = 0;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        } else {
            this.helpPageIndex++;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        }
    },

    buttonHandlerPrev: function (container) {
        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        if (this.helpPageIndex === 0) {
            this.helpPageIndex = 4;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        } else {
            this.helpPageIndex--;
            this.refreshHelpPage(this.helpPageIndex);
            this.refreshHelpIndicator(this.helpPageIndex);
        }
    },

    buttonHandlerAudioSet: function (container) {
        this.sound_mode = !(this.sound_mode);
        if (this.sound_mode) {
            //this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true});
            this['audio_set button'].texture = this.getTexture("btn_speaker_on");
        } else {
            this.backSound.stop();
            this['audio_set button'].texture = this.getTexture("btn_speaker_off");
        }
    },

    buttonHandlerClose: function (container) {
        this.closeGame();
    },

    buttonHandlePaytable: function (container) {
        if(this.help_mode) {
            this.returnToOrginalFromHelp();
            this['button paytable'].texture = this.getTexture('paytableButtonUp.png');

            this.setStatusControlBar(['start button', 'auto start button', 'maxbet button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up'], this.const.STATUS_TYPE.NORMAL);
            this['coin bar progress'].alpha = this['level bar progress'].alpha = 1;

            return;
        }

        this.playSound('buttonClick', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this.refreshHelpPage(this.helpPageIndex);
        this.refreshHelpIndicator(this.helpPageIndex);
        this['InfoContainer'].visible = true;
        this['button paytable'].texture = this.getTexture('return.png');

        this.setStatusControlBar(['start button', 'auto start button', 'maxbet button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up'], this.const.STATUS_TYPE.DISABLED);
        this['coin bar progress'].alpha = this['level bar progress'].alpha = 0.5;

        this.help_mode = true;
    },

    returnToOrginalFromHelp: function () {
        this['MainContainer'].visible = true;
        this['ControlPanelContainer'].visible = true;
        this['LogoContainer'].visible = true;
        this['InfoContainer'].visible = false;
        this.help_mode = false;
    },

    setBetAmountValues: function (line_step, level_step, coin_step) {

        // let line_value = this.line_value_list[line_step - 1];
        let level_value = this.level_value_list[level_step - 1];
        let coin_value = this.coin_value_list[coin_step - 1];

        let betAmount = level_value * coin_value;

        if (this.credits.value < betAmount) {
            console.warn("BetAmount is lower than Credit Value");
            this.setMinbet();
            return false;
        }

        // this.lines.value = line_value;
        // this.lines.step = line_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.coins.value = coin_value;
        this.coins.step = coin_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
    },

    refreshPanelValues: function () {
        this.animFieldPoints('credits bar', this.credits.drawed.toString());
        this.animFieldPoints('level bar', this.levels.value);
        this.animFieldPoints('coin bar', this.coins.value);
        //this.animFieldPoints('win bar', this.server_win_amount.drawed);
        this.animFieldPoints('betamount', this.levels.value * this.coins.value);
        this.animFieldPoints('bet bar', this.bet.amount.toString());
        this.animFieldPoints('total_bet bar', this.credits.drawed.toString());
        this.animFieldPoints('status win amount', this.server_win_amount.drawed);


        if (this.auto_mode) {
            this.animFieldPoints('autoamount', this.current_auto_amount);
        }

        if (this.auto_mode === false) {
            this['start button'].visible = true;
        } else {
            this['start button'].visible = true;
        }
    },

    drawAllPayLines: function() {

		let matchedLinePath = [];
        let combinations = App.escalibur.PayLines;

		for (let i = 0; i < combinations.length; i++) { // winLines count

			let matchedLinePath = [];
			let combination = combinations[i];
			this.buildChild(this['game board winLines'], {
				name: 'PayLine-' + i,
                type: 'container',
                anchor: [0.5,0.5],
                scale : [1,1],
                position: [0, -this.ROWS_OFFSET],
                alpha: 0
            });

            for (let rowIndex = 0; rowIndex < this.ROWS_COUNT; rowIndex++) { // rule array

                let row = combination[rowIndex];

                for (let elementIndex = 0; elementIndex < this.COLUMNS_COUNT; elementIndex++) {

					let element = row[elementIndex];

					if(element === 1) {

						this.drawElementLine(i, [rowIndex, elementIndex], 0xffffff);
						matchedLinePath.push([rowIndex, elementIndex]);

					}
                }

			}
			this.drawWinCombinationChains(matchedLinePath, i);
		}
	},

	drawElementLine: function (combinationIndex, positions = [0, 0], fillSet) {

        let elName = 'elementLine-' + '(' + positions[1] + ',' + positions[0] + ')';
        this.buildChild(this['PayLine-' + combinationIndex], {
            name: elName,
            type: 'graphics',
            alpha: 1,
            position: (positions[1] == 2 || positions[1] == 3) ?
                        [this.COLUMNS_OFFSET * positions[1] - 2*this.COLUMNS_OFFSET,  (this.ROWS_OFFSET)* positions[0] - this.ROWS_OFFSET - this.REEL_POSY_OFFSET] :
                        [this.COLUMNS_OFFSET * positions[1] - 2*this.COLUMNS_OFFSET,  (this.ROWS_OFFSET)* positions[0] - this.ROWS_OFFSET],
            //draw: [['beginFill', this.fillSet[fillSet]], ['drawRect', [-130, -70, 110, 8]]]
            draw: [	['clear'],
                    ['lineStyle',[20, fillSet]],
                    ['moveTo', [-3, 0]],
                    ['lineTo', [6, 0]]
            ]
        });

        this.buildChild(this[elName], {
            name: elName + 'inner line',
            type: 'graphics',
            draw: [	['clear'],
                    ['lineStyle',[12, 0x0077fe]],
                    ['moveTo', [-4, 0]],
                    ['lineTo', [8, 0]]
                ]
        });
    },

    drawWinCombinationChains(matchedLinePath, ruleNum) {

		let sortedPath = matchedLinePath;
		function compare(a,b) {
			var aComp = a[1];
			var bComp = b[1];
			if(aComp < bComp)
				return -1;
			if(aComp > bComp)
				return 1;
			return 0;
		}
		sortedPath.sort(compare);
        //console.log("LinePath:" + sortedPath + "length:", sortedPath.length);

        let firstObj = this['elementLine-' + '(' + sortedPath[0][1] + ',' + sortedPath[0][0] + ')'];
        this.buildChild(this['PayLine-' + ruleNum], {
            name : 'connectLine-' + 'start',
            type : 'graphics',
            position : [firstObj.params.position[0] - this.COLUMNS_OFFSET/4, firstObj.params.position[1]],
            draw: [	['clear'],
                    ['lineStyle',[20, 0xffffff]],
                    ['moveTo', [-this.COLUMNS_OFFSET/4, 0]],
                    ['lineTo', [this.COLUMNS_OFFSET/4, 0]]
            ]
        });
        this.buildChild(this['connectLine-' + 'start'], {
            name: 'connectLine-' + 'start' + 'inner line',
            type: 'graphics',
            draw: [	['clear'],
                    ['lineStyle',[12, 0x0077fe]],
                    ['moveTo',[-this.COLUMNS_OFFSET/4, 0]],
                    ['lineTo',  [this.COLUMNS_OFFSET/4, 0]]
                ]
        });

        this.buildChild(this['PayLine-' + ruleNum], {
            name: 'PayLineNumber-' + ruleNum,
            type: 'text',
            text: ruleNum+1,
            anchor: [0.5,0.5],
            scale : [1,1],
            position: [firstObj.params.position[0] - this.COLUMNS_OFFSET/2 - 50, firstObj.params.position[1]],
            styles: {
                align: 'center',
                //fontStyle: 'italic',
                fontWeight: '400',
                fontSize: '70px',
                padding: 30,
                fontFamily: 'BerlinSansFBDemi-Bold', //'Oswald-Bold',
                fill: 0xffffff,
                stroke: [0x005daa],
                strokeThickness: 10,
                letterSpacing: 5,
                lineJoin: "bevel",
            }
        });

		for(let i = 0; i < sortedPath.length; i++) {

			if(i+1 == sortedPath.length)
                break;

			let currObj = this['elementLine-' + '(' + sortedPath[i][1] + ',' + sortedPath[i][0] + ')'];
			let nextObj = this['elementLine-' + '(' + sortedPath[i+1][1] + ',' + sortedPath[i+1][0] + ')'];
			let startPosX = currObj.params.position[0] + this.COLUMNS_COUNT/2;
            let startPosY = currObj.params.position[1];

			this.buildChild(this['PayLine-' + ruleNum], {
				name: 'connectLine-' + '(' + sortedPath[i][1] + ',' + sortedPath[i][0] + ')',
				type: 'graphics',
				position: [startPosX, startPosY],
				//draw: [['beginFill', this.fillSet[fillSet]], ['drawRect', [-130, -70, 110, 8]]]
				draw: [	['clear'],
						['lineStyle',[(nextObj.params.position[1] - currObj.params.position[1] == 0 ? 20 : 21), 0xffffff]],
						['moveTo', [0, 0]],
						['lineTo', [Math.abs(nextObj.params.position[0] - currObj.params.position[0]),
									(nextObj.params.position[1] - currObj.params.position[1]) > 0 ?
										Math.abs(nextObj.params.position[1] - currObj.params.position[1]):
										-Math.abs(nextObj.params.position[1] - currObj.params.position[1])]]
					]
            });
            this.buildChild(this['connectLine-' + '(' + sortedPath[i][1] + ',' + sortedPath[i][0] + ')'], {
                name: 'connectLine-' + '(' + sortedPath[i][1] + ',' + sortedPath[i][0] + ')' + 'inner line',
                type: 'graphics',
                draw: [	['clear'],
                        ['lineStyle',[(nextObj.params.position[1] - currObj.params.position[1] == 0 ? 12 : 13), 0x0077fe]],
                        ['moveTo', [-1, 0]],
                        ['lineTo',  [Math.abs(nextObj.params.position[0] - currObj.params.position[0])+1,
                        (nextObj.params.position[1] - currObj.params.position[1]) > 0 ?
                            Math.abs(nextObj.params.position[1] - currObj.params.position[1]):
                            -Math.abs(nextObj.params.position[1] - currObj.params.position[1])]]
                    ]
            });
        }

        this.buildChild(this['PayLine-' + ruleNum], {
            name: 'PayLineAmount-' + ruleNum,
            type: 'text',
            text: ruleNum+1,
            anchor: [0.5,0.5],
            scale : [1,1],
            position: [this['elementLine-' + '(' + sortedPath[2][1] + ',' + sortedPath[2][0] + ')'].params.position[0] + this.COLUMNS_COUNT/2,
                       this['elementLine-' + '(' + sortedPath[2][1] + ',' + sortedPath[2][0] + ')'].params.position[1]],
            styles: {
                align: 'center',
                fontStyle: 'italic',
                fontWeight: '10',
                fontSize: '150px',
                padding: 30,
                fontFamily: 'Bauhaus_93_regular', //'Oswald-Bold',
                fill: [0xffffff,0xfffdd3, 0xc54700, 0xf9ca00],
                fillGradientStops: [0.55, 0.35, 0.25],
                stroke: [0xef4e4e],
                strokeGradientStops: [0.55],
                strokeThickness: 25,
                dropShadow: true,
                dropShadowBlur: 25,
                dropShadowAlpha: 1,
                dropShadowColor: 0x581d00,
                dropShadowDistance: 20,
                letterSpacing: 20,
                lineJoin: "bevel",
            }
        });
    },

    updateTickerText: function () {

        clearTimeout(this.tickerTimeout);

        switch (this['status text'].text) {

            case 'win on up to 76 bet lines':

                this.tickerTimeout = setTimeout(() => {

                    this['status text'].text = '3 or more Free spin symbols activate Free spins';

                    this.updateTickerText();

                }, 6000);

                break;

            case '3 or more Free spin symbols activate Free spins':

                this.tickerTimeout = setTimeout(() => {

                    this['status text'].text = 'win on up to 76 bet lines';

                    this.updateTickerText();

                }, 6000);

                break;

            case 'WINNER!':

                this.tickerTimeout = setTimeout(() => {

                    this['status text'].text = 'win on up to 76 bet lines';
                    this['status win box'].alpha = 0;
                    this['status text'].alpha = 1;

                    this.updateTickerText();

                }, 6000);

                break;

            default:

                break;
        }

    },
    setStatusText: function (text) {
        this['status text'].text = text;
    },

    formatServerData: function(serverData) {

        serverData.response.initCards[0][1] = serverData.response.initCards[0][2];
        serverData.response.initCards[0][2] = serverData.response.initCards[0][3];
        serverData.response.initCards[0][3] = serverData.response.initCards[0][4];
        serverData.response.initCards[0][4] = -1;

        serverData.response.initCards[1][1] = serverData.response.initCards[1][2];
        serverData.response.initCards[1][2] = serverData.response.initCards[1][3];
        serverData.response.initCards[1][3] = serverData.response.initCards[1][4];
        serverData.response.initCards[1][4] = -1;

        serverData.response.initCards[2][0] = serverData.response.initCards[2][1];
        serverData.response.initCards[2][1] = serverData.response.initCards[2][2];
        serverData.response.initCards[2][2] = serverData.response.initCards[2][3];
        serverData.response.initCards[2][3] = serverData.response.initCards[2][4];
        serverData.response.initCards[2][4] = -1;

        serverData.response.initCards[3][0] = serverData.response.initCards[3][1];
        serverData.response.initCards[3][1] = serverData.response.initCards[3][2];
        serverData.response.initCards[3][2] = serverData.response.initCards[3][3];
        serverData.response.initCards[3][3] = serverData.response.initCards[3][4];
        serverData.response.initCards[3][4] = -1;

        return serverData;
    },

    removeCellMatrix: function (matrix, card_count) {
        for (var i = 0; i < 3; i++) {
            for (var j = card_count; j < 5; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    },

    exchangeMatrix: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                return_matrix[j][i] = matrix[i][j];
            }
        }
        return return_matrix;
    },

    exchangeagain: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 5; i++)
            for (var j = 0; j < 3; j++) {
                return_matrix[4 - i][j] = matrix[i][j];
            }
        return return_matrix;
    },

    generateWinData: function () {
        var serverData = this.server_arrRetVal;
        var changed_matrix = this.exchangeMatrix(this.server_initMatrix);
        changed_matrix = this.exchangeagain(changed_matrix);
        var return_var = [[]];
        for (var k = 0; k < serverData.length; k++) {
            var windata = [];
            var pay_line;
            var symbol_name;
            var card_count;
            var symbols = this.spinCombination.symbols;
            var pos_array = [];
            var linePosIdx = serverData[k].linePosIdx;
            //card_count = serverData[k].cardCount === 3 ? 1 : serverData[k].cardCount;
            card_count = serverData[k].payLine.length;
            pay_line = this.spinCombination.paylines[serverData[k].linePosIdx];
            pay_line = this.removeCellMatrix(pay_line, serverData[k].cardCount);
            symbol_name = this.spinCombination.uniquesymbols[serverData[k].audioIndex];
            for (var i = 0; i < this.COLUMNS_COUNT; i++) {
                for (var j = 0; j < this.ROWS_COUNT; j++) {
                    if (pay_line[j][i] === 1) {
                        pos_array.push({name: symbols[j][i], position: [j, i]});
                    }
                }
            }
            windata.push(pay_line);
            windata.push(pos_array);
            windata.push("symbol_name");
            windata.push(card_count);
            windata.push(linePosIdx);
            windata.push(serverData[k].win);
            windata.push(serverData[k].direction);
            return_var[k] = windata;
        }
        return return_var;
    },

    bonusclose: function () {
        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'overlay', () => {
            this['overlay'].visible = false;
        });

        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'bonus container', () => {
            this['bonus container'].visible = false;
        });
    },

    apiRequest: function (options) {
        var params = '';
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.org/api/" + options.endpoint,
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });

        return xhr;
    },

    getCashInfo: function () {
        var options = {
            endpoint: 'zt_get_player_balance',
            params: [
                {
                    key: 'session_id',
                    value: this.session_id
                }
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.org/api/" + options.endpoint,
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            async: false,
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getServerData: function () {

        //var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[2,0,2],[2,2,5],[3,2,2],[4,2,0],[1,1,2]],\"arrRetVal\":[{\"retType\":7,\"wildReelAry\":[4,6]},{\"retType\":0,\"win\":3000,\"linePosIdx\":4,\"cardCount\":4,\"direction\":1},{\"retType\":0,\"win\":1400,\"linePosIdx\":6,\"cardCount\":3,\"direction\":1}],\"betAmount\":200,\"winAmount\":4400,\"balance\":6058206.7}}";
        //var response = '{"error":"0","response":{"initCards":[[3,5,4,2,2],[6,5,3,2,5],[0,5,4,2,1],[6,2,3,2,0],[4,3,3,1,2]],"arrRetVal":[{"retType":0,"win":15,"linePosIdx":0,"cardCount":5}],"betAmount":20,"winAmount":350,"balance":10015}}';
        //var response = '{"error":"0","response":{"initCards":[[-1,-1,3,4,3],[-1,-1,1,2,5],[-1,1,0,0,1],[-1,0,2,1,2],[4,6,3,5,0]],"arrRetVal":[],"betAmount":5,"winAmount":0,"balance":10000}}';
        var response =  '{"error":"0","response":{"initCards":[[-1,-1,5,5,0],[-1,-1,5,2,0],[-1,3,2,4,0],[-1,3,4,3,0],[0,1,5,0,2]],' +
                        '"arrRetVal":[' +
                            '{"retType":0,"win":25,"linePosIdx":0,"payLine":[4,9,14,19]},' +
                            '{"retType":0,"win":100,"linePosIdx":1,"payLine":[4,9,14,19,23]},'+
                            '{"retType":0,"win":15,"linePosIdx":2,"payLine":[4,9,14]},'+
                            '{"retType":0,"win":15,"linePosIdx":3,"payLine":[4,9,14]},'+
                            '{"retType":0,"win":5,"linePosIdx":44,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":45,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":46,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":47,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":48,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":49,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":50,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":51,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":52,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":53,"payLine":[3,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":66,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":67,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":68,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":69,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":70,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":71,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":72,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":73,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":74,"payLine":[2,7]},'+
                            '{"retType":0,"win":5,"linePosIdx":75,"payLine":[2,7]}],'+
                        '"betAmount":5,"winAmount":255,"balance":100255}}';
        var serverData = JSON.parse(response);
        return serverData;
    },

    getInitData: function () {
        var options = {
            endpoint: 'zt_get_setting',
            params: [
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            url: this.api_url + options.endpoint,
            dataType: 'json',
            async: false,
            type: 'post',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    },

    getServerCardsInfo: function (bet, isfreespin) {

        var options = {
            endpoint: 'zt_play_game',
            params: [
                {
                    key: 'lines',
                    value: 0
                },
                {
                    key: 'bet',
                    value: this.levels.step - 1
                },
                {
                    key: 'denom',
                    value: this.coins.step - 1
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
                {
                    key: 'isfreespin',
                    value: isfreespin
                },
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'initbalance',
                    value: this.credits.value
                },
                {
                    key: 'play_for_fun',
                    value: 0
                }
            ]
        };

        if (isfreespin === true) {
            options.params.push({
                key: 'wildReelAry',
                value: this.wildReelArray
            })
        }
        return this.apiRequest(options);
    },

    closeGame: function () {
        var options = {
            endpoint: 'zt_exit_game',
            params: []
        };
        return this.apiRequest(options);
    },

    /*-------------------New generated methods by Jenson only for Fairytale-------------------*/
    setStatusControlBar: function (names, status) {
        let bar_names = ['start button bar', 'maxbet button bar', 'auto start button bar', 'coin bar up container', 'coin bar down container', 'level bar down container', 'level bar up container', 'refresh start button bar'];
        let button_names = ['start button', 'maxbet button', 'auto start button', 'coin bar up', 'coin bar down', 'level bar down', 'level bar up', 'refresh start button'];
        for (let i = 0; i < bar_names.length; i++) {
            if (names.includes(button_names[i])) {
                this[bar_names[i]].visible = true;
                if (status === this.const.STATUS_TYPE.DISABLED) {
                    this[button_names[i]].visible = false;
                    this[button_names[i] + ' disabled'].alpha = 0.5;
                    this[button_names[i] + ' disabled'].visible = true;
                } else if (status === this.const.STATUS_TYPE.INVISIBLE) {
                    this[bar_names[i]].visible = false;
                } else if (status === this.const.STATUS_TYPE.NORMAL) {
                    this[button_names[i]].visible = true;
                    this[button_names[i] + ' disabled'].alpha = 0;
                    this[button_names[i] + ' disabled'].visible = false;
                } else if (status === this.const.STATUS_TYPE.VISIBLE) {
                    this[bar_names[i]].visible = true;
                }
            }
        }
    },

    refreshCoinBar: function (cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.coin_value_list.length:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['coin bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['coin bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    refreshLevelBar: function (cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.level_value_list.length:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['level bar down'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['level bar up'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    showalllines: function () {
        for (let i = 0; i < App.escalibur.PayLines.length; i++) {
            this['PayLine-' + i].alpha = 1;
            this['PayLineNumber-' + i].alpha = 0;
            this['PayLineAmount-' + i].alpha = 0;
        }
    },

    hidealllines: function () {
        for (let i = 0; i < App.escalibur.PayLines.length; i++) {
            this['PayLine-' + i].alpha = 0;
        }
    },

    wildAnimation: function (wildReelAry) {
        this.isfreespin = true;
        this.wildhighlightSprites = [];
        for (let i = 0; i < wildReelAry.length; i++) {
            let x_pos = Math.floor(wildReelAry[i] / 3);
            let y_pos = (2 - wildReelAry[i] % 3);
            this.wildhighlightSprites.push(this.reels[x_pos].wildHighlight.children[this.ROWS_COUNT + 1 + y_pos].children[0].params.name.replace('crisp', 'highlight'));
        }
        this.tween({
            name: 'win-animation',
            to: [
                ['alpha', 1, 300],
                ['visible', true]
            ]
        }, this.wildhighlightSprites)
    },

    hideWildanimation: function () {

        this.tween({
            name: 'win-animation',
            to: [
                ['alpha', 0, 300],
                ['visible', false]
            ]
        }, this.wildhighlightSprites)
        this.isfreespin = false;
    },

    hideWinanimation: function () {
        this.tween({
            to: ['alpha', 0, 10, 0, Elastic.easeIn]
        }, 'passive overlay', () => {
            this['passive overlay'].visible = false;
        });
        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.staticTweens.hide();
        this.staticTweens.hideQuick();
        this.winBarTweens.hide();
        this.winBarTweens.hideQuick();
        this.flashTweens.hide();
        this.flashTweens.hideQuick();
        this['win bar'].visible = false;
        this['win bar overlay'].visible = false;
    },

    refreshHelpPage: function (number) {
        for (let i = 0; i < 5; i++) {
            if (number !== i) {
                let tweenname = "info container " + (i + 1);
                this[tweenname].visible = false;
            } else {
                let tweenname = "info container " + (i + 1);
                this[tweenname].visible = true;
            }
        }
    },

    refreshHelpIndicator: function (number) {
        for (let i = 0; i < 5; i++) {
            if (number !== i) {
                let tweenname = "info indicator " + (i + 1) + " disabled";
                this[tweenname].alpha = 1;
            } else {
                let tweenname = "info indicator " + (i + 1) + " disabled";
                this[tweenname].alpha = 0;
            }
        }
    },

    /*-------------------New generated methods by Jenson only for Fairytale-------------------*/

    interval: 0,
    server_initMatrix: [],
    server_arrRetVal: [],
    server_scatters: [],
    base_amount: [100, 25, 7, 20, 10, 5, 10, 5, 3, 10, 5, 3, 500, 50, 10, 50, 25, 5, 8, 4, 2, 8, 4, 2, 8, 4, 2, 5, 2, 1],
    server_url: "http://localhost/pixi/cui/server.json",
    server_win_amount: {
        value: 0,
        drawed: 0
    },
    gamesession_id: "",
    session_id: 0,

    hill_interval: null,
    rabbit_interval: null,

    api_url: "https://ace.777berserk.org/api/",
    // api_url: "http://localhost:8000/api/",

    first_reel: false,
    second_reel: false,
    third_reel: false,

    freespin_animation: false,
    freespin_count: 0,
    isfreespin: false,
    freespin_index: 0,
    freespin_first_animation: false,
    total_freespin_amount: 0,
    freespin_end: false,
    base_sound: null,
    roll_sound: null,
    roll_sound_play: false,

    progressbar_size: 140,
    progressbar_pos: -160,

    bonus_highlights: [],
    bonus_active: [],

    wildhighlightSprites: [],

    spark_pos_array: [
        [[-520, -265], [-260, -265], [0, -265], [260, -265], [520, -265]],
        [[-520, 0], [-260, 0], [0, 0], [260, 0], [520, 0]],
        [[-520, 265], [-260, 265], [0, 265], [260, 265], [520, 265]],
    ]
});
