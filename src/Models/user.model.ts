import mongoose from "mongoose";

interface IUser {
    fullName: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        fullName: {
            type: String,
            required: true,
            minLength: [3, "Full Name should be at least 3 characters"],
            maxLength: [40, "Full Name should not be more than 40 characters"],
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minLength: [8, "Password should be at least 8 characters"],
            maxLength: [20, "Password should not be more than 20 characters"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;