"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[9809],{28473:function(d,a,n){n.r(a);var o=n(69105),u=n(62807),m=n(81308),c=n(93345),p=n(17203),t=n(39074),x=n(29848),b=n(51782),r=n(61228),i=n(65412),l=n(75271),_=n(1543),e=n(52676);function s(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"bizconfigprovider---\u4E0A\u4E0B\u6587\u914D\u7F6E",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#bizconfigprovider---\u4E0A\u4E0B\u6587\u914D\u7F6E",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"BizConfigProvider - \u4E0A\u4E0B\u6587\u914D\u7F6E"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]}),(0,e.jsxs)("h3",{id:"\u56FD\u9645\u5316",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u56FD\u9645\u5316",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u56FD\u9645\u5316"]})]}),(0,e.jsx)(r.Dl,{demo:{id:"biz-config-provider-demo-basic"},previewerProps:{filename:"src/biz-config-provider/demos/basic.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:_.texts[1].value}),(0,e.jsx)(t.Z,{lang:"typescript",children:_.texts[2].value}),(0,e.jsxs)("h4",{id:"\u5D4C\u5957",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5D4C\u5957",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5D4C\u5957"]})]}),(0,e.jsx)(r.Dl,{demo:{id:"biz-config-provider-demo-nested"},previewerProps:{filename:"src/biz-config-provider/demos/nested.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"\u7EC4\u4EF6\u914D\u7F6E",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7EC4\u4EF6\u914D\u7F6E",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7EC4\u4EF6\u914D\u7F6E"]}),(0,e.jsxs)("p",{children:[_.texts[3].value,(0,e.jsx)("code",{children:_.texts[4].value}),_.texts[5].value,(0,e.jsx)("code",{children:_.texts[6].value}),_.texts[7].value,(0,e.jsx)("code",{children:_.texts[8].value}),_.texts[9].value]}),(0,e.jsx)("p",{children:_.texts[10].value}),(0,e.jsx)(t.Z,{lang:"typescript",children:_.texts[11].value})]}),(0,e.jsx)(r.Dl,{demo:{id:"biz-config-provider-demo-comp"},previewerProps:{filename:"src/biz-config-provider/demos/comp.tsx"}})]})})})}a.default=s},1543:function(d,a,n){n.r(a),n.d(a,{texts:function(){return o}});const o=[{value:"\u7528\u4E8E\u591A\u8BED\u8A00\u548C\u7EC4\u4EF6\u901A\u7528\u914D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u591A\u8BED\u8A00\u914D\u7F6E\u53C2\u8003",paraId:1},{value:`const localeValues = {
  form: {
    common: {
      inputPlaceholder: '\u8BF7\u8F93\u5165',
      selectPlaceholder: '\u8BF7\u9009\u62E9',
      uploadPlaceholder: '\u8BF7\u4E0A\u4F20',
      inputRequired: '\u8BF7\u8F93\u5165\${label}',
      selectRequired: '\u8BF7\u9009\u62E9\${label}',
      uploadRequired: '\u8BF7\u4E0A\u4F20\${label}',
      allLabel: '\u5168\u90E8',
      allValue: '',
      search: '\u67E5\u8BE2',
      reset: '\u91CD\u7F6E',
      collapsed: '\u6536\u8D77',
      expand: '\u5C55\u5F00',
      prev: '\u4E0A\u4E00\u6B65',
      next: '\u4E0B\u4E00\u6B65',
      submit: '\u63D0\u4EA4',
      ok: '\u786E\u8BA4',
      cancel: '\u53D6\u6D88'
    },
    dateRange: {
      unit: {
        time: '\u5C0F\u65F6',
        date: '\u5929',
        week: '\u5468',
        month: '\u4E2A\u6708',
        quarter: '\u5B63',
        year: '\u5E74'
      },
      maxRange: (max: number, unit: string) => \`\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\${max}\${unit}\`
    },
    input: {
      userName: {
        mobile: '\${label}\u4E0D\u80FD\u4E3A\u624B\u673A\u53F7\u7801',
        email: '\${label}\u4E0D\u80FD\u5305\u542B@\u7B26\u53F7'
      },
      invalid: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\${label}'
    },
    number: {
      lt: (num: string | number) => \`\\\${label}\u5FC5\u987B\u5C0F\u4E8E\${num}\`,
      gt: (num: string | number) => \`\\\${label}\u5FC5\u987B\u5927\u4E8E\${num}\`,
      lte: (num: string | number) => \`\\\${label}\u5FC5\u987B\u5C0F\u4E8E\u6216\u7B49\u4E8E\${num}\`,
      gte: (num: string | number) => \`\\\${label}\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8E\${num}\`,
      maxPrecision: (precision: number) => \`\u652F\u6301\${precision}\u4F4D\u5C0F\u6570\`
    },
    password: {
      range: (min: number, max: number) => \`\\\${label}\u4E3A\${min}\uFF5E\${max}\u4F4D\`,
      unallowable: '\${label}\u5305\u542B\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26',
      level: (num: number) => \`\\\${label}\u4E3A\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u7B26\u53F7\u4EFB\u610F\${num}\u79CD\u4EE5\u4E0A\u7EC4\u6210\`
    },
    upload: {
      buttonText: '\u70B9\u51FB\u4E0A\u4F20',
      fileTypeMessage: '\u53EA\u652F\u6301\u4E0A\u4F20 %s \u6587\u4EF6',
      fileSizeMessage: '\u5FC5\u987B\u5C0F\u4E8E %s\uFF01',
      unsupportPreviewTiptext: '\u5F53\u524D\u6587\u4EF6\u4E0D\u652F\u6301\u9884\u89C8\uFF01',
      loading: '\u52A0\u8F7D\u4E2D',
      uploading: '\u4E0A\u4F20\u4E2D',
      dragTiptext: '\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u8FDB\u884C\u4E0A\u4F20'
    }
  },
  table: {
    toolbar: {
      reload: '\u5237\u65B0',
      density: '\u5BC6\u5EA6',
      densityDefault: '\u9ED8\u8BA4',
      densityLarger: '\u6B63\u5E38',
      densityMiddle: '\u4E2D\u7B49',
      densitySmall: '\u7D27\u51D1',
      columnDisplay: '\u5217\u5C55\u793A',
      columnSetting: '\u5217\u8BBE\u7F6E',
      checkAll: '\u5168\u9009',
      fullScreen: '\u5168\u5C4F',
      exitFullScreen: '\u9000\u51FA\u5168\u5C4F',
      unsupportFullScreenTiptext: '\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD'
    },
    pagination: {
      total: (num: number) => \`\u603B\u5171 \${num} \u6761\u6570\u636E\`
    },
    emptyText: '\u6682\u65E0\u6570\u636E'
  },
  captcha: {
    initText: '\u83B7\u53D6\u9A8C\u8BC1\u7801',
    runText: '%s\u79D2\u540E\u91CD\u65B0\u83B7\u53D6',
    resetText: '\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801'
  }
};
`,paraId:2},{value:"\u652F\u6301 ",paraId:3,tocIndex:4},{value:"BizDescriptions",paraId:3,tocIndex:4},{value:" ",paraId:3,tocIndex:4},{value:"BizForm",paraId:3,tocIndex:4},{value:" ",paraId:3,tocIndex:4},{value:"BizTable",paraId:3,tocIndex:4},{value:" \u7EC4\u4EF6\u7684\u90E8\u5206\u901A\u7528\u5C5E\u6027\u914D\u7F6E\u3002",paraId:3,tocIndex:4},{value:"\u914D\u7F6E\u53C2\u8003",paraId:4,tocIndex:4},{value:`type Config = {
  locale: Locale;
  bizDescriptions?: Pick<
    BizDescriptionsProps,
    | 'className'
    | 'style'
    | 'bordered'
    | 'size'
    | 'colon'
    | 'column'
    | 'contentStyle'
    | 'extra'
    | 'labelStyle'
    | 'layout'
    | 'tooltip'
  >;
  bizForm?: CommonFormProps;
  bizModalForm?: CommonFormProps &
    Pick<BizModalFormProps, 'maskClosable' | 'destroyOnHidden' | 'modalProps'>;
  bizDrawerForm?: CommonFormProps &
    Pick<BizDrawerFormProps, 'maskClosable' | 'destroyOnHidden' | 'drawerProps'>;
  bizTable?: Pick<
    BizTableProps,
    | 'className'
    | 'style'
    | 'autoRequest'
    | 'pagination'
    | 'tableCardProps'
    | 'spaceProps'
    | 'formCardProps'
    | 'toolbar'
    | 'toolbarAction'
    | 'toolbarRender'
    | 'fullScreenBackgroundColor'
    | 'tableClassName'
    | 'tableStyle'
    | 'tableRender'
    | 'compact'
    | 'size'
    | 'bordered'
    | 'locale'
    | 'rowKey'
  >;
};
`,paraId:5,tocIndex:4}]}}]);
