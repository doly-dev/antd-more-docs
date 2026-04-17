"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[8110],{31106:function(u,_,e){e.r(_);var a=e(90228),i=e.n(a),t=e(87999),m=e.n(t),o=e(26068),r=e.n(o),M=e(48305),v=e.n(M),s=e(67825),O=e.n(s),C=e(75271),y=e(98779),b=e(55857),d=e(10893),A=e.n(d),T=e(64560),D=e(50247),W=e(45757),E=e(59763),B=e(88855),I=e(13096),n=e(52676),z=["labelWidth","hideLabel","layout","requiredMark","size","variant","children"],F=function(c){var L=c.labelWidth,N=L===void 0?84:L,R=c.hideLabel,Z=R===void 0?!1:R,x=c.layout,$=x===void 0?"horizontal":x,K=c.requiredMark,G=K===void 0?!0:K,U=c.size,X=U===void 0?"middle":U,g=c.variant,Q=g===void 0?"outlined":g,V=c.children,H=O()(c,z),J=(0,C.useId)(),S={labelWidth:N,hideLabel:Z,layout:$,requiredMark:G,size:X,variant:Q},Y=(0,b.Z)(r()({},S)),k=v()(Y,2),h=k[0],P=k[1];return(0,n.jsxs)("div",{className:"demo-form",children:[(0,n.jsx)(T.Z,{bordered:!1,items:[{key:"1",label:"\u5207\u6362\u663E\u793A/\u9690\u85CF\u914D\u7F6E\u9762\u677F",extra:(0,n.jsx)(D.ZP,{type:"link",size:"small",onClick:function(l){l.stopPropagation(),P(r()({},S))},children:"\u70B9\u51FB\u6062\u590D\u521D\u59CB\u914D\u7F6E"}),children:(0,n.jsxs)(W.Z,{gap:16,align:"center",wrap:!0,children:[(0,n.jsxs)("div",{children:["layout:\xA0",(0,n.jsx)(E.default,{options:[{label:"vertical",value:"vertical"},{label:"horizontal",value:"horizontal"},{label:"inline",value:"inline"}],value:h.layout,onChange:function(l){P({layout:l})},style:{width:120}})]}),(0,n.jsxs)("div",{children:["requiredMark:\xA0",(0,n.jsx)(E.default,{options:[{label:"true",value:!0},{label:"false",value:!1},{label:"optional",value:"optional"},{label:"customize",value:"customize"}],value:h.requiredMark,onChange:function(l){P({requiredMark:l})},style:{width:120}})]}),(0,n.jsxs)("div",{children:["size:\xA0",(0,n.jsx)(E.default,{options:[{label:"small",value:"small"},{label:"middle",value:"middle"},{label:"large",value:"large"}],value:h.size,onChange:function(l){P({size:l})},style:{width:120}})]}),(0,n.jsxs)("div",{children:["variant:\xA0",(0,n.jsx)(E.default,{options:[{label:"outlined",value:"outlined"},{label:"filled",value:"filled"},{label:"borderless",value:"borderless"},{label:"underlined",value:"underlined"}],value:h.variant,onChange:function(l){P({variant:l})},style:{width:120}})]}),(0,n.jsxs)("div",{children:["labelWidth:\xA0",(0,n.jsx)(E.default,{options:[{label:"84",value:84},{label:"98",value:98},{label:"112",value:112},{label:"126",value:126},{label:"140",value:140},{label:"154",value:154},{label:"168",value:168},{label:"auto",value:"auto"}],value:h.labelWidth,onChange:function(l){P({labelWidth:l})},style:{width:120}})]}),(0,n.jsxs)("div",{children:["hideLabel:\xA0",(0,n.jsx)(B.Z,{value:h.hideLabel,onChange:function(l){P({hideLabel:l})}})]})]})}]}),(0,n.jsx)(I.Z,{}),(0,n.jsx)(y.ZP,r()(r()(r()({name:J,onFinish:function(){var p=m()(i()().mark(function l(j){return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,d.sleep)(500);case 2:console.log(j);case 3:case"end":return f.stop()}},l)}));return function(l){return p.apply(this,arguments)}}(),scrollToFirstError:{behavior:function(l){l.forEach(function(j){var w=j.el,f=j.top;w.scrollTop=f-76})}}},h),H),{},{children:V}))]})};_.default=F},76121:function(u,_,e){e.r(_);var a=e(26068),i=e.n(a),t=e(82092),m=e.n(t),o=e(67825),r=e.n(o),M=e(75271),v=e(37374),s=e(4814),O=e(50809),C=e.n(O),y=e(73557),b=e(52676),d=["valid","className","contentAutoWidth"],A=function(D){var W=D.valid,E=D.className,B=D.contentAutoWidth,I=r()(D,d);return(0,b.jsx)(v.Z,i()({addonAfter:"\u5143",min:0,precision:2,gte:0,useFloor:!0,className:(0,s.default)(E,m()({},y.default.contentAutoWidth,B)),transform:W?function(n){return(0,O.isValidNumber)(n,!0)?n:""}:void 0},I))};_.default=A},92198:function(u,_,e){e.r(_),e.d(_,{BillAccountOptions:function(){return r},CycleOptions:function(){return m},ECycle:function(){return t},RakebackeCycleOptions:function(){return o},pcOptions:function(){return M},pcaOptions:function(){return v}});var a=e(83853),i=e.n(a),t=function(s){return s.Day="1",s.Month="2",s.Quarter="3",s}({}),m=[{label:"\u6309\u65E5",value:t.Day},{label:"\u6309\u6708",value:t.Month},{label:"\u6309\u5B63\u5EA6",value:t.Quarter}],o=[{label:"\u65E5\u8FD4",value:t.Day},{label:"\u6708\u8FD4",value:t.Month}],r=[{label:"\u5F20\u4E09",value:"a"},{label:"\u674E\u56DB",value:"b"}],M=(0,a.getPC)({fieldNames:{code:"value",name:"label"},inland:!0}),v=(0,a.getPCA)({fieldNames:{code:"value",name:"label"},inland:!0})},73557:function(u,_,e){e.r(_);var a=e(49518),i=e.n(a),t=e(20154),m=e.n(t),o=e(88487),r=e.n(o),M=e(7149),v=e.n(M),s=e(99517),O=e.n(s),C=e(31884),y=e.n(C),b=e(94863),d={};d.styleTagTransform=y(),d.setAttributes=v(),d.insert=r().bind(null,"head"),d.domAPI=m(),d.insertStyleElement=O();var A=i()(b.Z,d);_.default=b.Z&&b.Z.locals?b.Z.locals:void 0},94863:function(u,_,e){var a=e(94779),i=e.n(a),t=e(1574),m=e.n(t),o=m()(i());o.push([u.id,`.OX1PG_WSPOEFbMr3n48l .biz-form-item-wrapper {
  align-items: start;
}
.OX1PG_WSPOEFbMr3n48l .biz-form-item-wrapper-content {
  flex: none;
  width: 215px;
}
.OX1PG_WSPOEFbMr3n48l .biz-form-item-wrapper-after {
  flex: 1 1;
  color: gray;
  padding-block: 5px;
}
`,""]),o.locals={contentAutoWidth:"OX1PG_WSPOEFbMr3n48l"},_.Z=o},93031:function(u,_){_.Z=`import React, { useId } from 'react';
import { BizForm, BizFormProps } from 'antd-more';
import { useSetState } from 'rc-hooks';
import { sleep } from 'ut2';
import { Button, Collapse, Divider, Flex, Select, Switch } from 'antd';

