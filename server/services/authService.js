const jwt = require('jsonwebtoken');
const config = require('../config/config');

const isModerator = (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = decodeToken(token);

    if (!decoded || !isLoggedIn(decoded)) {
        return res.status(401).json({
            success: false,
            msg: 'You need to login first',
            data: null
        })
    } else if (decoded.role.toLowerCase() !== 'moderator') {
        return res.status(403).json({
            success: false,
            msg: `You don't have the permissions to access this resource`,
            data: null
        })
    } else {
        next();
    }
};

const isAdmin = (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = decodeToken(token);

    if (!decoded || !isLoggedIn(decoded)) {
        return res.status(401).json({
            success: false,
            msg: 'You need to login first',
            data: null
        })
    } else if (decoded.role.toLowerCase() !== 'admin') {
        return res.status(403).json({
            success: false,
            msg: `You don't have the permissions to access this resource`,
            data: null
        })
    } else {
        next();
    }
};

const isDeliverer = (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = decodeToken(token);

    if (!decoded || !isLoggedIn(decoded)) {
        return res.status(401).json({
            success: false,
            msg: 'You need to login first',
            data: null
        })
    } else if (decoded.role.toLowerCase() !== 'deliverer') {
        return res.status(403).json({
            success: false,
            msg: `You don't have the permissions to access this resource`,
            data: null
        })
    } else {
        next();
    }
};

const isAdminOrDeliverer = (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = decodeToken(token);
    const allowed = ['admin', 'deliverer']

    if (!decoded || !isLoggedIn(decoded)) {
        return res.status(401).json({
            success: false,
            msg: 'You need to login first',
            data: null
        })
    } else if (allowed.indexOf(decoded.role.toLowerCase()) < 0) {
        return res.status(403).json({
            success: false,
            msg: `You don't have the permissions to access this resource`,
            data: null
        })
    } else {
        next();
    }
};

const isUser = (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = decodeToken(token);
    if (isLoggedIn(decoded)) {
        next();
    } else {
        return res.status(401).json({
            success: false,
            msg: 'You need to login first',
            data: null
        })
    }
};

const decodeToken = (token) => {
    try {
        let result = jwt.verify(token, config.secret);
        return result;
    } catch (e) {
        return null;
    }
};

const isLoggedIn =  (decodedToken) => {
    if (!decodedToken) {
        return false;
    } else if (decodedToken && decodedToken.iat > decodedToken.exp) {
        return false;
    }
    return true;
};

module.exports = {
    isUser,
    isModerator,
    isAdmin,
    isDeliverer,
    isAdminOrDeliverer,
    isLoggedIn
}