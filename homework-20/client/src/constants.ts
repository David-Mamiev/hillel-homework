export const apiUrl:string = "http://localhost:3000";
export const fetchOptions = (method: string):{method:string, headers:{}} => ({
    method,
    headers: {
        "Content-Type": "application/json",
    },
});