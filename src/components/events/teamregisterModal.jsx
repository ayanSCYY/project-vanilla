import { useState } from "react";
import { Button, CardFooter } from "./eventCard.styles";
import { useMutation } from "@apollo/client";
import { CREATE_TEAM_REGISTRATION } from "../../graphQL/mutations/eventteamregistrationMutation";

export const RegisterModal = () => {
    const [teamname, setTeamname] = useState('');
    const [teamleadid, setTeamleadid] = useState('');
    const [m1id, setM1id] = useState('');
    const [m2id, setM2id] = useState('');
    const [m3id, setM3id] = useState('');

    
    const EventId = '1'; 

    const [teamregisterEvent] = useMutation(CREATE_TEAM_REGISTRATION);

    const userId=[teamleadid,m1id,m2id,m3id]

    async function handleSubmit() {
        try {
            await teamregisterEvent({ variables: { input: {EventId , TeamName: teamname,userId } } });
            console.log("Registration successful!");
        } catch (error) {
            console.error("Error registering:", error);
        }
    }

    return (
        <div className="">
            <div>Team Name</div>
            <input
                type="text"
                placeholder="Enter your alche id"
                value={teamname}
                onChange={(e) => setTeamname(e.target.value)}
            />
            
            <div>Team Lead</div>
            <input
                type="text"
                placeholder="Enter your alche id"
                value={teamleadid}
                onChange={(e) => setTeamleadid(e.target.value)}
            />
            
            <div>Team Member 1</div>
            <input
                type="text"
                placeholder="Enter your alche id"
                value={m1id}
                onChange={(e) => setM1id(e.target.value)}
            />
            <div>Team Member 2</div>
            <input
                type="text"
                placeholder="Enter your alche id"
                value={m2id}
                onChange={(e) => setM2id(e.target.value)}
            />
            <div>Team Member 3</div>
            <input
                type="text"
                placeholder="Enter your alche id"
                value={m3id}
                onChange={(e) => setM3id(e.target.value)}
            />
            <CardFooter>
                <Button onClick={handleSubmit}>Register</Button>
            </CardFooter>
        </div>
    );
};
