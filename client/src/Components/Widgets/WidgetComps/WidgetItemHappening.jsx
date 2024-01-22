import React from "react";
import "./widgetItemHappening.css";
import { useState, useEffect } from "react";
import axios from "axios";

const WidgetItemHappening = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    console.log("import meta", import.meta.env);
    const apiKey = import.meta.env.VITE_NEWS_API;
    console.log("api_Key", apiKey);
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=3&apiKey=${apiKey}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Data", res.data.articles);
      setNews(res.data.articles); // Save the articles
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      {news.map((item, index) => (
        <div key={index} className="widgetItemHappening">
          <p>{item.title}</p>
          <p>
            <strong>Source: </strong><span>{item.source.name}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default WidgetItemHappening;
