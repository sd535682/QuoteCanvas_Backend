import { config } from "dotenv";

// Load environment variables from .env files
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Export environment variables
export const {PORT, NODE_ENV, MONGODB_URI} = process.env;

// Export default process.env
export default process.env;