// File to maintain the all functions here.

// [**WeatherCard**]

export function convertToTitleCase(words: string): string {
  const sentence = words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return sentence;
}