const DemoForm: React.FC<BizFormProps> = ({
  labelWidth = 84,
  hideLabel = false,
  layout = 'horizontal',
  requiredMark = true,
  size = 'middle',
  variant = 'outlined',
  children,
  ...restProps
}) => {
  const formName = useId();
  const defaultState = { labelWidth, hideLabel, layout, requiredMark, size, variant };
  const [state, setState] = useSetState({ ...defaultState });

  return (
    <div className="demo-form">
      <Collapse
        bordered={false}
        items={[
          {
            key: '1',
            label: '\u5207\u6362\u663E\u793A/\u9690\u85CF\u914D\u7F6E\u9762\u677F',
            extra: (
              <Button
                type="link"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setState({ ...defaultState });
                }}
              >
                \u70B9\u51FB\u6062\u590D\u521D\u59CB\u914D\u7F6E
              </Button>
            ),
            children: (
              <Flex gap={16} align="center" wrap>
                <div>
                  layout:&nbsp;
                  <Select
                    options={[
                      { label: 'vertical', value: 'vertical' },
                      { label: 'horizontal', value: 'horizontal' },
                      { label: 'inline', value: 'inline' }
                    ]}
                    value={state.layout}
                    onChange={(value) => {
                      setState({ layout: value });
                    }}
                    style={{ width: 120 }}
                  />
                </div>
                <div>
                  requiredMark:&nbsp;
                  <Select
                    options={[
                      { label: 'true', value: true },
                      { label: 'false', value: false },
                      { label: 'optional', value: 'optional' },
                      { label: 'customize', value: 'customize' }
                    ]}
                    value={state.requiredMark}
                    onChange={(value) => {
                      setState({ requiredMark: value });
                    }}
                    style={{ width: 120 }}
                  />
                </div>
                <div>
                  size:&nbsp;
                  <Select
                    options={[
                      { label: 'small', value: 'small' },
                      { label: 'middle', value: 'middle' },
                      { label: 'large', value: 'large' }
                    ]}
                    value={state.size}
                    onChange={(value) => {
                      setState({ size: value });
                    }}
                    style={{ width: 120 }}
                  />
                </div>
                <div>
                  variant:&nbsp;
                  <Select
                    options={[
                      { label: 'outlined', value: 'outlined' },
                      { label: 'filled', value: 'filled' },
                      { label: 'borderless', value: 'borderless' },
                      { label: 'underlined', value: 'underlined' }
                    ]}
                    value={state.variant}
                    onChange={(value) => {
                      setState({ variant: value });
                    }}
                    style={{ width: 120 }}
                  />
                </div>
                <div>
                  labelWidth:&nbsp;
                  <Select
                    options={[
                      { label: '84', value: 84 },
                      { label: '98', value: 98 },
                      { label: '112', value: 112 },
                      { label: '126', value: 126 },
                      { label: '140', value: 140 },
                      { label: '154', value: 154 },
                      { label: '168', value: 168 },
                      { label: 'auto', value: 'auto' }
                    ]}
                    value={state.labelWidth}
                    onChange={(value) => {
                      setState({ labelWidth: value });
                    }}
                    style={{ width: 120 }}
                  />
                </div>
                <div>
                  hideLabel:&nbsp;
                  <Switch
                    value={state.hideLabel}
                    onChange={(v) => {
                      setState({
                        hideLabel: v
                      });
                    }}
                  />
                </div>
              </Flex>
            )
          }
        ]}
      />
      <Divider />
      <BizForm
        name={formName}
        onFinish={async (values) => {
          await sleep(500);
          console.log(values);
        }}
        scrollToFirstError={{
          behavior(actions) {
            actions.forEach(({ el, top }) => {
              // implement the scroll anyway you want
              el.scrollTop = top - 76;
            });
          }
        }}
        {...state}
        {...restProps}
      >
        {children}
      </BizForm>
    </div>
  );
};

