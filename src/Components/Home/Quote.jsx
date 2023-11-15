import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuoteData(data);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  }, []);

  return (
    <div className="sm:ml-56 h-32 p-4 w-[60%] rounded-md border-none hidden sm:block">
      {quoteData && (
        <>
          <blockquote className="text-lg italic">
            "{quoteData.content}"
          </blockquote>
          <p className="mt-2 text-right">— {quoteData.author}</p>
        </>
      )}
    </div>
  );
};

export default Quote;
