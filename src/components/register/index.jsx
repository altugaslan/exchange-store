import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import createUser from "../../apiCircle/createUser";
const UserCreation = () => {
    const [isCreating, setIsCreating] = useState(false);

    const handleCreateUser = async () => {
        setIsCreating(true);
       try {
           const result = await createUser();
           if (result) {
               console.log('User created successfully. User ID: ', result.userId);
                // Diğer işlemler (örn. kullanıcıyı yönlendirme, bildirim gösterme)
           } else {
                console.error('Failed to create user');
            }
       } catch (error) {
            console.error('Error in creation process', error);
        } finally {
            setIsCreating(false);
        }
    };

    return (
        <div>
            Welcome! For being our user, please click the button
            <Button variant="primary" onClick={handleCreateUser} disabled={isCreating}>
                {isCreating ? 'Creating ...' : 'New User'}
            </Button>
        </div>
    );
}
export default UserCreation;