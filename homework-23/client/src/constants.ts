export const apiUrl:string = "http://localhost:3000";
export const fetchOptions = (method: string):{method:string, headers:{ "Content-Type":string }} => ({
    method,
    headers: {
        "Content-Type": "application/json",
    },
});