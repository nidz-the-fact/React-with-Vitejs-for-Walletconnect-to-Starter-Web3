import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { sepolia, optimismSepolia, thaiChain, jbc, jbcTestnet } from 'wagmi/chains'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Your WalletConnect Cloud project ID
const projectId = import.meta.env.VITE_SOME_KEY // .env

// 2. Create wagmiConfig
const metadata = {
  name: 'Test App',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [sepolia, optimismSepolia, thaiChain, jbc, jbcTestnet]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  defaultChain: thaiChain,
  chainImages: {
    11155111: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg',
    11155420: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg',
    7: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxc964fwIEypxJinuBfxbVKzDks8y9Pg7xA&s',
    8899: 'https://avatars.githubusercontent.com/u/121443205?s=200&v=4',
    88991: 'https://avatars.githubusercontent.com/u/121443205?s=200&v=4'
  },
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: false // Optional - false as default
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>

        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>

      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)