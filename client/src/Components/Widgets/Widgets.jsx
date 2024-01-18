import React, { useEffect, useState } from "react";
import "./Widgets.css";
import WidgetBox from "./WidgetComps/WidgetBox";
import axios from "axios";
const Widgets = () => {
  const [news, setNews]= useState([]);
  const getNews = async () => {
    console.log("import meta", import.meta.env);
    const apiKey = import.meta.env.VITE_NEWS_API;
    console.log("api_Key", apiKey);
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${apiKey}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Data", res.data.articles);
      setNews(res.data.articles) // Assuming you want to log the data
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="widgets">
      <WidgetBox box="What's Happening" />
      <WidgetBox box="Who to Follow" />
    </div>
  );
};

export default Widgets;
