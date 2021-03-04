export const apiUrl = "http://localhost:8080";
export const fetchOptions = (method) => ({
    method,
    headers: {
        "Content-Type": "application/json",
    },
}); 