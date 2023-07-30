import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addText } from './redux/actions';

const Page = () => {
  const textList = useSelector((state) => state.textList);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  useEffect(() => {
    const storedTextList = localStorage.getItem('textList');
    if (storedTextList) {
      dispatch(addText(JSON.parse(storedTextList)));
    }
  }, [dispatch]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddText = () => {
    if (text.trim() !== '') {
      dispatch(addText(text));
      setText('');
    }
  };

  useEffect(() => {
    localStorage.setItem('textList', JSON.stringify(textList));
  }, [textList]);

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddText}>add</button>
      {textList.map((textItem, index) => (
        <div key={index}>
          <p>{textItem}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
