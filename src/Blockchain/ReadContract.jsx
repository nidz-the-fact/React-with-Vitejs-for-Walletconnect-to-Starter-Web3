import { formatUnits } from 'viem';
import { useReadContract } from 'wagmi';
import L1TokenABI from '../Blockchain/L1TokenABI';
import { Box, Spinner } from '@chakra-ui/react';

export default function ReadContract() {
    const L1TokenAddress = '0x33cFb9A3d385d463724C267b89d66cD89DEdFa4C';
    const result = useReadContract({
        abi: L1TokenABI,
        address: L1TokenAddress,
        functionName: 'totalSupply',
    });

    return (
        <Box className='m-10 text-center'>
            L1Token Supply (on ThaiChain): {result.data ? formatUnits(result.data, 18) : (
                <Box>
                    <Spinner size='lg' color='blue.500' />
                </Box>
            )}
        </Box>
    );
}
