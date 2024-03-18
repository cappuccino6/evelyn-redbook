import { FormValues } from "../constant";

export const handleRecommendBook = (values: FormValues) => {
  if (!values) {
    return;
  };

  const {
    prefer_type,
    prepare_exam,
    prepare_time,
    exam_type,
    score,
    shuati_type,
    goal
  } = values;

  
};
