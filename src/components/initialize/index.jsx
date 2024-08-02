import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { initializeUser } from "../../apiCircle/initializeUser";
const InitializeUser = () => {
    const [isInitializing, setIsInitializing] = useState(false);

    const handleInitializeUser = async () => {
        setIsInitializing(true);
            try {
                console.log("*****************************");
                  const challengeId = await initializeUser();
                  console.log("*****************************");
                  if (!challengeId) {
                      throw new Error("Failed to initialize User");
                     } 
                      console.log('User initialized successfully');
                      console.log('Challenge Id: ', challengeId);
                      ;
                  
              } catch (error) {
                  console.error('Error in creation process', error);
              } finally {
                setIsInitializing(false);
              }
            };

    return (
        <div>
            Good job, one more step left for your own wallet...
            <Button variant="primary" onClick={handleInitializeUser} disabled={isInitializing}>
                {isInitializing ? 'Initializing ...' : 'Still have a chance!'}
            </Button>
        </div>
    );
}
export default InitializeUser;