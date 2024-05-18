import HookUseState from './Hooks/HookUseState';
import HookUseInput from './Hooks/HookUseInput';
import HookUseTabs from './Hooks/HookUseTabs';
import HookUseEffect from './Hooks/HookUseEffect';
import HookUseTitle from './Hooks/HookUseTitle';
import HookUseClick from './Hooks/HookUseClick';
import HookUseRef from './Hooks/HookUseRef';
import HookUseConfirm from './Hooks/HookUseConfirm';
import HookUsePreventLeave from './Hooks/HookUsePreventLeave';
import HookUseBeforeLeave from './Hooks/HookUseBeforeLeave';
import HookUseNetwork from './Hooks/HookUseNetwork';
import HookUseFadeIn from './Hooks/HookUseFadeIn';
import HookUseScroll from './Hooks/HookUseScroll';
import HookUseFullscreen from './Hooks/HookUseFullscreen';
import HookUseNotification from './Hooks/HookUseNotification';
import HookUseAxios from './Hooks/HookUseAxios';

function App() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>custom Hooks !</h1>
      <HookUseState/>
      <hr/>
      <HookUseInput/>
      <hr/>
      <HookUseTabs/>
      <hr/>
      <HookUseEffect/>
      <hr/>
      <HookUseTitle/>
      <hr/>
      <HookUseClick/>
      <hr/>
      <HookUseRef/>
      <hr/>
      <HookUseConfirm/>
      <hr/>
      <HookUsePreventLeave/>
      <hr/>
      <HookUseBeforeLeave/>
      <hr/>
      <HookUseNetwork/>
      <hr/>
      <HookUseFadeIn/>
      <hr/>
      <HookUseScroll/>
      <hr/>
      <HookUseFullscreen/>
      <hr/>
      <HookUseNotification/>
      <hr/>
      <HookUseAxios/>
      <hr/>
    </div>
  );
}

export default App;