export default DemoForm;
`},44883:function(u,_){_.Z=`.contentAutoWidth {
  :global {
    .biz-form-item-wrapper {
      align-items: start;

      &-content {
        flex: none;
        width: 215px;
      }
      &-after {
        flex: 1;
        color: gray;
        padding-block: 5px;
      }
    }
  }
}
`},82188:function(u,_){_.Z=`import React from 'react';
import { BizFormItemNumber, BizFormItemNumberProps } from 'antd-more';
import clsx from 'clsx';
import { isValidNumber } from 'util-helpers';
import styles from './index.module.less';

export interface ItemNumberMoneyProps extends BizFormItemNumberProps {
  valid?: boolean;
  contentAutoWidth?: boolean;
}

const ItemNumberMoney: React.FC<ItemNumberMoneyProps> = ({
  valid,
  className,
  contentAutoWidth,
  ...restProps
}) => {
  return (
    <BizFormItemNumber
      addonAfter="\u5143"
      min={0}
      precision={2}
      gte={0} // \u9632\u6B62\u8868\u5355\u8D4B\u503C\u5C0F\u4E8E0
      useFloor
      className={clsx(className, { [styles.contentAutoWidth]: contentAutoWidth })}
      transform={valid ? (v) => (isValidNumber(v, true) ? v : '') : undefined}
      {...restProps}
    />
  );
};

export default ItemNumberMoney;
`},79720:function(u,_){_.Z=`import { getPC, getPCA } from 'lcn';

// \u5468\u671F
// 1-\u65E5 2-\u6708 3-\u5B63
export enum ECycle {
  Day = '1',
  Month = '2',
  Quarter = '3'
}
export const CycleOptions = [
  {
    label: '\u6309\u65E5',
    value: ECycle.Day
  },
  {
    label: '\u6309\u6708',
    value: ECycle.Month
  },
  {
    label: '\u6309\u5B63\u5EA6',
    value: ECycle.Quarter
  }
];

// \u8FD4\u4F63\u5468\u671F\u9009\u9879
export const RakebackeCycleOptions = [
  {
    label: '\u65E5\u8FD4',
    value: ECycle.Day
  },
  {
    label: '\u6708\u8FD4',
    value: ECycle.Month
  }
];

// \u6536\u6B3E\u8D26\u53F7\u9009\u9879
export const BillAccountOptions = [
  {
    label: '\u5F20\u4E09',
    value: 'a'
  },
  {
    label: '\u674E\u56DB',
    value: 'b'
  }
];

// \u7701\u5E02\u6570\u636E
export const pcOptions = getPC({ fieldNames: { code: 'value', name: 'label' }, inland: true });

// \u7701\u5E02\u533A\u6570\u636E
export const pcaOptions = getPCA({ fieldNames: { code: 'value', name: 'label' }, inland: true });
`}}]);
