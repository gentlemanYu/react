import React, { Component } from 'react';
import { HashRouter  as Router, Route, Switch } from "react-router-dom";
import { getMenuListData } from './routeslist'
//// antd  国际化方式
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
//// 获取自定义数据  国际化
import intl from 'react-intl-universal'

class App extends Component {
  
  // 获取国际化
  componentDidMount() {
    // this.loadLocales()
  }
  loadLocales() { 
    /**
     * 
     * 需 安装 react-intl-universal  插件
     * 根据登录页面的 选着 获取中英文
     * 这里没有数据  只写实现方式
     * **/
    let currentLocale = localStorage.getItem('language'); 
    let languageRes= fetch('ssssss',{
      requestHead: {
        method: 'POST'
      } ,
      requestBody: {
        
      } 
    })
    intl.init({
      currentLocale ,
      locales: {
        [ currentLocale ]: languageRes.data.data||{}
      }
    });
    /**
     * 这是封装的根据数据（key值）获取 国际化语言  在  下面的组件中 调用 getlocal方法 传入后台给的key值
     * 
     * **/
    // export function getLocal(key){
    //   if(key==''||key==null||key==undefined){
    //       return ''
    //   }else{
    //       if(typeof(key)=='string'){
    //           var valarray=key.split(',')
    //           if(valarray&&valarray.length>1){
    //               var _value=''
    //               valarray.forEach(function(n,i){
    //                   if (/^\w{8}-(\w{4}-){3}\w{12}$/.test(n)) {
    //                       _value+=intl.get(n)+','
    //                   }
    //               })
    //               return _value==''?key:_value;
    //           }else if(valarray&&valarray.length==1){
    //               return intl.get(key)||key
    //           }
    //       return intl.get(key)?intl.get(key):key;      
    //       }
    //       return key
    //   }
    // }

  }
  render() {
    let menuData = getMenuListData() || []
    let currentLocale = localStorage.getItem('language'); 
    console.log(menuData)
    return (
      // 设置 antd 语言
      <LocaleProvider locale={currentLocale}>  
        <Router >
            <Switch>
              {
                menuData&&menuData.map(item=>{
                  return (
                    <Route path={item.path}  component={item.component} exact={item.exact}/>
                  )
                })
              }
            </Switch>
        </Router>  
      </LocaleProvider>
    );
  }
}

export default App;
