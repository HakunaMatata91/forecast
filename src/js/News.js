import React, { Component } from 'react';
import '../scss/News.scss'
import Madrid from '../images/new_img/Madrid.png';
import Christoph from '../images/new_img/Christoph.png';
import Fiji from '../images/new_img/Fiji.png';
import Texas from '../images/new_img/Texas.png';
import China from '../images/new_img/China.png';
import Flooding from '../images/new_img/Flooding.png';
import Seroja from '../images/new_img/Seroja.png';
import Moscow from '../images/new_img/Moscow.png';
import Northwest from '../images/new_img/Northwest.png';
import Oregon from '../images/new_img/Oregon.png';
import Germany from '../images/new_img/Germany.png';
import Greece from '../images/new_img/Greece.png';


class News extends Component {
    render() {
        return (
            <div className="info_box"> 
                <div className="container">
                    <div className="heading_news">
                        <h1>The most extreme weather events in 2021</h1>
                        <p>Costs of deadly weather felt in countries across the world</p>
                    </div>
                    <div className="climate_info">
                        <p>Climate change is causing an increase in the severity and frequency of extreme weather events that have claimed millions of lives in the past 50 years.</p>
                        <p>The World Meteorological Organisation (WMO) said that climate change and severe weather have also led to an increase in natural disasters between 1970 and 2019. More than 91% of deaths attributed to these disasters were reported in developing countries, the WMO concluded, with UN representatives calling for greater international cooperation on disaster risk management. </p>
                        <p>Here are some of the most severe weather events recorded so far this year.</p>
                    </div>
                    <div className="climate_news">
                        <img src={Greece} className="news_img" alt="Greece" />
                        <div className="climate_news_info">
                            <h3>Wildfires, Greece</h3>
                            <p>Huge wildfires “ravaged” large regions of southern Europe in August, claiming lives in Greece, Turkey and Italy, The Guardian reported. The blaze came as a heatwave swept the region, and Greece’s second largest island - Evia - was evacuated. Greek prime minister Kyriakos Mitsotakis apologised for the blazes, and said that more than 580 fires have broken out in the past seven days. More than 20 countries offered to send firefighting resources, and the “camaraderie” that’s developed between Greek and British firefighters “is testament to the scale of the job before them”, Sky News reports.</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Flooding} className="news_img" alt="Flooding" />
                        <div className="climate_news_info">
                            <h3>Flooding, New South Wales</h3>
                            <p>In March, Sydney and New South Wales (NSW) residents felt the effects of extreme flooding. The NSW State Emergency Service (SES) urged residents to take care of both their physical and mental health as heavy downpours lead to rivers and dams overflowing,  with thousands evacuated from their homes. </p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Germany} className="news_img" alt="Germany" />
                        <div className="climate_news_info">
                            <h3>Flooding, west Germany</h3>
                            <p>Floods destroyed homes and bridges along the River Ahr in July, while in the German village of Schuld, water “engulfed streets and swallowed homes” CNN reported. Victims will be supported by a government-approved €400 million recovery package, as ministers have promised to move quickly on rebuilding affected areas, Euronews reported.  A study by World Weather Attribution found that this event was between 1.2 and nine times more likely to happen in 2021 compared to pre-industrial periods.</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Seroja} className="news_img" alt="Seroja" />
                        <div className="climate_news_info">
                            <h3>Cyclone Seroja</h3>
                            <p>In April 160 people died in Indonesia after a tropical cyclone “hit a remote cluster of islands”, Climate Home News reported. Landslides and flash floods displaced at least 22,000 people, the news site adds. Reaching Western Australia days after it made landfall in Indonesia, residents in the town of Kalbarri, north of Perth, said the storm was “absolutely terrifying”, the BBC reported. Western Australia Premier Mark McGowan said Cyclone Seroja was "like nothing we have seen before in decades”.</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Madrid} className="news_img" alt="Madrid" />
                        <div className="climate_news_info">
                            <h3>Record-breaking snowfall, Madrid</h3>
                            <p>In the first weeks of 2021, Storm Filomena brought record-breaking levels of snow for Madrid and elderly Spanish citizens were warned to stay at home as temperatures plummeted. The heaviest snow for 50 years brought transport in and out of the city to a “standstill”, Euronews reported. The snowstorm caused around €1.4bn (£1.2bn) of damage, The New York Times said.</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Christoph} className="news_img" alt="UK" />
                        <div className="climate_news_info">
                            <h3>Storm Christoph, UK</h3>
                            <p>The period from 18 to 20 January 2021 was “one of the wettest three-day periods on record” for North Wales and North-West England, according to the Met Office. Homes in Cheshire were flooded, and residents were evacuated from homes in Manchester and Merseyside. Once Storm Christoph cleared, significant snowfall also led to travel disruption with icy conditions and road closures. Liberal Democrat councillor Richard Kilpatrick told the Manchester Evening News the atmosphere was one of “anxiety and disbelief”</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Fiji} className="news_img" alt="Fiji" />
                        <div className="climate_news_info">
                            <h3>Cyclone Ana, Fiji</h3>
                            <p>Cyclone Ana “pummelled” Fiji towards the end of January, “just a month after category 5 Cyclone Yasa tore through the country’s northern islands”, The Guardian said. Satyendra Prasad, Fiji’s ambassador to the United Nations, said the cyclone – which caused more than 10,000 people to take refuge in 318 evacuation centres across the country – had left behind “a difficult recovery”.</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Texas} className="news_img" alt="Texas" />
                        <div className="climate_news_info">
                            <h3>Winter storms, Texas</h3>
                            <p>The Week US reported that 3.5 million businesses and homes were left without power in February as temperatures dropped to -13℃ in some areas of Texas. Power went out across the state, leaving many vulnerable people in extremely cold conditions. The total death toll rose from 151 to 210 in July, after a decision was made to include deaths caused by the collapse of the state electric power grid in the final count, The Guardian reported.</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={China} className="news_img" alt="China" />
                        <div className="climate_news_info">
                            <h3>Dust storm, China</h3>
                            <p>Flights were grounded and schools shut in what the South China Morning post reported as the worst sandstorm in a decade. But what was widely reported as a sandstorm in China was, in fact, a dust storm - “and that’s much worse”, said The Conversation. The miniscule particles can travel “much, much further” than sand, and can cause health risks if they are “drawn deep into the lungs”. In Beijing, the sky became orange as dust and pollution caused hazardous air quality. </p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Moscow} className="news_img" alt="Moscow" />
                        <div className="climate_news_info">
                            <h3>Record temperatures, Moscow</h3>
                            <p>As temperatures reached 34.8℃ in Moscow, “the absolute record for any day in June was hit”, The Moscow Times reported. The “abnormal temperatures” of the “record-breaking heatwave” weren’t just recorded in the capital; Penza, Vologda and Petrozavodsk also broke heat records during the month.</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Northwest} className="news_img" alt="Northwest" />
                        <div className="climate_news_info">
                            <h3>Heat dome, Pacific Northwest</h3>
                            <p>Soaring temperatures across the Northwest United States “rewrote the record books” this year, National Geographic reported. The “heat dome” was the “most dramatic example” of an extreme weather event, said The Guardian’s global environment editor Jonathan Watts, and the meteorological phenomenon led to evacuations across states that weren’t “remotely prepared for the heat”. Lytton, a village in Canada’s British Columbia, was “engulfed and largely destroyed by a wildfire” as a result of the temperatures, National Geographic continued.</p>
                        </div>
                    </div>
                    <div className="climate_news">
                        <img src={Oregon} className="news_img" alt="Oregon" />
                        <div className="climate_news_info">
                            <h3>Bootleg fire, Oregon</h3>
                            <p>A “heavier-than-normal start to the US wildfire season” saw “one of the largest blazes in Oregon’s history” consume more than 364,000 acres of land, the BBC reported in July. More than 2,000 firefighters tackled the wildfire, which took more than a month to contain. The fire “generated its own weather system”, noted Oregon Live, and thousands of homes were threatened by the blaze, which saw residents temporarily housed in evacuation centres in the state.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
