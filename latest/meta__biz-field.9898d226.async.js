"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[4720],{87167:function(t,n,e){var a;e.r(n),e.d(n,{demos:function(){return B}});var u=e(90228),i=e.n(u),h=e(87999),v=e.n(h),r=e(75271),z=e(49171),p=e(63117),y=e(51931),b=e(38873),B={"biz-field-demo-demo1":{component:r.memo(r.lazy(function(){return e.e(7717).then(e.bind(e,9591))})),asset:{type:"BLOCK",id:"biz-field-demo-demo1",refAtomIds:["biz-field"],dependencies:{"index.tsx":{type:"FILE",value:e(78048).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.1.4"},"antd-more":{type:"NPM",value:"6.0.4"},"../../biz-dictionary/demos/constants.ts":{type:"FILE",value:e(86122).Z}},entry:"index.tsx"},context:{"../../biz-dictionary/demos/constants.ts":y,react:a||(a=e.t(r,2)),antd:z,"antd-more":p,"/home/runner/work/antd-more/antd-more/src/biz-dictionary/demos/constants.ts":y},renderOpts:{compile:function(){var o=v()(i()().mark(function m(){var d,c=arguments;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1216).then(e.bind(e,69724));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,c));case 3:case"end":return l.stop()}},m)}));function s(){return o.apply(this,arguments)}return s}()}},"biz-field-demo-fieldnames":{component:r.memo(r.lazy(function(){return e.e(7717).then(e.bind(e,82689))})),asset:{type:"BLOCK",id:"biz-field-demo-fieldnames",refAtomIds:["biz-field"],dependencies:{"index.tsx":{type:"FILE",value:e(3334).Z},react:{type:"NPM",value:"18.3.1"},"antd-more":{type:"NPM",value:"6.0.4"},"./currency.ts":{type:"FILE",value:e(8546).Z}},entry:"index.tsx"},context:{"./currency.ts":b,react:a||(a=e.t(r,2)),"antd-more":p,"/home/runner/work/antd-more/antd-more/src/biz-field/demos/currency.ts":b},renderOpts:{compile:function(){var o=v()(i()().mark(function m(){var d,c=arguments;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1216).then(e.bind(e,69724));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,c));case 3:case"end":return l.stop()}},m)}));function s(){return o.apply(this,arguments)}return s}()}}}},51931:function(t,n,e){e.r(n),e.d(n,{ApproveStatusOptions:function(){return u},EApproveStatus:function(){return a}});var a=function(i){return i.Processing="1",i.Approve="2",i.Refused="3",i}({}),u=[{value:a.Processing,label:"\u5BA1\u6838\u4E2D",badge:{status:"processing"},tag:{alias:"\u5F85\u5BA1\u6838",color:"orange"}},{value:a.Approve,label:"\u5BA1\u6838\u901A\u8FC7",text:{style:{color:"green"}},badge:{status:"success"},tag:{color:"green"}},{value:a.Refused,label:"\u5BA1\u6838\u4E0D\u901A\u8FC7",text:{style:{color:"red"}},badge:{status:"error"},tag:{color:"red"},custom:{color:"purple"}}]},38873:function(t,n,e){e.r(n);var a=[{symbol:"\xA5",code:"CNY",name:"\u4EBA\u6C11\u5E01",tag:{color:"orange"}},{symbol:"$",code:"USD",name:"\u7F8E\u5143"},{symbol:"\u20AC",code:"EUR",name:"\u6B27\u5143"},{symbol:"\uFFE1",code:"GBP",name:"\u82F1\u9551"}];n.default=a},86122:function(t,n){n.Z=`/**\u5BA1\u6838\u72B6\u6001 1-\u5BA1\u6838\u4E2D 2-\u5BA1\u6838\u901A\u8FC7 3-\u5BA1\u6838\u4E0D\u901A\u8FC7 */
export enum EApproveStatus {
  Processing = '1',
  Approve = '2',
  Refused = '3'
}

/**\u5BA1\u6838\u72B6\u6001\u9009\u9879 */
export const ApproveStatusOptions = [
  {
    value: EApproveStatus.Processing,
    label: '\u5BA1\u6838\u4E2D',
    badge: {
      status: 'processing'
    },
    tag: {
      alias: '\u5F85\u5BA1\u6838',
      color: 'orange'
    }
  },
  {
    value: EApproveStatus.Approve,
    label: '\u5BA1\u6838\u901A\u8FC7',
    text: {
      style: {
        color: 'green'
      }
    },
    badge: {
      status: 'success'
    },
    tag: {
      color: 'green'
    }
  },
  {
    value: EApproveStatus.Refused,
    label: '\u5BA1\u6838\u4E0D\u901A\u8FC7',
    text: {
      style: {
        color: 'red'
      }
    },
    badge: {
      status: 'error'
    },
    tag: {
      color: 'red'
    },
    custom: {
      color: 'purple'
    }
  }
];
`},78048:function(t,n){n.Z=`import React from 'react';
import { Flex } from 'antd';
import { BizDescriptions, BizField } from 'antd-more';
import { ApproveStatusOptions } from '../../biz-dictionary/demos/constants';

export default () => {
  return (
    <Flex vertical gap={16}>
      <BizDescriptions
        title="\u6587\u672C"
        items={[
          {
            label: '\u9ED8\u8BA4',
            children: <BizField value="\u8FD9\u662F\u4E00\u6BB5\u6587\u672C" valueType="text" />
          },
          {
            label: '\u7A7A',
            children: <BizField value="" valueType="text" />
          },
          {
            label: '\u81EA\u5B9A\u4E49\u7A7A\u503C',
            children: <BizField value="" valueType="text" defaultValue="/" />
          },
          {
            label: '\u989C\u8272\u5927\u5C0F',
            children: <BizField value="\u8FD9\u662F\u4E00\u6BB5\u6587\u672C" valueType="text" color="red" size={16} />
          },
          {
            label: '\u7A7A\u683C\u6362\u884C',
            children: <BizField value="2022-10-10 08:00:00" valueType="text" whitespaceLineBreak />
          }
        ]}
      />
      <BizDescriptions
        title="\u91D1\u989D"
        items={[
          {
            label: '\u9ED8\u8BA4',
            children: <BizField value={100} valueType="money" />
          },
          {
            label: '\u7A7A',
            children: <BizField value={undefined} valueType="money" />
          },
          {
            label: '\u7A7A2',
            children: <BizField value={undefined} valueType="money" prefix="xxx" suffix="\u5143" />
          },
          {
            label: '\u524D\u7F00',
            children: <BizField value={100} valueType="money" prefix="\xA5" />
          },
          {
            label: '\u540E\u7F00',
            children: <BizField value={10325} valueType="money" suffix="\u5143/\u7B14" />
          },
          {
            label: '\u989C\u8272',
            children: <BizField value={100} valueType="money" prefix="\xA5" color="red" />
          },
          {
            label: '\u5355\u4F4D\u5206\u8F6C\u5143',
            children: <BizField value={10325} valueType="money" suffix="\u5143/\u7B14" ratio={0.01} />
          },
          {
            label: '\u5355\u4F4D\u5143\u8F6C\u5206',
            children: (
              <BizField value={10325} valueType="money" suffix="\u5206" ratio={100} precision={0} />
            )
          },
          {
            label: '\u9ED8\u8BA4\u7CBE\u5EA6',
            children: <BizField value={1.0325} valueType="money" />
          },
          {
            label: '\u7CBE\u5EA61\u4F4D',
            children: <BizField value={1.0325} valueType="money" precision={1} />
          },
          {
            label: '\u7CBE\u5EA64\u4F4D',
            children: <BizField value={1.0325} valueType="money" precision={4} />
          }
        ]}
      />
      <BizDescriptions
        title="\u767E\u5206\u6BD4"
        items={[
          {
            label: '\u9ED8\u8BA4',
            children: <BizField value={10} valueType="percent" />
          },
          {
            label: '\u7A7A',
            children: <BizField value={undefined} valueType="percent" />
          },
          {
            label: '\u81EA\u5B9A\u4E49\u7A7A\u503C',
            children: <BizField value={undefined} valueType="percent" defaultValue="/" />
          },
          {
            label: '\u6837\u5F0F\u6B63\u6570',
            children: <BizField value={10} valueType="percent" showSymbol showColor />
          },
          {
            label: '\u6837\u5F0F\u96F6',
            children: <BizField value={0} valueType="percent" showSymbol showColor />
          },
          {
            label: '\u6837\u5F0F\u8D1F\u6570',
            children: <BizField value={-10} valueType="percent" showSymbol showColor />
          },
          {
            label: '\u9ED8\u8BA4\u7CBE\u5EA6',
            children: <BizField value={10.1232} valueType="percent" />
          },
          {
            label: '\u7CBE\u5EA61\u4F4D',
            children: <BizField value={10.1232} valueType="percent" precision={1} />
          },
          {
            label: '\u7CBE\u5EA6\u4E0D\u9650\u5236',
            children: (
              <>
                <BizField value={10.1232} valueType="percent" precision="auto" />\u3001
                <BizField value={10} valueType="percent" precision="auto" />
              </>
            )
          }
        ]}
      />
      <BizDescriptions
        title="\u8FDB\u5EA6\u6761"
        items={[
          {
            label: '\u9ED8\u8BA4',
            children: <BizField value={40} valueType="progress" />
          },
          {
            label: '\u4E0D\u663E\u793A\u4FE1\u606F',
            children: <BizField value={40} valueType="progress" showInfo={false} />
          }
        ]}
      />
      <BizDescriptions
        title="\u5E8F\u5217\u53F7"
        items={[
          {
            label: '\u9ED8\u8BA4',
            children: (
              <>
                <BizField value={0} valueType="index" />
                <BizField value={1} valueType="index" />
                <BizField value={2} valueType="index" />
                <BizField value={3} valueType="index" />
                <BizField value={9} valueType="index" />
              </>
            )
          },
          {
            label: '\u6837\u5F0F\u5706',
            children: (
              <>
                <BizField value={0} valueType="indexBorder" />
                <BizField value={1} valueType="indexBorder" />
                <BizField value={2} valueType="indexBorder" />
                <BizField value={3} valueType="indexBorder" />
                <BizField value={9} valueType="indexBorder" />
              </>
            )
          }
        ]}
      />
      <BizDescriptions
        title="\u989C\u8272"
        items={[
          {
            label: '\u9ED8\u8BA4',
            children: <BizField value="red" valueType="color" />
          },
          {
            label: '\u663E\u793A\u6587\u672C1',
            children: <BizField value="blue" valueType="color" showText />
          },
          {
            label: '\u663E\u793A\u6587\u672C2',
            children: <BizField value="blue" valueType="color" showText format="rgb" />
          }
        ]}
      />
      <BizDescriptions
        title="\u56FE\u7247"
        items={[
          {
            label: '\u9ED8\u8BA4',
            children: (
              <BizField
                value="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                valueType="image"
              />
            )
          },
          {
            label: '\u540D\u79F0',
            children: (
              <BizField
                value={{
                  src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                  name: '\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0'
                }}
                valueType="image"
              />
            )
          },
          {
            label: '\u540D\u79F0\u6362\u884C',
            children: (
              <BizField
                value={{
                  src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                  name: '\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0'
                }}
                valueType="image"
                nameWrap
              />
            )
          },
          {
            label: '\u8FB9\u6846',
            children: (
              <BizField
                value="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                valueType="image"
                bordered
              />
            )
          },
          {
            label: '\u8FB9\u6846\u540D\u79F0',
            children: (
              <BizField
                value={{
                  src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                  name: '\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0'
                }}
                valueType="image"
                bordered
              />
            )
          },
          {
            label: '\u8FB9\u6846\u540D\u79F0\u6362\u884C',
            children: (
              <BizField
                value={{
                  src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                  name: '\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0'
                }}
                valueType="image"
                bordered
                nameWrap
              />
            )
          },
          {
            label: '\u591A\u5F20',
            children: (
              <BizField
                value={['https://dummyimage.com/200x300', 'https://dummyimage.com/300x100']}
                valueType="image"
              />
            ),
            span: 'filled'
          },
          {
            label: '\u591A\u5F20\u8FB9\u6846\u540D\u79F0',
            children: (
              <BizField
                value={[
                  { src: 'https://dummyimage.com/300x600', name: '\u6D4B\u8BD5\u540D\u79F0' },
                  { src: 'https://dummyimage.com/600x200', name: '\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0\u6D4B\u8BD5\u540D\u79F0' },
                  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                ]}
                valueType="image"
                bordered
                nameWrap
              />
            )
          }
        ]}
      />
      <BizDescriptions
        title="\u65E5\u671F"
        items={[
          {
            label: '\u65E5\u671F',
            children: <BizField value="2020-10-10" valueType="date" />
          },
          {
            label: '\u65E5\u671F\u65F6\u95F4',
            children: <BizField value="2020-10-10" valueType="dateTime" />
          },
          {
            label: '\u5468',
            children: <BizField value="2020-10-10" valueType="dateWeek" />
          },
          {
            label: '\u6708',
            children: <BizField value="2020-10-10" valueType="dateMonth" />
          },
          {
            label: '\u5B63',
            children: <BizField value="2020-10-10" valueType="dateQuarter" />
          },
          {
            label: '\u5E74',
            children: <BizField value="2020-10-10" valueType="dateYear" />
          },
          {
            label: '\u65F6\u95F4',
            children: <BizField value="10:00:00" valueType="time" />
          },
          {
            label: '\u65F6\u95F4\u533A\u95F4',
            children: <BizField value={['10:00:00', '12:00:00']} valueType="timeRange" />
          },
          {
            label: '\u76F8\u5BF9\u5F53\u524D\u65F6\u95F4',
            children: <BizField value="2020-10-10" valueType="fromNow" />
          },
          {
            label: '\u65E5\u671F\u533A\u95F4',
            children: <BizField value={['2020-10-10', '2020-12-12']} valueType="dateRange" />,
            span: 'filled'
          },
          {
            label: '\u65E5\u671F\u65F6\u95F4\u533A\u95F4',
            children: <BizField value={['2020-10-10', '2020-12-12']} valueType="dateTimeRange" />,
            span: 'filled'
          }
        ]}
      />
      <BizDescriptions
        title="\u679A\u4E3E"
        items={[
          {
            label: '\u6587\u672C',
            children: <BizField value="1" valueType="enum" valueEnum={ApproveStatusOptions} />
          },
          {
            label: '\u591A\u4E2A\u6587\u672C',
            children: (
              <BizField value={['1', '2']} valueType="enum" valueEnum={ApproveStatusOptions} />
            )
          },
          {
            label: '\u81EA\u5B9A\u4E49\u5206\u9694\u7B26',
            children: (
              <BizField
                value={['1', '2']}
                valueType="enum"
                valueEnum={ApproveStatusOptions}
                size={0}
                separator="\u3001"
              />
            )
          },
          {
            label: '\u6807\u7B7E',
            children: <BizField value="1" valueType="enumTag" valueEnum={ApproveStatusOptions} />
          },
          {
            label: '\u591A\u4E2A\u6807\u7B7E',
            children: (
              <BizField value={['2', '3']} valueType="enumTag" valueEnum={ApproveStatusOptions} />
            ),
            span: 'filled'
          },
          {
            label: '\u5FBD\u7AE0',
            children: <BizField value="1" valueType="enumBadge" valueEnum={ApproveStatusOptions} />
          },
          {
            label: '\u591A\u4E2A\u5FBD\u7AE0',
            children: (
              <BizField value={['1', '2']} valueType="enumBadge" valueEnum={ApproveStatusOptions} />
            ),
            span: 'filled'
          }
        ]}
      />
    </Flex>
  );
};
`},8546:function(t,n){n.Z=`const CurrencyData = [
  {
    symbol: '\xA5',
    code: 'CNY',
    name: '\u4EBA\u6C11\u5E01',
    tag: {
      color: 'orange'
    }
  },
  {
    symbol: '$',
    code: 'USD',
    name: '\u7F8E\u5143'
  },
  {
    symbol: '\u20AC',
    code: 'EUR',
    name: '\u6B27\u5143'
  },
  {
    symbol: '\uFFE1',
    code: 'GBP',
    name: '\u82F1\u9551'
  }
];

export default CurrencyData;
`},3334:function(t,n){n.Z=`import React from 'react';
import { BizField } from 'antd-more';
import CurrencyData from './currency';

function Demo() {
  return (
    <>
      <BizField
        value="CNY"
        valueType="enum"
        valueEnum={CurrencyData}
        fieldNames={{ label: 'symbol', value: 'code' }}
      />
      <br />
      <BizField
        value="CNY"
        valueType="enum"
        valueEnum={CurrencyData}
        fieldNames={{ label: 'name', value: 'code' }}
      />
      <br />
      <BizField
        value="\u4EBA\u6C11\u5E01"
        valueType="enum"
        valueEnum={CurrencyData}
        fieldNames={{ label: 'symbol', value: 'name' }}
      />
      <br />
      <BizField
        value="CNY"
        valueType="enumTag"
        valueEnum={CurrencyData}
        fieldNames={{ label: 'name', value: 'code' }}
      />
      <br />
      <br />
      <h3>\u591A\u4E2A\u679A\u4E3E</h3>
      <BizField
        value={['CNY', 'USD']}
        valueType="enum"
        valueEnum={CurrencyData}
        fieldNames={{ label: 'symbol', value: 'code' }}
      />
      <br />
      <BizField
        value={['CNY', 'USD']}
        valueType="enumTag"
        valueEnum={CurrencyData}
        fieldNames={{ label: 'name', value: 'code' }}
      />
    </>
  );
}

export default Demo;
`}}]);
