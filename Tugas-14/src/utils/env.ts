import dotenv from 'dotenv'
dotenv.config()

export const SECRET: string = process.env.SECRET || 'secret'
export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || ''
export const CLOUDINARY_API_SECRET: string = process.env.CLOUDINARY_API_SECRET || ''
export const CLOUDINARY_CLOUD_NAME: string = process.env.CLOUDINARY_CLOUD_NAME || ''
export const DATABASE_URL: string = 'mongodb+srv://ecommerce:ecommerce@ecommerce.u7yhg7x.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce'
