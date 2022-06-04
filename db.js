const { isConstValueNode } = require('graphql');
const {connect} = require('mongoose');

const connectDB = async ()=>{
    try {
        await connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {connectDB};