// import React from 'react';
// import ReactDOM from 'react-dom';
/*无状态组件*/
// function Hello(props){
//   return <div><h1>{props.name}</h1></div>;
// }
// function Na(a){
//    return <h1>{a.biao}</h1>;
// }
/*ReactDOM.render()方法可以渲染多个无状态组件*/
/*Es6组件*/
// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.hh = this.h.bind(this);
//    }
//   h() {
//   console.log(this);
//   }
//   render() {
//     return (<h1 onClick={this.hh}>Hello, {this.props.name}</h1>);
//   }
// }
// ReactDOM.render(
//   <div>
//     <Welcome name="perter"/>
//   </div>,
//   document.getElementById('root')
//   );
/*无状态组件可以在它的输出中引用其它组件*/
// function Welcome(props){
//   return <h2>Hello {props.name}</h2>
// }
// function Tt(){
//     return (<div>
//       <Welcome name="gemin"/>
//       <Welcome name="yangjia"/>
//       <Welcome name="geyang"/>
//       </div>);
// }
// ReactDOM.render(
//   <Tt />,
//   document.getElementById("root")
// )
/*生命周期钩子函数*/
/*1：组件实例化*/
   /*getDefaultProps()初始化属性适用于ES5创建的组件*/
   /*getInitialState()初始化状态适用于ES5创建的组件*/
   /*componentWillMount()ajax方法放在这里实现前后台交互*/
   /*render()渲染元素的方法,这一步正真实例化元素*/
   /*componentDidMount()方法可以对DOM进行操作*/
/*2:存在期:改变属性改变状态,这个阶段可以实现前后端交互*/
   /*componentWillReceiveProps(nextProps)将属性设置为状态*/
   /*shouldComponentUpdate(nextProps,nextState)返回true继续往下执行*/
   /*componentWillUpdate()不能修改属性和状态*/
   /*componentDidUpdate()存在期的最后一个方法，在Dom再次渲染成功后可以调用操作Dom*/
/*3:销毁组件*/
   /*unmountComponentAtNode()每当组件使用完成这个组件必须从DOM中销毁*/
/*添加forceItUpdate()手动触发render渲染Dom*/
/*react路由*/
  /*react-router有react-router-dom和react-router-native两种前者适用WEB开发后者适用移动端开发*/
  /*react-router安装命令 npm install --save-dev react-router@2.0 安装react路由2.0版本*/
  /*react路由设置*/
  /*ReactDOM.render(
   (
   <Router history={History}>
     <Route path="./" component={APP} />
     <Route path="./aboute" component{baoute} />
   </Router>
 ),document.getElementById("root")
)*/
/*react-router和react-router-dom 都需要4.0版本以上*/
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, Switch } from 'react-router';
import {HashRouter,Route,Link} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>微信</h1>
        {this.props.children}
        <ul>
          <li>
            <Link to="/" activeStyle={{color:"#f00"}}>最近</Link>
          </li>
          <li>
            <Link to="/about" activeStyle={{color:"#f00"}}>通讯录</Link>
          </li>
          <li>
            <Link to="/hero" activeStyle={{color:"#f00"}}>我的</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const About = () => (
  <div>
    <h3>About</h3>
  </div>
)
const Home = () => (
  <div>
    <h3>Home</h3>
  </div>
)

// const Message = ({ match }) => (
//   <div>
//     <h3>new messages</h3>
//     <h3>{match.params.id}</h3>
//   </div>
// )
//
// const Inbox = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <Route path={`${match.url}/messages/:id`} component={Message}/>
//   </div>
// )
const Hero=()=>(
  <div>
    <h2>hero</h2>
  </div>
)
ReactDOM.render(
  (<HashRouter>
    <App>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Hero" component={Hero} />
    </App>
  </HashRouter>),
  document.getElementById('root')
);
/*插入jquery实现AJAX*/
// import $ from "jquery";
// class Acp extends React.Component{
//   constructor(){
//     super();
//      // /*[]表示一个空的数组*/
//     this.state={"xm":[]};
//     // this.xg=this.xg.bind(this);
//   }
  // componentWillMount(){
  //   $.ajax({
  //      /*data.json数据放在public文件夹下*/
  //     url:"./data.json",
  //     datatype:"json",
  //     type:"post",
  //     success:function(data){
  //       this.setState({"xm":data[0].name});
  //     }.bind(this)
  //   })
  // }
  // componentDidMount(){
  //   $.ajax({
  //      /*data.json数据放在public文件夹下*/
  //     url:"./data.json",
  //     datatype:"json",
  //     type:"get",
  //     success:function(data){
  //       this.setState({"xm":data});
  //     }.bind(this)
  //   })
  // }
//   xg(){
//     $("li").html("我是修改de内容");
//   }
//   /*map()方法循环输出接收到的数据中的name,适用于循环输出数组数据*/
//   render(){
//     let list=this.state.xm.map(function(item,index){
//       return <li key={index}>{item.name}{item.age}{item.sex}</li>
//     })
//     return (
//       <div>
//         <ul>{list}</ul>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Acp />,document.getElementById("root"))
/*fetch()方法实现前后端数据交互,并渲染在dom中*/
// class Fetch extends React.Component{
//   constructor(){
//     super();
//     this.state={"name":[]};
//   }
//   componentWillMount(){}
//   componentDidMount(){
//     fetch('./data.json').then(function(response){return response.json()
//     }).then(data=>{
//       this.setState({"name":data})
//     })
//   }
//   render(){
//     let border={
//       border:"1px solid #000",
//     }
//     let tab={
//       border:"1px solid #000",
//       borderCollapse:"collapse"
//     }
//     let list=this.state.name.map(function(item,index){
//       return <tr><td style={border}>{item.name}</td>
//                  <td style={border}>{item.age}</td>
//                  <td style={border}>{item.sex}</td>
//              </tr>
//     })
//     return(
//       <table style={tab}>
//          {list}
//       </table>
//     )
//   }
// }
// ReactDOM.render(<Fetch/>,document.getElementById('root'))
// var u='./data.json';
// var req = new Request('./data.json', {method: 'GET', cache: 'reload'});
// fetch(rep).then(function(response){
//    return response.json();
// }).then(function(data){
//    console.log(data[0].name)
// })
/*fetch()方法设置请求头信息*/
// var headers = new Headers();
// headers.append('Accept', 'application/json');
// var request = new Request(URL, {headers: headers});
//
// fetch(request).then(function(response) {
//     console.log(response.headers);
// });
// console.log(aa.PromiseValue);
// ReactDOM.render((<div>aa[0].name</div>),document.getElementById("root")
// )
/*箭头函数绑定当前组件*/
// class Tt extends React.Component{
//   constructor(){
//     super();
//     this.state={"aa":"xiaoming"};
//   }
//   render(){
//     return (
//       <div onClick={()=>{this.setState({"aa":"小红"})}}>{this.state.aa}</div>
//     )
//   }
// }
// ReactDOM.render(<Tt />,document.getElementById('root'))
