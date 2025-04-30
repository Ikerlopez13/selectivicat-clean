import mongoose from 'mongoose';
import User from '../src/models/User.js';

// Conexión a MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

async function updateUsers() {
  try {
    // Conectar a MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Conectado a MongoDB');

    // Actualizar usuarios sin hasPremiumStatus
    const result = await User.updateMany(
      { hasPremiumStatus: { $exists: false } },
      { $set: { hasPremiumStatus: false } }
    );

    console.log(`${result.modifiedCount} usuarios actualizados`);
    
    // Cerrar conexión
    await mongoose.connection.close();
    
  } catch (error) {
    console.error('Error:', error);
  }
}

updateUsers(); 