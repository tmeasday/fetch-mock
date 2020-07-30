let nextJson;
export default async function fetch() {
  if (nextJson) {
    return {
      json: () => nextJson,
    };
  }
  nextJson = null;
}

export function decorator(story, { parameters }) {
  if (parameters && parameters.fetch) {
    nextJson = parameters.fetch.json;
  }
  return story();
}
