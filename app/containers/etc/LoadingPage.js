// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CenteredLayout from '../../components/layout/CenteredLayout';
import Loading from '../../components/loading/Loading';
import type { StoresMap } from '../../stores/index';
import etcLogo from '../../assets/images/etc-logo.inline.svg';
import { messages } from '../LoadingPage';

type Props = {
  stores: StoresMap,
};

@inject(['stores']) @observer
export default class LoadingPage extends Component<Props> {

  render() {
    const { stores } = this.props;
    const {
      isConnecting, isSyncing, syncPercentage, isLoadingWallets,
      hasBeenConnected, hasBlockSyncingStarted,
    } = stores.networkStatus;
    const { hasLoadedCurrentLocale, hasLoadedCurrentTheme } = stores.profile;
    return (
      <CenteredLayout>
        <Loading
          currencyIcon={etcLogo}
          currencyIconWhite={etcLogo}
          isSyncing={isSyncing}
          isConnecting={isConnecting}
          syncPercentage={syncPercentage}
          isLoadingDataForNextScreen={isLoadingWallets}
          loadingDataForNextScreenMessage={messages.loadingWalletData}
          hasBeenConnected={hasBeenConnected}
          hasBlockSyncingStarted={hasBlockSyncingStarted}
          hasLoadedCurrentLocale={hasLoadedCurrentLocale}
          hasLoadedCurrentTheme={hasLoadedCurrentTheme}
        />
      </CenteredLayout>
    );
  }

}
