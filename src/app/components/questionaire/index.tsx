'use client';

import React, { useEffect, useRef, useState } from "react";
import { Radio, Space, Button, Form, Checkbox, Input, InputNumber, message } from "antd";
import FormLabel from "../form-label/index.tsx";
import { EnglishLevel, FormQuestions, FormValues, MAX_STEP, PrepareForExamTime } from "../../constant/index.ts";
import '../../style/reset.css';
import '../../style/index.css'
import './index.css';

import image from '../../assets/stars.png';

import Result from '../result/index.tsx';

const initialValues = {
  prepare_exam: null,
  exam_type: null,
  exam_result: null,
  prepare_time: null,
  shuati_type: null,
  prefer_type: null,
  goal: null
};

const Questionare = (props: any) => {
  const [step, setStep] = useState<number>(0);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const [form] = Form.useForm();

  const [finalResult, setFinalResult] = useState<any>(null);

  const handleShowResult = (): void => {
    setFinalResult(form.getFieldsValue());
    setShowResult(true);
    // onShowResult?.();
    // if (imageWidth.current >= 200) {
    //   cancelAnimationFrame(timer);
    // } else {
    //   setImageWidth(preWidth + 1);
    //   timer = requestAnimationFrame(() => handleShowResult(preWidth + 1));
    // }
  };

  const handleNextStep = () => {
    if (step >= MAX_STEP) {
      handleShowResult();
      return;
    };
    const field = FormQuestions[step].field;
    const values = form.getFieldsValue();
    const value = values?.[field];

    if (!value) {
      form.validateFields([field]);
      message.warning(`请选择答案才能做下一题哦~`);
    } else {
      if (field === 'exam_type' && value && (values.score === undefined || values.score === null)) {
        form.validateFields([field]);
        message.warning(`请填写分数～`);
      } else {
        setStep(step + 1);
      }
    };
  };

  const handleReset = () => {
    console.log(form.getFieldsValue());
    form.setFieldsValue(initialValues);
    setStep(0);
    setShowResult(false);
    window.location.reload();
  };

  useEffect(
    () => {
      setTimeout(() => {
        setShowForm(true);
      }, 500);
    },
    []
  );


  const isBig = document.body.clientHeight > 900;

  const style = isBig ? {
    height: '64px',
    borderRadius: '32px'
  } : {
    height: '48px',
    borderRadius: '24px'
  };

  return (
    <div className="w-full h-full">
      
      <div className="wrapper relative w-full h-full" style={{
        background: "#ECEFFE",
        borderRadius: '45px'
      }}>

        {showResult ? (
          <div className="flex justify-center">
            <img src={image} width="140" style={{ zIndex: 10, marginTop: '-20px' }} />
          </div>
        ) : (
          <div className="absolute qsIndex text-center flex items-center justify-center alimama" style={{
            width: '56px',
            height: '56px',
            background: '#8A9CF9',
            color: '#FFF',
            borderRadius: '50%',
            left: '50%',
            transform: 'translate3d(-50%,-38px,0)',
            fontSize: '32px',
            boxShadow: '0 0 12px 0 #FFF'
          }}>
            <span>
              {step + 1}
            </span>
          </div>
        )}

        <div
          className="inner absolute overflow-y-hidden"
          style={{
            width: '86%',
            color: '#000',
            height: '92%',
            background: '#FFF',
            borderRadius: '45px',
            left: '50%',
            top: '50%',
            transform: 'translate3d(-50%,-50%,0)',
            padding: '40px 8px 0'
          }}>
          {showForm && !showResult && (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={initialValues}
              autoComplete="off"
              className="w-full"
              requiredMark={false}
              form={form}
            >
              {FormQuestions.map((item, index) => {
                return (
                  <div key={`form_${index}`} className="w-full">
                    <Form.Item
                      label={
                        <FormLabel>
                          {item.question}
                        </FormLabel>
                      }
                      hidden={step !== index}
                      shouldUpdate
                      name={item.field}
                      className="w-full"
                    >
                      <Radio.Group>
                        {item.options?.map(option => {
                          return (
                            <Radio key={option.value} className="block flex items-center mt-4 font14" value={option.value} style={{ fontSize: '18px' }}>
                              {option.label}
                            </Radio>
                          );
                        })}
                      </Radio.Group>
                    </Form.Item>

                    {item.showInput && (
                      <Form.Item
                        hidden={step !== index}
                        dependencies={['exam_type']}
                      >
                        {values => {
                          const examType = values.getFieldValue('exam_type');
                          return !!examType && (
                            <Form.Item className="w-full" name="score">
                              <InputNumber className="w-full" placeholder="请输入考试分数" size="large" />
                            </Form.Item>
                          );
                        }}
                      </Form.Item>
                    )}
                  </div>
                )
              })}
            </Form>
          )}

          {showResult && <Result data={finalResult} />}
        </div>
      </div>

      <div className="w-full buttons mt-4" style={{ marginTop: isBig ? '26px' : '20px' }}>
        <div className={`w-full flex items-center justify-center`} style={{ background: '#8B9CFA', fontSize: '20px', ...style }} onClick={handleNextStep}>
          {step >= MAX_STEP ? `查看结果` : '下一题'}
        </div>
        <div className={`w-full flex items-center justify-center`} style={{ background: 'transparent', color: '#8B9CFA', fontSize: '20px', ...style }} onClick={handleReset}>
          重新作答
        </div>
      </div>
    </div>
  );
};

export default Questionare;
