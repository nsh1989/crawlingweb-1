import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import EncarList from "./EncarList";
import Main from "./Main";

// class App extends Component{
//   state = {
//     clients: []
//   };
//   async componentDidMount(){
//     const response = await fetch('/api');
//     const body = await response.json();
//     this.setState({clients: body.content});
//     this.setState({pageable: body.pageable})
//   }
//   render (){
//     const {clients, pageable, isLoading} = this.state;
//     if (isLoading) {
//       return <p>Loading....</p>
//     }
//     // console.log("data : ", {clients})
//     // console.log("pageable: " , {pageable})
//     return (
//         <BrowserRouter>
//             <div className="container">
//                 <Routes>
//                     <Route path = "/" exact component={EncarList}></Route>
//                     <Route path = "/board" exact component={EncarList}></Route>
//                 </Routes>
//             </div>
//         </BrowserRouter>
//     );
//   }
// }
function App() {
  return (
      <Router>
          <Routes>
              <Route path ={"/"} exact={true} element={<EncarList/>}></Route>
              <Route path ="/board" exact={true} element={<EncarList/>}/>
          </Routes>
      </Router>

  );
}
export default App;
