window.addEventListener('DOMContentLoaded', () => {
    // Получим наших пустых персонажей
    const northPeople = document.querySelectorAll('.map__north__usa_step_first img');
    const northPeopleParent = document.querySelector('.map__north__usa_step_first');
    const southPeople = document.querySelectorAll('.map__south__usa_step_first img');
    const southPeopleParent = document.querySelector('.map__south__usa_step_first');
    const europePeople = document.querySelectorAll('.map__europe_step_first img');
    const europePeopleParent = document.querySelector('.map__europe_step_first');
    const asiaPeople = document.querySelectorAll('.map__asia_step_first img');
    const asiaPeopleParent = document.querySelector('.map__asia_step_first');
    const australiaPeople = document.querySelectorAll('.map__australia_step_first img');
    const australiaPeopleParent = document.querySelector('.map__australia_step_first');
    // Devices
    const northParent = document.querySelector('.map__north__usa_step_two');
    const northDevices = document.querySelectorAll('.map__north__usa_step_two img');
    const southParent = document.querySelector('.map__south__usa_step_two');
    const southDevices = document.querySelectorAll('.map__south__usa_step_two img');
    const europeParent = document.querySelector('.map__europe_step_two');
    const europeDevices = document.querySelectorAll('.map__europe_step_two img');
    const asiaParent = document.querySelector('.map__asia_step_two');
    const asiaDevices = document.querySelectorAll('.map__asia_step_two img');
    const australiaParent = document.querySelector('.map__australia_step_two');
    const australiaDevices = document.querySelectorAll('.map__australia_step_two img');
    // Data
    const northData = document.querySelector('.map__north__usa_data img');
    const southData = document.querySelector('.map__south__usa_data img');
    const europeData = document.querySelector('.map__europe_data img');
    const asiaData = document.querySelector('.map__asia_data img');
    // Button and title
    const title = document.querySelector('.header__title');
    const btn = document.querySelector('.header__btn');
    const testBtn = document.querySelector('.header__btn_cloud');
    const restartBtn = document.querySelector('.header__btn_restart');
    // latence/time title
    const northTitle = document.querySelector('.north__device__mask_title');
    const southTitle = document.querySelector('.south__device__mask_title');
    const europeTitle = document.querySelector('.europe__device__mask_title');
    const asiaTitle = document.querySelector('.asia__device__mask_title');
    const australiaTitle = document.querySelector('.australia__device__mask_title');

    // Lines
    // North lines
    const northToNorth = document.querySelectorAll('.line__usa_low');
    const northToEurope = document.querySelectorAll('.line__usa__europe');
    const northToAsia = document.querySelectorAll('.line__usa__asia');
    const northToOceania = document.querySelectorAll('.line__usa__east');
    const northToSouth = document.querySelectorAll('.line__usa__north-south');
    // Singapure(Asia reg) lines
    const asiaToNorth = document.querySelectorAll('.line__asia-usa');
    const asiaToEurope = document.querySelectorAll('.line__asia__europe');
    const asiaToAsia = document.querySelectorAll('.line__asia');
    const asiaToOceania = document.querySelectorAll('.line__asia__east');
    const asiaToSouth = document.querySelectorAll('.line__asia__south');
    //Europe lines
    const europeToNorth = document.querySelectorAll('.line__europe-usa');
    const europeToEurope = document.querySelectorAll('.line__europe__europe');
    const europeToAsia = document.querySelectorAll('.line__europe__asia');
    const europeToOceania = document.querySelectorAll('.line__europe__east');
    const europeToSouth = document.querySelectorAll('.line__europe__south');
    // South lines
    const southToNorth = document.querySelectorAll('.line__south__north');
    const southToEurope = document.querySelectorAll('.line__south__europe');
    const southToAsia = document.querySelectorAll('.line__south__asia');
    const southToOceania = document.querySelectorAll('.line__south__east');
    const southToSouth = document.querySelectorAll('.line__south');
    // state

    const globalState = {
        northState: {
            name: "North America",
            people: 0,
            byteCloudServer: false,
            firstAnim: false,
            finalAnim: false,
            byteCloudServerSpeed: 0,
            objCloudServerSpeed: 0,
            tableByte: false,
            tableObj: false,
        },
        southState: {
            name: "South America",
            people: 0,
            byteCloudServer: false,
            firstAnim: false,
            finalAnim: false,
            byteCloudServerSpeed: 0,
            objCloudServerSpeed: 0,
            tableByte: false,
            tableObj: false,
        },
        europeState: {
            name: "Europe",
            people: 0,
            byteCloudServer: false,
            firstAnim: false,
            finalAnim: false,
            byteCloudServerSpeed: 0,
            objCloudServerSpeed: 0,
            tableByte: false,
            tableObj: false,
        },
        asiaState: {
            name: "Asia",
            people: 0,
            byteCloudServer: false,
            firstAnim: false,
            finalAnim: false,
            byteCloudServerSpeed: 0,
            objCloudServerSpeed: 0,
            tableByte: false,
            tableObj: false,
        },
        australiaState: {
            name: "Oceania",
            people: 0,
            firstAnim: false,
            finalAnim: false,
            byteCloudServerSpeed: 0,
            objCloudServerSpeed: 0,
            tableByte: false,
            tableObj: false,
        },
        mainData: 'none',
        go: false
    };

    // 
    // Animation screen
    const firstNorthScreen = document.querySelector('.north__device__mask_small .n1');
    const secondNorthScreen = document.querySelector('.north__device__mask_medium .n2');
    const thirdNorthScreen = document.querySelector('.north__device__mask_high .n3');

    const firstSouthScreen = document.querySelector('.south__device__mask_small .n1');
    const secondSouthScreen = document.querySelector('.south__device__mask_medium .n2');
    const thirdSouthScreen = document.querySelector('.south__device__mask_high .n3');

    const firstEuropeScreen = document.querySelector('.europe__device__mask_small .n1');
    const secondEuropeScreen = document.querySelector('.europe__device__mask_medium .n2');
    const thirdEuropeScreen = document.querySelector('.europe__device__mask_high .n3');

    const firstAsiaScreen = document.querySelector('.asia__device__mask_small .n1');
    const secondAsiaScreen = document.querySelector('.asia__device__mask_medium .n2');
    const thirdAsiaScreen = document.querySelector('.asia__device__mask_high .n3');

    const firstAustraliaScreen = document.querySelector('.australia__device__mask_small .n1');
    const secondAustraliaScreen = document.querySelector('.australia__device__mask_medium .n2');
    const thirdAustraliaScreen = document.querySelector('.australia__device__mask_high .n3');
    // latency

    const n1Collection = document.querySelectorAll('.n1');
    const n2Collection = document.querySelectorAll('.n2');
    const n3Collection = document.querySelectorAll('.n3');

    // Europe

    const latEuropeToEurope = 33;
    const latEuropeToNorth = 100;
    const latEuropeToAsia = 149;
    const latEuropeToSouth = 214;
    const latEuropeToAustralia = 266;

    // South

    const latSouthToEurope = 130;
    const latSouthToNorth = 35;
    const latSouthToAsia = 200;
    const latSouthToSouth = 70;
    const latSouthToAustralia = 346;

    // North

    const latNorthToEurope = 93;
    const latNorthToNorth = 20;
    const latNorthToAsia = 168;
    const latNorthToSouth = 124;
    const latNorthToAustralia = 297;

    // Asia

    const latAsiaToEurope = 103;
    const latAsiaToNorth = 176;
    const latAsiaToAsia = 47;
    const latAsiaToSouth = 153;
    const latAsiaToAustralia = 27;


    // Table

    function byteCloudTable(state) {
        if (state.tableByte) {
            return;
        }
        const maps = document.querySelector('.map');
        maps.style.opacity = 0.5;
        title.style.display = 'block';
        title.textContent = 'Do you want to start again?';
        restartBtn.style.display = 'block';
        restartBtn.addEventListener('click', () => {
            location.reload();
        })
        // result
        const tableObj = document.createElement('div');
        tableObj.classList.add('table__byteCloud_box');
        // Name
        const tableName = document.createElement('div');
        tableName.classList.add('table__byteCloud_box_regionName');
        tableName.textContent = state.name;
        tableObj.append(tableName);
        // Star
        const imgObj = document.createElement('img');
        let imgPath = "./img/Elements_Old/5_star.png"
        if (state.byteCloudServerSpeed > 70) {
            imgPath = "./img/Elements_Old/4_star.png";
        };
        if (state.byteCloudServerSpeed > 100) {
            imgPath = "./img/Elements_Old/3_star.png";
        };
        if (state.byteCloudServerSpeed > 130) {
            imgPath = "./img/Elements_Old/2_star.png";
        };
        if (state.byteCloudServerSpeed > 160) {
            imgPath = "./img/Elements_Old/1_star.png";
        };
        imgObj.src = imgPath;
        imgObj.alt = 'star';
        imgObj.classList.add('stars');
        tableObj.append(imgObj);
        // Latency
        const tableLatency = document.createElement('div');
        tableLatency.classList.add('table__byteCloud_box_latency');
        const latency = 'Latency: ';
        const latencyValue = state.byteCloudServerSpeed;
        tableLatency.textContent = latency + '\n' + latencyValue;
        tableObj.append(tableLatency);
        // Time
        const tableTime = document.createElement('div');
        tableTime.classList.add('table__byteCloud_box_time');
        const time = "Downloading time:";
        const timeValue = state.byteCloudServerSpeed / 5;
        tableTime.textContent = time + '\n' + timeValue;
        tableObj.append(tableTime);
        // Video
        const tableVideo = document.createElement('div');
        tableVideo.classList.add('table__byteCloud_box_video');

        const videoTitle = 'Video streaming';
        let videoValue = '4K/2160p Ultra HD';
        if (state.byteCloudServerSpeed > 70) {
            videoValue = '1080p Full HD';
        };
        if (state.byteCloudServerSpeed > 100) {
            videoValue = '720p';
        };
        if (state.byteCloudServerSpeed > 150) {
            videoValue = '480p';
        };
        tableVideo.textContent = videoTitle + '\n' + videoValue;
        tableObj.append(tableVideo);

        state.tableByte = true;
        // result end
        const wrap = document.querySelector('.byteCloud__wrapper');
        wrap.append(tableObj);


    }



    function objTable(state) {
        if (state.tableObj) {
            return;
        }
        // result
        const tableObj = document.createElement('div');
        tableObj.classList.add('table__object');
        // Name
        const tableName = document.createElement('div');
        tableName.classList.add('table__object_box_regionName');
        tableName.textContent = state.name;
        tableObj.append(tableName);
        // Star
        const imgObj = document.createElement('img');
        let imgPath = "./img/Elements_Old/5_star.png"
        if (state.objCloudServerSpeed > 70) {
            imgPath = "./img/Elements_Old/4_star.png";
        }
        if (state.objCloudServerSpeed > 100) {
            imgPath = "./img/Elements_Old/3_star.png";
        }
        if (state.objCloudServerSpeed > 130) {
            imgPath = "./img/Elements_Old/2_star.png";
        }
        if (state.objCloudServerSpeed > 160) {
            imgPath = "./img/Elements_Old/1_star.png";
        }
        imgObj.src = imgPath;
        imgObj.alt = 'star';
        imgObj.classList.add('stars');
        tableObj.append(imgObj);
        // Latency
        const tableLatency = document.createElement('div');
        tableLatency.classList.add('table__object_box_latency');
        const latency = 'Latency: ';
        const latencyValue = state.objCloudServerSpeed;
        tableLatency.textContent = latency + '\n' + latencyValue;
        tableObj.append(tableLatency);
        // Time
        const tableTime = document.createElement('div');
        tableTime.classList.add('table__byteCloud_box_time');
        const time = "Downloading time:";
        const timeValue = state.objCloudServerSpeed / 5;
        tableTime.textContent = time + '\n' + timeValue;
        tableObj.append(tableTime);
        // Video
        const tableVideo = document.createElement('div');
        tableVideo.classList.add('table__byteCloud_box_video');

        const videoTitle = 'Video streaming';
        let videoValue = '4K/2160p Ultra HD';
        if (state.objCloudServerSpeed > 70) {
            videoValue = '1080p Full HD';
        }
        if (state.objCloudServerSpeed > 100) {
            videoValue = '720p';
        }
        if (state.objCloudServerSpeed > 150) {
            videoValue = '480p';
        }
        tableVideo.textContent = videoTitle + '\n' + videoValue;
        tableObj.append(tableVideo);

        state.tableObj = true;
        // result end

        const wrap = document.querySelector('.object__wrapper');
        wrap.append(tableObj);

        const allTable = document.querySelector('.table');
        allTable.style.display = "block";

    }

    function sortStateByPeople(state) {
        // создаем массив из свойств объекта state
        const stateArray = Object.entries(state);

        // сортируем массив по возрастанию количества людей
        stateArray.sort((a, b) => a[1].people - b[1].people);

        // создаем новый массив из отсортированных свойств
        const sortedState = stateArray.map(([key, value]) => value);
        return sortedState;
    }




    function letterAnimation(word, elem) {
        let text = word;
        text.split('').forEach((letter, i) => {
            let span = document.createElement('span');
            span.innerText = letter;
            setTimeout(() => elem.append(span), i * 15);
        })
    }

    letterAnimation('Where are users? Choose the number for every region.', title);

    function filledPeople(regionElem, region, state, parrentDev, devices) {
        const imagesPath = "./img/Elements_Old/man_filled.png";
        region.forEach((item, index) => {
            item.addEventListener('mouseover', () => {
                oldSrc = item.src;
                if (index === 1) {
                    item.src = imagesPath;
                    region[0].src = imagesPath;
                } else if (index === 2) {
                    region.forEach(item => {
                        item.src = imagesPath;
                    })
                } else {
                    item.src = imagesPath;
                }
            })
        })

        region.forEach(item => {
            item.addEventListener('mouseout', () => {
                region.forEach(item => {
                    item.src = "./img/Elements_Old/man_empty.png";
                })
            })
        })
        region.forEach((item, index) => {
            item.addEventListener('click', () => {
                switch (index) {
                    case 0:
                        state.people = 1;
                        regionElem.style.display = 'none';
                        showDevices(devices, state.people, parrentDev);
                        break;
                    case 1:
                        state.people = 2;
                        regionElem.style.display = 'none';
                        showDevices(devices, state.people, parrentDev);
                        break;
                    case 2:
                        state.people = 3;
                        regionElem.style.display = 'none';
                        showDevices(devices, state.people, parrentDev);
                        break;
                    default:
                        throw new Error('error');
                };
            });
        });
    };

    function showDevices(region, number, parentDev) {
        parentDev.style.display = 'block';
        switch (number) {
            case 1:
                region[0].style.display = 'block';
                break;
            case 2:
                region[0].style.display = 'block';
                region[1].style.display = 'block';
                break;
            case 3:
                region[0].style.display = 'block';
                region[1].style.display = 'block';
                region[2].style.display = 'block';
                break;
            default:
                throw new Error('error dev');
        };

        if ((globalState.northState.people || globalState.southState.people || globalState.europeState.people || globalState.asiaState.people || globalState.australiaState.people) >= 1) {
            btn.style.display = 'block';
        };

        if ((globalState.northState.people && globalState.southState.people && globalState.europeState.people && globalState.asiaState.people && globalState.australiaState.people) >= 1) {
            choiseMainData();
        };
    };

    // Main data

    btn.addEventListener('click', () => {
        choiseMainData();
    });

    const dataCircleColection = [northData, southData, europeData, asiaData];

    function choiseMainData() {
        btn.style.display = 'none';
        title.textContent = '';
        letterAnimation('Where is your data? Choose one spot for Object Storage system', title);
        const parrentCollection = [northPeopleParent, southPeopleParent, europePeopleParent, asiaPeopleParent, australiaPeopleParent];
        parrentCollection.forEach(item => item.style.display = 'none');

        dataCircleColection.forEach(item => item.style.display = 'block');

        function handleClick(event) {
            const mainServer = event.target.dataset.server;
            event.target.classList.remove('circle');
            event.target.src = "./img/Elements_Old/server.png";

            switch (mainServer) {
                case "north":
                    globalState.mainData = "north";
                    globalState.northState.byteCloudServer = true;
                    byteCloudServerChoise();
                    break;
                case "south":
                    globalState.mainData = "south";
                    globalState.southState.byteCloudServer = true;
                    byteCloudServerChoise();

                    break;
                case "europe":
                    globalState.mainData = "europe";
                    globalState.europeState.byteCloudServer = true;
                    byteCloudServerChoise();

                    break;
                case "asia":
                    globalState.mainData = "asia";
                    globalState.asiaState.byteCloudServer = true;
                    byteCloudServerChoise();

                    break;
                default:
                    throw new Error('error');
            }

            byteCloudServerChoise();
            byteCloudServerChoiseAnim();

            // отвязываем обработчик события после первого клика
            dataCircleColection.forEach(item => {
                item.removeEventListener('click', handleClick);
            });

        }

        dataCircleColection.forEach(item => {
            item.addEventListener('click', handleClick);
        });

    };


    function byteCloudServerChoiseAnim() {
        title.textContent = ''
        letterAnimation('Choose minimum two additional spots for ByteCloud and press button', title);
    }

    function byteCloudServerChoise() {
        const newDataCircleColection = dataCircleColection.filter(item => item.classList.contains('circle'));
        function handleChoise(event) {
            event.target.classList.remove('circle');
            event.target.src = "./img/Elements_Old/server_ByteCloud.png";
            const mainServer = event.target.dataset.server;

            switch (mainServer) {
                case "north":
                    globalState.northState.byteCloudServer = true;
                    break;
                case "south":
                    globalState.southState.byteCloudServer = true;
                    break;
                case "europe":
                    globalState.europeState.byteCloudServer = true;
                    break;
                case "asia":
                    globalState.asiaState.byteCloudServer = true;
                    break;
                default:
                    throw new Error('error');
            };

            if ((globalState.northState.byteCloudServer && globalState.southState.byteCloudServer && globalState.europeState.byteCloudServer) || (globalState.northState.byteCloudServer && globalState.southState.byteCloudServer && globalState.asiaState.byteCloudServer) || (globalState.southState.byteCloudServer && globalState.europeState.byteCloudServer && globalState.asiaState.byteCloudServer) || (globalState.northState.byteCloudServer && globalState.europeState.byteCloudServer && globalState.asiaState.byteCloudServer)) {
                testBtn.style.display = 'block';
            }

            if (globalState.northState.byteCloudServer && globalState.southState.byteCloudServer && globalState.europeState.byteCloudServer && globalState.asiaState.byteCloudServer) {
                newDataCircleColection.forEach(item => {
                    item.removeEventListener('click', handleChoise);
                });
                startByteCloudServerSpeedCheck(globalState);
            }
        }

        newDataCircleColection.forEach(item => {
            item.addEventListener('click', handleChoise);
        });
    };

    testBtn.addEventListener('click', () => {
        startByteCloudServerSpeedCheck(globalState);
        const hidesCircle = dataCircleColection.filter(item => item.classList.contains('circle'));
        hidesCircle.forEach(item => {
            item.style.display = 'none';
        });
    });

    function switchLinesFn(globalStateRegion, direction, latency, n1, n2, n3, title) {
        if (globalStateRegion.byteCloudServer) {
            globalStateRegion.byteCloudServerSpeed = latency;
            title.textContent = `Latency: ${latency}`;
            switch (globalStateRegion.people) {
                case 1:
                    direction.item(0).style.display = 'block';
                    animation(n1, latency, globalStateRegion, title);
                    break;
                case 2:
                    direction.item(0).style.display = 'block';
                    direction.item(1).style.display = 'block';
                    animation(n1, latency, globalStateRegion, title);
                    animation(n2, latency, globalStateRegion, title);
                    break;
                case 3:
                    direction.forEach(item => {
                        item.style.display = 'block';
                    });
                    animation(n1, latency, globalStateRegion, title);
                    animation(n2, latency, globalStateRegion, title);
                    animation(n3, latency, globalStateRegion, title);
                    break;
                default:
                    throw new Error('error');
            };
        };
    };

    function animation(dev, latency, region, title, final = false) {
        const time = latency / 5;
        let width = 0;
        if (time > 10) {
            const interval = setInterval(() => {
                if (width === 100) {
                    title.textContent = `Download time: ${time} sec`;
                }
                if (width === 100) {
                    if (final) {
                        region.finalAnim = true;
                    } else {
                        region.firstAnim = true;
                    }
                    clearInterval(interval);
                }
                dev.style.width = width + '%';
                width += 5;
            }, 500);

        }
        if (time <= 10) {
            const interval = setInterval(() => {
                if (width >= 80) {
                    title.textContent = `Download time: ${time} sec`;
                }
                if (width === 100) {
                    if (final) {
                        region.finalAnim = true;
                    } else {
                        region.firstAnim = true;
                    }
                    clearInterval(interval);
                }
                dev.style.width = width + '%';
                width += 10;
            }, 500);
        }
    }

    function startByteCloudServerSpeedCheck(globalState) {
        testBtn.style.display = 'none';
        title.style.display = 'none';
        // North case
        if(globalState.northState.people) {
            switchLinesFn(globalState.northState, northToNorth, latNorthToNorth, firstNorthScreen, secondNorthScreen, thirdNorthScreen, northTitle);
        }
        // Линия из north если в south есть люди и нет сервера
        if (globalState.southState.byteCloudServer === false && globalState.southState.people > 0) {
            globalState.southState.byteCloudServerSpeed = latNorthToSouth;
            southTitle.textContent = `Latency: ${latNorthToSouth}`;
            switch (globalState.southState.people) {
                case 1:
                    northToSouth.item(0).style.display = 'block';
                    animation(firstSouthScreen, latNorthToSouth, globalState.southState, southTitle);

                    break;
                case 2:
                    northToSouth.item(0).style.display = 'block';
                    northToSouth.item(1).style.display = 'block';
                    animation(firstSouthScreen, latNorthToSouth, globalState.southState, southTitle);
                    animation(secondSouthScreen, latNorthToSouth, globalState.southState, southTitle);
                    break;
                case 3:
                    northToSouth.forEach(item => item.style.display = 'block');
                    animation(firstSouthScreen, latNorthToSouth, globalState.southState, southTitle);
                    animation(secondSouthScreen, latNorthToSouth, globalState.southState, southTitle);
                    animation(thirdSouthScreen, latNorthToSouth, globalState.southState, southTitle);

                    break;
                default:
                    throw new Error('south error');
            };
        };
        // Линия из north если в europe есть люди и нет сервера
        if (globalState.europeState.byteCloudServer === false && globalState.europeState.people > 0) {
            globalState.europeState.byteCloudServerSpeed = latNorthToEurope;
            europeTitle.textContent = `Latency: ${latNorthToEurope}`;
            switch (globalState.europeState.people) {
                case 1:
                    northToEurope.item(0).style.display = 'block';
                    animation(firstEuropeScreen, latNorthToEurope, globalState.europeState, europeTitle);
                    break;
                case 2:
                    northToEurope.item(0).style.display = 'block';
                    northToEurope.item(1).style.display = 'block';
                    animation(firstEuropeScreen, latNorthToEurope, globalState.europeState, europeTitle);
                    animation(secondEuropeScreen, latNorthToEurope, globalState.europeState, europeTitle);
                    break;
                case 3:
                    northToEurope.forEach(item => item.style.display = 'block');
                    animation(firstEuropeScreen, latNorthToEurope, globalState.europeState, europeTitle);
                    animation(secondEuropeScreen, latNorthToEurope, globalState.europeState, europeTitle);
                    animation(thirdEuropeScreen, latNorthToEurope, globalState.europeState, europeTitle);
                    break;
                default:
                    throw new Error('europe error');
            };
        };
        // South case
        if(globalState.southState.people) {
            switchLinesFn(globalState.southState, southToSouth, latSouthToSouth, firstSouthScreen, secondSouthScreen, thirdSouthScreen, southTitle);
        }
        // Если есть на north есть люди, но нет сервера
        if (globalState.northState.byteCloudServer === false && globalState.northState.people > 0) {
            globalState.northState.byteCloudServerSpeed = latSouthToNorth;
            northTitle.textContent = `Latency: ${latSouthToNorth}`;
            switch (globalState.northState.people) {
                case 1:
                    southToNorth.item(0).style.display = 'block';
                    animation(firstNorthScreen, latSouthToNorth, globalState.northState, northTitle);
                    break;
                case 2:
                    southToNorth.item(0).style.display = 'block';
                    southToNorth.item(1).style.display = 'block';
                    animation(firstNorthScreen, latSouthToNorth, globalState.northState, northTitle);
                    animation(secondNorthScreen, latSouthToNorth, globalState.northState, northTitle);
                    break;
                case 3:
                    southToNorth.forEach(item => item.style.display = 'block');
                    animation(firstNorthScreen, latSouthToNorth, globalState.northState, northTitle);
                    animation(secondNorthScreen, latSouthToNorth, globalState.northState, northTitle);
                    animation(thirdNorthScreen, latSouthToNorth, globalState.northState, northTitle);
                    break;
                default:
                    throw new Error('north error');
            };
        };
        // Europe case
        if(globalState.europeState.people) {
            switchLinesFn(globalState.europeState, europeToEurope, latEuropeToEurope, firstEuropeScreen, secondEuropeScreen, thirdEuropeScreen, europeTitle);
        }
        // Если в азии нет сервера, но там есть люди
        if (globalState.asiaState.byteCloudServer === false && globalState.asiaState.people > 0) {
            globalState.asiaState.byteCloudServerSpeed = latEuropeToAsia;
            asiaTitle.textContent = `Latency: ${latEuropeToAsia}`;
            switch (globalState.asiaState.people) {
                case 1:
                    europeToAsia.item(0).style.display = 'block';
                    animation(firstAsiaScreen, latEuropeToAsia, globalState.asiaState, asiaTitle);
                    break;
                case 2:
                    europeToAsia.item(0).style.display = 'block';
                    europeToAsia.item(1).style.display = 'block';
                    animation(firstAsiaScreen, latEuropeToAsia, globalState.asiaState, asiaTitle);
                    animation(secondAsiaScreen, latEuropeToAsia, globalState.asiaState, asiaTitle);
                    break;
                case 3:
                    europeToAsia.forEach(item => item.style.display = 'block');
                    animation(firstAsiaScreen, latEuropeToAsia, globalState.asiaState, asiaTitle);
                    animation(secondAsiaScreen, latEuropeToAsia, globalState.asiaState, asiaTitle);
                    animation(thirdAsiaScreen, latEuropeToAsia, globalState.asiaState, asiaTitle);
                    break;
                default:
                    throw new Error('asia error');
            };
        };
        if (globalState.asiaState.byteCloudServer === false && globalState.australiaState.people > 0) {
            globalState.australiaState.byteCloudServerSpeed = latEuropeToAustralia;
            australiaTitle.textContent = `Latency: ${latEuropeToAustralia}`;
            switch (globalState.australiaState.people) {
                case 1:
                    europeToOceania.item(0).style.display = 'block';
                    animation(firstAustraliaScreen, latEuropeToAustralia, globalState.australiaState, australiaTitle);
                    break;
                case 2:
                    europeToOceania.item(0).style.display = 'block';
                    europeToOceania.item(1).style.display = 'block';
                    animation(firstAustraliaScreen, latEuropeToAustralia, globalState.australiaState, australiaTitle);
                    animation(secondAustraliaScreen, latEuropeToAustralia, globalState.australiaState, australiaTitle);
                    break;
                case 3:
                    europeToOceania.forEach(item => item.style.display = 'block');
                    animation(firstAustraliaScreen, latEuropeToAustralia, globalState.australiaState, australiaTitle);
                    animation(secondAustraliaScreen, latEuropeToAustralia, globalState.australiaState, australiaTitle);
                    animation(thirdAustraliaScreen, latEuropeToAustralia, globalState.australiaState, australiaTitle);
                    break;
                default:
                    throw new Error('australia error');
            };
        };
        // Singapure case

        if (globalState.asiaState.byteCloudServer && (globalState.asiaState.people || globalState.australiaState.people)) {
            if (globalState.asiaState.people > 0) {
                globalState.asiaState.byteCloudServerSpeed = latAsiaToAsia;
                asiaTitle.textContent = `Latency: ${latAsiaToAsia}`;
                switch (globalState.asiaState.people) {
                    case 1:
                        asiaToAsia.item(0).style.display = 'block';
                        animation(firstAsiaScreen, latAsiaToAsia, globalState.asiaState, asiaTitle);
                        break;
                    case 2:
                        asiaToAsia.item(0).style.display = 'block';
                        asiaToAsia.item(1).style.display = 'block';
                        animation(firstAsiaScreen, latAsiaToAsia, globalState.asiaState, asiaTitle);
                        animation(secondAsiaScreen, latAsiaToAsia, globalState.asiaState, asiaTitle);
                        break;
                    case 3:
                        asiaToAsia.forEach(item => item.style.display = 'block');
                        animation(firstAsiaScreen, latAsiaToAsia, globalState.asiaState, asiaTitle);
                        animation(secondAsiaScreen, latAsiaToAsia, globalState.asiaState, asiaTitle);
                        animation(thirdAsiaScreen, latAsiaToAsia, globalState.asiaState, asiaTitle);
                        break;
                    default:
                        throw new Error('asia error');
                };
            }
            if (globalState.australiaState.people > 0) {
                globalState.australiaState.byteCloudServerSpeed = latAsiaToAustralia;
                australiaTitle.textContent = `Latency: ${latAsiaToAustralia}`;
                switch (globalState.australiaState.people) {
                    case 1:
                        asiaToOceania.item(0).style.display = 'block';
                        animation(firstAustraliaScreen, latAsiaToAustralia, globalState.australiaState, australiaTitle);
                        break;
                    case 2:
                        asiaToOceania.item(0).style.display = 'block';
                        asiaToOceania.item(1).style.display = 'block';
                        animation(firstAustraliaScreen, latAsiaToAustralia, globalState.australiaState, australiaTitle);
                        animation(secondAustraliaScreen, latAsiaToAustralia, globalState.australiaState, australiaTitle);
                        break;
                    case 3:
                        asiaToOceania.forEach(item => item.style.display = 'block');
                        animation(firstAustraliaScreen, latAsiaToAustralia, globalState.australiaState, australiaTitle);
                        animation(secondAustraliaScreen, latAsiaToAustralia, globalState.australiaState, australiaTitle);
                        animation(thirdAustraliaScreen, latAsiaToAustralia, globalState.australiaState, australiaTitle);
                        break;
                    default:
                        throw new Error('australia error');
                };
            };
        };

        setTimeout(() => {
            showUserSpeedTest(globalState)
        }, 11000)
    };



    function userSpeedFn(north, south, europe, asia, australia, nLat, sLat, eLat, asLat, auLat) {
        globalState.go = true;
        if (globalState.northState.people > 0) {
            globalState.northState.objCloudServerSpeed = nLat;
            northTitle.textContent = `Latency: ${nLat}`;
            switch (globalState.northState.people) {
                case 1:
                    north.item(0).style.display = 'block';
                    animation(firstNorthScreen, nLat, globalState.northState, northTitle, true);
                    break;
                case 2:
                    north.item(0).style.display = 'block';
                    north.item(1).style.display = 'block';
                    animation(firstNorthScreen, nLat, globalState.northState, northTitle, true);
                    animation(secondNorthScreen, nLat, globalState.northState, northTitle, true);
                    break;
                case 3:
                    north.forEach(item => item.style.display = 'block');
                    animation(firstNorthScreen, nLat, globalState.northState, northTitle, true);
                    animation(secondNorthScreen, nLat, globalState.northState, northTitle, true);
                    animation(thirdNorthScreen, nLat, globalState.northState, northTitle, true);
                    break;
                default:
                    throw new Error('error');
            };
        };
        if (globalState.southState.people > 0) {
            globalState.southState.objCloudServerSpeed = sLat;
            southTitle.textContent = `Latency: ${sLat}`;
            switch (globalState.southState.people) {
                case 1:
                    south.item(0).style.display = 'block';
                    animation(firstSouthScreen, sLat, globalState.southState, southTitle, true);
                    break;
                case 2:
                    south.item(0).style.display = 'block';
                    south.item(1).style.display = 'block';
                    animation(firstSouthScreen, sLat, globalState.southState, southTitle, true);
                    animation(secondSouthScreen, sLat, globalState.southState, southTitle, true);
                    break;
                case 3:
                    south.forEach(item => item.style.display = 'block');
                    animation(firstSouthScreen, sLat, globalState.southState, southTitle, true);
                    animation(secondSouthScreen, sLat, globalState.southState, southTitle, true);
                    animation(thirdSouthScreen, sLat, globalState.southState, southTitle, true);
                    break;
                default:
                    throw new Error('error');
            };
        };
        if (globalState.europeState.people > 0) {
            globalState.europeState.objCloudServerSpeed = eLat
            europeTitle.textContent = `Latency: ${eLat}`
            switch (globalState.europeState.people) {
                case 1:
                    europe.item(0).style.display = 'block';
                    animation(firstEuropeScreen, eLat, globalState.europeState, europeTitle, true);
                    break;
                case 2:
                    europe.item(0).style.display = 'block';
                    europe.item(1).style.display = 'block';
                    animation(firstEuropeScreen, eLat, globalState.europeState, europeTitle, true);
                    animation(secondEuropeScreen, eLat, globalState.europeState, europeTitle, true);
                    break;
                case 3:
                    europe.forEach(item => item.style.display = 'block');
                    animation(firstEuropeScreen, eLat, globalState.europeState, europeTitle, true);
                    animation(secondEuropeScreen, eLat, globalState.europeState, europeTitle, true);
                    animation(thirdEuropeScreen, eLat, globalState.europeState, europeTitle, true);
                    break;
                default:
                    throw new Error('error');
            };
        };
        if (globalState.asiaState.people > 0) {
            globalState.asiaState.objCloudServerSpeed = asLat
            asiaTitle.textContent = `Latency: ${asLat}`
            switch (globalState.asiaState.people) {
                case 1:
                    asia.item(0).style.display = 'block';
                    animation(firstAsiaScreen, asLat, globalState.asiaState, asiaTitle, true);
                    break;
                case 2:
                    asia.item(0).style.display = 'block';
                    asia.item(1).style.display = 'block';
                    animation(firstAsiaScreen, asLat, globalState.asiaState, asiaTitle, true);
                    animation(secondAsiaScreen, asLat, globalState.asiaState, asiaTitle, true);
                    break;
                case 3:
                    asia.forEach(item => item.style.display = 'block');
                    animation(firstAsiaScreen, asLat, globalState.asiaState, asiaTitle, true);
                    animation(secondAsiaScreen, asLat, globalState.asiaState, asiaTitle, true);
                    animation(thirdAsiaScreen, asLat, globalState.asiaState, asiaTitle, true);
                    break;
                default:
                    throw new Error('error');
            };
        };
        if (globalState.australiaState.people > 0) {
            globalState.australiaState.objCloudServerSpeed = auLat
            australiaTitle.textContent = `Latency: ${auLat}`
            switch (globalState.australiaState.people) {
                case 1:
                    australia.item(0).style.display = 'block';
                    animation(firstAustraliaScreen, auLat, globalState.australiaState, australiaTitle, true);
                    break;
                case 2:
                    australia.item(0).style.display = 'block';
                    australia.item(1).style.display = 'block';
                    animation(firstAustraliaScreen, auLat, globalState.australiaState, australiaTitle, true);
                    animation(secondAustraliaScreen, auLat, globalState.australiaState, australiaTitle, true);
                    break;
                case 3:
                    australia.forEach(item => item.style.display = 'block');
                    animation(firstAustraliaScreen, auLat, globalState.australiaState, australiaTitle, true);
                    animation(secondAustraliaScreen, auLat, globalState.australiaState, australiaTitle, true);
                    animation(thirdAustraliaScreen, auLat, globalState.australiaState, australiaTitle, true);
                    break;
                default:
                    throw new Error('error');
            };
        };
        if (globalState.go) {
            callTable();
        }
    };

    function showUserSpeedTest(globalState) {
        n1Collection.forEach(item => item.style.width = 0 + '%');
        n2Collection.forEach(item => item.style.width = 0 + '%');
        n3Collection.forEach(item => item.style.width = 0 + '%');
        const viewedOldLines = document.querySelectorAll('.line');
        viewedOldLines.forEach(item => item.style.display = 'none');
        switch (globalState.mainData) {
            case "north":
                userSpeedFn(northToNorth, northToSouth, northToEurope, northToAsia, northToOceania, latNorthToNorth, latNorthToSouth, latNorthToEurope, latNorthToAsia, latNorthToAustralia);
                break;
            case "south":
                userSpeedFn(southToNorth, southToSouth, southToEurope, southToAsia, southToOceania, latSouthToNorth, latSouthToSouth, latSouthToEurope, latSouthToAsia, latSouthToAustralia);
                break;
            case "europe":
                userSpeedFn(europeToNorth, europeToSouth, europeToEurope, europeToAsia, europeToOceania, latEuropeToNorth, latEuropeToSouth, latEuropeToEurope, latEuropeToAsia, latEuropeToAustralia);
                break;
            case "asia":
                userSpeedFn(asiaToNorth, asiaToSouth, asiaToEurope, asiaToAsia, asiaToOceania, latAsiaToNorth, latAsiaToSouth, latAsiaToEurope, latAsiaToAsia, latAsiaToAustralia);
                break;
            default:
                throw new Error('error mainServer');
        };
    };



    function callTable() {
        setTimeout(() => {
            const arr = sortStateByPeople(globalState)
            arr.pop();
            arr.pop();
            arr.reverse();
            arr.forEach(item => {
                if (item.people === 0) {
                    return
                } else {
                    byteCloudTable(item)
                    objTable(item)
                }
            });
        }, 15000);
    };

    filledPeople(northPeopleParent, northPeople, globalState.northState, northParent, northDevices);
    filledPeople(southPeopleParent, southPeople, globalState.southState, southParent, southDevices);
    filledPeople(europePeopleParent, europePeople, globalState.europeState, europeParent, europeDevices);
    filledPeople(asiaPeopleParent, asiaPeople, globalState.asiaState, asiaParent, asiaDevices);
    filledPeople(australiaPeopleParent, australiaPeople, globalState.australiaState, australiaParent, australiaDevices);

});