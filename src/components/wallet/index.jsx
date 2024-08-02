import React, { useState, useCallback, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../wallet/style.css';

const WalletCreation = () => {
    const [showForm, setShowForm] = useState(false);
    const [appId, setAppId] = useState('');
    const [userToken, setUserToken] = useState('');
    const [encryptionKey, setEncryptionKey] = useState('');
    const [challengeId, setChallengeId] = useState('');
    const [sdk, setSdk] = useState(null);

    

    useEffect(() => {
        setSdk(new W3SSdk());
    }, []);

    const onAppIdChange = useCallback((e) => setAppId(e.target.value), []);
    const onUserTokenChange = useCallback((e) => setUserToken(e.target.value), []);
    const onEncryptionKeyChange = useCallback((e) => setEncryptionKey(e.target.value), []);
    const onChallengeChange = useCallback((e) => setChallengeId(e.target.value), []);

    const handleCreateWallet = useCallback(() => {
        if (sdk) {
            sdk.setAppSettings({ appId });
            sdk.setAuthentication({ userToken, encryptionKey });

            sdk.execute(challengeId, (error, result) => {
                if (error) {
                    console.error(`${error?.code?.toString() || 'Unknown code'}: ${error?.message ?? 'error!'}`);
                    return;
                }

                console.log(`Challenge: ${result.type}`);
                console.log(`Status: ${result.status}`);

                if (result.data) {
                    console.log(`Signature: ${result.data?.signature}`);
                }
            });
        }
        setShowForm(false);
    }, [sdk, appId, userToken, encryptionKey, challengeId]);

    return (
        <div className="button-container">
            {!showForm ? (
                <Button className="custom-button" onClick={() => setShowForm(true)}>Create Wallet</Button>
            ) : (
                <div className="form-container">
                    <input className="custom-input" type="text" placeholder="App Id" value={appId} onChange={onAppIdChange} />
                    <input className="custom-input" type="text" placeholder="User Token" value={userToken} onChange={onUserTokenChange} />
                    <input className="custom-input" type="text" placeholder="Encryption Key" value={encryptionKey} onChange={onEncryptionKeyChange} />
                    <input className="custom-input" type="text" placeholder="Challenge Id" value={challengeId} onChange={onChallengeChange} />
                    <Button className="custom-button" onClick={handleCreateWallet}>Verify Challenge</Button>
                    <Button className="custom-button" onClick={() => setShowForm(false)}>Cancel</Button>
                </div>
            )}
        </div>
    );
};

export default WalletCreation;
