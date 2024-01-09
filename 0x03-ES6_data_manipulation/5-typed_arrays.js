export default function(length, position, value) {
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
      }
    
}