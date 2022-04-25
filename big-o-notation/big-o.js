/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 *  n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 1 * n = O(n)
    if (!seen[word]) {              // 1 * n = O(n)
      seen[word] = true;
      unique[unique.length] = word; // 2 * n = O(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 2 * n^2 = ~O(n^2)
    let isUnique = true;            // 1 * n^2  = O(n^2)
    for (
      let c = 0;                    // 1 * n^2  = O(n^2 )
      c < i;                        // 2 * n^2  = ~O(n^2 )
      c++                           // 2 * n^2  = O(n^2 )
    ) {
      const comparing = words[c];   // 2 * n =~ O(n)
      if (comparing === word) {     // 2 * n = ~O(n)
        isUnique = false;           // 1 * n = ~O(n)
      }
    }
    if (isUnique) {                 // 2 * n = ~O(2n)
      unique[unique.length] = word; // 2 * n = ~O(2n)
    }
  }
  return unique;                    // 1 * n = ~O(n)
} // Big O Notation for uniqueQuadratic: O(n^2)
