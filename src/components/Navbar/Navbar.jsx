import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Nidz</a>
            </div>
            <div className="navbar-end">
                <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === 'light' ? <MoonIcon color="purple.500" /> : <SunIcon color="yellow.400" />}
                    onClick={toggleColorMode}
                    variant="ghost"
                />
                <w3m-button />
            </div>
        </div>
    );
}

export default Navbar;
