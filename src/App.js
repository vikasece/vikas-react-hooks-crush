import './App.css';
import UseScreenSize from './component/customHook/screenSize';
// import UseCallbackComponent from './component/useCallBack/useCallbackComponent';
// import UseMemoComponent from './component/useMemo/useMemoComponent';
// import UseContextComponent from './component/useContext/useContextComponent';
// import UseRefComponent from './component/useRefComponent';
// import StateTutorial from './component/stateTutorial';
// import UseEffectComponent from './component/useEffectComponent';

function App() {
  return (
    <div className='App'>
      {/* <StateTutorial /> UseState */}
      {/* <UseEffectComponent />  Use Effect*/}
      {/* <UseRefComponent />  use Ref Hook */}
      {/* <UseContextComponent /> Use Context Hook */}
      {/* <UseMemoComponent />  useMemo hook */}
      {/* <UseCallbackComponent />  Use Callback hook */}
      <UseScreenSize />
    </div>
  );
}

export default App;
