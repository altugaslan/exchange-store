import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { acquireSessionToken } from "../../apiCircle/acquireSessionToken";
const AquireUserToken = () => {
    const [isAquiring, setIsAquiring] = useState(false);

    const handleAquireUser = async () => {
        setIsAquiring(true);
        try {
                    const sessionResult = await acquireSessionToken();
                    if (!sessionResult) {
                        throw new Error("Failed to Acquire Session Token");
                       } 
                        console.log('Session Token acquired successfully');
                        console.log('User token: ', sessionResult.userToken);
                        console.log('Encription Key: ', sessionResult.encryptionKey);
                    
                } catch (error) {
                    console.error('Error in creation process', error);
                } finally {
                    setIsAquiring(false);
                }
    };

    return (
        <div>
            It looks like you need tokens...
            <Button variant="primary" onClick={handleAquireUser} disabled={isAquiring}>
                {isAquiring ? 'Aquiring ...' : 'Get your token'}
            </Button>
        </div>
    );
}
export default AquireUserToken;