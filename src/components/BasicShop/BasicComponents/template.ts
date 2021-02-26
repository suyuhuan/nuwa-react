import Carousel from './Carousel/template';
import Footer from './Footer/template';
import Form from './Form/template';
import Header from './Header/template';
import Icon from './Icon/template';
import Image from './Image/template';
import List from './List/template';
import LongText from './LongText/template';
import Notice from './Notice/template';
import Qrcode from './Qrcode/template';
import Tab from './Tab/template';
import Text from './Text/template';
import WhiteTpl from './WhiteTpl/template';

const basicTemplate = [
  Text,
  LongText,
  WhiteTpl,
  Icon,
  Image,
  Header,
  Footer,
  Notice,
  Qrcode,
  Carousel,
  Tab,
  List,
  Form,
];
const BasicTemplate = basicTemplate.map(v => {
  return { ...v, category: 'base' };
});

export default BasicTemplate;
