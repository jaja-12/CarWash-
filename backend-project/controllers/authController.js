const User = require('../models/User');
const jwt = require('jsonwebtoken');

const escapeRegex = (value = '') => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Handle user login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const normalizedUsername = username?.trim();

        if (!normalizedUsername || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Match username case-insensitively to avoid seed/UI casing mismatches
        const user = await User.findOne({
            username: { $regex: new RegExp(`^${escapeRegex(normalizedUsername)}$`, 'i') }
        });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Verify password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({ token, user: { id: user._id, username: user.username } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Handle initial user creation (seed) if needed
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const normalizedUsername = username?.trim();

        if (!normalizedUsername || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const exists = await User.findOne({
            username: { $regex: new RegExp(`^${escapeRegex(normalizedUsername)}$`, 'i') }
        });
        if (exists) return res.status(400).json({ message: 'User already exists' });

        const user = new User({ username: normalizedUsername.toLowerCase(), password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
