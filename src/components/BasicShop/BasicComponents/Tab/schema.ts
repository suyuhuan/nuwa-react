import {
  IColorConfigType,
  IDataListConfigType,
  IMutiTextConfigType,
  INumberConfigType,
  TColorDefaultType,
  TDataListDefaultType,
  TMutiTextDefaultType,
  TNumberDefaultType,
} from '@/components/PanelComponents/FormEditor/types';

import  tab1 from '@/assets/uploads/1.png';
import  tab2 from '@/assets/uploads/2.png';
import  tab3 from '@/assets/uploads/5.png';
import  tab4 from '@/assets/uploads/4.png';

export type TTabEditData = Array<
  IMutiTextConfigType | IColorConfigType | INumberConfigType | IDataListConfigType
>;
export interface ITabConfig {
  tabs: TMutiTextDefaultType;
  color: TColorDefaultType;
  activeColor: TColorDefaultType;
  fontSize: TNumberDefaultType;
  imgSize: TNumberDefaultType;
  sourceData: TDataListDefaultType;
}

export interface ITabSchema {
  editData: TTabEditData;
  config: ITabConfig;
}

const Tab: ITabSchema = {
  editData: [
    {
      key: 'tabs',
      name: '项目类别',
      type: 'MutiText',
    },
    {
      key: 'activeColor',
      name: '激活颜色',
      type: 'Color',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '文字大小',
      type: 'Number',
    },
    {
      key: 'imgSize',
      name: '图片大小',
      type: 'Number',
    },
    {
      key: 'sourceData',
      name: '数据源',
      type: 'DataList',
    },
  ],
  config: {
    tabs: ['功能一', '功能二'],
    color: 'rgba(153,153,153,1)',
    activeColor: 'rgba(0,166,166,1)',
    fontSize: 16,
    imgSize: 100,
    sourceData: [
      {
        id: '1',
        title: '绘制',
        desc: '发挥你的想象',
        link: 'xxxxx',
        type: 0,
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: tab3,
          },
        ],
      },
      {
        id: '2',
        title: '记录',
        desc: '你可以记录下来',
        link: 'xxxxx',
        type: 0,
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: tab4,
          },
        ],
      },
      {
        id: '3',
        title: '编辑',
        desc: '去想做什么都可以',
        link: 'xxxxx',
        type: 1,
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: tab1,
          },
        ],
      },
      {
        id: '4',
        title: '修改',
        desc: '你可以随心所欲',
        link: 'xxxxx',
        type: 1,
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: tab2,
          },
        ],
      },
    ],
  },
};

export default Tab;
