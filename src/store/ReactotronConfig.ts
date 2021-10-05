import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';

import { Platform, NativeModules } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname: string =
  Platform.OS === 'android' ? 'localhost' : scriptURL.split('://')[1].split(':')[0];
const config: {
  name: string;
  host?: string | undefined;
} = __DEV__
  ? {
      name: 'jiteng',
      host: scriptHostname,
    }
  : {
      name: 'jiteng',
    };

const reactotron = Reactotron.configure(config)
  .use(trackGlobalErrors({}))
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage({}))
  .use(networking())
  .use(reactotronRedux())
  .use(sagaPlugin({}))
  .connect();

export default reactotron;
