import Questionare from "./components/questionaire/index.tsx";
import './style/reset.css';
import './style/index.css';

import image from './assets/gaojiao_siji_zhenti.png';
import { useState } from "react";
import React from "react";

export default function Home() {

  const [show, setShow] = useState<boolean>(false);

  const handleEnd = () => {
    setShow(true);
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <style global jsx>{`
        .showresult {
          animation: show 3s ease-in-out forwards;
        };
      `}</style>

      {show && (
        <div
          style={{
            position: 'absolute',
            zIndex: 100,
            background: '#ECEFFE',
            width: '80vw',
            height: '50vh',
            borderRadius: '45px'
          }}
          onClick={setShow.bind(null, !show)}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate3d(-50%, -50%, 0)',
              zIndex: 100,
              background: '#FFF'  
            }}
            className="showresult"
          >
            <img src={image} />
          </div>
        </div>
      )}

      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>

      <main className={`main w-full h-full`}>
        <div className="title flex justify-center text-center bold">
          四六级教材自查
        </div>
        <div className="subtitle flex justify-center text-center">
          1分钟找到最适合你的四六级教材
        </div>
        <div className="ml-8 mr-8 mt-12" style={{ height: '50vh' }}>
          <Questionare onShowResult={handleEnd} />
        </div>
        <div className="bottom flex flex-col items-end absolute right-8 bottom-8 bold" style={{ color: '#8B9CFA' }}>
          <span className="font-light">
          @小红书：赵二一呀咿呀咿
          </span>
          <span className="font-light">
          关注我，了解更多四六级/考研小技巧
          </span>
        </div>
      </main>
    </div>
  );
}
