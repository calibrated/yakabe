import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await fetch(`/api/yakabe/category/1`);
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;