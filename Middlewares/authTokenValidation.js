import jwt from "jsonwebtoken";
export const authTokenValidation = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ error: 'Access Denied' });
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        return res.status(400).json({ error: 'Invalid Token' });
    }
}