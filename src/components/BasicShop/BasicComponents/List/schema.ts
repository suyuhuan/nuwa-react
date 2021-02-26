import {
  IColorConfigType,
  IDataListConfigType,
  INumberConfigType,
  ISelectConfigType,
  TColorDefaultType,
  TDataListDefaultType,
  TNumberDefaultType,
  TSelectDefaultType,
} from '@/components/PanelComponents/FormEditor/types';

import { baseConfig, baseDefault, ICommonBaseType } from '../../common';

import  list01 from '@/assets/uploads/person1.png';
import  list02 from '@/assets/uploads/person2.png';

export type TListSelectKeyType = '60' | '80' | '100' | '120' | '150';
export type TListEditData = Array<
  IColorConfigType | IDataListConfigType | INumberConfigType | ISelectConfigType<TListSelectKeyType>
>;
export interface IListConfig extends ICommonBaseType {
  sourceData: TDataListDefaultType;
  round: TNumberDefaultType;
  imgSize: TSelectDefaultType<TListSelectKeyType>;
  fontSize: TNumberDefaultType;
  color: TColorDefaultType;
}

export interface IListSchema {
  editData: TListEditData;
  config: IListConfig;
}

const List: IListSchema = {
  editData: [
    ...baseConfig,
    {
      key: 'sourceData',
      name: '数据源',
      type: 'DataList',
      cropRate: 1,
    },
    {
      key: 'round',
      name: '图片圆角',
      type: 'Number',
    },
    {
      key: 'imgSize',
      name: '图片大小',
      type: 'Select',
      range: [
        {
          key: '60',
          text: '60 x 60',
        },
        {
          key: '80',
          text: '80 x 80',
        },
        {
          key: '100',
          text: '100 x 100',
        },
        {
          key: '120',
          text: '120 x 120',
        },
        {
          key: '150',
          text: '150 x 150',
        },
      ],
    },
    {
      key: 'fontSize',
      name: '文字大小',
      type: 'Number',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
  ],
  config: {
    sourceData: [
      {
        id: '1',
        title: 'sary',
        desc: '这是一个非常酷的H5编辑器！',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: list02,
          },
        ],
      },
      {
        id: '2',
        title: 'kevin',
        desc: 'sary开发的这款可视化编辑器非常好用！',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '002',
            name: 'image.png',
            status: 'done',
            url: list01,
          },
        ],
      },
    ],
    round: 0,
    imgSize: '80',
    fontSize: 16,
    color: 'rgba(153,153,153,1)',
    ...baseDefault,
  },
};

export default List;
