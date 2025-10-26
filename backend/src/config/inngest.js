import { Inngest } from "inngest";
// import { connect } from "mongoose";
import { connectDB } from "./db";
 import { User } from "../models/user.model";


export const inngest = new Inngest({ id: "slack-clone" });

const syncUser = inngest.createFunction(
   { id: "sync/user"},
    {event: "clerk/user.created"},
    async ({ event }) => {
        await connectDB()

        const {id, email_addresses, first_name, profile_image_url} = event.data;

        const newUser = {
            clerkId: id,
            email: email_addresses[0].email_address,
          name :`${first_name ||""} ${last_name || ""}`,
            Image:image_url ,
        }

        await User.create(newUser);
     


        
    }
);

const deleteUserFromDB = inngest.createFunction(
    { id: "delete/user"},
     {event: "clerk/user.deleted"},
     async ({ event }) => {
        await connectDB();
        const {id} = event.data;
         await User.deleteOne({clerkId:id});
        //  await deleteStreamUser(id.toString());
        }
    );


export const functions = [syncUser,deleteUserFromDB];