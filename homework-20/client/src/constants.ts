export const apiUrl:string = "http://localhost:3000";
export const fetchOptions = (method: string) => ({
    method,
    headers: {
        "Content-Type": "application/json",
    },
});