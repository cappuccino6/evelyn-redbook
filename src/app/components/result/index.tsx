import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { handleRecommendBook } from '../../utils/shard.ts';

const Result = (props) => {
  const { data } = props;

  const [showImage, setShowImage] = useState<boolean>(false);
  const [showTitle, setShowTitle] = useState<boolean>(false);

  useEffect(
    () => {
      setTimeout(() => {
        setShowImage(true);
      }, 1500);

      setTimeout(() => {
        setShowTitle(true);
      }, 3000);
    },
    []
  );

  const book = handleRecommendBook(data);

  return (
    <div className="flex flex-col items-center">
      <h4 className='text-center alimama' style={{ fontSize: '22px', color: '#FBA238', marginTop: '-12px' }}>最适合你的教材是：</h4>

      {showImage ? (
        <img className="showresult" src={book?.src} width="75%" style={{ margin: '8px auto' }} />
      ) : (
        <Spin style={{ margin: '30px auto' }} size="large" />
      )}

      {showTitle && (
        <>
          <h2 style={{ fontSize: '20px', color: '#FBA238' }} className="text-center alimama">{book?.title}</h2>
          {/* <h2 style={{ fontSize: '20px', color: '#FBA238' }} className="text-center alimama">四级/六级通关</h2> */}
          <p style={{ color: '#676767', fontSize: '12px' }} className="text-center mt-4 alimama">
            *教材推荐仅供参考，以个人实际情况为准哦～
          </p>
        </>
      )}
    </div>
  );
};

export default Result;
