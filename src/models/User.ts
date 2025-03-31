import mongoose, { Document } from 'mongoose'
import bcrypt from 'bcryptjs'

interface IUser extends Document {
  name: string
  email: string
  password: string
  comparePassword: (enteredPassword: string) => Promise<boolean>
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
})

// Add password hashing middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// Add method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model<IUser>('User', userSchema)
