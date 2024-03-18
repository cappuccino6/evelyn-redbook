import React, { useEffect, useState } from 'react';
import image from '../../assets/gaojiao_liuji_zhenti.jpg';
import { Spin } from 'antd';

const Result = () => {
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

  return (
    <div className="flex flex-col items-center">
      <h4 className='text-center' style={{ fontSize: '22px', color: '#FBA238', marginTop: '-12px' }}>最适合你的教材是：</h4>

      {showImage ? (
        <img className="showresult" src={image} width="75%" style={{ margin: '8px auto' }} />
      ) : (
        <Spin style={{ margin: '30px auto' }} tip="分析中..." size="large" />
      )}

      {showTitle && (
        <>
          <h2 style={{ fontSize: '20px', color: '#FBA238' }} className="text-center">星火英语</h2>
          <h2 style={{ fontSize: '20px', color: '#FBA238' }} className="text-center">四级/六级通关</h2>
          <p style={{ color: '#676767', fontSize: '12px' }} className="text-center mt-4">
            *教材推荐仅供参考，以个人实际情况为准哦～
          </p>
        </>
      )}
    </div>
  );
};

export default Result;
