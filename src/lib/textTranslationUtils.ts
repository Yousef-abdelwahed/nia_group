export function extractTextData(
  data: { [key: string]: any },
  language: string,
  prefix: string = "text"
): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  if (data) {
    Object.keys(data).forEach((key) => {
      if (key.startsWith(prefix) && key.endsWith(`_${language}`)) {
        result[key] = data[key];
      }
    });
  }

  return result;
}
export function extractTextAndTitle(
  data: { [key: string]: any },
  language: string,
  prefix: string | string = "text"
): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  if (data) {
    Object.keys(data).forEach((key) => {
      if (
        (key.startsWith(prefix) || key.startsWith("title")) &&
        key.endsWith(`_${language}`)
      ) {
        result[key] = data[key];
      }
    });
  }

  return result;
}
export function extractTeam(
  data: { [key: string]: any },
  language: string,
  prefix: string | string = "name"
): { [key: string]: string } {
  const result: { [key: string]: string } = {};
  if (data) {
    Object.keys(data).forEach((key) => {
      if (
        (key.startsWith(prefix) || key.startsWith("title")) &&
        key.endsWith(`_${language}`)
      ) {
        result[key] = data[key];
      }
    });
  }

  return result;
}
