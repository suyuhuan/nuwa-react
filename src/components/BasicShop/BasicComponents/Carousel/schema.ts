import {
  IDataListConfigType,
  INumberConfigType,
  IRadioConfigType,
  ISwitchConfigType,
  TDataListDefaultType,
  TRadioDefaultType,
  TSwitchDefaultType,
} from '@/components/PanelComponents/FormEditor/types';
import { baseConfig, baseDefault, ICommonBaseType } from '../../common';
import  img4 from '@/assets/uploads/img4.png';
import  img6 from '@/assets/uploads/img6.png';
import  img7 from '@/assets/uploads/img7.png';

export type CarouselDirectionKeyType = 'down' | 'left';

export type TCarouselEditData = Array<
  | INumberConfigType
  | IRadioConfigType<CarouselDirectionKeyType>
  | ISwitchConfigType
  | IDataListConfigType
>;
export interface ICarouselConfig extends ICommonBaseType {
  direction: TRadioDefaultType<CarouselDirectionKeyType>;
  swipeable: TSwitchDefaultType;
  autoPlay: TSwitchDefaultType;
  imgList: TDataListDefaultType;
}

export interface ICarouselSchema {
  editData: TCarouselEditData;
  config: ICarouselConfig;
}

const Carousel: ICarouselSchema = {
  editData: [
    ...baseConfig,

    {
      key: 'direction',
      name: '方向',
      type: 'Radio',
      range: [
        {
          key: 'down',
          text: '从上到下',
        },
        {
          key: 'left',
          text: '从左到右',
        },
      ],
    },
    {
      key: 'swipeable',
      name: '是否可拖拽',
      type: 'Switch',
    },
    {
      key: 'autoPlay',
      name: '是否自动播放',
      type: 'Switch',
    },
    {
      key: 'imgList',
      name: '图片列表',
      type: 'DataList',
    },
  ],
  config: {
    direction: 'left',
    swipeable: false,
    autoPlay: false,
    imgList: [
      {
        id: '1',
        title: '工作',
        desc: '我的工作台',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: img6,
          },
        ],
      },
      {
        id: '2',
        title: '书桌',
        desc: '安静的书桌',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: img7,
          },
        ],
      },
      {
        id: '3',
        title: '拍摄',
        desc: '另外视角',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: img4,
          },
        ],
      },
    ],
    ...baseDefault,
  },
};
export default Carousel;
