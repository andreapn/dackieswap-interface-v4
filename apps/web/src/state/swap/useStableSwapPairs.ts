import { LegacyRouter } from '@pancakeswap/smart-router/legacy-router'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useMemo } from 'react'

export function useStableSwapPairs() {
  const { chainId } = useActiveChainId()

  return useMemo(() => (chainId && LegacyRouter.stableSwapPairsByChainId[chainId]) || [], [chainId])
}
