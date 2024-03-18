export const BaseConfig = {
  SCREEN_WIDTH: 375
};

export enum EnglishLevel {
  CEE = 1,
  CET4 = 4,
  CET6 = 6
};

export enum PrepareForExamTime {
  OneMonth = 1,
  ThreeMonths = 3,
  SixMonths = 6,
  NineMonths = 9,
  TwelveMonths = 12,
};

export enum ShuatiType {
  ZhuanXiang = 1,
  ZoneHe = 2,
  Not_Limited = 3
};

export enum Goal {
  Guoxian = 1,
  Shuafen = 2
}

export interface FormValues {
  prepare_exam: EnglishLevel;
  exam_type: EnglishLevel;
  score: number;
  prepare_time: PrepareForExamTime;
  shuati_type: ShuatiType;
  prefer_type: number;
  goal: Goal;
};

export const FormQuestions = [
  {
    question: '你要备考四级还是六级？',
    field: 'prepare_exam',
    options: [
      {
        value: EnglishLevel.CET4,
        label: '四级'
      },
      {
        value: EnglishLevel.CET6,
        label: '六级'
      }
    ]
  },
  {
    question: '你的高考英语/四六级成绩？',
    showInput: true,
    field: 'exam_type',
    options: [
      {
        value: EnglishLevel.CEE,
        label: '高考英语',
        input_field: 'cee_grade'
      },
      {
        value: EnglishLevel.CET4,
        label: '四级',
        input_field: 'cet4_grade'
      },
      {
        value: EnglishLevel.CET6,
        label: '六级',
        input_field: 'cet6_grade'
      }
    ]
  },
  {
    question: '你计划用多长时间备考？',
    field: 'parepare_time',
    options: [
      {
        value: PrepareForExamTime.OneMonth,
        label: '1个月（及以下）'
      },
      {
        value: PrepareForExamTime.ThreeMonths,
        label: '3个月'
      },
      {
        value: PrepareForExamTime.SixMonths,
        label: '6个月'
      },
      {
        value: PrepareForExamTime.NineMonths,
        label: '9个月'
      },
      {
        value: PrepareForExamTime.TwelveMonths,
        label: '1年（及以上）'
      },
    ]
  },
  {
    question: '你喜欢那种刷题方式？',
    field: 'shuati_type',
    options: [
      {
        value: ShuatiType.ZhuanXiang,
        label: '我有明显弱项/喜欢专项训练'
      },
      {
        value: ShuatiType.ZoneHe,
        label: '专项太无聊，我喜欢综合刷题'
      },
      {
        value: ShuatiType.Not_Limited,
        label: '都行'
      },
    ]
  },
  {
    question: '你喜欢用app还是纸质书？',
    field: 'prefer_type',
    options: [
      {
        value: 1,
        label: '喜欢app'
      },
      {
        value: 2,
        label: '喜欢纸质书'
      },
      {
        value: 3,
        label: '都行'
      },
    ]
  },
  {
    question: '你希望达到什么目标？',
    field: 'goal',
    options: [
      {
        value: Goal.Guoxian,
        label: '过线万岁'
      },
      {
        value: Goal.Shuafen,
        label: '刷分，越高越好'
      },
    ]
  },
];

export const MAX_STEP = 5;
