"use client";

import { useEffect, useState } from 'react';

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6028972aac344dbdb89b47e583df5b39');
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles.slice(0, 3)); 
        } else {
          setError('No se encontraron artículos de noticias');
        }
      } catch {
        setError('No se pudo obtener las noticias');
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  if (loading) return <p className="text-blue-500">Cargando noticias...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Noticias Principales (newsapi)</h2>
      <div className="overflow-hidden">
        <ul className="space-y-4">
          {news.map((article, index) => (
            <li key={index} className="flex border-b pb-4">
              <div className="flex-1">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-lg font-semibold"
                >
                  {article.title}
                </a>
                <p className="text-gray-600 mt-1">{article.description || 'Descripción no disponible'}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsComponent;
