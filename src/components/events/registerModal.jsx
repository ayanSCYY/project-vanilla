import { useState } from "react";
import { Button, CardFooter } from "./eventCard.styles";
import { useMutation } from "@apollo/client";
import { CREATE_REGISTRATION } from "../../graphQL/mutations/eventregistrationMutation";

export const RegisterModal = () => {
    const [alcheID, setAlcheID] = useState('');
    const eventid = '1'; 

    const [registerEvent] = useMutation(CREATE_REGISTRATION);

    async function handleSubmit() {
        try {
            await registerEvent({ variables: { input: { userid: alcheID, eventid } } });
            console.log("Registration successful!");
        } catch (error) {
            console.error("Error registering:", error);
        }
    }

    return (
        <div className="">
            <div>User ID</div>
            <input
                type="number"
                placeholder="Enter your alche id"
                value={alcheID}
                onChange={(e) => setAlcheID(e.target.value)}
            />
            <CardFooter>
                <Button onClick={handleSubmit}>Register</Button>
            </CardFooter>
        </div>
    );
};
