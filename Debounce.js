
function createDebouncedSearch(delay) {
  let timerId;
  let controller;

  return function search(query) {
    clearTimeout(timerId);

    // Cancel the previous in-flight request, if any
    if (controller) {
      controller.abort();
    }

    timerId = setTimeout(async () => {
      controller = new AbortController();

      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Search failed");
        }

        const results = await response.json();
        console.log(results);

      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }, delay);
  };
}

const search = createDebouncedSearch(300);


