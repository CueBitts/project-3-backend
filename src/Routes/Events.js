import React, { useState, useEffect } from 'react'
import './Events.css'
function Events() {
    const url = "https://app.ticketmaster.com/discovery/v2/events?apikey=04WKZ7WVEAcbcNYcKtN23cIYqJCLFBGm&locale=*"
    
    const [event, setEvent] = useState([])
    const fetchEvents = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setEvent(data._embedded.events)
            
            })
        }
        useEffect(() => {
            fetchEvents()
        }, [])
        console.log(event)
    return (
        <div className="news-container-events">
                {event.map((data, index) => {
                    return( 
                        <div className="card-events">
                        <div>
                        <div className='card_header-events'>
                        <img src={data.images[0].url} className="card-image-events" width="210"></img>
                        </div>
                        <h4>{data.name}</h4>
                        <p>Type: {data.type}</p>
                        <h3>{data.dates.start.localDate}</h3>
                        <a className='moreInfo' target="#" href={data.url}>More info</a>
                        </div>
            </div>
                    )
                })}
        </div>
    )
}
export default Events
// http://app.ticketmaster.com/discovery/v1/events.json?key=04WKZ7WVEAcbcNYcKtN23cIYqJCLFBGm
