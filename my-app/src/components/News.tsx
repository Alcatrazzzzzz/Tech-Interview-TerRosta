import React from "react";
import { newsData } from "../constants";

interface NewsProps {}

export const News: React.FC<NewsProps> = () => {
  return (
    <div className="news">
      <h2>Нововости</h2>
      <p>{newsData.heading}</p>
      {newsData.body}
    </div>
  );
};
