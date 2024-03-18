import Questionare from "./components/questionaire/index.tsx";
import './style/reset.css';
import './style/index.css';

import { useState } from "react";
import React from "react";


import image1 from './assets/huangpishu_liuji_xueba.jpg';
import image2 from './assets/huangpishu_liuji_zhenti.png';
import image3 from './assets/huangpishu_siji_xueba.png';
import image4 from './assets/huangpishu_siji_zhenti.png';
import image5 from './assets/huayan_liuji_zhenti.jpg';
import image6 from './assets/huayan_liuji_zhinan.jpg';
import image7 from './assets/huayan_siji_zhenti.png';
import image8 from './assets/huayan_siji_zhinan.jpg';

import image9 from './assets/xinghuo_siji_zhenti.jpg';
import image10 from './assets/xinghuo_siji_tongguan.jpg';
import image11 from './assets/xinghuo_liuji_zhenti.jpg';
import image12 from './assets/xinghuo_liuji_tongguan.jpg';

import starImage from './assets/stars.png';


export default function Home() {

  const [show, setShow] = useState<boolean>(false);

  const handleEnd = () => {
    setShow(true);
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <style>{`
        .showresult {
          animation: show 3s ease-in-out forwards;
        };
      `}</style>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>

      <main className={`main w-full h-full`}>
        <div className="title flex justify-center text-center bold">
          四六级教材自查
        </div>
        <div className="subtitle flex justify-center text-center">
          1分钟找到最适合你的四六级教材
        </div>
        <div className="ml-8 mr-8 mt-8" style={{ height: '50vh' }}>
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

      <div className="lazyload absolute" style={{ left: '-10000px' }}>
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
        <img src={image5} />
        <img src={image6} />
        <img src={image7} />
        <img src={image8} />
        <img src={image9} />
        <img src={image10} />
        <img src={image11} />
        <img src={image12} />
        <img src={starImage} />
      </div>
    </div>
  );
}
