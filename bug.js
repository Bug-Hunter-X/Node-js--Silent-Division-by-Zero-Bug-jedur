```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line is problematic
  }
  return a / b;
}
```