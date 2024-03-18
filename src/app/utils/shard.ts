import { EnglishLevel, FormValues, Goal, PrepareForExamTime, ShuatiType } from "../constant/index.ts";

export enum BookType {
  Zhinan = 1,
  Zhenti = 2
};

export enum Branch {
  Branch1 = 1,
  Branch2 = 2
};

const handleCommonAnalyse = (values: FormValues): Branch[] => {
  const {
    prepare_time,
    shuati_type,
    goal
  } = values;
  /**
   * 3 个题目，哪个命中多决定出什么书
   */
  let flag1: Branch | null = null;
  let flag2: Branch | null = null;
  let flag3: Branch | null = null;
  
  if ([PrepareForExamTime.OneMonth, PrepareForExamTime.ThreeMonths].includes(prepare_time)) {
    flag1 = Branch.Branch1;
  };

  if (shuati_type === ShuatiType.ZhuanXiang) {
    flag2 = Branch.Branch1;
  };

  if (goal === Goal.Guoxian) {
    flag3 = Branch.Branch1;
  };

  return [flag1, flag2, flag3] as Branch[];
};

/**
 * 华研
 */
const handleRecommendHuayan = (values: FormValues) => {
  const { prepare_exam } = values;
  const isCET4 = prepare_exam === EnglishLevel.CET4;
  const result = handleCommonAnalyse(values);

  const isBranch1 = result.filter(item => item === Branch.Branch1)?.length >= 2;
  if (isBranch1) {
    return {
      src: isCET4 ? require('../assets/huayan_siji_zhinan.jpg') : require('../assets/huayan_liuji_zhinan.jpg'),
      title: '华研考试指南'
    };
  }
  return {
    src: isCET4 ? require('../assets/huayan_siji_zhenti.png') : require('../assets/huayan_liuji_zhenti.jpg'),
    title: '华研真题集训'
  };
};

/**
 * 黄皮书
 */
const handleRecommendHuangpishu = (values: FormValues) => {
  const { prepare_exam } = values;
  const isCET4 = prepare_exam === EnglishLevel.CET4;
  let result = handleCommonAnalyse(values);

  /**
   * hack 处理
   */
  result[1] = result[1] === Branch.Branch1 ? Branch.Branch2 : Branch.Branch1;
  const isBranch1 = result.filter(item => item === Branch.Branch1).length >= 2;

  console.log('======isCET4', values, isCET4);

  if (isBranch1) {
    return {
      src: isCET4 ? require('../assets/huangpishu_siji_zhenti.png') : require('../assets/huangpishu_liuji_zhenti.png'),
      title: '12套真题详解'
    };
  };

  return {
    src: isCET4 ? require('../assets/huangpishu_siji_xueba.png') : require('../assets/huangpishu_liuji_xueba.jpg'),
    title: '学霸狂练18+6'
  };
};

/**
 * 星火
 */
const handleRecommendXinghuo = (values: FormValues) => {
  const { prepare_exam } = values;
  const isCET4 = prepare_exam === EnglishLevel.CET4;
  const result = handleCommonAnalyse(values);

  const isBranch1 = result[0] === Branch.Branch1;

  if (isBranch1) {
    return {
      src: isCET4 ? require('../assets/xinghuo_siji_tongguan.jpg') : require('../assets/xinghuo_liuji_tongguan.jpg'),
      title: isCET4 ? '四级通关' : '六级通关'
    };
  }
  return {
    src: isCET4 ? require('../assets/xinghuo_siji_zhenti.jpg') : require('../assets/xinghuo_liuji_zhenti.jpg'),
    title: '全真试题+标准模拟'
  };
};

/**
 * 推荐书目
 */
export const handleRecommendBook = (values: FormValues) => {
  if (!values) {
    return;
  };

  const {
    exam_type,
    score,
  } = values;

  let isHuayan = false;
  let isHuangpishu = false;
  let isXinghuo = false;

  switch (exam_type) {
    case EnglishLevel.CEE:
      if (score < 100) {
        isHuayan = true;
      } else if (score >= 140) {
        isXinghuo = true;
      } else {
        isHuangpishu = true;
      }
      break;
    case EnglishLevel.CET4:
      if (score < 450) {
        isHuayan = true;
      } else if (score >= 620) {
        isXinghuo = true;
      } else {
        isHuangpishu = true;
      }
      break;
    case EnglishLevel.CET6:
      if (score < 400) {
        isHuayan = true;
      } else if (score >= 600) {
        isXinghuo = true;
      } else {
        isHuangpishu = true;
      }
      break;
  };

  if (isHuayan) {
    return handleRecommendHuayan(values);
  };
  if (isHuangpishu) {
    return handleRecommendHuangpishu(values);
  };
  if (isXinghuo) {
    return handleRecommendXinghuo(values);
  }
};
