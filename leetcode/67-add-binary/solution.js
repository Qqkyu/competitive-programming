function addBinary(a, b) {
  let result = "",
    carry = 0;

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; --i, --j) {
    const x = a[i] === "1" ? 1 : 0;
    const y = b[j] === "1" ? 1 : 0;
    const sum = carry + x + y;

    result = (sum % 2) + result;
    carry = sum >= 2 ? 1 : 0;
  }

  return `${carry ? "1" : ""}${result}`;
}
