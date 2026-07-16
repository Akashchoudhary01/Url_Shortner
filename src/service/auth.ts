import jwt from "jsonwebtoken";

const secret = "Akash@34$3";

interface UserPayload {
    _id: string;
    email: string;
}

function setUser(user: UserPayload): string {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        },
        secret
    );
}

function getUser(token: string): UserPayload | null {
    try {
        return jwt.verify(token, secret) as UserPayload;
    } catch {
        return null;
    }
}

export { setUser, getUser };