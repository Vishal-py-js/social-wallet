import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk' 
import { chatReducer } from './Chat/Reducers';
import { homeTabreducer } from './HomeTab/Reducers';
import { hashModalReducer } from './Modal/HashModal/Reducers';
import { shareModalReducer } from './Modal/ShareModal/Reducers';
import { balanceReducer } from './Wallets/MetaMask/Reducers';
import { SolanabalanceReducer } from './Wallets/Solana/Reducers';
import { NFTsReducer } from './Wallets/MetaMask/Reducers';
import { walletsReducer } from './WalletList/Reducers';
import { walletModalReducer } from './Modal/WalletModal/Reducers';
import { suggestionsReducer } from './SearchSuggestions/Reducers';
import { networkReducer } from './Wallets/NetworkSwitch/Reducers';
import { searchModalReducer } from './Modal/SearchModal/Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  
const enhancer = composeEnhancers(applyMiddleware(
    thunk 
  ));

const rootReducer = combineReducers({ 
    homeTab: homeTabreducer,
    chat: chatReducer,
    hash: hashModalReducer,
    share: shareModalReducer,
    wallet: walletModalReducer,
    balance: balanceReducer,
    nfts: NFTsReducer,
    solana: SolanabalanceReducer,
    wallets: walletsReducer,
    suggestions: suggestionsReducer,
    network: networkReducer,
    search: searchModalReducer,
});
 

const store = createStore(
  rootReducer, 
  {},
  enhancer
);

export default store;