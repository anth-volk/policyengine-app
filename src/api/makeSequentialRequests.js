import { countryApiCall } from "./call.js";

/**
 * Make sequential API requests, waiting for each to complete before starting the next
 * @param {Array<Object>} requests - Array of request objects; keys and values correspond with apiCall args
 * @param {String} requests[].path - API URL, beginning with a slash
 * @param {Object} requests[].body - The body of the request for a non-GET request
 * @param {String} requests[].method - The HTTP method; defaults to GET if no body is passed,
 * or to POST if a body is passed
 * @param {boolean} [requests[].secondAttempt = false] - Whether or not to attempt the request a second
 * time if it fails the first time
 * @param {Function} [requests[].fetchMethod = fetch] - Specify a custom fetch method.
 * @param {Function} [onComplete = null] - Optional callback for when an individual request completes
 * @returns {Promise<Array>} - Promise resolving to array of all responses
 */
export async function makeSequentialRequests(requests, onComplete = null) {
  const results = [];
  let successCount = 0;
  let errorCount = 0;

  try {
    for (let i = 0; i < requests.length; i++) {
      const requestSetup = requests[i];

      try {
        // Make the request and wait for it to complete
        const response = await countryApiCall(
          requestSetup.countryId,
          requestSetup.path,
          requestSetup.body,
          requestSetup.method,
          requestSetup.secondAttempt,
          requestSetup.fetchMethod,
        );

        // Store successful result
        results.push({
          status: "success",
          requestIndex: i,
          requestSetup: requestSetup,
          response: response,
        });

        successCount++;
      } catch (error) {
        console.error(`Request ${i + 1} failed:`, error.message);

        results.push({
          status: "error",
          requestIndex: i,
          error: {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
          },
          requestSetup: requestSetup,
        });

        errorCount++;
      } finally {
        // Call the onComplete callback if provided
        if (onComplete) {
          onComplete({
            current: i,
            total: requests.length,
            successCount,
            errorCount,
          });
        }
      }
    }

    return {
      results,
      summary: {
        total: requests.length,
        successes: successCount,
        errors: errorCount,
      },
    };
  } catch (error) {
    // Handle any unexpected errors in the main function
    console.error("Sequential requests failed:", error);
    throw error;
  }
}
