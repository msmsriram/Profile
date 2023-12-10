declare module 'maath/random/dist/maath-random.esm' {
    interface RandomModule {
      inSphere(array: Float32Array, options: { radius: number }): Float32Array;
      // Add other functions if needed, with their corresponding type signatures
    }
  
    const random: RandomModule;
    export = random;
  }
  