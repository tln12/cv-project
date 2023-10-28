function hyphenToCamelCase(string) {
  const matches = [...new Set(string.match(/-[a-z]/g))];
  matches.forEach((match) => {
    string = string.replaceAll(match, match[1].toUpperCase());
  });
  return string;
}

export { hyphenToCamelCase };
