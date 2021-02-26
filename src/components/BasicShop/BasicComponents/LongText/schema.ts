import {
  IColorConfigType,
  INumberConfigType,
  ISelectConfigType,
  ITextAreaConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TSelectDefaultType,
  TTextAreaDefaultType,
} from '@/components/PanelComponents/FormEditor/types';
export type TLongTextSelectKeyType = 'left' | 'center' | 'right';

export type TLongTextEditData = Array<
  | ITextAreaConfigType
  | IColorConfigType
  | INumberConfigType
  | ISelectConfigType<TLongTextSelectKeyType>
>;
export interface ILongTextConfig {
  text: TTextAreaDefaultType;
  color: TColorDefaultType;
  fontSize: TNumberDefaultType;
  indent: TNumberDefaultType;
  lineHeight: TNumberDefaultType;
  textAlign: TSelectDefaultType<TLongTextSelectKeyType>;
}

export interface ILongTextSchema {
  editData: TLongTextEditData;
  config: ILongTextConfig;
}

const LongText: ILongTextSchema = {
  editData: [
    {
      key: 'text',
      name: '文字',
      type: 'TextArea',
    },
    {
      key: 'color',
      name: '标题颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '字体大小',
      type: 'Number',
    },
    {
      key: 'indent',
      name: '首行缩进',
      type: 'Number',
      range: [0, 100],
    },
    {
      key: 'textAlign',
      name: '对齐方式',
      type: 'Select',
      range: [
        {
          key: 'left',
          text: '左对齐',
        },
        {
          key: 'center',
          text: '居中对齐',
        },
        {
          key: 'right',
          text: '右对齐',
        },
      ],
    },
    {
      key: 'lineHeight',
      name: '行高',
      type: 'Number',
      step: 0.1,
    },
  ],
  config: {
    text: '我是长文本!快来添加长文本吧！',
    color: 'rgba(0,166,166,1)',
    fontSize: 14,
    indent: 20,
    lineHeight: 1.8,
    textAlign: 'left',
  },
};

export default LongText;
