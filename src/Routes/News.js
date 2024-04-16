import React, { useState, useEffect } from 'react'
import './News.css'

function News() {
    const [news, setNews] = useState([])
    
    const url= "https://newsapi.org/v2/everything?q=events&from=2022-05-27&sortBy=popularity&apiKey=84248c2621e84e6594d32cbd4592ab3b"
    
    const fetchNews = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setNews(data.articles)
            })

        }
        useEffect(() => {
            fetchNews()
        }, [])
        console.log(news)
    return (
        <div className="news-container">
                {news.map((data, index) => {
                    return( 
                        <div className="card">
                        <div>
                        <div className='card_header'>
                        <img src={data.urlToImage} className="card-image" width="210"></img>
                        </div>
                        <h4>{data.title}</h4>
                        <p>{data.description}</p>
                        <h3>{data.author}</h3>
                        </div>
            </div>
                    )
                })}
        </div>
    )
}

export default News

